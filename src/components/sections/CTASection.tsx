import { ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary/5" />
      <div className="absolute inset-0 bg-glow-gradient opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to{" "}
            <span className="gradient-text">Transform</span>{" "}
            Your Business?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your goals. 
            Get a free consultation from our experts today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Get a Free Consultation
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="heroOutline" size="xl">
                Contact Our Experts
              </Button>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <a 
              href="mailto:info@muvemobility.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>info@muvemobility.com</span>
            </a>
            <a 
              href="tel:+94817798555"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+94 81 779 8555</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
