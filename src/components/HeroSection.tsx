import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  const navigate = useNavigate();

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.15 },
    }),
  };

  return (
    <section className="relative w-full h-[700px] overflow-hidden">

      {/* Background Image — subtle zoom-in on load */}
      <motion.img
        src="/hero-gita.png"
        alt="Krishna driving chariot with Arjuna"
        className="absolute inset-0 w-full h-full object-cover object-right"
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      />

      {/* Left paper overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FBF8F3]/95 via-[#FBF8F3]/20 to-transparent" />

      {/* Bottom cloud fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#FBF8F3] to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-12">
        <div className="max-w-xl space-y-8">

          {/* Heading */}
          <motion.h1
            className="text-6xl font-semibold leading-tight text-[#1B2654]"
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            Discover the Wisdom
            <br />
            of the Gita
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg text-gray-700 leading-relaxed"
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            Explore Gita shloks, learn Sanskrit, enjoy ancient<br />
            mythological stories, and meditate for inner peace.
          </motion.p>

          {/* CTA */}
          <motion.button
            onClick={() => navigate("/gita/chapter/1")}
            className="px-8 py-4 rounded-lg bg-[#F39237] text-white text-lg font-medium shadow-md"
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            whileHover={{
              scale: 1.04,
              boxShadow: "0 8px 32px rgba(243,146,55,0.50)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
