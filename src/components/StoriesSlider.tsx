// StoriesSlider.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Story {
  id: number;
  slug: string;
  year: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
}

const storiesData: Story[] = [
  {
    id: 1,
    slug: "narasimha",
    year: "Ancient",
    tag: "Dashavatar",
    title: "Narasimha\nAvatar",
    subtitle: "The Protector",
    description:
      "Read about the fourth avatar of Vishnu, who appeared in the form of part-lion and part-man to destroy evil and end religious persecution and calamity on Earth.",
    imageUrl: "/images/Narsimha.png",
  },
  {
    id: 2,
    slug: "krishna",
    year: "Ancient",
    tag: "Mahabharata",
    title: "Krishna\nAvatar",
    subtitle: "The Divine Guide",
    description:
      "Witness the glory of the eighth avatar of Vishnu. Amidst the chaos of war, he stands as the ultimate strategist and spiritual master, revealing the timeless wisdom of the Bhagavad Gita to the world.",
    imageUrl: "/images/Krishna.png",
  },
  {
    id: 3,
    slug: "varaha",
    year: "Ancient",
    tag: "Dashavatar",
    title: "Varaha\nAvatar",
    subtitle: "Savior of the Earth",
    description:
      "Witness the third avatar of Vishnu, who took the form of a giant boar to rescue the Earth goddess Bhudevi from the cosmic ocean after she was hidden by the demon Hiranyaksha.",
    imageUrl: "/images/Varah.png",
  },
];

const StoriesSlider: React.FC = () => {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  const goToStory = (slug: string) => {
    const path = `/stories/${slug}`;
    // quick debug — remove if not needed
    // console.log("Navigating to:", path);
    navigate(path);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveStoryIndex((s) => (s + 1) % storiesData.length);
      setIsAnimating(false);
    }, 400);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveStoryIndex((s) => (s - 1 + storiesData.length) % storiesData.length);
      setIsAnimating(false);
    }, 400);
  };

  const activeStory = storiesData[activeStoryIndex];

  return (
    <section
      className="relative z-30 flex items-center justify-center p-6 my-10 max-w-7xl mx-auto rounded-2xl border border-yellow-500/50 bg-transparent shadow-2xl overflow-hidden"
      style={{
        boxShadow: "0 0 10px 1px rgba(255, 215, 0, 0.6)",
      }}
    >
      <div className="w-full flex flex-col md:flex-row rounded-xl overflow-hidden">
        {/* LEFT: content panel */}
        <div className="w-full md:w-5/12 p-8 flex flex-col justify-center bg-black/50 md:bg-transparent text-white">
          <div className={`${isAnimating ? "opacity-60 translate-y-2" : "opacity-100 translate-y-0"} transition-all duration-400`}>
            <h6 className="text-sm tracking-[1.5px] text-white/70 mb-2 font-light">
              {activeStory.year} — {activeStory.tag}
            </h6>

            <button
              onClick={() => goToStory(activeStory.slug)}
              className="text-left w-full"
              aria-label={`Open ${activeStory.slug} story`}
              style={{ background: "transparent", border: "none", padding: 0 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-yellow-300 whitespace-pre-line">
                {activeStory.title}
              </h1>
            </button>

            <h3 className="text-xl md:text-2xl font-light tracking-[1.5px] mb-4 text-yellow-500">
              {activeStory.subtitle}
            </h3>

            <p className="text-base md:text-lg leading-relaxed text-gray-300 max-w-md mb-6">
              {activeStory.description}
            </p>

            <div className="flex gap-3 items-center">
              <button
                onClick={() => goToStory(activeStory.slug)}
                className="group relative inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-black bg-yellow-500 rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-800"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Read Story
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>

              <div className="ml-2 flex gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous story"
                  className="p-2 bg-black/40 rounded-full text-white hover:bg-black/60 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={handleNext}
                  aria-label="Next story"
                  className="p-2 bg-black/40 rounded-full text-white hover:bg-black/60 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* thumbnail row for direct selection */}
          <div className="mt-8 flex gap-3 items-center">
            {storiesData.map((s, i) => (
              <button
                key={s.slug}
                onClick={() => setActiveStoryIndex(i)}
                className={`w-20 h-14 rounded overflow-hidden border-2 ${i === activeStoryIndex ? "border-yellow-400" : "border-transparent"} focus:outline-none`}
                aria-label={`Select ${s.slug}`}
              >
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${s.imageUrl}')` }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT: large clickable visual */}
        <div className="relative w-full md:w-7/12 h-[480px] md:h-auto overflow-hidden rounded-l-none md:rounded-r-xl">
          <div
            role="button"
            tabIndex={0}
            onClick={() => goToStory(activeStory.slug)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") goToStory(activeStory.slug);
            }}
            className={`w-full h-full bg-cover bg-center cursor-pointer transition-transform duration-700 ease-in-out ${isAnimating ? "scale-105 opacity-80" : "scale-100 opacity-100"}`}
            style={{ backgroundImage: `url('${activeStory.imageUrl}')` }}
            aria-label={`Open ${activeStory.slug} story`}
          >
            {/* overlay for legibility */}
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* index badge */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/50 rounded-full text-white text-sm font-bold">
            {activeStoryIndex + 1} / {storiesData.length}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoriesSlider;
