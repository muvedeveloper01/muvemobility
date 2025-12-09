import { CheckCircle, Users, Target, Award, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Target,
    title: "Innovation",
    description: "We constantly push boundaries to deliver cutting-edge solutions that keep our clients ahead of the curve.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in working closely with our clients, treating their goals as our own.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Quality is at the heart of everything we do. We never compromise on standards.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving clients across 15+ countries, we bring a global perspective to local challenges.",
  },
];

const team = [
  { name: "Leadership Team", count: "5+" },
  { name: "Senior Developers", count: "15+" },
  { name: "UI/UX Designers", count: "5+" },
  { name: "DevOps Engineers", count: "5+" },
];

const About = () => {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="absolute inset-0 bg-glow-gradient opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              About Us
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-3 mb-6">
              Driving{" "}
              <span className="gradient-text">Digital Innovation</span>{" "}
              Since 2016
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Muve Mobility is a cutting-edge technology company providing scalable, 
              secure, and innovative digital solutions for modern businesses worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2016, Muve Mobility began with a simple vision: to make 
                  cutting-edge technology accessible to businesses of all sizes. What 
                  started as a small team of passionate developers has grown into a 
                  full-service technology company.
                </p>
                <p>
                  Today, we serve clients across 15+ countries, delivering innovative 
                  solutions that drive business growth. Our team of 30+ experts brings 
                  together diverse skills and perspectives to tackle complex challenges.
                </p>
                <p>
                  We specialize in building high-performance applications using the 
                  latest technologies, always staying ahead of industry trends to 
                  provide our clients with competitive advantages.
                </p>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-8">
              <h3 className="font-display font-semibold text-xl mb-6">Our Team</h3>
              <div className="grid grid-cols-2 gap-4">
                {team.map((item) => (
                  <div key={item.name} className="p-4 rounded-xl bg-secondary/50">
                    <div className="text-3xl font-display font-bold gradient-text">{item.count}</div>
                    <div className="text-sm text-muted-foreground">{item.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="glass-card rounded-2xl p-6 hover-glow">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with our expertise.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;
