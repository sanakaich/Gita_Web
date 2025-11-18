import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import SanskritSection from "../components/SanskritSection";
import GitaSection from "../components/GitaSection";
import StoriesSlider from "@/components/StoriesSlider";
import Navbar from "../components/Navbar";

const Index = () => { 
  return (
    <div className="min-h-screen bg-gradient-peaceful relative">
      {/* Background video (z-0) */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none w-full max-w-full">

        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/bg-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/bg-video-poster.jpg"
          aria-hidden="true"
        />
        {/* overlay sits above video but below page content */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none z-10" />
      </div>

      {/* Page content: make sure this sits above video+overlay */}
      <div className="relative z-20 ">
        <Navbar />
        <main className="pt-4 pb-8 px-4 sm:px-6 lg:px-8">
          <HeroSection />
          <SanskritSection />
          <GitaSection />
          <StoriesSlider/>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;