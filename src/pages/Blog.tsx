import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const posts = [
  {
    title: "The Future of AI in Software Development",
    excerpt: "Explore how artificial intelligence is transforming the way we build and deploy software applications.",
    author: "Sarah Chen",
    date: "Dec 5, 2024",
    readTime: "8 min read",
    category: "AI & ML",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
  },
  {
    title: "Best Practices for Cloud Architecture",
    excerpt: "Learn the essential principles for designing scalable and resilient cloud-native applications.",
    author: "Michael Park",
    date: "Dec 2, 2024",
    readTime: "6 min read",
    category: "Cloud",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
  },
  {
    title: "Mobile App Development Trends 2024",
    excerpt: "Stay ahead of the curve with the latest trends shaping mobile app development this year.",
    author: "Emily Rodriguez",
    date: "Nov 28, 2024",
    readTime: "5 min read",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
  },
  {
    title: "Securing Your Web Applications",
    excerpt: "Essential security practices every developer should implement to protect web applications.",
    author: "David Kim",
    date: "Nov 25, 2024",
    readTime: "7 min read",
    category: "Security",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop",
  },
  {
    title: "The Rise of Microservices Architecture",
    excerpt: "Understanding when and how to implement microservices for your next project.",
    author: "Alex Johnson",
    date: "Nov 20, 2024",
    readTime: "10 min read",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
  },
  {
    title: "UI/UX Design Principles That Convert",
    excerpt: "Design strategies that improve user experience and drive conversions.",
    author: "Lisa Wang",
    date: "Nov 15, 2024",
    readTime: "6 min read",
    category: "Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
  },
];

const Blog = () => {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="absolute inset-0 bg-glow-gradient opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Blog
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-3 mb-6">
              Tech Insights &{" "}
              <span className="gradient-text">Updates</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest trends, insights, and best practices 
              in software development and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="glass-card rounded-3xl overflow-hidden hover-glow group cursor-pointer">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img 
                  src={posts[0].image} 
                  alt={posts[0].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                  Featured
                </span>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="text-primary text-sm font-medium mb-2">{posts[0].category}</span>
                <h2 className="font-display text-2xl lg:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {posts[0].title}
                </h2>
                <p className="text-muted-foreground mb-6">{posts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {posts[0].author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {posts[0].date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {posts[0].readTime}
                  </span>
                </div>
                <Button variant="heroOutline" className="w-fit">
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <article 
                key={post.title} 
                className="glass-card rounded-3xl overflow-hidden hover-glow group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-display font-semibold text-xl mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Get the latest tech insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button variant="hero">Subscribe</Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
