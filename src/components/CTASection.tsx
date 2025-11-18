import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Blog CTA */}
        <Link to="/blog" className="group">
          <div className="bg-gradient-spiritual rounded-lg p-12 shadow-soft border border-border hover:shadow-glow transition-all duration-500 min-h-[300px] flex flex-col items-center justify-center text-center space-y-6">
            <BookOpen className="w-16 h-16 text-primary group-hover:scale-110 transition-transform duration-300" />
            <h2 className="text-3xl font-heading font-bold text-foreground">
              Explore the Gita Blog
            </h2>
            <p className="text-lg text-foreground/70 max-w-sm">
              Discover profound insights and timeless wisdom from the Bhagavad Gita
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-accent text-primary-foreground font-heading text-lg px-8 py-6 rounded-lg shadow-soft hover:shadow-glow transition-all duration-300"
            >
              Read Articles
            </Button>
          </div>
        </Link>

        {/* Stories CTA */}
        <Link to="/stories" className="group">
          <div className="bg-gradient-spiritual rounded-lg p-12 shadow-soft border border-border hover:shadow-glow transition-all duration-500 min-h-[300px] flex flex-col items-center justify-center text-center space-y-6">
            <Sparkles className="w-16 h-16 text-primary group-hover:scale-110 transition-transform duration-300" />
            <h2 className="text-3xl font-heading font-bold text-foreground">
              Spiritual Stories
            </h2>
            <p className="text-lg text-foreground/70 max-w-sm">
              Immerse yourself in inspiring tales from ancient scriptures
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-accent text-primary-foreground font-heading text-lg px-8 py-6 rounded-lg shadow-soft hover:shadow-glow transition-all duration-300"
            >
              Explore Stories
            </Button>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
