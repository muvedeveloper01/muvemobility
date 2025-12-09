import { MapPin, Clock, ArrowRight, Users, Heart, Zap, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const openings = [
  {
    title: "Senior React Developer",
    department: "Engineering",
    location: "Kandy / Remote",
    type: "Full-time",
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Kandy",
    type: "Full-time",
  },
  {
    title: "DevOps Engineer",
    department: "Operations",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Mobile Developer (Flutter)",
    department: "Engineering",
    location: "Kandy / Remote",
    type: "Full-time",
  },
  {
    title: "Project Manager",
    department: "Management",
    location: "Kandy",
    type: "Full-time",
  },
];

const benefits = [
  { icon: Heart, title: "Health Insurance", desc: "Comprehensive health coverage for you and family" },
  { icon: GraduationCap, title: "Learning Budget", desc: "Annual budget for courses and certifications" },
  { icon: Zap, title: "Flexible Hours", desc: "Work when you're most productive" },
  { icon: Users, title: "Team Events", desc: "Regular team building and social events" },
];

const Careers = () => {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="absolute inset-0 bg-glow-gradient opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Careers
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-3 mb-6">
              Join Our{" "}
              <span className="gradient-text">Growing Team</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Build the future of technology with us. We're looking for talented 
              individuals who are passionate about creating exceptional software.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Why Work at <span className="gradient-text">Muve Mobility</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              We believe in taking care of our team members.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="glass-card rounded-2xl p-6 text-center hover-glow">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Open <span className="gradient-text">Positions</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Find your next opportunity with us.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {openings.map((job) => (
              <div 
                key={job.title} 
                className="glass-card rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover-glow group cursor-pointer"
              >
                <div>
                  <h3 className="font-display font-semibold text-lg group-hover:text-primary transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{job.department}</p>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {job.type}
                  </span>
                  <Button variant="heroOutline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground">
                    Apply
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
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
            Don't See a Fit?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Send us your resume anyway. We're always looking for talented people.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl">
              Send Your Resume
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Careers;
