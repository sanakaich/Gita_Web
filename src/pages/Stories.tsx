import Navbar from "@/components/Navbar";
import { Sparkles } from "lucide-react";

const Stories = () => {
  return (
    <div className="min-h-screen bg-gradient-peaceful">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center space-y-6 animate-fade-in">
          <Sparkles className="w-20 h-20 text-primary mx-auto" />
          <h1 className="text-5xl font-heading font-bold text-foreground">
            Spiritual Stories
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Immerse yourself in inspiring tales from the Mahabharata and ancient scriptures
          </p>
        </div>

        <div className="mt-16 space-y-12">
          {[1, 2, 3].map((item) => (
            <article
              key={item}
              className="bg-card rounded-lg p-10 shadow-soft border border-border hover:shadow-glow transition-all duration-300"
            >
              <h3 className="text-3xl font-heading font-bold text-foreground mb-4">
                The Wisdom of Krishna
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                On the battlefield of Kurukshetra, when Arjuna was overwhelmed with doubt and
                confusion, Lord Krishna imparted the eternal wisdom that would guide humanity
                for millennia to come. This is the story of divine love, cosmic duty, and the
                path to liberation.
              </p>
              <div className="text-primary font-heading hover:text-accent transition-smooth cursor-pointer text-lg">
                Continue Reading →
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Stories;
