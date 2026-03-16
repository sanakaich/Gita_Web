import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { STORIES } from "@/data/stories";

const CHAR_EMOJI: Record<string, string> = { krishna: "🔵", rama: "🟡", hanuman: "🟠" };
const CHAR_BG:   Record<string, string> = {
  krishna: "linear-gradient(135deg,#EEF2FF 0%,#E0E7FF 100%)",
  rama:    "linear-gradient(135deg,#FFFBEB 0%,#FEF3C7 100%)",
  hanuman: "linear-gradient(135deg,#FFF7ED 0%,#FFEDD5 100%)",
};

export default function StoriesLanding() {
  return (
    <div className="min-h-screen text-[#1B2654]"
      style={{ background: "radial-gradient(ellipse 70% 35% at 50% 0%, rgba(243,146,55,0.13) 0%, transparent 65%), linear-gradient(170deg,#F0E9DE 0%,#F8F4EE 45%,#ECEEF6 100%)" }}>
      <Navbar />

      {/* ── Hero header ── */}
      <section className="max-w-4xl mx-auto px-6 pt-12 pb-14 text-center">
        <motion.p
          className="text-sm uppercase tracking-[0.28em] text-[#F39237] font-bold mb-3"
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          पुराण कथाएँ
        </motion.p>
        <motion.h1
          className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-4"
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}>
          Mythological Stories
        </motion.h1>
        <motion.p
          className="text-base text-[#1B2654]/60 font-light max-w-lg mx-auto"
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          Ancient tales of gods, devotion, and dharma — read and listen in
          English, Hindi, or Sanskrit.
        </motion.p>
        <motion.div
          className="mt-8 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <div className="h-px w-24 bg-[#E8E1D8]" />
          <div className="h-2 w-2 rounded-full bg-[#F39237]" />
          <div className="h-px w-24 bg-[#E8E1D8]" />
        </motion.div>
      </section>

      {/* ── Story Cards ── */}
      <motion.section
        className="max-w-3xl mx-auto px-6 pb-32 flex flex-col gap-7"
        initial="hidden" animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.13 } } }}>
        {STORIES.map((story) => (
          <motion.div key={story.slug}
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } } }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}>
            <Link to={`/stories/${story.slug}`}
              className="group block bg-white border border-[#EDE8E0] rounded-3xl overflow-hidden
                         shadow-[0_8px_32px_-4px_rgba(27,38,84,0.08)]
                         hover:shadow-[0_24px_52px_-8px_rgba(27,38,84,0.16),0_4px_20px_rgba(243,146,55,0.12)]
                         transition-shadow duration-300">

              {/* Coloured header strip */}
              <div className="px-8 pt-7 pb-5 flex items-center gap-4"
                style={{ background: CHAR_BG[story.character] }}>
                <span className="text-4xl">{CHAR_EMOJI[story.character]}</span>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold mb-0.5"
                    style={{ color: story.accentColor }}>
                    {story.tags[0]}
                  </p>
                  <h2 className="text-xl font-bold text-[#1B2654] group-hover:text-[#F39237] transition-colors leading-snug">
                    {story.en.title}
                  </h2>
                  <p className="text-xs text-[#1B2654]/50 italic mt-0.5">{story.en.tagline}</p>
                </div>
              </div>

              {/* Body */}
              <div className="px-8 py-5">
                <p className="text-sm text-[#1B2654]/65 leading-relaxed mb-4">{story.en.excerpt}</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {story.tags.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-wider font-semibold
                                             text-[#1B2654]/50 bg-[#F0EBE3] px-2.5 py-1 rounded-full">{t}</span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#EDE8E0]">
                  <div className="flex gap-5 text-xs text-[#1B2654]/40">
                    <span>📖 Full Story</span>
                    <span>🌐 EN · हिन्दी · संस्कृत</span>
                    <span>🔊 Audio</span>
                  </div>
                  <span className="text-sm font-semibold text-[#F39237] flex items-center gap-1">
                    Read
                    <span className="group-hover:translate-x-1.5 transition-transform duration-200 inline-block">→</span>
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.section>

      <Footer />
    </div>
  );
}
