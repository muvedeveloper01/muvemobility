import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const highlights = [
  "8+ Years of Industry Experience",
  "200+ Successful Projects Delivered",
  "Global Client Base Across 15+ Countries",
  "24/7 Support & Maintenance",
  "Agile Development Methodology",
  "Security-First Approach",
];

export function AboutSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              About Muve Mobility
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6">
              Pioneering{" "}
              <span className="gradient-text">Digital Excellence</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Muve Mobility is a cutting-edge technology company providing scalable, 
              secure, and innovative digital solutions for modern businesses. We specialize 
              in building high-performance applications using the latest technologies.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our team of expert developers, designers, and strategists work together 
              to transform your vision into reality. Whether you're a startup looking 
              to disrupt the market or an enterprise seeking digital transformation, 
              we're your trusted partner for success.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Link to="/about">
              <Button variant="hero" size="lg">
                Learn More About Us
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
            </Link>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Card */}
              <div className="glass-card rounded-3xl p-8 shadow-card">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "200+", label: "Projects" },
                    { value: "50+", label: "Clients" },
                    { value: "8+", label: "Years" },
                    { value: "30+", label: "Team Members" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center p-4 rounded-xl bg-secondary/50">
                      <div className="text-3xl sm:text-4xl font-display font-bold gradient-text">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 glass-card rounded-2xl p-4 shadow-glow animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-medium">Always Available</span>
                </div>
              </div>

              {/* Another Floating Element */}
              <div className="absolute -bottom-4 -left-4 glass-card rounded-2xl p-4 shadow-card" style={{ animationDelay: "1s" }}>
                <div className="text-2xl font-display font-bold text-primary">99%</div>
                <div className="text-xs text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
