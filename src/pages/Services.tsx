import { 
  Globe, 
  Smartphone, 
  Building2, 
  Cloud, 
  Palette, 
  Zap,
  Code2,
  Brain,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Globe,
    title: "Web Application Development",
    description: "Custom web solutions built with cutting-edge technologies for optimal performance and scalability.",
    features: ["React & Next.js", "Node.js & Python", "PostgreSQL & MongoDB", "REST & GraphQL APIs"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps for iOS and Android that deliver exceptional user experiences.",
    features: ["React Native", "Flutter", "Swift & Kotlin", "App Store Optimization"],
  },
  {
    icon: Building2,
    title: "Enterprise Software Solutions",
    description: "Robust enterprise systems designed to streamline operations and drive business growth.",
    features: ["ERP Systems", "CRM Solutions", "Workflow Automation", "Legacy Modernization"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps Solutions",
    description: "Cloud infrastructure and DevOps practices for reliable, scalable, and secure deployments.",
    features: ["AWS & Azure", "Docker & Kubernetes", "CI/CD Pipelines", "Infrastructure as Code"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centric design that combines aesthetics with functionality for memorable digital experiences.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "Comprehensive digital strategies to modernize your business and stay ahead of competition.",
    features: ["Strategy Consulting", "Process Automation", "Digital Roadmaps", "Change Management"],
  },
  {
    icon: Code2,
    title: "API & Microservices",
    description: "Scalable API architectures and microservices for flexible, maintainable applications.",
    features: ["API Design", "Microservices Architecture", "API Gateway", "Service Mesh"],
  },
  {
    icon: Brain,
    title: "AI & Data Analytics",
    description: "Intelligent solutions powered by machine learning and data-driven insights.",
    features: ["Machine Learning", "Data Visualization", "Predictive Analytics", "Natural Language Processing"],
  },
];

const Services = () => {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="absolute inset-0 bg-glow-gradient opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-3 mb-6">
              Comprehensive{" "}
              <span className="gradient-text">Technology Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From concept to deployment, we deliver end-to-end solutions tailored 
              to your unique business needs and objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div 
                key={service.title} 
                className="glass-card rounded-3xl p-8 hover-glow group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              A proven methodology that ensures project success.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your needs and goals" },
              { step: "02", title: "Planning", desc: "Creating detailed roadmap and timeline" },
              { step: "03", title: "Development", desc: "Agile development with regular updates" },
              { step: "04", title: "Delivery", desc: "Testing, deployment, and support" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-5xl font-display font-bold gradient-text mb-4">{item.step}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help bring your vision to life.
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

export default Services;
