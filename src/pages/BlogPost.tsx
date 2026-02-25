import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogs } from "@/data/blogs";
import { Calendar, Clock, Tag, ArrowLeft, ArrowRight } from "lucide-react";

export default function BlogPostPage() {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();

    const idx = blogs.findIndex((b) => b.slug === slug);
    const blog = blogs[idx];
    const prev = blogs[idx + 1] ?? null;
    const next = blogs[idx - 1] ?? null;

    // Scroll to top on load
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [slug]);

    if (!blog) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#FBF8F3]">
                <Navbar />
                <div className="text-center mt-32">
                    <p className="text-5xl mb-4">📜</p>
                    <h1 className="text-2xl font-serif font-semibold text-[#1B2654] mb-3">Blog post not found</h1>
                    <Link to="/blog" className="text-[#F39237] hover:underline">← Back to Blog</Link>
                </div>
            </div>
        );
    }

    return (
        <div
            className="min-h-screen text-[#1B2654]"
            style={{
                background:
                    "radial-gradient(ellipse 70% 30% at 50% 0%, rgba(243,146,55,0.08) 0%, transparent 60%), " +
                    "linear-gradient(160deg, #F0E9DE 0%, #F8F4EE 40%, #ECEEF6 100%)",
            }}
        >
            <Navbar />

            {/* ── Hero Image ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full h-[420px] relative overflow-hidden"
            >
                <img
                    src={blog.coverImage}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1433]/60 via-transparent to-transparent" />

                {/* Title on image */}
                <div className="absolute bottom-0 left-0 right-0 max-w-3xl mx-auto px-6 pb-10">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="inline-flex items-center gap-1.5 bg-[#F39237] text-white text-xs font-semibold px-3 py-1 rounded-full mb-3"
                    >
                        <Tag className="w-3 h-3" /> {blog.category}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-3xl md:text-4xl font-serif font-bold text-white leading-snug"
                    >
                        {blog.title}
                    </motion.h1>
                </div>
            </motion.div>

            {/* ── Article Body ── */}
            <motion.article
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-3xl mx-auto px-6 md:px-8 py-14"
            >
                {/* Meta */}
                <div className="flex items-center gap-5 text-sm text-[#1B2654]/50 mb-10 pb-8 border-b border-[#EDE8E0]">
                    <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-[#F39237]" /> {blog.date}</span>
                    <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#F39237]" /> {blog.readTime}</span>
                </div>

                {/* Content */}
                <div
                    className="prose prose-lg max-w-none
            prose-headings:font-serif prose-headings:text-[#1B2654] prose-headings:font-semibold
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-p:text-[#2a2a2a]/80 prose-p:leading-8 prose-p:mb-5
            prose-em:text-[#1B2654] prose-em:not-italic prose-em:font-medium
            prose-strong:text-[#1B2654]
            prose-ul:space-y-2 prose-li:text-[#2a2a2a]/80
            prose-li:marker:text-[#F39237]"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                {/* Decorative quote */}
                <div className="mt-14 mb-10 border-l-4 border-[#F39237] pl-6 py-2">
                    <p className="text-xl font-serif text-[#1B2654]/70 italic leading-relaxed">
                        "{blog.excerpt}"
                    </p>
                </div>

                {/* Back to blog */}
                <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 text-[#F39237] font-medium hover:gap-3 transition-all duration-200"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to Blog
                </Link>
            </motion.article>

            {/* ── Prev / Next Navigation ── */}
            {(prev || next) && (
                <section className="max-w-3xl mx-auto px-6 md:px-8 pb-20">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C9C1B5] to-transparent mb-10" />
                    <div className="grid grid-cols-2 gap-6">
                        {/* Previous (older) */}
                        <div>
                            {prev && (
                                <Link
                                    to={`/blog/${prev.slug}`}
                                    className="group flex flex-col gap-2 bg-white rounded-2xl p-5 border border-[#EDE8E0]
                             hover:shadow-[0_8px_24px_rgba(27,38,84,0.10)] hover:-translate-y-1 transition-all duration-200"
                                >
                                    <span className="text-xs text-[#1B2654]/40 flex items-center gap-1"><ArrowLeft className="w-3 h-3" /> Previous</span>
                                    <span className="text-sm font-serif font-semibold text-[#1B2654] group-hover:text-[#F39237] transition-colors leading-snug">{prev.title}</span>
                                </Link>
                            )}
                        </div>
                        {/* Next (newer) */}
                        <div className="flex justify-end">
                            {next && (
                                <Link
                                    to={`/blog/${next.slug}`}
                                    className="group flex flex-col gap-2 bg-white rounded-2xl p-5 border border-[#EDE8E0] text-right
                             hover:shadow-[0_8px_24px_rgba(27,38,84,0.10)] hover:-translate-y-1 transition-all duration-200"
                                >
                                    <span className="text-xs text-[#1B2654]/40 flex items-center gap-1 justify-end">Next <ArrowRight className="w-3 h-3" /></span>
                                    <span className="text-sm font-serif font-semibold text-[#1B2654] group-hover:text-[#F39237] transition-colors leading-snug">{next.title}</span>
                                </Link>
                            )}
                        </div>
                    </div>
                </section>
            )}

            <Footer />
        </div>
    );
}
