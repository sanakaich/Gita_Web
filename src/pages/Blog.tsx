import Navbar from "@/components/Navbar";
import { BookOpen } from "lucide-react";

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-peaceful">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center space-y-6 animate-fade-in">
          <BookOpen className="w-20 h-20 text-primary mx-auto" />
          <h1 className="text-5xl font-heading font-bold text-foreground">
            Gita Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore profound insights, timeless wisdom, and practical teachings from the Bhagavad Gita
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <article
              key={item}
              className="bg-card rounded-lg p-8 shadow-soft border border-border hover:shadow-glow transition-all duration-300"
            >
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Understanding Dharma
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Explore the profound concept of dharma and how it guides us toward righteous living
                in harmony with universal principles.
              </p>
              <div className="mt-6 text-primary font-heading hover:text-accent transition-smooth cursor-pointer">
                Read More →
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Blog;
