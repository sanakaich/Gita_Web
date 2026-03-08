import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SANSKRIT_MODULES } from "@/data/sanskritModules";

function getProgress(id: string): "completed" | "started" | "not-started" {
    try {
        const done = localStorage.getItem(`sanskrit_done_${id}`);
        if (done === "true") return "completed";
        const started = localStorage.getItem(`sanskrit_started_${id}`);
        if (started === "true") return "started";
    } catch { }
    return "not-started";
}

const BADGE: Record<string, { label: string; color: string; bg: string }> = {
    "completed": { label: "✅ Completed", color: "#15803d", bg: "#f0fdf4" },
    "started": { label: "📖 In Progress", color: "#b45309", bg: "#fffbeb" },
    "not-started": { label: "○ Not Started", color: "#9ca3af", bg: "#f9fafb" },
};

export default function SanskritLanding() {
    const [, rerender] = React.useReducer((x) => x + 1, 0);
    // Re-read localStorage on mount
    React.useEffect(() => rerender(), []);

    return (
        <div
            className="min-h-screen text-[#1B2654]"
            style={{
                background:
                    "radial-gradient(ellipse 70% 35% at 50% 0%, rgba(243,146,55,0.13) 0%, transparent 65%), " +
                    "linear-gradient(170deg, #F0E9DE 0%, #F8F4EE 45%, #ECEEF6 100%)",
            }}
        >
            <Navbar />

            {/* ── Header ── */}
            <section className="max-w-4xl mx-auto px-6 pt-10 pb-12 text-center">
                <p className="text-sm uppercase tracking-[0.25em] text-[#F39237] font-semibold mb-3">
                    संस्कृत शिक्षा
                </p>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                    Learn Sanskrit
                </h1>
                <p className="mt-4 text-base text-[#1B2654]/60 font-light max-w-xl mx-auto">
                    Four guided modules — video lessons, study notes, and practice quizzes — to
                    help you start speaking Sanskrit confidently.
                </p>
                <div className="mt-8 flex items-center justify-center gap-4">
                    <div className="h-px w-24 bg-[#E8E1D8]" />
                    <div className="h-2 w-2 rounded-full bg-[#F39237]" />
                    <div className="h-px w-24 bg-[#E8E1D8]" />
                </div>
            </section>

            {/* ── Module Cards ── */}
            <section className="max-w-3xl mx-auto px-6 pb-28 flex flex-col gap-6">
                {SANSKRIT_MODULES.map((mod, idx) => {
                    const prog = getProgress(mod.id);
                    const badge = BADGE[prog];
                    return (
                        <Link
                            key={mod.id}
                            to={`/sanskrit/module/${mod.id}`}
                            className="group bg-white border border-[#EDE8E0] rounded-3xl p-7 md:p-9
                         shadow-[0_8px_32px_-4px_rgba(27,38,84,0.08)]
                         hover:shadow-[0_20px_48px_-8px_rgba(27,38,84,0.16),0_4px_16px_rgba(243,146,55,0.12)]
                         transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="flex gap-5 items-start">
                                {/* Day circle */}
                                <div className="shrink-0 w-12 h-12 rounded-2xl bg-[#FFF4E8] border border-[#F39237]/25
                                flex flex-col items-center justify-center text-center">
                                    <span className="text-[9px] uppercase tracking-widest text-[#F39237] font-bold leading-none">Day</span>
                                    <span className="text-lg font-bold text-[#F39237] leading-tight">{mod.day}</span>
                                </div>

                                {/* Main content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between gap-4 mb-1">
                                        <h2 className="text-xl font-bold text-[#1B2654] group-hover:text-[#F39237] transition-colors leading-snug">
                                            {mod.title}
                                        </h2>
                                        <span className="shrink-0 text-xs font-semibold px-3 py-1 rounded-full mt-0.5"
                                            style={{ color: badge.color, background: badge.bg }}>
                                            {badge.label}
                                        </span>
                                    </div>

                                    <p className="text-sm text-[#1B2654]/60 leading-relaxed mb-3">{mod.description}</p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-1.5 mb-4">
                                        {mod.tags.map((t) => (
                                            <span key={t} className="text-[10px] uppercase tracking-wider font-semibold
                                               text-[#1B2654]/50 bg-[#F0EBE3] px-2.5 py-1 rounded-full">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Footer row */}
                                    <div className="flex items-center justify-between pt-4 border-t border-[#EDE8E0]">
                                        <div className="flex gap-4 text-xs text-[#1B2654]/40">
                                            <span>🎥 Video</span>
                                            {mod.notes && <span>📝 Notes</span>}
                                            {mod.quiz && <span>✏️ {mod.quiz.length}-Q Quiz</span>}
                                        </div>
                                        <span className="text-sm font-semibold text-[#F39237] flex items-center gap-1">
                                            {prog === "completed" ? "Review" : prog === "started" ? "Continue" : "Start"}
                                            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </section>

            <Footer />
        </div>
    );
}
