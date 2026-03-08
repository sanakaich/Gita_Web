import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MODULE_MAP, PASS_PERCENT } from "@/data/sanskritModules";

const LS_DONE = (id: string) => `sanskrit_done_${id}`;
const LS_STARTED = (id: string) => `sanskrit_started_${id}`;

/* ── small helpers ── */
function ls(key: string) { try { return localStorage.getItem(key); } catch { return null; } }
function lsSet(key: string, val: string) { try { localStorage.setItem(key, val); } catch { } }

export default function SanskritModulePage() {
    const { id = "1" } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const mod = MODULE_MAP[id];

    /* mark as started */
    useEffect(() => {
        if (mod) lsSet(LS_STARTED(id), "true");
        window.scrollTo(0, 0);
    }, [id, mod]);

    /* notes accordion */
    const [openNote, setOpenNote] = useState<number | null>(0);

    /* quiz state */
    const [selected, setSelected] = useState<(number | null)[]>([]);
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);
    const alreadyDone = ls(LS_DONE(id)) === "true";

    useEffect(() => {
        if (mod?.quiz) setSelected(Array(mod.quiz.length).fill(null));
        setSubmitted(!!alreadyDone);
        setScore(0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    if (!mod) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-[#1B2654]"
                style={{ background: "linear-gradient(170deg,#F0E9DE 0%,#F8F4EE 45%,#ECEEF6 100%)" }}>
                <Navbar />
                <div className="text-center mt-32">
                    <p className="text-5xl mb-4">🕉️</p>
                    <h1 className="text-2xl font-bold mb-2">Module {id} not found</h1>
                    <Link to="/sanskrit" className="text-[#F39237] underline">← Back to modules</Link>
                </div>
                <Footer />
            </div>
        );
    }

    const ytEmbed = `https://www.youtube.com/embed/${mod.youtubeId}?rel=0&modestbranding=1`;

    /* Submit quiz */
    const handleSubmit = () => {
        if (!mod.quiz) return;
        let correct = 0;
        mod.quiz.forEach((q, i) => { if (selected[i] === q.correct) correct++; });
        const pct = Math.round((correct / mod.quiz.length) * 100);
        setScore(correct);
        setSubmitted(true);
        if (pct >= PASS_PERCENT) lsSet(LS_DONE(id), "true");
    };

    /* Reset quiz */
    const handleRetry = () => {
        if (mod.quiz) setSelected(Array(mod.quiz.length).fill(null));
        setSubmitted(false);
    };

    const allAnswered = mod.quiz ? selected.every((s) => s !== null) : false;
    const pct = mod.quiz ? Math.round((score / mod.quiz.length) * 100) : 0;
    const passed = pct >= PASS_PERCENT;

    /* ── Shared styles ── */
    const sectionCard = "bg-white border border-[#EDE8E0] rounded-3xl p-8 md:p-10 shadow-[0_8px_32px_-4px_rgba(27,38,84,0.08)]";

    return (
        <div className="min-h-screen text-[#1B2654]"
            style={{
                background:
                    "radial-gradient(ellipse 70% 35% at 50% 0%, rgba(243,146,55,0.13) 0%, transparent 65%), " +
                    "linear-gradient(170deg, #F0E9DE 0%, #F8F4EE 45%, #ECEEF6 100%)",
            }}>
            <Navbar />

            <div className="max-w-4xl mx-auto px-4 md:px-8 pt-8 pb-32 flex flex-col gap-8">

                {/* ── Breadcrumb ── */}
                <nav className="flex items-center gap-2 text-xs text-[#1B2654]/50">
                    <Link to="/sanskrit" className="hover:text-[#F39237] transition-colors">Sanskrit</Link>
                    <span>›</span>
                    <span className="text-[#1B2654]/70">Day {mod.day} — {mod.title}</span>
                </nav>

                {/* ── Module title ── */}
                <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#F39237] bg-[#FFF4E8] border border-[#F39237]/25 px-3 py-1 rounded-full">
                        Day {mod.day}
                    </span>
                    <h1 className="text-3xl md:text-4xl font-bold mt-3 mb-2">{mod.title}</h1>
                    <p className="text-[#1B2654]/60 leading-relaxed">{mod.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                        {mod.tags.map((t) => (
                            <span key={t} className="text-[11px] uppercase tracking-wider font-semibold text-[#1B2654]/50 bg-[#F0EBE3] px-2.5 py-1 rounded-full">{t}</span>
                        ))}
                    </div>
                </div>

                {/* ══════════ SECTION 1 — VIDEO ══════════ */}
                <div className={sectionCard}>
                    <p className="text-[10px] uppercase tracking-widest text-[#1B2654]/40 font-semibold mb-4">🎥 Video Lesson</p>
                    <div className="relative w-full rounded-2xl overflow-hidden bg-black"
                        style={{ paddingTop: "56.25%" }}>
                        <iframe
                            className="absolute inset-0 w-full h-full"
                            src={ytEmbed}
                            title={mod.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    </div>
                </div>

                {/* ══════════ SECTION 2 — NOTES ══════════ */}
                {mod.notes ? (
                    <div className={sectionCard}>
                        <p className="text-[10px] uppercase tracking-widest text-[#1B2654]/40 font-semibold mb-5">📝 Study Notes</p>
                        <div className="flex flex-col gap-3">
                            {mod.notes.map((note, i) => (
                                <div key={i} className="border border-[#EDE8E0] rounded-2xl overflow-hidden">
                                    <button
                                        onClick={() => setOpenNote(openNote === i ? null : i)}
                                        className="w-full flex items-center justify-between px-5 py-4 text-left
                               hover:bg-[#FBF8F3] transition-colors duration-150"
                                    >
                                        <span className="font-semibold text-sm text-[#1B2654]">{note.heading}</span>
                                        <span className="text-[#F39237] text-lg leading-none transition-transform duration-200"
                                            style={{ transform: openNote === i ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
                                    </button>
                                    {openNote === i && (
                                        <div className="px-5 pb-5 pt-1 text-sm text-[#1B2654]/75 leading-relaxed whitespace-pre-line
                                    border-t border-[#EDE8E0] bg-[#FBF8F3]"
                                            style={{ fontFamily: note.content.match(/[\u0900-\u097F]/) ? "'Noto Serif Devanagari', serif" : undefined }}>
                                            {note.content}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className={`${sectionCard} flex items-center gap-4 text-[#1B2654]/50`}>
                        <span className="text-2xl">📝</span>
                        <p className="text-sm">No notes for this module — watch the video carefully and take your own notes!</p>
                    </div>
                )}

                {/* ══════════ SECTION 3 — QUIZ ══════════ */}
                {mod.quiz ? (
                    <div className={sectionCard}>
                        <div className="flex items-center justify-between mb-6">
                            <p className="text-[10px] uppercase tracking-widest text-[#1B2654]/40 font-semibold">✏️ Practice Quiz</p>
                            <span className="text-xs text-[#1B2654]/40">{mod.quiz.length} questions · Pass ≥ {PASS_PERCENT}%</span>
                        </div>

                        {/* Score banner (after submit) */}
                        {submitted && (
                            <div className={`mb-6 flex items-center gap-4 rounded-2xl px-6 py-4 border
                ${passed
                                    ? "bg-[#f0fdf4] border-[#86efac] text-[#15803d]"
                                    : "bg-[#fff7ed] border-[#fed7aa] text-[#b45309]"}`}>
                                <span className="text-3xl">{passed ? "🎉" : "📚"}</span>
                                <div>
                                    <p className="font-bold text-lg">{passed ? "Well done!" : "Keep practising!"}</p>
                                    <p className="text-sm opacity-80">You scored {score} / {mod.quiz.length} ({pct}%)</p>
                                </div>
                            </div>
                        )}

                        {/* Questions */}
                        <div className="flex flex-col gap-6">
                            {mod.quiz.map((q, qi) => {
                                const isSubmitted = submitted;
                                return (
                                    <div key={qi} className="border border-[#EDE8E0] rounded-2xl p-5">
                                        <p className="text-sm font-semibold text-[#1B2654] mb-3">
                                            <span className="text-[#F39237] mr-1.5">Q{qi + 1}.</span>{q.question}
                                        </p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                            {q.options.map((opt, oi) => {
                                                const isSelected = selected[qi] === oi;
                                                const isCorrect = oi === q.correct;
                                                let bg = "bg-white border-[#EDE8E0] text-[#1B2654]/80 hover:border-[#F39237]/50 hover:bg-[#FFF4E8]";
                                                if (isSubmitted) {
                                                    if (isCorrect) bg = "bg-[#f0fdf4] border-[#86efac] text-[#15803d]";
                                                    else if (isSelected) bg = "bg-[#fff1f2] border-[#fda4af] text-[#be123c]";
                                                    else bg = "bg-[#F9F9F9] border-[#EDE8E0] text-[#1B2654]/40";
                                                } else if (isSelected) bg = "bg-[#FFF4E8] border-[#F39237] text-[#F39237]";
                                                return (
                                                    <button
                                                        key={oi}
                                                        disabled={isSubmitted}
                                                        onClick={() => {
                                                            if (isSubmitted) return;
                                                            const next = [...selected];
                                                            next[qi] = oi;
                                                            setSelected(next);
                                                        }}
                                                        className={`text-left text-xs font-medium px-4 py-3 rounded-xl border transition-all duration-150 ${bg}`}
                                                        style={{ fontFamily: opt.match(/[\u0900-\u097F]/) ? "'Noto Serif Devanagari', serif" : undefined }}
                                                    >
                                                        <span className="mr-1.5 opacity-60">{String.fromCharCode(97 + oi)})</span>{opt}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                        {/* Show correct answer label */}
                                        {isSubmitted && selected[qi] !== q.correct && (
                                            <p className="mt-2 text-xs text-[#15803d]">
                                                ✓ Correct: <strong style={{ fontFamily: q.options[q.correct].match(/[\u0900-\u097F]/) ? "'Noto Serif Devanagari', serif" : undefined }}>
                                                    {q.options[q.correct]}
                                                </strong>
                                            </p>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        {/* Actions */}
                        <div className="mt-6 flex gap-3 flex-wrap">
                            {!submitted ? (
                                <button
                                    disabled={!allAnswered}
                                    onClick={handleSubmit}
                                    className="px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200
                             bg-[#F39237] text-white shadow-[0_4px_16px_rgba(243,146,55,0.40)]
                             hover:bg-[#e07d1a] hover:scale-105 active:scale-95
                             disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
                                >
                                    Submit Quiz
                                </button>
                            ) : (
                                <button onClick={handleRetry}
                                    className="px-6 py-3 rounded-full text-sm font-semibold border border-[#F39237] text-[#F39237]
                             hover:bg-[#FFF4E8] transition-all duration-200">
                                    Retry Quiz
                                </button>
                            )}
                            {!allAnswered && !submitted && (
                                <p className="self-center text-xs text-[#1B2654]/40">Answer all questions to submit</p>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className={`${sectionCard} flex items-center gap-4 text-[#1B2654]/50`}>
                        <span className="text-2xl">✏️</span>
                        <p className="text-sm">No quiz for this module — focus on listening and pronunciation practice!</p>
                    </div>
                )}
            </div>

            <Footer />

            {/* ── Navigation Buttons ── */}
            <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3">
                {mod.next && (
                    <button onClick={() => navigate(`/sanskrit/module/${mod.next}`)}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full
                       bg-[#F39237] text-white text-sm font-semibold
                       shadow-[0_6px_24px_rgba(243,146,55,0.50)]
                       hover:bg-[#e07d1a] hover:scale-105 active:scale-95 transition-all duration-200">
                        Day {mod.next} <span>→</span>
                    </button>
                )}
                {mod.prev && (
                    <button onClick={() => navigate(`/sanskrit/module/${mod.prev}`)}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-[#F39237]
                       text-[#F39237] text-sm font-semibold
                       shadow-[0_4px_16px_rgba(243,146,55,0.20)]
                       hover:bg-[#FFF4E8] hover:scale-105 active:scale-95 transition-all duration-200">
                        <span>←</span> Day {mod.prev}
                    </button>
                )}
            </div>
        </div>
    );
}
