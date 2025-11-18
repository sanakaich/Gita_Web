import React from "react";
import { useNavigate } from "react-router-dom";
const SanskritSection = () => {
  const navigate = useNavigate();
  return (
    <div className="relative z-30 flex items-center justify-center min-h-screen p-6">
      {/* Card (image background) */}
      <div
        className="relative w-full max-w-7xl h-[80vh] rounded-2xl shadow-2xl overflow-hidden"
        style={{
          backgroundImage: "url('/Image3.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          // Initial state for server-side rendering matches the start of animation
          boxShadow: "0 0 10px 1px rgba(255, 215, 0, 0.6)", 
          animation: "cardGlow 3s ease-in-out infinite alternate",
        }}
      >
        {/* Dark overlay on the image */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content container */}
        <div className="absolute inset-0 z-10 flex items-stretch">
          {/* Left column */}
          <div className="w-full md:w-7/12 px-8 py-12 flex items-center">
            <div className="pl-6 border-l-4 border-gray-300">
              <p className="text-white text-2xl md:text-4xl lg:text-5xl font-semibold uppercase italic">
                Learn संस्कृत
              </p>
            </div>
          </div>

          {/* Right column (pink panel) */}
          <div className="w-full md:w-5/12 p-6">
            <div className="h-full rounded-tr-2xl rounded-br-2xl bg-black/50 backdrop-blur-sm flex flex-col justify-between overflow-hidden">
              <div className="p-8 overflow-auto">
                <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed">
                  Sanskrit isn’t just an old language in a textbook. It sharpens the mind in ways most modern subjects don’t. Once you start learning it, you notice better memory, sharper focus, and clearer thinking. Its structure is almost mathematical, and working with it trains your brain to understand patterns with more discipline and ease.
                </p>
              </div>

              {/* Button area */}
              <div className="p-6">
                <div className="flex justify-end">
                  <button
                    className="opacity-90 bg-white hover:bg-pink-900 hover:text-white text-sm font-bold py-4 px-8 rounded inline-flex items-center transition-colors"
                    onClick={() => navigate("/sanskrit/1")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>LEARN MORE</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Local styles for the thin golden glow animation */}
      <style jsx>{`
        @keyframes cardGlow {
          0% {
            /* Thin spread (1px), lower opacity */
            box-shadow: 0 0 10px 1px rgba(255, 215, 0, 0.5); 
          }
          50% {
            /* Slightly wider spread (3px), higher opacity - creates the pulse */
            box-shadow: 0 0 15px 3px rgba(255, 215, 0, 0.8); 
          }
          100% {
            box-shadow: 0 0 10px 1px rgba(255, 215, 0, 0.5);
          }
        }
      `}</style>
    </div>
  );
};

export default SanskritSection;