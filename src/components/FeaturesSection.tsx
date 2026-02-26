import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

import healingAudio from "../audio/Healing Meditation Music.mp3";
import omChantingAudio from "../audio/Om Chanting.mp3";
import omNamahAudio from "../audio/Om Namah Shivaya 108 Times.mp3";
import tanpuraAudio from "../audio/Tanpura.mp3";

type BreathPhase = "inhale" | "hold" | "exhale";
type ModalPhase = "select" | "meditate";

/* ── Feature cards ──────────────────────────────────────────── */
const features = [
  { title: "Gita Shloks", description: "Explore shloks from the Bhagavad Gita with translations and explanations.", image: "/feature-gita.png", button: "Read Shloks", to: "/gita" },
  { title: "Learn Sanskrit", description: "Watch lessons & study notes to learn Sanskrit language and grammar.", image: "/feature-sankrit.jpg", button: "Start Learning", to: "/sanskrit" },
  { title: "Mythological Stories", description: "Read ancient stories of Krishna, Rama, Hanuman and more.", image: "/feature-stories.png", button: "Read Stories", to: "/stories" },
  { title: "Meditation Timer", description: "Practice meditation with peaceful chants and calm focus.", image: "/feature-meditation.png", button: "Start", type: "meditation" },
];

/* ── Tracks ─────────────────────────────────────────────────── */
const TRACKS = [
  { id: 0, name: "Healing Meditation", emoji: "🎵", desc: "Serene healing frequencies", src: healingAudio as string },
  { id: 1, name: "Om Chanting", emoji: "🕉️", desc: "Sacred Om vibrations", src: omChantingAudio as string },
  { id: 2, name: "Om Namah Shivaya", emoji: "🙏", desc: "Divine mantra · 108 times", src: omNamahAudio as string },
  { id: 3, name: "Tanpura Drone", emoji: "🎶", desc: "Ancient drone for deep focus", src: tanpuraAudio as string },
];

/* ── Duration options (seconds) ────────────────────────────── */
const DURATION_OPTS = [
  { label: "5 min", val: 300 },
  { label: "10 min", val: 600 },
  { label: "15 min", val: 900 },
];

/* ── Breath cycle ───────────────────────────────────────────── */
const BREATH: { phase: BreathPhase; label: string; ms: number }[] = [
  { phase: "inhale", label: "Breathe in…", ms: 4000 },
  { phase: "hold", label: "Hold…", ms: 4000 },
  { phase: "exhale", label: "Breathe out…", ms: 4000 },
];

/* ── Particles ──────────────────────────────────────────────── */
const PARTICLES = [
  { l: 3, t: 8, s: 5, delay: 0, dur: 7 },
  { l: 89, t: 5, s: 4, delay: 1.4, dur: 9 },
  { l: 94, t: 56, s: 6, delay: 2.6, dur: 6 },
  { l: 4, t: 64, s: 4, delay: 0.9, dur: 8 },
  { l: 46, t: 1, s: 4, delay: 2.0, dur: 7 },
  { l: 18, t: 89, s: 5, delay: 3.3, dur: 6 },
  { l: 79, t: 86, s: 4, delay: 0.6, dur: 9 },
  { l: 63, t: 3, s: 3, delay: 2.2, dur: 5 },
  { l: 33, t: 93, s: 3, delay: 1.1, dur: 8 },
  { l: 56, t: 90, s: 4, delay: 3.9, dur: 7 },
  { l: 12, t: 40, s: 3, delay: 4.5, dur: 10 },
  { l: 87, t: 35, s: 3, delay: 1.7, dur: 11 },
];

/* ── Helpers ────────────────────────────────────────────────── */
const fmt = (s: number) =>
  `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

const pct = (elapsed: number, total: number) =>
  total > 0 ? Math.round((elapsed / total) * 100) : 0;

/* ── Synthesised Tibetan-bowl bell (Web Audio API) ───────────── */
function playBell() {
  try {
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AC) return;
    const ctx = new AC();
    const partial = (freq: number, amp: number, decay: number, delay = 0) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const t = ctx.currentTime + delay;
      osc.connect(gain); gain.connect(ctx.destination);
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, t);
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(amp, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + decay);
      osc.start(t); osc.stop(t + decay + 0.1);
    };
    partial(220, 0.38, 5.5);
    partial(860, 0.14, 3.8);
    partial(1720, 0.06, 2.2);
    partial(220, 0.14, 5.0, 0.5); // subtle echo
  } catch { /* silent */ }
}

/* ── Volume fade helpers ─────────────────────────────────────── */
type FadeRef = React.MutableRefObject<ReturnType<typeof setInterval> | null>;

function doFadeIn(audio: HTMLAudioElement, ms: number, ref: FadeRef) {
  if (ref.current) clearInterval(ref.current);
  audio.volume = 0;
  const steps = 40; const stepMs = ms / steps; let step = 0;
  ref.current = setInterval(() => {
    step++; audio.volume = Math.min(1, step / steps);
    if (step >= steps) { clearInterval(ref.current!); ref.current = null; }
  }, stepMs);
}

function doFadeOut(audio: HTMLAudioElement, ms: number, ref: FadeRef, onDone?: () => void) {
  if (ref.current) clearInterval(ref.current);
  const startVol = audio.volume;
  const steps = 30; const stepMs = ms / steps; let step = 0;
  ref.current = setInterval(() => {
    step++; audio.volume = Math.max(0, startVol * (1 - step / steps));
    if (step >= steps) { clearInterval(ref.current!); ref.current = null; audio.pause(); onDone?.(); }
  }, stepMs);
}

/* ════════════════════════ COMPONENT ═════════════════════════ */
export default function FeaturesSection() {
  const [open, setOpen] = useState(false);
  const [modalPhase, setModalPhase] = useState<ModalPhase>("select");
  const [selectedTrack, setSelectedTrack] = useState<number | null>(null);
  const [selectedDur, setSelectedDur] = useState(600);
  const [durations, setDurations] = useState<(number | null)[]>([null, null, null, null]);
  const [remaining, setRemaining] = useState(0);
  const [running, setRunning] = useState(false);
  const [finished, setFinished] = useState(false);
  const [breathPhase, setBreathPhase] = useState<BreathPhase>("inhale");
  const [breathLabel, setBreathLabel] = useState("Breathe in…");
  const [ambientLoop, setAmbientLoop] = useState(true);
  const [hoverTrack, setHoverTrack] = useState<number | null>(null);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const breathRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const breathIdx = useRef(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const prevAudio = useRef<HTMLAudioElement | null>(null);
  const prevFadeRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const prevTO = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* Load track durations once */
  useEffect(() => {
    if (!open) return;
    TRACKS.forEach((t, i) => {
      const a = new Audio(t.src);
      a.addEventListener("loadedmetadata", () =>
        setDurations(prev => { const n = [...prev]; n[i] = Math.round(a.duration); return n; })
      );
    });
  }, [open]);

  /* Countdown timer */
  useEffect(() => {
    if (!running) return;
    timerRef.current = setInterval(() => {
      setRemaining(prev => {
        if (prev <= 1) { clearInterval(timerRef.current!); setRunning(false); setFinished(true); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current!);
  }, [running]);

  /* React to session finish */
  useEffect(() => {
    if (!finished) return;
    stopBreaths();
    if (audioRef.current && !audioRef.current.paused)
      doFadeOut(audioRef.current, 5000, fadeRef);
    setTimeout(playBell, 600);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finished]);

  /* Keyboard shortcuts */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { closeModal(); return; }
      if (e.code === "Space" && modalPhase === "meditate") {
        e.preventDefault();
        if (running) handlePause();
        else if (!finished) handleResume();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, modalPhase, running, finished]);

  /* Cleanup on unmount */
  useEffect(() => () => {
    clearInterval(timerRef.current!); clearTimeout(breathRef.current!);
    clearInterval(fadeRef.current!); clearInterval(prevFadeRef.current!);
    clearTimeout(prevTO.current!);
    audioRef.current?.pause(); prevAudio.current?.pause();
  }, []);

  /* ── Breath helpers ── */
  const stopBreaths = () => clearTimeout(breathRef.current!);
  const startBreaths = () => {
    const tick = () => {
      const { phase, label, ms } = BREATH[breathIdx.current % BREATH.length];
      setBreathPhase(phase); setBreathLabel(label);
      breathIdx.current += 1;
      breathRef.current = setTimeout(tick, ms);
    };
    tick();
  };

  /* ── Preview on hover ── */
  const startPreview = (trackId: number) => {
    // Immediately kill any current preview (hard stop, not fade) before starting new one
    clearTimeout(prevTO.current!); prevTO.current = null;
    clearInterval(prevFadeRef.current!); prevFadeRef.current = null;
    if (prevAudio.current) { prevAudio.current.pause(); prevAudio.current = null; }

    setHoverTrack(trackId);
    const a = new Audio(TRACKS[trackId].src);
    a.volume = 0; prevAudio.current = a;
    a.play().catch(() => { });
    doFadeIn(a, 800, prevFadeRef);
    prevTO.current = setTimeout(() => stopPreview(), 10000); // 5-second preview
  };

  const stopPreview = () => {
    clearTimeout(prevTO.current!); prevTO.current = null;
    setHoverTrack(null);
    const a = prevAudio.current;
    if (a && !a.paused) doFadeOut(a, 600, prevFadeRef);
    else { prevAudio.current?.pause(); prevAudio.current = null; }
  };

  /* ── Modal actions ── */
  const openModal = () => {
    setOpen(true); setModalPhase("select"); setSelectedTrack(null);
    setRemaining(0); setRunning(false); setFinished(false);
  };

  const doClose = () => {
    setOpen(false); setModalPhase("select"); setSelectedTrack(null);
    setRunning(false); setFinished(false); setRemaining(0);
    breathIdx.current = 0; stopPreview();
    if (audioRef.current) audioRef.current.currentTime = 0;
  };

  const closeModal = () => {
    clearInterval(timerRef.current!); stopBreaths();
    const a = audioRef.current;
    if (a && !a.paused) doFadeOut(a, 1500, fadeRef, doClose);
    else { a?.pause(); doClose(); }
  };

  const handleBegin = () => {
    if (selectedTrack === null) return;
    stopPreview();
    const audio = new Audio(TRACKS[selectedTrack].src);
    audio.loop = ambientLoop;
    audioRef.current = audio;
    breathIdx.current = 0;
    setBreathPhase("inhale"); setBreathLabel("Breathe in…");
    setRemaining(selectedDur); setFinished(false); setModalPhase("meditate");
    setTimeout(() => {
      doFadeIn(audio, 3000, fadeRef);
      audio.play().catch(console.error);
      setRunning(true); startBreaths();
    }, 550);
  };

  const handlePause = () => {
    clearInterval(timerRef.current!); stopBreaths();
    audioRef.current?.pause(); setRunning(false);
  };

  const handleResume = () => {
    audioRef.current?.play().catch(console.error);
    setRunning(true); startBreaths();
  };

  const handleReset = () => {
    clearInterval(timerRef.current!); stopBreaths();
    if (fadeRef.current) clearInterval(fadeRef.current);
    const a = audioRef.current;
    if (a) { a.pause(); a.currentTime = 0; a.volume = 1; }
    setRemaining(selectedDur); setRunning(false); setFinished(false);
    breathIdx.current = 0; setBreathPhase("inhale"); setBreathLabel("Breathe in…");
  };

  const handleBack = () => { handleReset(); setModalPhase("select"); };

  const toggleLoop = () => {
    setAmbientLoop(p => {
      const next = !p;
      if (audioRef.current) audioRef.current.loop = next;
      return next;
    });
  };

  /* ── Derived values ── */
  const total = selectedDur;
  const elapsed = total - remaining;
  const ARC_R = 130;
  const ARC_CIRC = 2 * Math.PI * ARC_R;
  const arcOff = total > 0 ? ARC_CIRC - (elapsed / total) * ARC_CIRC : ARC_CIRC;
  const orbScale = breathPhase === "exhale" ? 1 : 1.22;

  /* ── Shared button styles ── */
  const btnPrimary: React.CSSProperties = {
    background: "linear-gradient(135deg,#c8781a,#a85c10)",
    color: "#fff", border: "none", borderRadius: "10px",
    padding: "9px 22px", fontFamily: "Georgia,serif",
    fontSize: "12px", letterSpacing: "1.8px", cursor: "pointer",
    boxShadow: "0 4px 16px rgba(200,120,26,0.38)", transition: "all 0.2s",
  };
  const btnGhost: React.CSSProperties = {
    background: "rgba(255,255,255,0.05)", color: "rgba(240,210,150,0.7)",
    border: "1px solid rgba(255,200,120,0.16)", borderRadius: "10px",
    padding: "9px 18px", fontFamily: "Georgia,serif",
    fontSize: "12px", letterSpacing: "1.8px", cursor: "pointer", transition: "all 0.2s",
  };

  return (
    <section className="relative py-10" style={{ marginTop: 0 }}>

      {/* ── Feature cards ── */}
      <div className={`max-w-[1500px] mx-auto px-4 transition-all duration-500 ${open ? "blur-sm pointer-events-none scale-[0.99]" : ""}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, i) => (
            <motion.div key={i} whileHover={{ y: -8, scale: 1.02 }} className="bg-[#F6EFE6] rounded-2xl p-6 flex flex-col">
              <div className="overflow-hidden rounded-xl mb-5">
                <img src={item.image} alt={item.title} className="w-full h-40 object-cover transition-transform duration-500 ease-out hover:scale-110" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-[#1B2654] mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm flex-grow">{item.description}</p>
              {item.type === "meditation" ? (
                <button onClick={openModal} className="mt-5 px-4 py-2 rounded-lg border border-[#F39237] text-[#F39237] hover:bg-[#F39237] hover:text-white transition">
                  {item.button}
                </button>
              ) : (
                <Link to={item.to!} className="mt-5 px-4 py-2 rounded-lg border border-[#F39237] text-[#F39237] hover:bg-[#F39237] hover:text-white transition text-center">
                  {item.button}
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* ══════════════════ MODAL ══════════════════ */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50"
            style={{ background: "rgba(0,0,0,0.94)", backdropFilter: "blur(22px)" }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={closeModal}
          >
            <motion.div
              onClick={e => e.stopPropagation()}
              initial={{ scale: 0.85, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 40 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: "linear-gradient(165deg, #0e1228 0%, #111830 55%, #090c1c 100%)",
                borderRadius: "30px",
                padding: modalPhase === "select" ? "46px 42px 42px" : "36px 42px 34px",
                boxShadow: "0 0 0 1px rgba(200,120,40,0.1), 0 40px 120px rgba(0,0,0,0.85), inset 0 0 100px rgba(200,100,20,0.03)",
                maxWidth: modalPhase === "select" ? "640px" : "560px",
                width: "94vw", position: "relative", overflow: "hidden",
              }}
            >
              {/* Soft ambient glow at top */}
              <div style={{ position: "absolute", top: "-80px", left: "50%", transform: "translateX(-50%)", width: "400px", height: "200px", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(200,120,40,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />

              {/* Keyboard hint */}
              {modalPhase === "meditate" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
                  style={{ position: "absolute", top: "14px", right: "18px", fontSize: "9px", color: "rgba(200,160,90,0.3)", letterSpacing: "1px", fontFamily: "Georgia,serif" }}>
                  Space · Pause/Resume &nbsp;·&nbsp; Esc · Close
                </motion.div>
              )}

              <AnimatePresence mode="wait">

                {/* ═══════ PHASE 1 — SELECT ═══════ */}
                {modalPhase === "select" && (
                  <motion.div key="select"
                    initial={{ opacity: 0, x: -24, filter: "blur(4px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: -24, filter: "blur(4px)" }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                  >
                    {/* Header */}
                    <div style={{ textAlign: "center", marginBottom: "32px" }}>
                      <motion.p
                        initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                        style={{ fontFamily: "Georgia,serif", fontSize: "11px", letterSpacing: "6px", color: "#c8781a", textTransform: "uppercase", marginBottom: "8px" }}>
                        ॐ &nbsp; Dhyāna
                      </motion.p>
                      <motion.h2
                        initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }}
                        style={{ fontFamily: "Georgia,serif", fontSize: "26px", color: "#f0e6d0", fontWeight: 700, marginBottom: "8px" }}>
                        Choose Your Meditation
                      </motion.h2>
                      <motion.p
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
                        style={{ fontSize: "13px", color: "rgba(200,180,150,0.55)" }}>
                        Select a sacred sound to guide your practice
                      </motion.p>
                    </div>

                    {/* Track grid */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "24px" }}>
                      {TRACKS.map((track, idx) => {
                        const sel = selectedTrack === track.id;
                        const hover = hoverTrack === track.id;
                        const dur = durations[track.id];
                        return (
                          <motion.button key={track.id}
                            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 + idx * 0.07, duration: 0.4 }}
                            onClick={() => setSelectedTrack(track.id)}
                            onMouseEnter={() => startPreview(track.id)}
                            onMouseLeave={stopPreview}
                            whileHover={{ scale: 1.025 }} whileTap={{ scale: 0.97 }}
                            style={{
                              background: sel
                                ? "linear-gradient(135deg,rgba(200,120,26,0.2),rgba(180,90,10,0.11))"
                                : "rgba(255,255,255,0.04)",
                              border: sel ? "1.5px solid rgba(200,120,26,0.65)" : "1.5px solid rgba(255,255,255,0.07)",
                              borderRadius: "18px", padding: "20px 18px",
                              cursor: "pointer", textAlign: "left",
                              boxShadow: sel ? "0 0 26px rgba(200,120,26,0.16), inset 0 0 20px rgba(200,120,26,0.05)" : "none",
                              transition: "all 0.28s ease", position: "relative", backdropFilter: "blur(10px)",
                            }}
                          >
                            <div style={{ fontSize: "26px", marginBottom: "10px" }}>{track.emoji}</div>
                            <div style={{ fontFamily: "Georgia,serif", fontSize: "14px", fontWeight: 700, color: sel ? "#f0c87a" : "#d4c4a8", marginBottom: "5px" }}>
                              {track.name}
                            </div>
                            <div style={{ fontSize: "11.5px", color: "rgba(180,160,130,0.5)", marginBottom: "10px", lineHeight: 1.5 }}>
                              {track.desc}
                            </div>
                            <div style={{
                              fontSize: "10.5px", letterSpacing: "2px", fontFamily: "Georgia,serif",
                              color: hover ? "#e09030" : sel ? "#c8781a" : "rgba(200,150,80,0.45)"
                            }}>
                              {hover ? "▶ Previewing…" : dur ? fmt(dur) : "Loading…"}
                            </div>
                          </motion.button>
                        );
                      })}
                    </div>

                    {/* Duration picker */}
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
                      style={{ marginBottom: "24px" }}>
                      <p style={{ fontFamily: "Georgia,serif", fontSize: "11px", color: "rgba(200,160,100,0.5)", letterSpacing: "3px", textAlign: "center", marginBottom: "12px", textTransform: "uppercase" }}>
                        Session Duration
                      </p>
                      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                        {DURATION_OPTS.map(opt => {
                          const active = selectedDur === opt.val;
                          return (
                            <motion.button key={opt.val}
                              onClick={() => setSelectedDur(opt.val)}
                              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                              style={{
                                background: active ? "linear-gradient(135deg,#c8781a,#a85c10)" : "rgba(255,255,255,0.05)",
                                color: active ? "#fff" : "rgba(220,190,140,0.55)",
                                border: active ? "none" : "1px solid rgba(255,220,160,0.12)",
                                borderRadius: "10px", padding: "8px 20px",
                                fontFamily: "Georgia,serif", fontSize: "12px",
                                letterSpacing: "1px", cursor: "pointer", transition: "all 0.22s",
                                boxShadow: active ? "0 4px 14px rgba(200,120,26,0.35)" : "none",
                              }}>
                              {opt.label}
                            </motion.button>
                          );
                        })}
                      </div>
                    </motion.div>

                    {/* Begin button */}
                    <motion.button
                      onClick={handleBegin}
                      disabled={selectedTrack === null}
                      whileHover={selectedTrack !== null ? { scale: 1.018 } : {}}
                      whileTap={selectedTrack !== null ? { scale: 0.985 } : {}}
                      style={{
                        width: "100%", padding: "15px",
                        background: selectedTrack !== null ? "linear-gradient(135deg,#c8781a,#a85c10)" : "rgba(255,255,255,0.05)",
                        color: selectedTrack !== null ? "#fff" : "rgba(200,180,150,0.28)",
                        border: selectedTrack !== null ? "none" : "1px solid rgba(255,255,255,0.06)",
                        borderRadius: "14px", fontFamily: "Georgia,serif",
                        fontSize: "14px", letterSpacing: "3px",
                        cursor: selectedTrack !== null ? "pointer" : "not-allowed",
                        boxShadow: selectedTrack !== null ? "0 8px 30px rgba(200,120,26,0.4)" : "none",
                        transition: "all 0.35s ease",
                      }}>
                      Begin Meditation &nbsp;→
                    </motion.button>
                  </motion.div>
                )}

                {/* ═══════ PHASE 2 — MEDITATE ═══════ */}
                {modalPhase === "meditate" && (
                  <motion.div key="meditate"
                    initial={{ opacity: 0, x: 24, filter: "blur(4px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: 24, filter: "blur(4px)" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    {/* Header */}
                    <div style={{ textAlign: "center", marginBottom: "22px" }}>
                      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
                        style={{ fontFamily: "Georgia,serif", fontSize: "10px", letterSpacing: "5px", color: "#c8781a", textTransform: "uppercase", marginBottom: "6px" }}>
                        ॐ &nbsp; Now Playing
                      </motion.p>
                      <motion.h2 initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }}
                        style={{ fontFamily: "Georgia,serif", fontSize: "20px", color: "#f0e6d0", fontWeight: 700 }}>
                        {selectedTrack !== null ? TRACKS[selectedTrack].name : ""}
                      </motion.h2>
                    </div>

                    {/* Orb + arc */}
                    <div style={{ position: "relative", width: "300px", height: "300px", margin: "0 auto" }}>

                      {/* Particles */}
                      {PARTICLES.map((p, i) => (
                        <motion.div key={i}
                          style={{ position: "absolute", left: `${p.l}%`, top: `${p.t}%`, width: `${p.s}px`, height: `${p.s}px`, borderRadius: "50%", background: "rgba(200,130,40,0.55)", filter: "blur(2px)", pointerEvents: "none" }}
                          animate={{ y: [0, -18, 0], opacity: [0.06, 0.38, 0.06] }}
                          transition={{ repeat: Infinity, duration: p.dur, delay: p.delay, ease: "easeInOut" }}
                        />
                      ))}

                      {/* Pulsing ambient ring behind everything */}
                      <motion.div
                        animate={{ scale: [1, 1.06, 1], opacity: [0.04, 0.10, 0.04] }}
                        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                        style={{ position: "absolute", inset: "-10px", borderRadius: "50%", background: "radial-gradient(circle, rgba(200,120,40,0.15), transparent 70%)", pointerEvents: "none" }}
                      />

                      {/* Progress arc SVG */}
                      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} viewBox="0 0 300 300">
                        <defs>
                          <linearGradient id="arcG3" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#6b2600" />
                            <stop offset="50%" stopColor="#c8781a" />
                            <stop offset="100%" stopColor="#f0b860" />
                          </linearGradient>
                        </defs>
                        <circle cx="150" cy="150" r={ARC_R} fill="none" stroke="rgba(200,120,40,0.07)" strokeWidth="4" />
                        <motion.circle cx="150" cy="150" r={ARC_R} fill="none"
                          stroke="url(#arcG3)" strokeWidth="4" strokeLinecap="round"
                          strokeDasharray={ARC_CIRC}
                          animate={{ strokeDashoffset: arcOff }}
                          transition={{ ease: "linear", duration: 1 }}
                          transform="rotate(-90 150 150)"
                        />
                      </svg>

                      {/* Breathing orb */}
                      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {[
                          { w: 210, op1: 0.02, op2: 0.07, bdr: "rgba(200,120,40,0.07)", d: 0 },
                          { w: 168, op1: 0.03, op2: 0.12, bdr: "rgba(200,120,40,0.13)", d: 0.12 },
                          { w: 124, op1: 0.05, op2: 0.18, bdr: "rgba(200,130,40,0.21)", d: 0.26, glow: true },
                          { w: 82, bg: "radial-gradient(circle at 36% 33%, #ffe8b0, #e09030 55%, #b05c08 100%)", d: 0.4, core: true },
                        ].map((ring, i) => (
                          <motion.div key={i}
                            animate={{ scale: orbScale }}
                            transition={{ duration: 4, ease: "easeInOut", delay: ring.d }}
                            style={{
                              position: "absolute",
                              width: `${ring.w}px`, height: `${ring.w}px`,
                              borderRadius: "50%",
                              background: ring.core
                                ? ring.bg
                                : `radial-gradient(circle, rgba(200,120,40,${ring.op1}) 0%, rgba(200,120,40,${ring.op2}) 100%)`,
                              border: !ring.core ? `1px solid ${ring.bdr}` : undefined,
                              boxShadow: ring.core
                                ? "0 0 45px rgba(200,130,40,0.6), 0 0 90px rgba(180,100,20,0.22), 0 0 14px rgba(255,220,100,0.45)"
                                : ring.glow ? "0 0 30px rgba(200,120,40,0.10)" : undefined,
                            }}
                          />
                        ))}
                        {/* OM symbol */}
                        <div style={{ position: "absolute", width: "82px", height: "82px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", color: "#0a0d1e", fontFamily: "Georgia,serif", zIndex: 10, userSelect: "none", textShadow: "0 1px 5px rgba(255,210,130,0.55)" }}>
                          ॐ
                        </div>
                      </div>
                    </div>

                    {/* Timer + breath + pct */}
                    <div style={{ textAlign: "center", marginTop: "24px" }}>
                      <motion.div
                        key={remaining}
                        style={{ fontFamily: "Georgia,serif", fontSize: "40px", fontWeight: 700, color: "#f0e6d0", letterSpacing: "5px" }}>
                        {fmt(remaining)}
                      </motion.div>

                      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "18px", marginTop: "6px" }}>
                        <motion.span key={breathLabel} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
                          style={{ fontFamily: "Georgia,serif", fontSize: "12px", color: "rgba(200,140,60,0.75)", letterSpacing: "3px", fontStyle: "italic" }}>
                          {finished ? "namasté 🙏" : running ? breathLabel : remaining < total && remaining > 0 ? "— paused —" : "ready"}
                        </motion.span>

                        {total > 0 && (
                          <span style={{ fontSize: "10px", color: "rgba(200,140,60,0.4)", fontFamily: "Georgia,serif", letterSpacing: "1.5px" }}>
                            {pct(elapsed, total)}% complete
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Controls */}
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", marginTop: "22px", flexWrap: "wrap" }}>
                      {!running && !finished && (
                        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                          onClick={handleResume} style={btnPrimary}>
                          ▶ {remaining < total && remaining > 0 ? "Resume" : "Begin"}
                        </motion.button>
                      )}
                      {running && (
                        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                          onClick={handlePause} style={btnPrimary}>
                          ⏸ Pause
                        </motion.button>
                      )}

                      {/* Loop toggle */}
                      <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                        onClick={toggleLoop}
                        style={{
                          ...btnGhost,
                          color: ambientLoop ? "#f0c060" : "rgba(200,160,90,0.35)",
                          borderColor: ambientLoop ? "rgba(240,190,80,0.3)" : "rgba(255,200,120,0.1)",
                        }}
                        title="Toggle ambient loop">
                        🔁 Loop
                      </motion.button>

                      <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} onClick={handleReset} style={btnGhost}>Reset</motion.button>
                      <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} onClick={handleBack} style={btnGhost}>← Back</motion.button>
                      <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} onClick={closeModal} style={btnGhost}>Close</motion.button>
                    </div>

                    {/* Completion */}
                    <AnimatePresence>
                      {finished && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}
                          style={{ textAlign: "center", marginTop: "18px" }}>
                          <p style={{ fontFamily: "Georgia,serif", fontStyle: "italic", color: "#c8781a", fontSize: "14px", letterSpacing: "1.5px" }}>
                            🙏 Your meditation is complete. May peace be with you.
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}