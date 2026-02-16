import { Link } from "react-router-dom";

const features = [
    {
        title: "Gita Shloks",
        description:
            "Explore shloks from the Bhagavad Gita with translations and explanations.",
        image: "public/feature-gita.png",
        button: "Read Shloks",
        to: "/gita",
    },
    {
        title: "Learn Sanskrit",
        description:
            "Watch lessons & study notes to learn Sanskrit language and grammar.",
        image: "public/feature-sankrit.jpg",
        button: "Start Learning",
        to: "/sanskrit",
    },
    {
        title: "Mythological Stories",
        description:
            "Read ancient stories of Krishna, Rama, Hanuman and more from Hindu mythology.",
        image: "/feature-stories.png",
        button: "Read Stories",
        to: "/stories",
    },
    {
        title: "Meditation Timer",
        description:
            "Practice meditation with peaceful chants, bells and calming nature sounds.",
        image: "/feature-meditation.png",
        button: "Start",
        to: "/meditation",
    },
];

export default function FeaturesSection() {
    return (
        <section className="py-0" style={{ marginTop: "30px" }}>
            <div className="max-w-[1500px] mx-auto px-2">

                <div className="grid grid-cols-4 gap-6">

                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="
                                relative
                                bg-[#F6EFE6]
                                rounded-2xl
                                p-6
                                shadow-sm
                                hover:shadow-md
                                transition
                                flex
                                flex-col
                                overflow-hidden
                            "
                        >
                            {/* CLOUD BACKGROUND */}
                            <div
                                className="absolute inset-0 opacity-30 pointer-events-none"
                                style={{
                                    backgroundImage: "url('/feature-cloud.png')",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "right bottom",
                                    backgroundSize: "120%",
                                    maskImage: "linear-gradient(to top left, black 35%, transparent 90%)",
                                    WebkitMaskImage: "linear-gradient(to top left, black 35%, transparent 90%)",
                                }}
                            />

                            {/* Image */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-40 object-cover rounded-xl mb-5 relative z-10"
                            />

                            {/* Title */}
                            <h3 className="text-xl font-serif font-semibold text-[#1B2654] mb-3 relative z-10">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 text-sm leading-relaxed flex-grow relative z-10">
                                {item.description}
                            </p>

                            {/* Button */}
                            <Link
                                to={item.to}
                                className="
                                    mt-5
                                    inline-block
                                    text-center
                                    px-4
                                    py-2
                                    rounded-lg
                                    border
                                    border-[#F39237]
                                    text-[#F39237]
                                    hover:bg-[#F39237]
                                    hover:text-white
                                    transition
                                    text-sm
                                    font-medium
                                    relative z-10
                                "
                            >
                                {item.button}
                            </Link>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
