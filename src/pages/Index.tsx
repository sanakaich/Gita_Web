import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import DailyShlokSection from "../components/DailyShlokSection";
import FeaturesSection from "../components/FeaturesSection";
import BlogPreviewSection from "../components/BlogPreviewSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#FBF8F3] text-gray-800">

      {/* Navbar */}
      <Navbar />

      {/* ✅ HERO OUTSIDE CONTAINER (FULL WIDTH) */}
      <HeroSection />

      {/* ✅ ONLY THESE SECTIONS ARE CONTAINED */}
      <main className="max-w-7xl mx-auto px-10 py-20 space-y-32">
        <DailyShlokSection />
        <FeaturesSection />
        <BlogPreviewSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
