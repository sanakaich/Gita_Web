import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const TOTAL = 15 * 60;

const features = [
  {
    title: "Gita Shloks",
    description:
      "Explore shloks from the Bhagavad Gita with translations and explanations.",
    image: "/feature-gita.png",
    button: "Read Shloks",
    to: "/gita",
  },
  {
    title: "Learn Sanskrit",
    description:
      "Watch lessons & study notes to learn Sanskrit language and grammar.",
    image: "/feature-sankrit.jpg",
    button: "Start Learning",
    to: "/sanskrit",
  },
  {
    title: "Mythological Stories",
    description:
      "Read ancient stories of Krishna, Rama, Hanuman and more.",
    image: "/feature-stories.png",
    button: "Read Stories",
    to: "/stories",
  },
  {
    title: "Meditation Timer",
    description:
      "Practice meditation with peaceful chants and calm focus.",
    image: "/feature-meditation.png",
    button: "Start",
    type: "meditation",
  },
];

/* ─── Tick mark helper ─────────────────────────────────────── */
function DialTicks() {
  const ticks = [];
  const cx = 160, cy = 160, r = 128;
  for (let i = 0; i < 60; i++) {
    const angle = (i * 6 - 90) * (Math.PI / 180);
    const isHour = i % 5 === 0;
    const isQuarter = i % 15 === 0;
    const len = isQuarter ? 18 : isHour ? 11 : 5;
    const sw = isQuarter ? 2.5 : isHour ? 1.5 : 0.8;
    const opacity = isQuarter ? 1 : isHour ? 0.65 : 0.3;
    const color = isQuarter ? "#F39237" : isHour ? "#c97e2a" : "#c9a46a";
    const x1 = cx + r * Math.cos(angle);
    const y1 = cy + r * Math.sin(angle);
    const x2 = cx + (r - len) * Math.cos(angle);
    const y2 = cy + (r - len) * Math.sin(angle);
    ticks.push(
      <line
        key={i}
        x1={x1} y1={y1} x2={x2} y2={y2}
        stroke={color} strokeWidth={sw}
        strokeLinecap="round" opacity={opacity}
      />
    );
  }
  return <>{ticks}</>;
}

/* ─── Hour numerals ─────────────────────────────────────────── */
function DialNumbers() {
  const nums = [];
  const cx = 160, cy = 160, r = 104;
  const labels = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  labels.forEach((label, i) => {
    const angle = (i * 30 - 90) * (Math.PI / 180);
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    nums.push(
      <text
        key={i}
        x={x} y={y}
        textAnchor="middle" dominantBaseline="middle"
        fontSize="13"
        fontFamily="Georgia, serif"
        fill="#1B2654"
        opacity="0.75"
        fontWeight="600"
      >
        {label}
      </text>
    );
  });
  return <>{nums}</>;
}

/* ─── Mandala petal ring (decorative) ───────────────────────── */
function MandalaPetals() {
  const petals = [];
  const cx = 160, cy = 160, r = 148;
  for (let i = 0; i < 24; i++) {
    const angle = (i * 15) * (Math.PI / 180);
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    petals.push(
      <ellipse
        key={i}
        cx={x} cy={y}
        rx="4" ry="9"
        fill="#F39237"
        opacity="0.12"
        transform={`rotate(${i * 15 + 90} ${x} ${y})`}
      />
    );
  }
  return <>{petals}</>;
}

/* ─── Animated clock hands ──────────────────────────────────── */
function ClockHands({ remaining }) {
  const cx = 160, cy = 160;
  const elapsed = TOTAL - remaining;

  // Timer-driven hands: minute hand = progress of timer (0→15min = 0→360°)
  const minDeg = (elapsed / TOTAL) * 360 - 90;
  // Hour hand moves 1/12 of minute
  const hourDeg = (elapsed / TOTAL) * 30 - 90;
  // Second hand = seconds within current minute
  const secDeg = (elapsed % 60) * 6 - 90;

  const handStyle = (deg, len, width, color, glow) => {
    const rad = deg * (Math.PI / 180);
    const x2 = cx + len * Math.cos(rad);
    const y2 = cy + len * Math.sin(rad);
    return { x2, y2, stroke: color, strokeWidth: width, filter: glow ? `drop-shadow(0 0 4px ${color})` : "none" };
  };

  const hour = handStyle(hourDeg, 55, 5, "#1B2654", false);
  const min = handStyle(minDeg, 78, 3.5, "#F39237", true);
  const sec = handStyle(secDeg, 88, 1.5, "#e05a00", true);

  // Counterweight (tail) for second hand
  const secTailRad = (secDeg + 180) * (Math.PI / 180);
  const secTailX = cx + 18 * Math.cos(secTailRad);
  const secTailY = cy + 18 * Math.sin(secTailRad);

  return (
    <>
      {/* Hour hand */}
      <line x1={cx} y1={cy} x2={hour.x2} y2={hour.y2}
        stroke={hour.stroke} strokeWidth={hour.strokeWidth} strokeLinecap="round" />
      {/* Minute hand */}
      <line x1={cx} y1={cy} x2={min.x2} y2={min.y2}
        stroke={min.stroke} strokeWidth={min.strokeWidth} strokeLinecap="round"
        style={{ filter: min.filter }} />
      {/* Second hand */}
      <line x1={cx} y1={cy} x2={sec.x2} y2={sec.y2}
        stroke={sec.stroke} strokeWidth={sec.strokeWidth} strokeLinecap="round"
        style={{ filter: sec.filter }} />
      {/* Tail */}
      <line x1={cx} y1={cy} x2={secTailX} y2={secTailY}
        stroke="#e05a00" strokeWidth="1.5" strokeLinecap="round" />
      {/* Center jewel */}
      <circle cx={cx} cy={cy} r="7" fill="#F39237" />
      <circle cx={cx} cy={cy} r="4" fill="#fff8ee" />
      <circle cx={cx} cy={cy} r="1.5" fill="#F39237" />
    </>
  );
}

/* ─── Main export ───────────────────────────────────────────── */
export default function FeaturesSection() {
  const [open, setOpen] = useState(false);
  const [remaining, setRemaining] = useState(TOTAL);
  const [running, setRunning] = useState(false);
  const [finished, setFinished] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setRunning(false);
            setFinished(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [running]);

  const closeModal = () => {
    clearInterval(intervalRef.current);
    setRunning(false);
    setRemaining(TOTAL);
    setFinished(false);
    setOpen(false);
  };

  const handleStart = () => {
    if (finished) return;
    setRunning(true);
  };

  const handlePause = () => {
    clearInterval(intervalRef.current);
    setRunning(false);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setRunning(false);
    setRemaining(TOTAL);
    setFinished(false);
  };

  const circumference = 2 * Math.PI * 128;
  const elapsed = TOTAL - remaining;
  const progressOffset = circumference - (elapsed / TOTAL) * circumference;

  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  return (
    <section className="relative py-10" style={{ marginTop: 0 }}>
      <div className={`max-w-[1500px] mx-auto px-4 transition-all duration-300 ${open ? "blur-sm pointer-events-none" : ""}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-[#F6EFE6] rounded-2xl p-6 flex flex-col"
            >
              <div className="overflow-hidden rounded-xl mb-5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover transition-transform duration-500 ease-out hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-serif font-semibold text-[#1B2654] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm flex-grow">{item.description}</p>

              {item.type === "meditation" ? (
                <button
                  onClick={() => { setOpen(true); setRemaining(TOTAL); setRunning(false); setFinished(false); }}
                  className="mt-5 px-4 py-2 rounded-lg border border-[#F39237] text-[#F39237] hover:bg-[#F39237] hover:text-white transition"
                >
                  {item.button}
                </button>
              ) : (
                <Link
                  to={item.to}
                  className="mt-5 px-4 py-2 rounded-lg border border-[#F39237] text-[#F39237] hover:bg-[#F39237] hover:text-white transition text-center"
                >
                  {item.button}
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* ═══════════════ MEDITATION WATCH MODAL ═══════════════ */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50"
            style={{ background: "rgba(27,38,84,0.72)", backdropFilter: "blur(10px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.88, opacity: 0, y: 24 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.88, opacity: 0, y: 24 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: "linear-gradient(145deg, #fffaf3 0%, #f6efe6 60%, #f0e4cf 100%)",
                borderRadius: "32px",
                padding: "40px 36px 32px",
                boxShadow: "0 32px 80px rgba(27,38,84,0.35), 0 2px 0 rgba(243,146,55,0.4) inset",
                border: "1px solid rgba(243,146,55,0.25)",
                maxWidth: "420px",
                width: "90vw",
              }}
            >
              {/* Header */}
              <div className="text-center mb-6">
                <p style={{ fontFamily: "Georgia, serif", fontSize: "11px", letterSpacing: "5px", color: "#F39237", textTransform: "uppercase", marginBottom: "4px" }}>
                  ॐ  Dhyāna
                </p>
                <h2 style={{ fontFamily: "Georgia, serif", fontSize: "22px", color: "#1B2654", fontWeight: "700", letterSpacing: "1px" }}>
                  Meditation Timer
                </h2>
                <p style={{ fontSize: "12px", color: "#7a6a55", marginTop: "4px", letterSpacing: "0.5px" }}>
                  15 minutes of stillness
                </p>
              </div>

              {/* ── WATCH SVG ── */}
              <div className="flex justify-center">
                <div style={{ position: "relative", width: 320, height: 320 }}>

                  {/* Outer glow ring */}
                  <div style={{
                    position: "absolute", inset: 0, borderRadius: "50%",
                    boxShadow: "0 0 48px rgba(243,146,55,0.2), 0 0 0 1px rgba(243,146,55,0.15)",
                    pointerEvents: "none"
                  }} />

                  <svg width="320" height="320" viewBox="0 0 320 320">
                    <defs>
                      {/* Warm cream dial gradient */}
                      <radialGradient id="dialGrad" cx="42%" cy="35%">
                        <stop offset="0%" stopColor="#fffbf4" />
                        <stop offset="55%" stopColor="#f8f0e0" />
                        <stop offset="100%" stopColor="#ede0c8" />
                      </radialGradient>

                      {/* Saffron arc gradient */}
                      <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#e05a00" />
                        <stop offset="50%" stopColor="#F39237" />
                        <stop offset="100%" stopColor="#f7c26b" />
                      </linearGradient>

                      {/* Case shadow */}
                      <filter id="caseShadow">
                        <feDropShadow dx="0" dy="6" stdDeviation="12" floodColor="#1B2654" floodOpacity="0.25" />
                      </filter>

                      {/* Hand glow */}
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="2" result="blur" />
                        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                      </filter>
                    </defs>

                    {/* ── Outer watch case ── */}
                    <circle cx="160" cy="160" r="155" fill="#1B2654" filter="url(#caseShadow)" />

                    {/* ── Navy bezel with subtle ring ── */}
                    <circle cx="160" cy="160" r="155" fill="url(#navyBezel)" stroke="#2d3d7a" strokeWidth="2" />

                    {/* ── Saffron bezel accent ring ── */}
                    <circle cx="160" cy="160" r="148" fill="none" stroke="#F39237" strokeWidth="3" opacity="0.7" />
                    <circle cx="160" cy="160" r="143" fill="none" stroke="#f7c26b" strokeWidth="0.8" opacity="0.4" />

                    {/* ── Mandala petals on bezel ── */}
                    <MandalaPetals />

                    {/* ── Timer progress arc (outermost) ── */}
                    <circle
                      cx="160" cy="160" r="128"
                      fill="none"
                      stroke="rgba(243,146,55,0.12)"
                      strokeWidth="8"
                    />
                    <motion.circle
                      cx="160" cy="160" r="128"
                      fill="none"
                      stroke="url(#arcGrad)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={circumference}
                      animate={{ strokeDashoffset: progressOffset }}
                      transition={{ ease: "linear", duration: 0.9 }}
                      transform="rotate(-90 160 160)"
                    />

                    {/* ── Cream dial face ── */}
                    <circle cx="160" cy="160" r="118" fill="url(#dialGrad)" />

                    {/* ── Subtle guilloché ring ── */}
                    <circle cx="160" cy="160" r="118" fill="none" stroke="rgba(243,146,55,0.08)" strokeWidth="24"
                      strokeDasharray="3 6" />

                    {/* ── Tick marks ── */}
                    <DialTicks />

                    {/* ── Hour numbers ── */}
                    <DialNumbers />

                    {/* ── Brand name on dial ── */}
                    <text x="160" y="126" textAnchor="middle"
                      fontFamily="Georgia, serif" fontSize="9" fill="#1B2654" opacity="0.6" letterSpacing="4">
                      DHYĀNA
                    </text>
                    <text x="160" y="138" textAnchor="middle"
                      fontFamily="Georgia, serif" fontSize="7" fill="#F39237" opacity="0.7" letterSpacing="2"
                      fontStyle="italic">
                      meditation
                    </text>

                    {/* ── Lotus divider (simple) ── */}
                    <text x="160" y="194" textAnchor="middle"
                      fontSize="10" fill="#F39237" opacity="0.5">
                      ✦ ✦ ✦
                    </text>

                    {/* ── Timer readout ── */}
                    <text x="160" y="210" textAnchor="middle"
                      fontFamily="Georgia, serif" fontSize="22" fontWeight="700"
                      fill="#1B2654" letterSpacing="2">
                      {formatTime(remaining)}
                    </text>

                    {/* Status text */}
                    <text x="160" y="224" textAnchor="middle"
                      fontFamily="Georgia, serif" fontSize="8" fill="#7a6a55" letterSpacing="3"
                      fontStyle="italic">
                      {finished ? "namasté 🙏" : running ? "breathe..." : "ready"}
                    </text>

                    {/* ── Clock hands ── */}
                    <ClockHands remaining={remaining} />
                  </svg>
                </div>
              </div>

              {/* ── Controls ── */}
              <div className="flex justify-center gap-3 mt-8">
                {!running && !finished && (
                  <button
                    onClick={handleStart}
                    style={{
                      background: "linear-gradient(135deg, #F39237, #e05a00)",
                      color: "#fff",
                      border: "none",
                      borderRadius: "10px",
                      padding: "10px 28px",
                      fontFamily: "Georgia, serif",
                      fontSize: "13px",
                      letterSpacing: "2px",
                      cursor: "pointer",
                      boxShadow: "0 4px 16px rgba(243,146,55,0.35)",
                    }}
                  >
                    ▶ Begin
                  </button>
                )}

                {running && (
                  <button
                    onClick={handlePause}
                    style={{
                      background: "transparent",
                      color: "#1B2654",
                      border: "2px solid #1B2654",
                      borderRadius: "10px",
                      padding: "10px 28px",
                      fontFamily: "Georgia, serif",
                      fontSize: "13px",
                      letterSpacing: "2px",
                      cursor: "pointer",
                    }}
                  >
                    ⏸ Pause
                  </button>
                )}

                {!running && remaining < TOTAL && remaining > 0 && (
                  <button
                    onClick={handleStart}
                    style={{
                      background: "linear-gradient(135deg, #F39237, #e05a00)",
                      color: "#fff",
                      border: "none",
                      borderRadius: "10px",
                      padding: "10px 28px",
                      fontFamily: "Georgia, serif",
                      fontSize: "13px",
                      letterSpacing: "2px",
                      cursor: "pointer",
                      boxShadow: "0 4px 16px rgba(243,146,55,0.35)",
                    }}
                  >
                    ▶ Resume
                  </button>
                )}

                <button
                  onClick={handleReset}
                  style={{
                    background: "transparent",
                    color: "#9a8a78",
                    border: "1.5px solid rgba(154,138,120,0.4)",
                    borderRadius: "10px",
                    padding: "10px 20px",
                    fontFamily: "Georgia, serif",
                    fontSize: "13px",
                    letterSpacing: "2px",
                    cursor: "pointer",
                  }}
                >
                  Reset
                </button>

                <button
                  onClick={closeModal}
                  style={{
                    background: "transparent",
                    color: "#9a8a78",
                    border: "1.5px solid rgba(154,138,120,0.4)",
                    borderRadius: "10px",
                    padding: "10px 20px",
                    fontFamily: "Georgia, serif",
                    fontSize: "13px",
                    letterSpacing: "2px",
                    cursor: "pointer",
                  }}
                >
                  Close
                </button>
              </div>

              {/* Completion message */}
              <AnimatePresence>
                {finished && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                      textAlign: "center",
                      marginTop: "16px",
                      fontFamily: "Georgia, serif",
                      fontStyle: "italic",
                      color: "#F39237",
                      fontSize: "14px",
                      letterSpacing: "1px",
                    }}
                  >
                    🙏 Your meditation is complete. May peace be with you.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}