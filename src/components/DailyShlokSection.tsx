import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import rawChapter1 from "@/data/chapter1.json";

type Verse = {
    "Serial Number": string;
    "Sanskrit (Devanagari)": string;
    "English Translation": string;
    "Inner Meaning": string;
};

const chapter1 = rawChapter1 as Verse[];

export default function DailyShlokSection() {
    const navigate = useNavigate();

    // Pick a day-stable random verse from chapter1.json
    const verse = useMemo(() => {
        const day = Math.floor(Date.now() / 86400000);
        return chapter1[day % chapter1.length];
    }, []);

    const handleReadFull = () => {
        const id = verse["Serial Number"];
        navigate(`/gita/chapter/1#verse-${id}`);
        setTimeout(() => {
            document.getElementById(`verse-${id}`)?.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }, 300);
    };

    return (
        <section
            className="relative w-screen left-1/2 -translate-x-1/2 -mt-52 overflow-hidden min-h-[520px]"
            style={{ paddingBottom: 150 }}
        >
            {/* Cloud background — overlaps into hero section bottom */}
            <img
                src="/clouds.png"
                alt=""
                className="absolute top-0 left-0 w-full h-[800px] object-cover pointer-events-none"
            />

            {/* Bottom fade — blends clouds into features section */}
            <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-b from-transparent to-[#FBF8F3]" />

            {/* Content */}
            <div
                className="relative z-10 max-w-3xl mx-auto text-center pt-32 pb-20 px-6"
                style={{ marginTop: "90px" }}
            >
                {/* Corner borders */}
                <img
                    src="/shlok-border.png"
                    alt=""
                    className="absolute -top-0 -left-20 w-44 opacity-90 pointer-events-none"
                />
                <img
                    src="/shlok-border.png"
                    alt=""
                    className="absolute -bottom-1 -right-20 w-44 rotate-180 opacity-100 pointer-events-none"
                />

                {/* Verse label */}
                <p className="text-xs uppercase tracking-[0.3em] text-[#F39237] font-semibold mb-2">
                    ✦ Verse {verse["Serial Number"]} ✦
                </p>

                {/* Title */}
                <h2 className="text-4xl font-shlokTitle font-semibold tracking-wide text-[#1B2654] mb-6">
                    Today's Shlok
                </h2>

                {/* Sanskrit */}
                <p
                    className="text-3xl md:text-4xl leading-relaxed tracking-wide text-[#2a2a2a] mb-6"
                    style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
                >
                    {verse["Sanskrit (Devanagari)"]}
                </p>

                {/* Divider */}
                <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="h-px w-16 bg-[#F39237]/40" />
                    <span className="text-[#F39237] text-xs">✦</span>
                    <div className="h-px w-16 bg-[#F39237]/40" />
                </div>


                {/* Inner meaning */}
                <p className="text-sm text-[#1B2654]/60 leading-relaxed max-w-xl mx-auto mb-8">
                    <span className="font-semibold text-[#F39237]">Inner Meaning: </span>
                    {verse["Inner Meaning"]}
                </p>

                {/* CTA */}
                <button
                    onClick={handleReadFull}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                     bg-[#F39237] text-white text-sm font-semibold
                     shadow-[0_4px_16px_rgba(243,146,55,0.40)]
                     hover:bg-[#e07d1a] hover:shadow-[0_6px_24px_rgba(243,146,55,0.60)]
                     hover:scale-105 active:scale-95 transition-all duration-200"
                >
                    Read Full Shlok <span>→</span>
                </button>
            </div>
        </section>
    );
}
