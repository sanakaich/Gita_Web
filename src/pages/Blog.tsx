import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogs } from "@/data/blogs";
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";

const categories = ["All", ...Array.from(new Set(blogs.map((b) => b.category)))];

export default function BlogPage() {
    const [active, setActive] = useState("All");
    const filtered = active === "All" ? blogs : blogs.filter((b) => b.category === active);

    return (
        <div
            className="min-h-screen text-[#1B2654]"
            style={{
                background:
                    "radial-gradient(ellipse 70% 30% at 50% 0%, rgba(243,146,55,0.10) 0%, transparent 60%), " +
                    "linear-gradient(160deg, #F0E9DE 0%, #F8F4EE 40%, #ECEEF6 100%)",
            }}
        >
            <Navbar />

            {/* ── Hero Banner ── */}
            <section className="max-w-5xl mx-auto px-6 md:px-12 pt-20 pb-14 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-xs uppercase tracking-[0.3em] text-[#F39237] font-semibold mb-3"
                >
                    ✦ Wisdom & Reflections ✦
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-6xl font-serif font-semibold text-[#1B2654] leading-tight mb-5"
                >
                    The Gitaarth Blog
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg text-[#1B2654]/60 max-w-xl mx-auto"
                >
                    Stories, philosophy, and reflections rooted in the timeless wisdom of the Bhagavad Gita.
                </motion.p>
            </section>

            {/* ── Category Filter ── */}
            <section className="max-w-5xl mx-auto px-6 md:px-12 mb-12">
                <div className="flex items-center gap-3 flex-wrap">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActive(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${active === cat
                                    ? "bg-[#F39237] text-white shadow-[0_4px_12px_rgba(243,146,55,0.40)]"
                                    : "bg-white/70 text-[#1B2654] border border-[#E8E1D8] hover:border-[#F39237] hover:text-[#F39237]"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* ── Blog Grid ── */}
            <section className="max-w-5xl mx-auto px-6 md:px-12 pb-28">
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {filtered.map((blog, i) => (
                        <motion.div
                            key={blog.id}
                            layout
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="h-full"
                        >
                            <Link
                                to={`/blog/${blog.slug}`}
                                className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden
                           border border-[#EDE8E0]
                           shadow-[0_6px_24px_rgba(27,38,84,0.08)]
                           hover:shadow-[0_16px_48px_rgba(27,38,84,0.15),0_4px_16px_rgba(243,146,55,0.12)]
                           hover:-translate-y-2 transition-all duration-300"
                            >
                                {/* Cover image */}
                                <div className="relative h-52 overflow-hidden">
                                    <img
                                        src={blog.coverImage}
                                        alt={blog.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Category badge */}
                                    <span className="absolute top-4 left-4 bg-[#F39237] text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                                        <Tag className="w-3 h-3" /> {blog.category}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="p-7 flex flex-col flex-1">
                                    <div className="flex items-center gap-4 text-xs text-[#1B2654]/50 mb-3">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-3.5 h-3.5" /> {blog.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3.5 h-3.5" /> {blog.readTime}
                                        </span>
                                    </div>

                                    <h2 className="text-xl font-serif font-semibold text-[#1B2654] mb-3 leading-snug group-hover:text-[#F39237] transition-colors">
                                        {blog.title}
                                    </h2>

                                    <p className="text-sm text-[#1B2654]/60 leading-relaxed mb-5 flex-1">
                                        {blog.excerpt}
                                    </p>

                                    <span className="inline-flex items-center gap-1.5 text-[#F39237] text-sm font-semibold group-hover:gap-3 transition-all duration-200">
                                        Read Article <ArrowRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            <Footer />
        </div>
    );
}
