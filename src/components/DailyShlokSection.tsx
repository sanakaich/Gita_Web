import { useMemo } from "react";
import { Link } from "react-router-dom";

const SHLOKS = [
    {
        sanskrit: "उद्धरेदात्मनाऽत्मानं नात्मानमवसादयेत् ।",
        meaning:
            "One must elevate, not degrade, oneself by one's own mind. The mind alone is both the friend and the enemy of the self.",
    },
];

export default function DailyShlokSection() {
    const verse = useMemo(() => {
        const day = Math.floor(Date.now() / 86400000);
        return SHLOKS[day % SHLOKS.length];
    }, []);

    return (
        <section
            className="
        relative
        w-screen
        left-1/2
        -translate-x-1/2
        -mt-32
        overflow-hidden
        min-h-[520px]
        pb-40
      "
        >
            {/* CLOUD BACKGROUND */}
            <img
                src="/clouds.png"
                alt=""
                className="
          absolute
          top-0
          left-0
          w-full
          h-[650px]
          object-cover
          pointer-events-none
        "
            />

            {/* BOTTOM FADE */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#FBF8F3]" />

            {/* CONTENT WRAPPER */}
            <div className="relative z-10 max-w-3xl mx-auto text-center pt-24 pb-20 px-6" style={{ marginTop: "37px" }}>

                {/* TOP LEFT BORDER */}
                <img
                    src="/shlok-border.png"
                    alt=""
                    className="absolute -top-0 -left-20 w-44 opacity-90 pointer-events-none"
                />

                {/* BOTTOM RIGHT BORDER */}
                <img
                    src="/shlok-border.png"
                    alt=""
                    className="absolute -bottom-1 -right-20 w-44 rotate-180 opacity-100 pointer-events-none"
                />

                {/* Title */}
                <h2 className="text-4xl font-shlokTitle font-semibold tracking-wide text-[#1B2654] mb-6">
                    Today’s Shlok
                </h2>

                {/* Sanskrit */}
                <p
                    className="
            text-4xl md:text-5xl
            font-sanskrit
            leading-relaxed
            tracking-wide
            text-[#2a2a2a]
            mb-8
          "
                >
                    {verse.sanskrit}
                </p>

                {/* Meaning */}
                <p
                    className="
            text-lg md:text-xl
            font-meaning
            text-gray-700
            leading-relaxed
            max-w-2xl
            mx-auto
            mb-8
          "
                >
                    {verse.meaning}
                </p>

                {/* Link */}
                <Link
                    to="/gita"
                    className="
            inline-block
            text-[#F39237]
            text-lg
            font-medium
            hover:underline
          "
                >
                    Read Full Shlok →
                </Link>

            </div>
        </section>
    );
}
