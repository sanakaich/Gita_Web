import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CHAPTER_DATA, CHAPTER_META } from "@/data/chapterRegistry";

export default function GitaChapterPage() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const chapterId = id ?? "1";
    const verses = CHAPTER_DATA[chapterId];
    const meta = CHAPTER_META[chapterId];

    /* Text-to-speech */
    const speak = (text: string) => {
        if (!("speechSynthesis" in window)) return;
        const u = new SpeechSynthesisUtterance(text);
        u.lang = "hi-IN";
        u.rate = 0.9;
        u.pitch = 1;
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(u);
    };

    /* Unknown chapter */
    if (!verses || !meta) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-[#1B2654]"
                style={{ background: "linear-gradient(170deg,#F0E9DE 0%,#F8F4EE 45%,#ECEEF6 100%)" }}>
                <Navbar />
                <div className="text-center mt-32">
                    <p className="text-5xl mb-4">🕉️</p>
                    <h1 className="text-3xl font-bold mb-2">Chapter {chapterId} not available yet</h1>
                    <p className="text-[#1B2654]/60 mb-8">This chapter will be added soon. Please check back later.</p>
                    <button
                        onClick={() => navigate("/gita/chapter/1")}
                        className="px-6 py-3 rounded-full bg-[#F39237] text-white font-semibold hover:bg-[#e07d1a] transition-all"
                    >
                        ← Back to Chapter 1
                    </button>
                </div>
                <Footer />
            </div>
        );
    }

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

            {/* ── Page Header ── */}
            <section className="max-w-6xl mx-auto px-6 md:px-12 pb-12 text-center" style={{ paddingTop: 40 }}>
                <p className="text-sm uppercase tracking-[0.25em] text-[#F39237] font-semibold mb-3">
                    Bhagavad Gita
                </p>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                    {meta.title}
                </h1>
                <p className="mt-3 text-base text-[#1B2654]/60 font-light">{meta.subtitle}</p>
                <p className="mt-2 text-xs text-[#1B2654]/40 uppercase tracking-widest">
                    {verses.length} verses
                </p>
                <div className="mt-8 flex items-center justify-center gap-4">
                    <div className="h-px w-24 bg-[#E8E1D8]" />
                    <div className="h-2 w-2 rounded-full bg-[#F39237]" />
                    <div className="h-px w-24 bg-[#E8E1D8]" />
                </div>
            </section>

            {/* ── Verse Cards ── */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 pb-36 grid grid-cols-1 md:grid-cols-2 gap-10">
                {verses.map((verse) => (
                    <article
                        key={verse.verseId}
                        id={`verse-${verse.verseId}`}
                        className="relative bg-white border border-[#EDE8E0] rounded-3xl p-10 md:p-12
                       shadow-[0_8px_32px_-4px_rgba(27,38,84,0.10),0_2px_8px_rgba(27,38,84,0.06)]
                       hover:shadow-[0_20px_56px_-8px_rgba(27,38,84,0.18),0_4px_16px_rgba(243,146,55,0.15)]
                       transition-all duration-300 hover:-translate-y-2"
                    >
                        {/* Verse badge */}
                        <div className="inline-flex items-center gap-2 bg-[#FFF4E8] border border-[#F39237]/30 text-[#F39237]
                            text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6
                            hover:bg-[#F39237] hover:text-white hover:border-[#F39237] transition-all duration-200 cursor-default">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#F39237] inline-block" />
                            Verse {verse.verseId}
                        </div>

                        {/* Sanskrit */}
                        <h2
                            className="text-xl md:text-2xl font-semibold leading-[1.8] text-[#1B2654] mb-5"
                            style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
                        >
                            {verse.sanskrit}
                        </h2>

                        {/* TTS Button */}
                        <button
                            onClick={() => speak(verse.sanskrit)}
                            className="inline-flex items-center gap-2.5 text-sm font-semibold px-6 py-3 rounded-full
                         bg-[#F39237] text-white
                         shadow-[0_4px_16px_rgba(243,146,55,0.40)]
                         hover:bg-[#e07d1a]
                         hover:shadow-[0_6px_24px_rgba(243,146,55,0.55)]
                         hover:scale-105
                         active:scale-95 transition-all duration-200"
                        >
                            <span className="text-base">🔊</span>
                            <span>Listen in Sanskrit</span>
                        </button>

                        {/* Divider */}
                        <div className="my-7 h-px bg-gradient-to-r from-transparent via-[#E8E1D8] to-transparent" />

                        {/* Translation */}
                        <div className="mb-5">
                            <p className="text-[10px] uppercase tracking-widest text-[#1B2654]/40 font-semibold mb-2">
                                Translation
                            </p>
                            <p className="text-[#1B2654]/90 text-base leading-relaxed">{verse.translation}</p>
                        </div>

                        {/* Inner Meaning */}
                        <div className="flex items-start gap-3 bg-[#FBF8F3] border border-[#EDE8E0] rounded-2xl px-5 py-4
                           hover:border-[#F39237]/50 hover:bg-[#FFF4E8] hover:-translate-y-0.5
                           transition-all duration-200">
                            <span className="mt-0.5 text-[#F39237] text-lg">✦</span>
                            <div>
                                <p className="text-[10px] uppercase tracking-widest text-[#1B2654]/40 font-semibold mb-1">
                                    Inner Meaning
                                </p>
                                <p className="text-[#1B2654]/70 leading-relaxed">{verse.innerMeaning}</p>
                            </div>
                        </div>
                    </article>
                ))}
            </section>

            <Footer />

            {/* ── Chapter Navigation Buttons ── */}
            <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3">
                {meta.next && (
                    <button
                        onClick={() => navigate(`/gita/chapter/${meta.next}`)}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full
                       bg-[#F39237] text-white text-sm font-semibold
                       shadow-[0_6px_24px_rgba(243,146,55,0.50)]
                       hover:bg-[#e07d1a] hover:shadow-[0_8px_30px_rgba(243,146,55,0.65)]
                       hover:scale-105 active:scale-95 transition-all duration-200"
                    >
                        Chapter {meta.next} <span className="text-base">→</span>
                    </button>
                )}
                {meta.prev && (
                    <button
                        onClick={() => navigate(`/gita/chapter/${meta.prev}`)}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full
                       bg-white border border-[#F39237] text-[#F39237] text-sm font-semibold
                       shadow-[0_4px_16px_rgba(243,146,55,0.20)]
                       hover:bg-[#FFF4E8] hover:shadow-[0_6px_24px_rgba(243,146,55,0.35)]
                       hover:scale-105 active:scale-95 transition-all duration-200"
                    >
                        <span className="text-base">←</span> Chapter {meta.prev}
                    </button>
                )}
            </div>
        </div>
    );
}
