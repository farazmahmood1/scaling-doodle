import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Search,
  Clock,
  User,
  Calendar,
  Sparkles,
  Bot,
  Brain,
  TrendingUp,
  MessageSquare,
  Code2,
  ShoppingBag,
  Video,
  Gauge,
  Palette,
  Layers,
} from "lucide-react";
import AnimatedSection from "../components/ui/AnimatedSection";
import Seo from "../components/ui/Seo";

// ─── Animation Variants ─────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// ─── Data ────────────────────────────────────────────────────────────
const categories = [
  "All",
  "AI Automation",
  "Conversational AI",
  "Machine Learning",
  "Data Analytics",
  "Web Development",
  "E-Commerce",
  "Social Media",
  "SEO & Marketing",
  "Branding & Design",
  "Industry Trends",
];

const blogPosts = [
  {
    id: "ai-first-growth-stack",
    title: "The AI-First Growth Stack: Why Brand, Site and Marketing Compound",
    excerpt:
      "Most businesses buy a website, a brand, some ads and an AI tool from four different vendors. Here's what happens when those four things are designed as one system instead.",
    category: "Industry Trends",
    author: "Victoria Zoe",
    date: "August 4, 2026",
    readTime: "9 min read",
    icon: Layers,
    featured: true,
    image: "linear-gradient(135deg, #e44946 0%, #ef6c68 50%, #0A192F 100%)",
  },
  {
    id: "shopify-conversion-optimisation",
    title: "Shopify Conversion Optimisation: Where Stores Actually Lose Money",
    excerpt:
      "Six leaks we find in almost every Shopify audit, ranked by how much revenue they cost, and the fixes that reliably move conversion rate within a month.",
    category: "E-Commerce",
    author: "Fentola James",
    date: "July 22, 2026",
    readTime: "8 min read",
    icon: ShoppingBag,
    featured: false,
    image: "linear-gradient(135deg, #0D2137 0%, #e44946 100%)",
  },
  {
    id: "seo-in-the-age-of-ai-answers",
    title: "SEO in the Age of AI Answers: How to Get Cited, Not Just Ranked",
    excerpt:
      "AI Overviews, ChatGPT and Perplexity now sit between your content and your customer. Here's what actually earns a citation, and what stopped working.",
    category: "SEO & Marketing",
    author: "Victoria Zoe",
    date: "July 8, 2026",
    readTime: "10 min read",
    icon: Search,
    featured: false,
    image: "linear-gradient(135deg, #112240 0%, #ef6c68 100%)",
  },
  {
    id: "short-form-video-system",
    title: "The Short-Form Video System That Actually Builds Pipeline",
    excerpt:
      "How to produce twenty good assets a month without burning out your team, and why the hook matters more than the production budget.",
    category: "Social Media",
    author: "Victoria Zoe",
    date: "June 24, 2026",
    readTime: "7 min read",
    icon: Video,
    featured: false,
    image: "linear-gradient(135deg, #c83c38 0%, #0D2137 100%)",
  },
  {
    id: "wordpress-speed-what-works",
    title: "Why Your WordPress Site Is Slow, and What Actually Fixes It",
    excerpt:
      "A caching plugin is not a performance strategy. The real culprits are usually your page builder, your plugin count and your image pipeline.",
    category: "Web Development",
    author: "Fentola James",
    date: "June 10, 2026",
    readTime: "7 min read",
    icon: Gauge,
    featured: false,
    image: "linear-gradient(135deg, #0A192F 0%, #D0EAF5 100%)",
  },
  {
    id: "brand-system-not-just-logo",
    title: "A Brand Is a System, Not a Logo File",
    excerpt:
      "Why identities drift within six months of launch, and how design tokens, templates and guidelines keep a growing team consistent without policing.",
    category: "Branding & Design",
    author: "Victoria Zoe",
    date: "May 27, 2026",
    readTime: "6 min read",
    icon: Palette,
    featured: false,
    image: "linear-gradient(135deg, #0A192F 0%, #e44946 50%, #112240 100%)",
  },
  {
    id: "choosing-your-web-stack",
    title: "React, Shopify or WordPress? Choosing a Stack You Won't Regret",
    excerpt:
      "An honest decision framework for picking the platform behind your next build, including the cases where we recommend against ourselves.",
    category: "Web Development",
    author: "Fentola James",
    date: "May 13, 2026",
    readTime: "8 min read",
    icon: Code2,
    featured: false,
    image: "linear-gradient(135deg, #0D2137 0%, #D0EAF5 100%)",
  },
  {
    id: "ai-automation-transforming-business-2025",
    title: "How AI Automation Is Transforming Business Operations",
    excerpt:
      "Discover how intelligent automation is reshaping workflows, reducing costs by up to 60%, and enabling teams to focus on high-value strategic work.",
    category: "AI Automation",
    author: "Victoria Zoe",
    date: "March 28, 2025",
    readTime: "8 min read",
    icon: Bot,
    featured: false,
    image: "linear-gradient(135deg, #e44946 0%, #ef6c68 50%, #0A192F 100%)",
  },
  {
    id: "building-conversational-ai-agents",
    title: "Building Conversational AI Agents That Actually Convert",
    excerpt:
      "Learn the architecture behind AI chatbots and voice agents that drive real business results, from lead qualification to customer support.",
    category: "Conversational AI",
    author: "Victoria Zoe",
    date: "March 15, 2025",
    readTime: "6 min read",
    icon: MessageSquare,
    featured: false,
    image: "linear-gradient(135deg, #0D2137 0%, #e44946 100%)",
  },
  {
    id: "predictive-analytics-competitive-edge",
    title: "Predictive Analytics: Your Next Competitive Edge",
    excerpt:
      "How companies are leveraging AI-powered predictive models to forecast demand, optimize pricing, and make data-driven decisions faster than ever.",
    category: "Data Analytics",
    author: "Victoria Zoe",
    date: "March 5, 2025",
    readTime: "7 min read",
    icon: TrendingUp,
    featured: false,
    image: "linear-gradient(135deg, #112240 0%, #ef6c68 100%)",
  },
  {
    id: "machine-learning-production-best-practices",
    title: "Machine Learning in Production: Best Practices for 2025",
    excerpt:
      "From model training to deployment, a comprehensive guide to building ML pipelines that are robust, scalable, and maintainable in production.",
    category: "Machine Learning",
    author: "Victoria Zoe",
    date: "February 22, 2025",
    readTime: "10 min read",
    icon: Brain,
    featured: false,
    image: "linear-gradient(135deg, #0A192F 0%, #D0EAF5 100%)",
  },
  {
    id: "ai-lead-generation-autopilot",
    title: "AI Lead Generation: Putting Your Pipeline on Autopilot",
    excerpt:
      "Explore how AI-driven outreach, smart scoring, and automated follow-ups are helping B2B companies 10x their qualified leads.",
    category: "AI Automation",
    author: "Victoria Zoe",
    date: "February 10, 2025",
    readTime: "5 min read",
    icon: Sparkles,
    featured: false,
    image: "linear-gradient(135deg, #c83c38 0%, #0D2137 100%)",
  },
  {
    id: "custom-ai-saas-development-guide",
    title: "The Complete Guide to Custom AI SaaS Development",
    excerpt:
      "Everything you need to know about building AI-powered SaaS products, from architecture decisions to intelligent feature design.",
    category: "Industry Trends",
    author: "Victoria Zoe",
    date: "January 30, 2025",
    readTime: "9 min read",
    icon: Code2,
    featured: false,
    image: "linear-gradient(135deg, #0A192F 0%, #e44946 50%, #112240 100%)",
  },
];

// ─── Component ───────────────────────────────────────────────────────
const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find((p) => p.featured);
  const regularPosts = filteredPosts.filter((p) => !p.featured);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Seo
        title="Insights on AI, Web, E-Commerce & Marketing | Codilated Blog"
        description="Practical guides on AI automation, web and Shopify development, WordPress, SEO, social media and branding, written by the Codilated team."
      />
      {/* ════════ HERO ════════ */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-hero-gradient noise-overlay overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 -right-32 w-[500px] h-[500px] bg-coral/8 rounded-full blur-[120px] animate-pulse-slow" />
          <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-sky/5 rounded-full blur-[140px]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-coral/10 border border-coral/20 rounded-full text-coral text-xs font-mono font-semibold tracking-wider uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Our Blog
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6">
              Insights on{" "}
              <span className="gradient-text">Building & Growing</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
              Field notes from the work: AI automation, web and e-commerce
              builds, WordPress, SEO, social media and branding. Written by the
              people who ship it.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl mx-auto mt-10"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-coral/40 focus:ring-1 focus:ring-coral/20 transition-all duration-300"
              />
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent" />
      </section>

      {/* ════════ CATEGORY FILTERS ════════ */}
      <section className="relative py-8 bg-navy border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-coral text-white shadow-coral"
                      : "bg-white/5 text-white/50 border border-white/10 hover:border-coral/30 hover:text-white/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ════════ FEATURED POST ════════ */}
      {activeCategory === "All" && !searchQuery && featuredPost && (
        <section className="relative py-16 lg:py-24 bg-navy overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-coral/3 rounded-full blur-[150px] pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <Link
                to={`/blog/${featuredPost.id}`}
                className="block glass-card overflow-hidden group hover:border-coral/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover"
              >
                <div className="grid lg:grid-cols-2">
                  {/* Image / Visual Side */}
                  <div
                    className="relative h-64 lg:h-auto min-h-[300px] overflow-hidden"
                    style={{ background: featuredPost.image }}
                  >
                    <div className="absolute inset-0 bg-navy/30" />
                    <div className="absolute top-6 left-6">
                      <span className="px-3 py-1.5 text-[10px] font-bold bg-coral text-white rounded-lg uppercase tracking-wider">
                        Featured
                      </span>
                    </div>
                    <div className="absolute bottom-6 left-6">
                      <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                        <featuredPost.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-2.5 py-1 text-[10px] font-bold bg-coral/10 text-coral rounded-lg uppercase tracking-wider border border-coral/20">
                        {featuredPost.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-white/40">
                        <Clock className="w-3.5 h-3.5" />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    <h2 className="text-2xl lg:text-3xl font-black text-white mb-4 group-hover:text-coral transition-colors duration-300 leading-tight">
                      {featuredPost.title}
                    </h2>

                    <p className="text-white/40 text-sm leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-coral/10 flex items-center justify-center">
                          <User className="w-4 h-4 text-coral" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white/80">
                            {featuredPost.author}
                          </div>
                          <div className="text-xs text-white/40">
                            {featuredPost.date}
                          </div>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-coral opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                        Read Article
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* ════════ BLOG GRID ════════ */}
      <section className="relative py-16 lg:py-24 bg-navy overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky/3 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <AnimatedSection className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              {activeCategory === "All" ? "Latest Articles" : activeCategory}
            </h2>
            <p className="text-white/40 mt-2">
              {filteredPosts.length} article
              {filteredPosts.length !== 1 ? "s" : ""} found
            </p>
          </AnimatedSection>

          {filteredPosts.length === 0 ? (
            <AnimatedSection className="text-center py-20">
              <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-white/20" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                No articles found
              </h3>
              <p className="text-white/40">
                Try adjusting your search or filter to find what you're looking
                for.
              </p>
            </AnimatedSection>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {(activeCategory === "All" && !searchQuery
                ? regularPosts
                : filteredPosts
              ).map((post) => {
                const Icon = post.icon;
                return (
                  <motion.div key={post.id} variants={itemVariants}>
                    <Link
                      to={`/blog/${post.id}`}
                      className="block glass-card overflow-hidden group hover:border-coral/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover h-full"
                    >
                      {/* Card Image/Visual */}
                      <div
                        className="relative h-48 overflow-hidden"
                        style={{ background: post.image }}
                      >
                        <div className="absolute inset-0 bg-navy/20" />
                        <div className="absolute bottom-4 left-4">
                          <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="absolute top-4 right-4">
                          <span className="flex items-center gap-1.5 px-2.5 py-1 bg-black/30 backdrop-blur-md rounded-lg text-[10px] font-semibold text-white/80">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-2.5 py-1 text-[10px] font-bold bg-coral/10 text-coral rounded-lg uppercase tracking-wider border border-coral/20">
                            {post.category}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-coral transition-colors duration-300 leading-snug line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-white/40 text-sm leading-relaxed mb-5 line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-white/5">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-coral/10 flex items-center justify-center">
                              <User className="w-3 h-3 text-coral" />
                            </div>
                            <span className="text-xs text-white/50">
                              {post.author}
                            </span>
                          </div>
                          <span className="flex items-center gap-1 text-xs text-white/30">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </div>
      </section>

      {/* ════════ NEWSLETTER CTA ════════ */}
      <section className="relative py-24 lg:py-32 bg-navy-mid overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-coral/5 rounded-full blur-[200px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="section-tag">Stay Updated</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-6 text-balance">
              Get These Insights{" "}
              <span className="gradient-text">Delivered</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10">
              One monthly email on AI, web, e-commerce and growth. Practical
              things we've actually tested on client work. No fluff, no spam.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-coral/40 focus:ring-1 focus:ring-coral/20 transition-all duration-300"
              />
              <button className="btn-coral inline-flex items-center justify-center gap-2 whitespace-nowrap">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  );
};

export default Blog;
