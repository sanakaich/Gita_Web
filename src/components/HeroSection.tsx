import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-[700px] overflow-hidden">

      {/* ================= Background Image ================= */}
      <img
        src="/hero-gita.png"   // put image inside /public
        alt="Krishna driving chariot with Arjuna"
        className="absolute inset-0 w-full h-full object-cover object-right"
      />

      {/* ================= Left soft paper overlay ================= */}
      {/* makes text readable like your design */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-[#FBF8F3]/95
          via-[#FBF8F3]/20
          to-transparent
        "
      />

      {/* ================= Bottom cloud fade ================= */}
      <div
        className="
          absolute bottom-0 left-0 w-full h-40
          bg-gradient-to-t
          from-[#FBF8F3]
          to-transparent
        "
      />

      {/* ================= Content ================= */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-12">

        <div className="max-w-xl space-y-8">

          {/* Heading */}
          <h1 className="text-6xl font-semibold leading-tight text-[#1B2654]">
            Discover the Wisdom
            <br />
            of the Gita
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-700 leading-relaxed">
            Explore Gita shloks, learn Sanskrit, enjoy ancient<br />
            mythological stories, and meditate for inner peace.
          </p>

          {/* CTA */}
          <button
            onClick={() => navigate("/gita")}
            className="
              px-8 py-4
              rounded-lg
              bg-[#F39237]
              text-white
              text-lg
              font-medium
              hover:opacity-90
              transition
              shadow-md
            "
          >
            Get Started
          </button>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
