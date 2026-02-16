import Navbar from "@/components/Navbar";
import { BookOpen } from "lucide-react";
import React from "react";

const POSTS = [
  {
    id: 1,
    title: "Understanding Dharma",
    excerpt:
      "Explore the profound concept of dharma and how it guides us toward righteous living in harmony with universal principles.",
  },
  {
    id: 2,
    title: "Karma — Action & Consequence",
    excerpt:
      "A clear, practical look at how actions shape experience and how intentional practice softens the chain of cause and effect.",
  },
  {
    id: 3,
    title: "Detachment in Daily Life",
    excerpt:
      "Simple practices for cultivating inner freedom while remaining fully engaged in work, relationships and responsibility.",
  },
  {
    id: 4,
    title: "Arjuna’s Dilemma — A Modern Reading",
    excerpt:
      "Re-reading Arjuna’s crisis for today: moral complexity, leadership, and choosing action without being enslaved by results.",
  },
  {
    id: 5,
    title: "Bhakti: The Heart’s Path",
    excerpt:
      "How devotion (bhakti) transforms fear into trust — a practical guide to steadying the heart through remembrance.",
  },
  {
    id: 6,
    title: "Yoga of Work: Karma-yoga",
    excerpt:
      "Working as a spiritual discipline — tools for transforming routine tasks into moments of mindful offering.",
  },
];

export default function Blog(): JSX.Element {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      {/* Navbar (not fixed) */}
      <div className="w-full z-20">
        <Navbar />
      </div>

      <main className="max-w-7xl mx-auto px-6 py-20">
        {/* Hero */}
        <section className="text-center mb-12">
          <div
            className="mx-auto mb-6 w-24 h-24 rounded-full grid place-items-center"
            style={{
              background:
                "radial-gradient(circle at 30% 20%, rgba(255,218,117,0.12), rgba(255,184,28,0.04) 30%, transparent 45%)",
              boxShadow: "0 10px 40px rgba(255,184,28,0.06)",
            }}
            aria-hidden
          >
            <BookOpen className="w-12 h-12 text-amber-300" />
          </div>

          <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-amber-300 drop-shadow-[0_10px_30px_rgba(255,184,28,0.08)]">
            Gita Blog
          </h1>
          <p className="mt-4 text-lg md:text-xl text-amber-100/80 max-w-3xl mx-auto leading-relaxed">
            Explore succinct essays and practical teachings from the Bhagavad Gita — ethics, practice,
            and applied wisdom for modern life.
          </p>
        </section>

        {/* Posts grid */}
        <section>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((post) => (
              <article
                key={post.id}
                className="relative rounded-2xl p-6 border border-amber-700/10 bg-gradient-to-b from-[rgba(8,6,4,0.85)] to-[rgba(14,10,6,0.7)] shadow-[0_12px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_80px_rgba(255,184,28,0.08)] transform-gpu hover:-translate-y-2 transition-all duration-300"
                role="article"
                aria-labelledby={`post-title-${post.id}`}
              >
                {/* subtle glow / paper edge */}
                <div
                  aria-hidden
                  className="absolute -inset-0.5 rounded-2xl pointer-events-none"
                  style={{
                    boxShadow: "inset 0 1px 0 rgba(255,240,200,0.02), 0 20px 60px rgba(255,184,28,0.02)",
                    background:
                      "linear-gradient(180deg, rgba(255,248,230,0.01), rgba(0,0,0,0.02))",
                  }}
                />

                <header className="relative z-10">
                  <h3
                    id={`post-title-${post.id}`}
                    className="text-2xl font-heading font-semibold text-amber-100"
                  >
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm text-amber-200/70 leading-relaxed">{post.excerpt}</p>
                </header>

                <footer className="relative z-10 mt-6 flex items-center justify-between">
                  <span className="text-xs uppercase text-amber-300/80 font-medium tracking-wider">
                    Read time • 4 min
                  </span>

                  <button
                    className="px-3 py-2 rounded-md bg-amber-400/10 border border-amber-400/30 text-amber-100 font-medium hover:bg-amber-400/12 hover:shadow-[0_8px_30px_rgba(255,184,28,0.06)] transition"
                    aria-label={`Read more about ${post.title}`}
                  >
                    Read More →
                  </button>
                </footer>
              </article>
            ))}
          </div>
        </section>

        {/* Footer note */}
        <section className="mt-12 text-center text-sm text-amber-200/60">
          <p>
            New posts added regularly
          </p>
        </section>
      </main>
    </div>
  );
}
