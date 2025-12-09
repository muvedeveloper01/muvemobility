import { 
  Globe, 
  Smartphone, 
  Building2, 
  Cloud, 
  Palette, 
  Zap,
  Code2,
  Brain
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Globe,
    title: "Web Application Development",
    description: "Custom web solutions built with cutting-edge technologies for optimal performance and scalability.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps for iOS and Android that deliver exceptional user experiences.",
  },
  {
    icon: Building2,
    title: "Enterprise Software Solutions",
    description: "Robust enterprise systems designed to streamline operations and drive business growth.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps Solutions",
    description: "Cloud infrastructure and DevOps practices for reliable, scalable, and secure deployments.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centric design that combines aesthetics with functionality for memorable digital experiences.",
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "Comprehensive digital strategies to modernize your business and stay ahead of competition.",
  },
  {
    icon: Code2,
    title: "API & Microservices",
    description: "Scalable API architectures and microservices for flexible, maintainable applications.",
  },
  {
    icon: Brain,
    title: "AI & Data Analytics",
    description: "Intelligent solutions powered by machine learning and data-driven insights.",
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Comprehensive{" "}
            <span className="gradient-text">Technology Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From concept to deployment, we deliver end-to-end solutions tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to="/services"
              className="group glass-card rounded-2xl p-6 hover-glow cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
