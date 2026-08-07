import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Gift,
  Rocket,
  TrendingUp,
  Sparkles,
  Star,
} from "lucide-react";
import AnimatedSection from "../components/ui/AnimatedSection";
import Seo from "../components/ui/Seo";
import { allServices } from "../data/services";

const packages = [
  {
    id: "launchpad",
    name: "LaunchPad",
    tagline: "A complete, professional digital foundation for your business.",
    price: "$399",
    icon: Rocket,
    color: "sky",
    featured: false,
    cta: "Get LaunchPad",
    bestFor: "New businesses and anyone still trading on a template site.",
    groups: [
      {
        title: "Website Development",
        items: [
          "Premium Business Website (Up to 5 Pages)",
          "Custom UI/UX Design",
          "Built on React, WordPress or Shopify, your choice",
          "Mobile Responsive Development",
          "Speed & Core Web Vitals Optimization",
          "Contact Forms + WhatsApp Integration",
          "Basic SEO Setup & Sitemap Submission",
          "AI-Assisted Website Copywriting",
        ],
      },
      {
        title: "Branding & Identity",
        items: [
          "Custom Logo Design",
          "Brand Color Palette & Typography",
          "Social Media Profile Setup & Cover Art",
          "Professional Business Email Setup",
          "Google Business Profile Setup",
        ],
      },
      {
        title: "Support",
        items: ["1 Month Technical Support", "Recorded Handover Walkthrough"],
      },
    ],
    bonus: ["Social Media Post Templates", "Website Banner Designs"],
  },
  {
    id: "growth",
    name: "Growth Presence",
    tagline:
      "Website, store, branding and a marketing system engineered for growth.",
    price: "$899",
    icon: TrendingUp,
    color: "coral",
    featured: true,
    cta: "Get Growth Presence",
    bestFor:
      "Businesses with a product that works, ready to put real demand behind it.",
    inherits: "Everything in LaunchPad, plus:",
    groups: [
      {
        title: "Advanced Website & Store",
        items: [
          "Premium Website (Up to 10 Pages)",
          "Shopify or WooCommerce Store Setup",
          "Conversion-Focused Landing Pages",
          "Advanced Animations & Modern Effects",
          "Blog & Content Hub Integration",
          "Lead Capture Forms & Analytics Dashboard",
        ],
      },
      {
        title: "Social Media Management",
        items: [
          "Facebook & Instagram Management",
          "12 Professional Monthly Posts",
          "Short-Form Video & Reels Strategy",
          "Community Management (Comments & DMs)",
          "Content Calendar Planning",
        ],
      },
      {
        title: "Marketing & SEO",
        items: [
          "Meta Ads Setup & Management",
          "On-Page SEO & Keyword Mapping",
          "Meta Pixel + GA4 Analytics Setup",
          "Retargeting Ads Setup",
          "Email Marketing Setup & Flows",
          "AI-Based Audience & Competitor Research",
          "Monthly Performance Reports",
        ],
      },
      {
        title: "Growth Tools",
        items: [
          "AI Customer Chat Integration",
          "Lead Generation Funnel Setup",
          "Abandoned Cart / Follow-Up Sequences",
        ],
      },
    ],
    bonus: [
      "3 AI Ad Creatives Monthly",
      "Quarterly Strategy Review",
      "Priority Support",
    ],
  },
  {
    id: "automation",
    name: "AI Automation Suite",
    tagline:
      "The complete ecosystem, with AI agents running the repetitive work.",
    price: "$2,499",
    icon: Sparkles,
    color: "violet",
    featured: false,
    cta: "Get AI Automation Suite",
    bestFor:
      "Established teams whose growth is capped by manual follow-up and admin.",
    inherits: "Everything in Growth Presence, plus:",
    groups: [
      {
        title: "Premium Website & Systems",
        items: [
          "Custom Advanced Website or Web App",
          "Dynamic & Interactive UI/UX",
          "Custom Dashboard Integration",
          "Advanced Conversion Optimization",
          "Smart User Journey Optimization",
        ],
      },
      {
        title: "AI Automation",
        items: [
          "Custom AI Chatbot",
          "AI Customer Support System",
          "AI Lead Qualification Automation",
          "AI Appointment Booking System",
          "AI Sales Assistant",
          "AI Knowledge Base Training",
        ],
      },
      {
        title: "Business Automation",
        items: [
          "CRM Automation",
          "WhatsApp Automation",
          "Email Workflow Automation",
          "Workflow Automation (Zapier / Make / n8n)",
          "Smart Follow-Up Sequences",
          "Automated Lead Management",
        ],
      },
      {
        title: "Analytics & Scaling",
        items: [
          "Advanced Analytics & Tracking",
          "AI Performance Monitoring",
          "Automation Audit & Optimization",
          "Dedicated Project Manager",
        ],
      },
    ],
    bonus: [
      "Free AI Automation Consultation",
      "Business Process Audit",
      "Priority VIP Support",
      "Monthly Strategy Session",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const Packages = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Seo
        title="Packages & Pricing, Web, Branding, Marketing & AI | Codilated"
        description="Transparent packages from $399. Websites, Shopify and WordPress stores, branding, social media, SEO and AI automation, or any single service on its own."
      />

      {/* ════════ HERO ════════ */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-hero-gradient noise-overlay overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 -right-32 w-[500px] h-[500px] bg-coral/8 rounded-full blur-[120px]" />
          <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-sky/5 rounded-full blur-[140px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-coral/10 border border-coral/20 rounded-full text-coral text-xs font-mono font-semibold tracking-wider uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Pricing & Packages
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.08] tracking-tight mb-6 text-balance">
              Plans Built to{" "}
              <span className="gradient-text">Scale With You</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
              Website, store, branding, social media and marketing bundled into
              one plan, with AI automation layered on when you're ready. Pick the
              package that fits where your business is today.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ════════ PACKAGES GRID ════════ */}
      <section className="relative py-16 lg:py-24 bg-navy overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-coral/3 rounded-full blur-[200px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
          >
            {packages.map((pkg) => {
              const Icon = pkg.icon;
              return (
                <motion.div
                  key={pkg.id}
                  variants={itemVariants}
                  className={`relative flex flex-col rounded-2xl p-8 lg:p-10 transition-all duration-500 ${
                    pkg.featured
                      ? "bg-gradient-to-b from-coral/10 to-navy-light border-2 border-coral/40 shadow-2xl shadow-coral/10 lg:-translate-y-4"
                      : "glass-card hover:border-coral/20 hover:-translate-y-1"
                  }`}
                >
                  {pkg.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-coral-gradient text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg shadow-coral/30">
                        <Star className="w-3 h-3 fill-white" />
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Header */}
                  <div className="mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
                        pkg.featured
                          ? "bg-coral text-white"
                          : "bg-coral/10 text-coral"
                      }`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <h2 className="text-2xl font-black text-white mb-2">
                      {pkg.name}
                    </h2>
                    <p className="text-sm text-white/50 leading-relaxed mb-4">
                      {pkg.tagline}
                    </p>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3.5">
                      <p className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-wider mb-1.5">
                        Best For
                      </p>
                      <p className="text-xs text-white/70 leading-relaxed">
                        {pkg.bestFor}
                      </p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-8 pb-8 border-b border-white/10">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-black text-white">
                        {pkg.price}
                      </span>
                      <span className="text-sm text-white/40">one-time</span>
                    </div>
                  </div>

                  {/* Inherits note */}
                  {pkg.inherits && (
                    <p className="text-xs font-semibold text-coral uppercase tracking-wider mb-6">
                      {pkg.inherits}
                    </p>
                  )}

                  {/* Feature Groups */}
                  <div className="space-y-6 flex-1">
                    {pkg.groups.map((group) => (
                      <div key={group.title}>
                        <h3 className="text-sm font-bold text-white mb-3">
                          {group.title}
                        </h3>
                        <ul className="space-y-2.5">
                          {group.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2.5 text-sm text-white/60"
                            >
                              <Check className="w-4 h-4 text-coral flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {/* Bonus */}
                    {pkg.bonus && pkg.bonus.length > 0 && (
                      <div className="pt-6 border-t border-white/10">
                        <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                          <Gift className="w-4 h-4 text-coral" />
                          Bonus Inclusions
                        </h3>
                        <ul className="space-y-2.5">
                          {pkg.bonus.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2.5 text-sm text-white/60"
                            >
                              <Check className="w-4 h-4 text-coral flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="mt-8 pt-8 border-t border-white/10">
                    <Link
                      to="/contact"
                      className={`flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                        pkg.featured
                          ? "bg-coral-gradient text-white hover:-translate-y-0.5 shadow-lg shadow-coral/30 hover:shadow-coral/50"
                          : "bg-white/5 border border-white/10 text-white hover:bg-coral/10 hover:border-coral/30 hover:text-coral"
                      }`}
                    >
                      {pkg.cta}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ════════ STANDALONE SERVICES ════════ */}
      <section className="relative py-20 lg:py-28 bg-navy-mid overflow-hidden border-y border-white/5">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-sky/4 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 max-w-2xl mx-auto">
            <span className="section-tag">Prefer to Buy One Thing?</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mt-4 mb-5 text-balance">
              Every Service Is Available{" "}
              <span className="gradient-text">On Its Own</span>
            </h2>
            <p className="text-white/50 leading-relaxed">
              Packages are the efficient route, but you're never obliged to take
              one. Pick a single service and we'll quote it on its own scope.
            </p>
          </AnimatedSection>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {allServices.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.href} variants={itemVariants}>
                  <Link
                    to={service.href}
                    className="flex items-center gap-4 p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-coral/25 hover:bg-white/[0.05] transition-all duration-300 group h-full"
                  >
                    <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center flex-shrink-0 group-hover:bg-coral/20 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-coral" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-white group-hover:text-coral transition-colors duration-300">
                        {service.shortName}
                      </div>
                      <div className="text-[11px] text-white/35 mt-0.5">
                        Custom quote
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-coral group-hover:translate-x-0.5 transition-all duration-300 flex-shrink-0" />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          <AnimatedSection className="mt-10">
            <div className="glass-card p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Ongoing retainers & care plans
                </h3>
                <p className="text-sm text-white/50 leading-relaxed max-w-2xl">
                  Social media management, SEO and paid media, WordPress and
                  Shopify care plans, and AI automation monitoring all run as
                  monthly retainers. Three-month initial term, month to month
                  after that, and you keep every account in your own name.
                </p>
              </div>
              <Link
                to="/contact"
                className="btn-outline inline-flex items-center gap-2 text-sm whitespace-nowrap flex-shrink-0"
              >
                Discuss a Retainer
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ════════ CUSTOM PACKAGE CTA ════════ */}
      <section className="relative py-20 lg:py-24 bg-navy-mid overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-coral/5 rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="section-tag">Need Something Custom?</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-6 text-balance">
              Let's Design a Package{" "}
              <span className="gradient-text">Just for You</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10">
              Every business is different. If none of our packages fit
              perfectly, we'll build a custom solution scoped to your goals,
              timeline, and budget.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-coral inline-flex items-center gap-2 text-base px-8 py-4"
              >
                Request Custom Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="btn-outline inline-flex items-center gap-2 text-base px-8 py-4"
              >
                Learn About Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  );
};

export default Packages;
