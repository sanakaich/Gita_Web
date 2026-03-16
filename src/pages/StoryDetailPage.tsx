import { useState, useRef, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { STORY_MAP, STORIES, type Lang } from "@/data/stories";

const LANG_LABELS: Record<Lang, string> = { en: "English", hi: "हिन्दी", sa: "संस्कृत" };
const LANG_TTS:   Record<Lang, string>  = { en: "en-IN",   hi: "hi-IN",  sa: "hi-IN" };

const CHAR_HERO: Record<string, string> = {
  krishna: "linear-gradient(135deg,#C7D2FE 0%,#E0E7FF 60%,#EEF2FF 100%)",
  rama:    "linear-gradient(135deg,#FDE68A 0%,#FEF3C7 60%,#FFFBEB 100%)",
  hanuman: "linear-gradient(135deg,#FDBA74 0%,#FFEDD5 60%,#FFF7ED 100%)",
};
const CHAR_EMOJI: Record<string, string> = { krishna: "🔵", rama: "🟡", hanuman: "🟠" };

export default function StoryDetailPage() {
  const { slug = "krishna" } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const story = STORY_MAP[slug];

  const [lang, setLang] = useState<Lang>("en");
  const [playing, setPlaying] = useState(false);
  const [paused, setPaused]   = useState(false);
  const uttRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => { stopTTS(); }, [lang, slug]);
  useEffect(() => { window.scrollTo(0, 0); return () => stopTTS(); }, [slug]);

  function buildFullText() {
    return story?.sections.map(s => s[lang]).join(". ") ?? "";
  }
  function startTTS() {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(buildFullText());
    u.lang  = LANG_TTS[lang];
    u.rate  = lang === "sa" ? 0.82 : 0.88;
    u.onend  = () => { setPlaying(false); setPaused(false); };
    u.onerror = () => { setPlaying(false); setPaused(false); };
    uttRef.current = u;
    window.speechSynthesis.speak(u);
    setPlaying(true); setPaused(false);
  }
  function pauseTTS()  { window.speechSynthesis.pause();  setPaused(true); }
  function resumeTTS() { window.speechSynthesis.resume(); setPaused(false); }
  function stopTTS()   { window.speechSynthesis.cancel(); setPlaying(false); setPaused(false); }

  const currentIdx = STORIES.findIndex(s => s.slug === slug);
  const prevStory  = currentIdx > 0                   ? STORIES[currentIdx - 1] : null;
  const nextStory  = currentIdx < STORIES.length - 1  ? STORIES[currentIdx + 1] : null;

  if (!story) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center"
        style={{ background: "linear-gradient(170deg,#F0E9DE 0%,#F8F4EE 100%)" }}>
        <Navbar />
        <div className="text-center mt-32">
          <p className="text-5xl mb-4">🕉️</p>
          <h1 className="text-2xl font-bold text-[#1B2654] mb-4">Story not found</h1>
          <Link to="/stories" className="text-[#F39237] underline">← All Stories</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const isDevanagari = lang !== "en";
  const devFont = { fontFamily: "'Noto Serif Devanagari', serif" };
  const meta = story[lang] as { title: string; tagline: string; excerpt: string };

  return (
    <div className="min-h-screen text-[#1B2654] bg-[#FAF7F2]">
      <Navbar />

      {/* ── Hero Banner ── */}
      <motion.div
        className="relative w-full overflow-hidden"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
        style={{ background: CHAR_HERO[story.character], minHeight: 220 }}>

        {/* Decorative large emoji watermark */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 text-[120px] opacity-20 select-none pointer-events-none">
          {CHAR_EMOJI[story.character]}
        </div>

        <div className="relative max-w-2xl mx-auto px-8 py-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs mb-5" style={{ color: `${story.accentColor}99` }}>
            <Link to="/stories" className="hover:underline font-medium" style={{ color: story.accentColor }}>
              ← All Stories
            </Link>
            <span>›</span>
            <span className="opacity-70">{story.tags[0]}</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {story.tags.map(t => (
              <span key={t}
                className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full"
                style={{ color: story.accentColor, background: `${story.accentColor}18`, border: `1px solid ${story.accentColor}30` }}>
                {t}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-[#1B2654] leading-tight mb-2"
            style={isDevanagari ? devFont : {}}>
            {meta.title}
          </h1>
          <p className="text-sm italic text-[#1B2654]/60">{meta.tagline}</p>
        </div>
      </motion.div>

      {/* ── Main Article ── */}
      <div className="max-w-2xl mx-auto px-4 md:px-8 pb-40">

        {/* ── Sticky Controls Bar ── */}
        <div className="sticky top-[65px] z-30 my-6 bg-white/90 backdrop-blur-md
                        border border-[#EDE8E0] rounded-2xl px-4 py-3
                        shadow-[0_4px_24px_-4px_rgba(27,38,84,0.10)]
                        flex flex-wrap items-center gap-3">

          {/* Language pills */}
          <div className="flex gap-1 bg-[#F0EBE3] rounded-xl p-1">
            {(["en", "hi", "sa"] as Lang[]).map(l => (
              <button key={l} onClick={() => setLang(l)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200
                  ${lang === l ? "bg-white text-[#1B2654] shadow-sm" : "text-[#1B2654]/50 hover:text-[#1B2654]"}`}>
                {LANG_LABELS[l]}
              </button>
            ))}
          </div>

          <div className="h-5 w-px bg-[#E8E1D8] hidden sm:block" />

          {/* TTS */}
          <div className="flex items-center gap-2 ml-auto">
            <AnimatePresence mode="wait">
              {!playing ? (
                <motion.button key="play"
                  initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                  onClick={startTTS}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-white text-xs font-semibold
                             hover:scale-105 active:scale-95 transition-all duration-200"
                  style={{ background: story.accentColor, boxShadow: `0 4px 14px ${story.accentColor}55` }}>
                  🔊 Listen · {LANG_LABELS[lang]}
                </motion.button>
              ) : (
                <motion.div key="controls" className="flex items-center gap-1.5"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <button onClick={paused ? resumeTTS : pauseTTS}
                    className="px-3 py-2 rounded-xl text-white text-xs font-semibold transition-all duration-200"
                    style={{ background: story.accentColor }}>
                    {paused ? "▶ Resume" : "⏸ Pause"}
                  </button>
                  <button onClick={stopTTS}
                    className="px-3 py-2 rounded-xl border text-xs font-semibold hover:bg-[#FFF4E8] transition-all duration-200"
                    style={{ borderColor: story.accentColor, color: story.accentColor }}>
                    ■ Stop
                  </button>
                  <span className="text-[10px] text-[#1B2654]/40 animate-pulse">
                    {paused ? "Paused" : "Playing…"}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ── Story Content ── */}
        <motion.div className="flex flex-col gap-5"
          key={lang}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}>

          {story.sections.map((section, i) => {
            const text = section[lang];

            if (section.type === "heading") {
              return (
                <div key={i} className="pt-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-px flex-1 bg-[#EDE8E0]" />
                    <span className="text-[#F39237] text-xs">✦</span>
                    <div className="h-px flex-1 bg-[#EDE8E0]" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-[#1B2654]"
                    style={{ ...(isDevanagari ? devFont : {}), borderLeftColor: story.accentColor }}>
                    {text}
                  </h2>
                </div>
              );
            }

            if (section.type === "quote") {
              return (
                <div key={i}
                  className="relative pl-6 py-5 pr-5 rounded-2xl my-2"
                  style={{ background: `${story.accentColor}0D`, borderLeft: `4px solid ${story.accentColor}` }}>
                  <span className="absolute -top-3 left-4 text-3xl leading-none" style={{ color: story.accentColor }}>
                    "
                  </span>
                  <p className="text-base font-semibold leading-relaxed"
                    style={{ color: story.accentColor, ...(isDevanagari ? devFont : {}) }}>
                    {text}
                  </p>
                </div>
              );
            }

            return (
              <p key={i}
                className="text-[#1B2654]/80 leading-[2] text-base"
                style={isDevanagari ? devFont : {}}>
                {text}
              </p>
            );
          })}
        </motion.div>

        {/* ── Footer nav ── */}
        <div className="mt-14 pt-8 border-t border-[#EDE8E0] flex items-center justify-between gap-4">
          {prevStory ? (
            <button onClick={() => navigate(`/stories/${prevStory.slug}`)}
              className="flex items-center gap-2 text-sm font-semibold text-[#1B2654]/60 hover:text-[#F39237] transition-colors">
              ← {prevStory.en.title.split(" ").slice(0, 4).join(" ")}…
            </button>
          ) : <div />}
          <Link to="/stories" className="text-xs text-[#F39237] hover:underline font-medium">
            All Stories
          </Link>
          {nextStory ? (
            <button onClick={() => navigate(`/stories/${nextStory.slug}`)}
              className="flex items-center gap-2 text-sm font-semibold text-[#1B2654]/60 hover:text-[#F39237] transition-colors">
              {nextStory.en.title.split(" ").slice(0, 4).join(" ")}… →
            </button>
          ) : <div />}
        </div>
      </div>

      <Footer />

      {/* Floating prev/next */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3">
        {nextStory && (
          <button onClick={() => navigate(`/stories/${nextStory.slug}`)}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-white text-sm font-semibold
                       hover:scale-105 active:scale-95 transition-all duration-200"
            style={{ background: story.accentColor, boxShadow: `0 6px 24px ${story.accentColor}66` }}>
            Next <span>→</span>
          </button>
        )}
        {prevStory && (
          <button onClick={() => navigate(`/stories/${prevStory.slug}`)}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border text-sm font-semibold
                       hover:scale-105 active:scale-95 transition-all duration-200"
            style={{ borderColor: story.accentColor, color: story.accentColor,
                     boxShadow: `0 4px 16px ${story.accentColor}33` }}>
            <span>←</span> Prev
          </button>
        )}
      </div>
    </div>
  );
}
