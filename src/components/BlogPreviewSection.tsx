import { recentBlogs } from "@/data/blogs";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BlogPreviewSection() {
  const [showQR, setShowQR] = useState(false);
  const location = useLocation();
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (location.state?.openDonate) {
      setShowQR(true);
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [location.state]);

  return (
    <motion.section
      ref={sectionRef}
      className="py-28"
      style={{ marginTop: 0, paddingTop: 40, paddingBottom: 90 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-[1500px] mx-auto px-10">

        {/* Divider */}
        <motion.div
          className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#C9C1B5] to-transparent mb-16"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Header */}
        <motion.h2
          className="text-4xl font-serif font-semibold text-[#1B2654] mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Recent Blogs
        </motion.h2>

        <div className="grid grid-cols-3 gap-10">

          {/* LEFT : BLOG LIST */}
          <motion.div
            className="col-span-2 space-y-6"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {recentBlogs.map((blog) => (
              <motion.div
                key={blog.id}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -6 }}
              >
                <Link
                  to={`/blog/${blog.slug}`}
                  className="relative flex bg-[#F6EFE6] rounded-2xl overflow-hidden shadow-md h-[169px]"
                >
                  {/* Image Zoom */}
                  <motion.div
                    className="relative z-10 w-44 self-stretch overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.img
                      src={blog.coverImage}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                  </motion.div>

                  <div className="py-4 px-5 flex flex-col relative z-10">
                    <h3 className="text-lg font-serif font-semibold text-[#1B2654]">
                      {blog.title}
                    </h3>

                    <p className="text-xs text-gray-500 mt-1">{blog.date}</p>

                    <p className="text-gray-600 text-sm mt-2 max-w-xl">
                      {blog.excerpt}
                    </p>

                    <motion.span
                      className="text-[#F39237] text-sm mt-2 font-medium"
                      whileHover={{ x: 5 }}
                    >
                      Read More →
                    </motion.span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT : DONATE CARD */}
          <motion.div
            className="col-span-1"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              whileHover={{ y: -8 }}
              className="relative bg-[#F6EFE6] rounded-2xl shadow-md h-[350px] p-8 overflow-hidden"
            >
              <div className="relative z-10 w-full h-full flex items-center justify-center text-center">

                <AnimatePresence mode="wait">

                  {!showQR && (
                    <motion.div
                      key="default"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                    >
                      <h3 className="text-3xl font-serif font-semibold text-[#1B2654] mb-6">
                        Support Gitaarth
                      </h3>

                      <p className="text-gray-700 mb-10 text-[15px]">
                        Help us preserve and share the timeless wisdom of the
                        Bhagavad Gita.
                      </p>

                      <motion.button
                        onClick={() => setShowQR(true)}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#F39237] text-white px-10 py-4 rounded-xl text-lg font-medium shadow-sm"
                      >
                        Donate Now
                      </motion.button>
                    </motion.div>
                  )}

                  {showQR && (
                    <motion.div
                      key="qr"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                    >
                      <h3 className="text-2xl font-serif font-semibold text-[#1B2654] mb-6">
                        Scan to Donate
                      </h3>

                      <motion.img
                        src="/QR.jpg"
                        alt="Donation QR"
                        className="w-56 mx-auto rounded-xl shadow-lg"
                        whileHover={{ scale: 1.05 }}
                      />

                      <button
                        onClick={() => setShowQR(false)}
                        className="mt-6 text-sm underline text-[#1B2654] hover:text-[#F39237]"
                      >
                        Go Back
                      </button>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}