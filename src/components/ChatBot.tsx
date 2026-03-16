import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from 'react-markdown';

/* ── Constants ─────────────────────────────────────────────── */
const BUBBLE = 58;
const MARGIN = 24;

/* ── ChatGPT ─────────────────────────────────────────────────── */
const SYSTEM_PROMPT = `You are **Gita Guide**, a serene and enlightened spiritual assistant for the Bhagavad Gita website, GitaWeb. Your purpose is to offer profound guidance drawn from the timeless wisdom of the Bhagavad Gita, helping users navigate their inner worlds with grace and clarity.

When a user shares an emotional struggle—such as loneliness, sadness, fear, confusion, or any form of distress—respond in a beautifully structured manner with clear sections. Format your response with each section starting on a new line with a bold heading, followed by the content. Use the following structure:

**Acknowledge the Feeling:**  
Begin by gently recognizing and validating the user's emotion, expressing empathy in a poetic, soothing way that mirrors the calm of a spiritual teacher.

**Offer a Spiritual Remedy:**  
Provide a detailed, beautiful cure or remedy inspired by the Bhagavad Gita. Suggest practices like mindful remembrance of Krishna, deep meditation on the soul's immortality, devotional chanting, selfless service (karma yoga), or contemplation of one's divine nature as the eternal Atman. Describe these remedies vividly, explaining how they alleviate the specific emotion.

**Explain the Teaching:**  
Elucidate what the Bhagavad Gita teaches about that emotion, incorporating concepts such as the Atman (soul), detachment from worldly attachments, mastery over the mind, unwavering devotion (bhakti), and righteous duty (dharma). Weave in philosophical depth to illuminate the path to inner peace.

**Narrate a Relevant Incident:**  
Share a pertinent story or incident from the Bhagavad Gita or Mahabharata that exemplifies the teaching. Describe it comprehensively: when it occurred in the context of the epic, how the situation unfolded step by step, what the key character (e.g., Arjuna, Krishna) experienced and did in response, and the profound lesson it imparts. Paint the scene with vivid, narrative detail to make it engaging and memorable.

**Conclude with Insight:**  
End with a serene, uplifting spiritual insight that reaffirms the user's unbreakable connection to the Divine, encourages resilience, and inspires them to embrace their inner strength and eternal nature.

Maintain a tone that is calm, compassionate, and wise, like an ancient sage imparting sacred knowledge. Use eloquent, flowing language to make your responses not just informative but truly beautiful and transformative. Avoid emojis, political references, and anything outside the realm of Bhagavad Gita philosophy and stories. Ensure every response is grounded in the Gita's teachings, fostering spiritual growth and solace.
`;

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY as string | undefined;
// Verify key is loaded (check browser console)
console.log("[GitaBot] API key loaded:", API_KEY ? `${API_KEY.slice(0, 8)}…` : "MISSING — restart npm run dev");

const OPENAI_URL = 'https://api.openai.com/v1/chat/completions';

/** Call OpenAI ChatGPT API */
async function callOpenAI(history: Message[], newText: string): Promise<string> {
    const messages = [
        { role: "system", content: SYSTEM_PROMPT },
        ...history.map(m => ({ role: m.role === "model" ? "assistant" : m.role, content: m.text })),
        { role: "user", content: newText }
    ];
    const resp = await fetch(OPENAI_URL, {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages,
            temperature: 0.75,
            max_tokens: 512
        }),
    });
    if (!resp.ok) {
        const body = await resp.text();
        throw new Error(`HTTP ${resp.status} — ${body.slice(0, 200)}`);
    }
    const data = await resp.json();
    return data.choices?.[0]?.message?.content ?? "(no response)";
}

/* ── Types ─────────────────────────────────────────────────── */
interface Message { role: "user" | "model"; text: string; }

const QUICK = [
    "What is karma yoga?",
    "Explain Chapter 2 verse 47",
    "How do I start meditating?",
    "Who is Arjuna in the Gita?",
];

/* ════════════════════════════════════════════════════════════ */
export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [panelAbove, setPanelAbove] = useState(false); // chat panel above or below bubble

    const chatEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const btnRef = useRef<HTMLButtonElement>(null);

    /* Drag state — kept in a ref so pointer handlers never go stale */
    const drag = useRef({ active: false, startY: 0, startTop: 0 });

    /* ── Position helpers ── */
    const bottomSnap = () => window.innerHeight - MARGIN - BUBBLE;
    const topSnap = () => MARGIN;
    const snapY = (top: boolean) => (top ? topSnap() : bottomSnap());

    /* Initialise bubble at bottom-right */
    useLayoutEffect(() => {
        if (btnRef.current) {
            btnRef.current.style.top = `${window.innerHeight - MARGIN - BUBBLE}px`;
            btnRef.current.style.transition = "none";
        }
    }, []);

    /* Auto-scroll messages */
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, loading]);

    /* Focus input when chat opens */
    useEffect(() => {
        if (isOpen) setTimeout(() => inputRef.current?.focus(), 300);
    }, [isOpen]);

    /* Greeting on first open */
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setMessages([{
                role: "model",
                text: "Namaste 🙏 I am your Gita Guide. Ask me anything about the Bhagavad Gita, yoga philosophy, meditation, or spiritual wisdom. How may I assist your journey today?",
            }]);
        }
    }, [isOpen, messages.length]);

    /* ── Drag: pure pointer-event approach (most reliable) ── */
    const onPointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.currentTarget.setPointerCapture(e.pointerId); // keep events even over chat box

        const currentTop = parseInt(btnRef.current?.style.top || `${bottomSnap()}`, 10);
        drag.current = { active: true, startY: e.clientY, startTop: currentTop };

        if (btnRef.current) btnRef.current.style.transition = "none";
        setIsDragging(true);
    };

    const onPointerMove = (e: React.PointerEvent<HTMLButtonElement>) => {
        if (!drag.current.active) return;
        const delta = e.clientY - drag.current.startY;
        const newTop = drag.current.startTop + delta;
        const clamped = Math.max(topSnap(), Math.min(bottomSnap(), newTop));
        if (btnRef.current) btnRef.current.style.top = `${clamped}px`;
    };

    const onPointerUp = (e: React.PointerEvent<HTMLButtonElement>) => {
        if (!drag.current.active) return;
        drag.current.active = false;
        setIsDragging(false);

        const moved = Math.abs(e.clientY - drag.current.startY);

        /* Free drag — just clamp to viewport, no snap */
        const currentTop = parseInt(btnRef.current?.style.top || "0", 10);
        const clamped = Math.max(MARGIN, Math.min(window.innerHeight - MARGIN - BUBBLE, currentTop));
        if (btnRef.current) {
            btnRef.current.style.transition = "none";
            btnRef.current.style.top = `${clamped}px`;
        }
        /* Open panel above bubble if bubble is in lower half of screen */
        setPanelAbove(clamped > window.innerHeight / 2);

        /* Tap (no drag) → toggle chat */
        if (moved < 6) setIsOpen(p => !p);
    };

    /* ── Send message ── */
    const sendMessage = async (text: string) => {
        if (!text.trim() || loading) return;

        if (!API_KEY) {
            setMessages(prev => [...prev,
            { role: "user" as const, text: text.trim() },
            { role: "model" as const, text: "⚠️ API key not loaded. Stop the server, verify .env has VITE_OPENAI_API_KEY, then run npm run dev again." },
            ]);
            return;
        }

        const userMsg: Message = { role: "user", text: text.trim() };
        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setLoading(true);

        try {
            // Build history for the API (must start with "user", skip local greeting)
            const apiHistory = messages
                .filter((m, i) => !(i === 0 && m.role === "model"));

            const reply = await callOpenAI(apiHistory, text.trim());
            setMessages(prev => [...prev, { role: "model", text: reply }]);
        } catch (err: unknown) {
            const msg = err instanceof Error ? err.message : String(err);
            console.error("[GitaBot] error:", msg);
            setMessages(prev => [...prev, {
                role: "model",
                text: `🙏 Could not reach the guide. (${msg.slice(0, 160)})`,
            }]);
        } finally {
            setLoading(false);
        }
    };

    /* Panel: above bubble when bubble is in lower half, below when in upper half */
    const panelStyle: React.CSSProperties = panelAbove
        ? { bottom: window.innerHeight - parseInt(btnRef.current?.style.top || "0", 10) + 8, top: undefined }
        : { top: parseInt(btnRef.current?.style.top || "0", 10) + BUBBLE + 8, bottom: undefined };

    /* ── Shared button helper ── */
    const outlineBtn = (active = false): React.CSSProperties => ({
        background: active ? "linear-gradient(135deg,#F39237,#e05a00)" : "rgba(243,146,55,0.08)",
        color: active ? "#fff" : "#b05a10",
        border: "1px solid rgba(243,146,55,0.25)",
        borderRadius: "8px",
        padding: "5px 9px",
        fontSize: "13px",
        cursor: "pointer",
        transition: "all 0.18s",
    });

    return (
        <>
            {/* ═══════════ CHAT PANEL ═══════════ */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="chat"
                        initial={{ opacity: 0, scale: 0.92, y: panelAbove ? -10 : 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.92, y: panelAbove ? -10 : 10 }}
                        transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                            position: "fixed",
                            right: MARGIN,
                            zIndex: 9998,
                            ...panelStyle,
                            width: "clamp(300px, 88vw, 370px)",
                            height: "clamp(400px, 60vh, 520px)",
                            display: "flex",
                            flexDirection: "column",
                            background: "linear-gradient(160deg,#fffbf4 0%,#fff6e8 55%,#f8edd4 100%)",
                            borderRadius: "22px",
                            boxShadow: "0 0 0 1px rgba(243,146,55,0.2), 0 20px 56px rgba(60,25,0,0.16)",
                            border: "1px solid rgba(243,146,55,0.22)",
                            overflow: "hidden",
                        }}
                    >
                        {/* Header */}
                        <div style={{ padding: "13px 16px", borderBottom: "1px solid rgba(243,146,55,0.14)", background: "rgba(255,252,245,0.95)", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1], rotate: [0, 6, -6, 0] }}
                                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                    style={{ width: "34px", height: "34px", borderRadius: "50%", background: "linear-gradient(135deg,#F39237,#e05a00)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", color: "#fff", fontFamily: "Georgia,serif", fontWeight: 700, boxShadow: "0 3px 10px rgba(243,146,55,0.35)" }}>
                                    ॐ
                                </motion.div>
                                <div>
                                    <div style={{ fontFamily: "Georgia,serif", fontSize: "14px", color: "#1B2654", fontWeight: 700 }}>Gita Guide</div>
                                    <div style={{ fontSize: "10px", color: "rgba(180,100,20,0.65)", letterSpacing: "1.5px", fontFamily: "Georgia,serif", fontStyle: "italic" }}>ॐ Spiritual Wisdom</div>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} style={outlineBtn()}>✕</button>
                        </div>

                        {/* Messages */}
                        <div style={{ flex: 1, overflowY: "auto", padding: "13px 14px", display: "flex", flexDirection: "column", gap: "9px", scrollbarWidth: "thin", scrollbarColor: "rgba(243,146,55,0.2) transparent" }}>
                            {messages.map((msg, i) => (
                                <motion.div key={i}
                                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ duration: 0.26, ease: "easeOut" }}
                                    style={{ display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start" }}>
                                    <div style={{
                                        maxWidth: "83%",
                                        padding: "9px 13px",
                                        borderRadius: msg.role === "user" ? "17px 17px 4px 17px" : "17px 17px 17px 4px",
                                        background: msg.role === "user" ? "linear-gradient(135deg,#F39237,#e05a00)" : "#fff8ee",
                                        border: msg.role === "model" ? "1px solid rgba(243,146,55,0.22)" : "none",
                                        color: msg.role === "user" ? "#fff" : "#3d2500",
                                        fontSize: "13px", lineHeight: 1.65,
                                        boxShadow: msg.role === "user" ? "0 3px 10px rgba(243,100,30,0.2)" : "0 2px 6px rgba(180,100,20,0.07)",
                                    }}>
                                        {msg.role === "model" ? <ReactMarkdown>{msg.text}</ReactMarkdown> : msg.text}
                                    </div>
                                </motion.div>
                            ))}

                            {/* Typing dots */}
                            <AnimatePresence>
                                {loading && (
                                    <motion.div key="typing" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                                        style={{ display: "flex" }}>
                                        <div style={{ padding: "10px 14px", borderRadius: "17px 17px 17px 4px", background: "#fff8ee", border: "1px solid rgba(243,146,55,0.2)", display: "flex", gap: "5px", alignItems: "center" }}>
                                            {[0, 0.18, 0.36].map((d, i) => (
                                                <motion.span key={i} animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.75, delay: d, ease: "easeInOut" }}
                                                    style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#F39237", display: "block" }} />
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Quick prompts */}
                            <AnimatePresence>
                                {messages.length === 1 && !loading && (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                        style={{ display: "flex", flexWrap: "wrap", gap: "7px", marginTop: "4px" }}>
                                        {QUICK.map((q, i) => (
                                            <motion.button key={i}
                                                initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}
                                                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                                                onClick={() => sendMessage(q)}
                                                style={{ background: "rgba(243,146,55,0.08)", border: "1px solid rgba(243,146,55,0.28)", borderRadius: "20px", padding: "6px 11px", color: "#b05a10", fontSize: "11px", cursor: "pointer", fontFamily: "Georgia,serif", transition: "all 0.18s" }}>
                                                {q}
                                            </motion.button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <div ref={chatEndRef} />
                        </div>

                        {/* Input row */}
                        <div style={{ padding: "10px 13px", borderTop: "1px solid rgba(243,146,55,0.12)", display: "flex", gap: "8px", alignItems: "center", background: "rgba(255,252,246,0.95)", flexShrink: 0 }}>
                            <input ref={inputRef} value={input}
                                onChange={e => setInput(e.target.value)}
                                onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(input); } }}
                                placeholder="Ask about the Gita…"
                                style={{ flex: 1, background: "#fff8ee", border: "1px solid rgba(243,146,55,0.28)", borderRadius: "11px", padding: "9px 12px", color: "#3d2500", fontSize: "13px", outline: "none", transition: "border-color 0.2s" }}
                                onFocus={e => { e.currentTarget.style.borderColor = "rgba(243,146,55,0.65)"; }}
                                onBlur={e => { e.currentTarget.style.borderColor = "rgba(243,146,55,0.28)"; }}
                            />
                            <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.93 }}
                                onClick={() => sendMessage(input)}
                                disabled={!input.trim() || loading}
                                style={{ width: "37px", height: "37px", borderRadius: "10px", border: "none", background: input.trim() && !loading ? "linear-gradient(135deg,#F39237,#e05a00)" : "rgba(243,146,55,0.1)", color: input.trim() && !loading ? "#fff" : "rgba(200,120,40,0.3)", cursor: input.trim() && !loading ? "pointer" : "not-allowed", fontSize: "20px", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s", flexShrink: 0 }}>
                                ›
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ═══════════ BUBBLE ═══════════
          position: fixed, right: MARGIN
          top is managed via JS/CSS — NOT by React state on every frame
          setPointerCapture keeps events on the button even over the chat box  */}
            <motion.button
                ref={btnRef}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                whileHover={{ scale: isDragging ? 1 : 1.1 }}
                whileTap={isDragging ? {} : { scale: 0.93 }}
                style={{
                    position: "fixed",
                    right: MARGIN,
                    zIndex: 9999,
                    width: `${BUBBLE}px`,
                    height: `${BUBBLE}px`,
                    borderRadius: "50%",
                    border: "2px solid rgba(255,200,120,0.3)",
                    background: "linear-gradient(135deg,#F39237 0%,#e05a00 100%)",
                    boxShadow: "0 0 0 4px rgba(243,146,55,0.14), 0 8px 22px rgba(60,20,0,0.32), 0 0 28px rgba(243,120,30,0.16)",
                    cursor: isDragging ? "grabbing" : "grab",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    touchAction: "none",
                    userSelect: "none",
                }}
            >
                {/* Pulsing ring (only when chat is closed) */}
                {!isOpen && (
                    <motion.span
                        animate={{ scale: [1, 1.7, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
                        style={{ position: "absolute", inset: "-2px", borderRadius: "50%", border: "2px solid rgba(243,146,55,0.45)", pointerEvents: "none" }}
                    />
                )}

                {/* Symbol */}
                <span style={{ fontSize: isOpen ? "18px" : "22px", fontFamily: "Georgia,serif", color: "#fff", pointerEvents: "none", userSelect: "none", textShadow: "0 1px 4px rgba(0,0,0,0.25)", lineHeight: 1 }}>
                    {isOpen ? "✕" : "ॐ"}
                </span>

                {/* Drag tooltip */}
                <AnimatePresence>
                    {isDragging && (
                        <motion.div initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
                            style={{ position: "absolute", right: "66px", whiteSpace: "nowrap", background: "#fff8ee", color: "#b05a10", fontSize: "10px", padding: "5px 10px", borderRadius: "8px", fontFamily: "Georgia,serif", letterSpacing: "1px", border: "1px solid rgba(243,146,55,0.25)", pointerEvents: "none", boxShadow: "0 3px 10px rgba(60,20,0,0.1)" }}>
                            ↕ Drop to snap
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </>
    );
}
