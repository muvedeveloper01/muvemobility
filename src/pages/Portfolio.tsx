import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";

const categories = ["All", "Web Apps", "Mobile Apps", "Enterprise", "E-commerce"];

const projects = [
  {
    title: "FinTech Banking Platform",
    category: "Web Apps",
    description: "A comprehensive digital banking solution with real-time transactions and analytics.",
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    title: "Healthcare Management System",
    category: "Enterprise",
    description: "End-to-end healthcare platform for hospital management and patient care.",
    tech: ["Angular", "Python", "MongoDB", "Azure"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
  },
  {
    title: "E-Commerce Marketplace",
    category: "E-commerce",
    description: "Multi-vendor marketplace with advanced search and payment integration.",
    tech: ["Next.js", "Stripe", "Elasticsearch", "Docker"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
  },
  {
    title: "Fitness Tracking App",
    category: "Mobile Apps",
    description: "Cross-platform fitness app with workout tracking and social features.",
    tech: ["React Native", "Firebase", "Node.js", "ML Kit"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
  },
  {
    title: "Real Estate Platform",
    category: "Web Apps",
    description: "Property listing and management platform with virtual tours.",
    tech: ["Vue.js", "Django", "PostgreSQL", "Three.js"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
  },
  {
    title: "Food Delivery App",
    category: "Mobile Apps",
    description: "On-demand food delivery app with real-time tracking.",
    tech: ["Flutter", "Firebase", "Google Maps", "Stripe"],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="absolute inset-0 bg-glow-gradient opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Portfolio
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-3 mb-6">
              Featured{" "}
              <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our diverse portfolio of successful projects across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.title} 
                className="glass-card rounded-3xl overflow-hidden hover-glow group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                    {project.category}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-display font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 rounded bg-secondary text-xs text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
            Want to Be Our Next Success Story?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
