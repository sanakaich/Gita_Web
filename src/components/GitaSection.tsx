import React from "react";
import { useNavigate } from "react-router-dom";

const GitaSection = () => {
    const navigate = useNavigate();

  return (
    <section className="relative w-full py-24 overflow-hidden flex items-center justify-center">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(white 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-700/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative group perspective-1000">
          <div className="absolute -inset-4 rounded-t-[12rem] rounded-b-3xl border border-yellow-500/30 scale-95 group-hover:scale-100 transition-transform duration-1000 ease-manuscript opacity-50" />

          <div className="relative w-full h-[600px] rounded-t-[12rem] rounded-b-3xl overflow-hidden shadow-[0_0_40px_rgba(255,215,0,0.2)] group-hover:shadow-[0_0_60px_rgba(255,215,0,0.4)] transition-shadow duration-700">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-700" />

            {/* use forward slashes in path */}
            <img
              src="/images/Krishna Chariot.png"
              alt="Krishna and Arjuna on the Chariot"
              className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out"
            />

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-1 rounded-full">
              <span className="text-[10px] md:text-xs tracking-[0.4em] text-yellow-100 uppercase font-serif">
                Mahabharata War
              </span>
            </div>
          </div>
        </div>

        <div className="text-center lg:text-left space-y-8">
          <div className="space-y-2">
            <h3 className="text-yellow-500 font-heading text-xl italic tracking-wide">
              — The Eternal Wisdom
            </h3>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-b from-yellow-100 via-yellow-300 to-yellow-600 leading-tight drop-shadow-sm">
              Deep Dive into <br /> the Mythological <br /> World of Gita
            </h2>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
            Discover the conversation that changed the course of history. Amidst
            the chaos of war, find the silence of wisdom. Explore the shlokas
            that decode the universe, duty, and the self.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            {/* CLEAN: single interactive element (button) */}
            <button
              aria-label="Start Journey to Gita Chapter 1"
              onClick={() => navigate("/gita/1")}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-heading font-bold text-black bg-primary rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black" />
              <span className="relative flex items-center gap-2">
                Start Journey
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitaSection;
