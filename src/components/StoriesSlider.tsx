import React, { useState } from "react";

// Define the structure for a story
interface Story {
  id: number;
  year: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
}

// Data for the stories (You can easily add more here)
const storiesData: Story[] = [
  {
    id: 1,
    year: "Ancient",
    tag: "Dashavatar",
    title: "Narasimha\nAvatar",
    subtitle: "The Protector",
    description:
      "Read about the fourth avatar of Vishnu, who appeared in the form of part-lion and part-man to destroy evil and end religious persecution and calamity on Earth.",
    imageUrl: "/images/Narsimha.png", // Replace with your image path
  },
  {
  id: 2,
  year: "Ancient",
  tag: "Mahabharata",
  title: "Krishna\nAvatar",
  subtitle: "The Divine Guide",
  description:
    "Witness the glory of the eighth avatar of Vishnu. Amidst the chaos of war, he stands as the ultimate strategist and spiritual master, revealing the timeless wisdom of the Bhagavad Gita to the world.",
  imageUrl: "/images/Krishna.png",
},
  {
  id: 3, // You can change this ID based on your list order
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

  // Logic to handle 'Next' button click
  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setTimeout(() => {
      setActiveStoryIndex((prev) => (prev + 1) % storiesData.length);
      setIsAnimating(false);
    }, 600); // Matches the CSS transition duration
  };

  // Logic to handle 'Previous' button click
  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveStoryIndex((prev) => (prev - 1 + storiesData.length) % storiesData.length);
      setIsAnimating(false);
    }, 600);
  };

  const activeStory = storiesData[activeStoryIndex];

  return (
    <section 
      className="relative z-30 flex items-center justify-center p-6 my-10 max-w-7xl mx-auto
                 rounded-2xl border border-yellow-500/50 bg-transparent shadow-2xl overflow-hidden"
      style={{
        boxShadow: "0 0 10px 1px rgba(255, 215, 0, 0.6)", 
        animation: "cardGlow 3s ease-in-out infinite alternate",
      }}
    >
      
      {/* Content container */}
      <div className="relative w-full h-[600px] flex flex-col md:flex-row items-stretch rounded-xl overflow-hidden">
        
        {/* Left Side: Text Content */}
        <div className="w-full md:w-5/12 p-8 flex flex-col justify-center text-white bg-black/50 md:bg-transparent">
          
          {/* Animated Content Container */}
          <div className={`transition-all duration-500 ease-out ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
            
            {/* Timeline / Tag */}
            <h6 className="text-sm tracking-[1.5px] text-white/70 mb-2 font-light">
              {activeStory.year} &nbsp; — &nbsp; {activeStory.tag}
            </h6>

            {/* Headline Title */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-yellow-300 whitespace-pre-line">
              {activeStory.title}
            </h1>

            {/* Subtitle */}
            <h3 className="text-xl md:text-2xl font-light tracking-[1.5px] mb-6 text-yellow-500">
              {activeStory.subtitle}
            </h3>

            {/* Description Paragraph */}
            <p className="text-base md:text-lg leading-relaxed text-gray-300 max-w-md mb-8">
              {activeStory.description}
            </p>

            {/* CTA Button */}
            <a href={`/stories/${activeStory.id}`} 
               className="group relative inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-black transition-all duration-200 bg-yellow-500 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-800 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                    Read Story
                    <svg 
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                </span>
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
        </div>

        {/* Right Side: Image Slider / Visual */}
        <div className="relative w-full md:w-7/12 rounded-r-xl overflow-hidden">
          
          {/* Background Image with Transition */}
          <div 
            className={`w-full h-full bg-cover bg-center transition-opacity duration-700 ease-in-out ${isAnimating ? 'opacity-50 scale-105' : 'opacity-100 scale-100'}`}
            style={{ backgroundImage: `url('${activeStory.imageUrl}')` }}
          >
            {/* Overlay gradient for text readability (if content overlaps) */}
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* Navigation Controls */}
          <div className="absolute inset-0 flex items-center justify-between p-4">
            {/* Previous Button */}
            <button 
                onClick={handlePrev}
                className="p-3 bg-black/40 rounded-full text-white hover:bg-black/60 transition-colors focus:outline-none"
                aria-label="Previous Story"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            {/* Next Button */}
            <button 
                onClick={handleNext}
                className="p-3 bg-black/40 rounded-full text-white hover:bg-black/60 transition-colors focus:outline-none"
                aria-label="Next Story"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
          </div>
          
          {/* Current Story Number */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/50 rounded-full text-white text-sm font-bold">
            {activeStoryIndex + 1} / {storiesData.length}
          </div>

        </div>

      </div>

      {/* Custom Animations Styles */}
      <style jsx>{`
        @keyframes cardGlow {
          0% {
            box-shadow: 0 0 10px 1px rgba(255, 215, 0, 0.3); 
          }
          50% {
            box-shadow: 0 0 15px 3px rgba(255, 215, 0, 0.6); 
          }
          100% {
            box-shadow: 0 0 10px 1px rgba(255, 215, 0, 0.3);
          }
        }
      `}</style>
    </section>
  );
};

export default StoriesSlider;