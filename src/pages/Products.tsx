import { ArrowRight, Sparkles, Shield, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const products = [
  {
    name: "MuveCRM",
    tagline: "Customer Relationship Management",
    description: "A powerful CRM solution designed to help businesses manage customer interactions, track sales, and drive growth.",
    features: ["Contact Management", "Sales Pipeline", "Analytics Dashboard", "Email Integration"],
    status: "Live",
  },
  {
    name: "MuveERP",
    tagline: "Enterprise Resource Planning",
    description: "Comprehensive ERP system that streamlines business operations, from inventory to finance.",
    features: ["Inventory Management", "Financial Tracking", "HR Module", "Reporting"],
    status: "Live",
  },
  {
    name: "MuveCloud",
    tagline: "Cloud Management Platform",
    description: "Unified cloud management solution for deploying, monitoring, and scaling applications.",
    features: ["Multi-Cloud Support", "Auto Scaling", "Cost Optimization", "Security"],
    status: "Beta",
  },
  {
    name: "MuveAnalytics",
    tagline: "Business Intelligence Platform",
    description: "Transform your data into actionable insights with our advanced analytics platform.",
    features: ["Real-time Analytics", "Custom Dashboards", "AI Predictions", "Data Visualization"],
    status: "Coming Soon",
  },
];

const Products = () => {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="absolute inset-0 bg-glow-gradient opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Products
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-3 mb-6">
              Innovative{" "}
              <span className="gradient-text">Software Products</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our suite of cutting-edge products designed to accelerate 
              your business growth and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product) => (
              <div 
                key={product.name} 
                className="glass-card rounded-3xl p-8 hover-glow group relative overflow-hidden"
              >
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    product.status === "Live" 
                      ? "bg-green-500/20 text-green-500" 
                      : product.status === "Beta"
                      ? "bg-yellow-500/20 text-yellow-500"
                      : "bg-primary/20 text-primary"
                  }`}>
                    {product.status}
                  </span>
                </div>

                <div className="mb-6">
                  <h3 className="font-display font-bold text-2xl mb-1 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-primary text-sm">{product.tagline}</p>
                </div>

                <p className="text-muted-foreground mb-6">
                  {product.description}
                </p>

                <div className="grid grid-cols-2 gap-2 mb-6">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button variant="heroOutline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Why Choose Our <span className="gradient-text">Products</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Enterprise Security", desc: "Bank-grade security with encryption and compliance" },
              { icon: Zap, title: "High Performance", desc: "Optimized for speed and reliability at scale" },
              { icon: Globe, title: "Global Infrastructure", desc: "Deployed across multiple regions worldwide" },
            ].map((item) => (
              <div key={item.title} className="glass-card rounded-2xl p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
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
            Need a Custom Solution?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            We also build custom software solutions tailored to your specific needs.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl">
              Discuss Your Requirements
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Products;
