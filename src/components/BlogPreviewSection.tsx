import { Link } from "react-router-dom";

/* TEMP DATA
   Later replace with blog fetch */
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
    return (
        <section
            className="py-28"
            style={{ marginTop: "30px", paddingTop: "100px", paddingBottom: "10px" }}
        >
            <div className="max-w-[1500px] mx-auto px-10">

                {/* Divider */}
                <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#C9C1B5] to-transparent opacity-100 mb-16 " style={{ marginBottom: "120px" }} />

                {/* Header */}
                <h2 className="text-4xl font-serif font-semibold text-[#1B2654] mb-12">
                    Recent Blogs
                </h2>

                <div className="grid grid-cols-3 gap-10">

                    {/* ================= LEFT : BLOG LIST ================= */}
                    <div className="col-span-2 space-y-6">

                        {blogs.map((blog) => (
                            <Link
                                key={blog.id}
                                to={`/blog/${blog.id}`}
                                className="
                                    relative
                                    flex
                                    bg-[#F6EFE6]
                                    rounded-2xl
                                    overflow-hidden
                                    shadow-md
                                    h-[169px]
                                "
                            >

                                {/* CLOUD BACKGROUND */}
                                <div
                                    className="absolute inset-0 pointer-events-none opacity-30"
                                    style={{
                                        backgroundImage: "url('/card-cloud.png')",
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "right bottom",
                                        backgroundSize: "95%",
                                        maskImage: "linear-gradient(to left, black 45%, transparent 90%)",
                                        WebkitMaskImage: "linear-gradient(to left, black 45%, transparent 90%)",
                                    }}
                                />

                                {/* Image */}
                                <div className="relative z-10 w-44 self-stretch overflow-hidden">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Content */}
                                <div className="py-4 px-5 flex flex-col justify-start relative z-10">
                                    <h3 className="text-lg font-serif font-semibold text-[#1B2654] leading-snug">
                                        {blog.title}
                                    </h3>

                                    <p className="text-xs text-gray-500 mt-1">
                                        {blog.date}
                                    </p>

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

                    {/* ================= RIGHT : DONATE CARD ================= */}
                    <div
                        className="
    relative
    rounded-3xl
    overflow-hidden
    shadow-md
    flex
    flex-col
    justify-center
    text-center
    p-12
    bg-[#F6EFE6]
  "
                    >

                        {/* Cloud Texture */}
                        <div
                            className="
      absolute
      inset-0
      opacity-30
      pointer-events-none
    "
                            style={{
                                backgroundImage: "url('/cloud-portrait.png')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                mixBlendMode: "multiply",
                            }}
                        />

                        {/* Content */}
                        <div className="relative z-10 max-w-sm mx-auto">
                            <h3 className="text-3xl font-serif font-semibold text-[#1B2654] mb-6">
                                Support Gitaarth
                            </h3>

                            <p className="text-gray-700 leading-relaxed mb-10 text-[15px]">
                                Help us preserve and share the timeless wisdom of the Bhagavad Gita
                                and Sanskrit learning for everyone.
                            </p>

                            <Link
                                to="/donate"
                                className="
        bg-[#F39237]
        text-white
        px-10
        py-4
        rounded-xl
        text-lg
        font-medium
        inline-block
        shadow-sm
      "
                            >
                                Donate Now
                            </Link>
                        </div>

                    </div>
                </div>
            </div> {/* ← MISSING DIV WAS HERE */}

        </section>
    );
}
