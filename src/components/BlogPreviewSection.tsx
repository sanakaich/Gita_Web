import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

/* TEMP DATA */
const blogs = [
  {
    id: 1,
    title: "Finding Inner Peace through the Gita",
    date: "April 5, 2022",
    description:
      "Discover how the teachings of the Gita can help bring inner peace and clarity.",
    image: "/blog-1.png",
  },
  {
    id: 2,
    title: "Lessons from the Life of Arjuna",
    date: "March 29, 2022",
    description:
      "Explore the courage, doubts and wisdom of Arjuna on the battlefield of life.",
    image: "/blog-2.png",
  },
];

export default function BlogPreviewSection() {
  const [showQR, setShowQR] = useState(false);
  const location = useLocation();
  const sectionRef = useRef<HTMLElement | null>(null);

  /*  AUTO OPEN + SCROLL LOGIC */
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
    <section
      ref={sectionRef}
      className="py-28"
      style={{
        marginTop: "30px",
        paddingTop: "100px",
        paddingBottom: "10px",
      }}
    >
      <div className="max-w-[1500px] mx-auto px-10">

        {/* Divider */}
        <div
          className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#C9C1B5] to-transparent opacity-100 mb-16"
          style={{ marginBottom: "120px" }}
        />

        {/* Header */}
        <h2 className="text-4xl font-serif font-semibold text-[#1B2654] mb-12">
          Recent Blogs
        </h2>

        <div className="grid grid-cols-3 gap-10">

          {/* LEFT : BLOG LIST */}
          <div className="col-span-2 space-y-6">
            {blogs.map((blog) => (
              <Link
                key={blog.id}
                to={`/blog/${blog.id}`}
                className="relative flex bg-[#F6EFE6] rounded-2xl overflow-hidden shadow-md h-[169px]"
              >
                <div
                  className="absolute inset-0 pointer-events-none opacity-30"
                  style={{
                    backgroundImage: "url('/card-cloud.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right bottom",
                    backgroundSize: "95%",
                    maskImage:
                      "linear-gradient(to left, black 45%, transparent 90%)",
                    WebkitMaskImage:
                      "linear-gradient(to left, black 45%, transparent 90%)",
                  }}
                />

                <div className="relative z-10 w-44 self-stretch overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="py-4 px-5 flex flex-col justify-start relative z-10">
                  <h3 className="text-lg font-serif font-semibold text-[#1B2654] leading-snug">
                    {blog.title}
                  </h3>

                  <p className="text-xs text-gray-500 mt-1">{blog.date}</p>

                  <p className="text-gray-600 text-sm mt-2 leading-relaxed max-w-xl">
                    {blog.description}
                  </p>

                  <span className="text-[#F39237] text-sm mt-2 font-medium">
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* RIGHT : DONATE CARD */}
          <div className="col-span-1">
            <div className="relative bg-[#F6EFE6] rounded-2xl shadow-md h-[350px] p-8 overflow-hidden">

              <div
                className="absolute inset-0 pointer-events-none opacity-30"
                style={{
                  backgroundImage: "url('/card-cloud.png')",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right bottom",
                  backgroundSize: "95%",
                  maskImage:
                    "linear-gradient(to left, black 45%, transparent 90%)",
                  WebkitMaskImage:
                    "linear-gradient(to left, black 45%, transparent 90%)",
                }}
              />

              <div className="relative z-10 w-full h-full flex items-center justify-center text-center">

                {/* Default Content */}
                <div
                  className={`absolute w-full transition-all duration-500 ease-in-out ${
                    showQR
                      ? "opacity-0 scale-95 pointer-events-none"
                      : "opacity-100 scale-100"
                  }`}
                >
                  <h3 className="text-3xl font-serif font-semibold text-[#1B2654] mb-6">
                    Support Gitaarth
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-10 text-[15px]">
                    Help us preserve and share the timeless wisdom of the
                    Bhagavad Gita and Sanskrit learning for everyone.
                  </p>

                  <button
                    onClick={() => setShowQR(true)}
                    className="bg-[#F39237] text-white px-10 py-4 rounded-xl text-lg font-medium shadow-sm hover:scale-105 hover:shadow-lg transition-all duration-300"
                  >
                    Donate Now
                  </button>
                </div>

                {/* QR Content */}
                <div
                  className={`absolute w-full transition-all duration-500 ease-in-out ${
                    showQR
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95 pointer-events-none"
                  }`}
                >
                  <h3 className="text-2xl font-serif font-semibold text-[#1B2654] mb-6">
                    Scan to Donate
                  </h3>

                  <img
                    src="/QR.jpg"
                    alt="Donation QR"
                    className="w-56 mx-auto rounded-xl shadow-lg"
                  />

                  <button
                    onClick={() => setShowQR(false)}
                    className="mt-6 text-sm underline text-[#1B2654] hover:text-[#F39237] transition"
                  >
                    Go Back
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}