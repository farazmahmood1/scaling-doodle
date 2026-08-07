import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  Shield,
  Clock,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  Users,
  Globe,
  ChevronRight,
  Play,
  Check,
  Rocket,
  Star,
  Search,
  BadgeCheck,
  Layers,
  ShoppingBag,
  Stethoscope,
  Building2,
  GraduationCap,
  UtensilsCrossed,
  Home as HomeIcon,
  Handshake,
} from "lucide-react";
import AnimatedSection from "../components/ui/AnimatedSection";
import Seo from "../components/ui/Seo";
import { serviceGroups } from "../data/services";

// ─── Animation Variants ─────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
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
const whyChooseUs = [
  {
    icon: Zap,
    title: "AI-First, Not AI-Bolted-On",
    description:
      "Every website, store and campaign we ship is built to plug into automation from day one, so growth doesn't mean more headcount.",
  },
  {
    icon: Layers,
    title: "One Team, Whole Stack",
    description:
      "Brand, design, development, commerce, marketing and AI under one roof. No handoffs between three agencies who blame each other.",
  },
  {
    icon: Shield,
    title: "You Own Everything",
    description:
      "Code, ad accounts, analytics, design source files and domains stay in your name. There's no platform you have to keep paying us for.",
  },
  {
    icon: Clock,
    title: "Fast, Without the Corners Cut",
    description:
      "First deployable release in two weeks on most builds. We work in short sprints with a live preview URL from the very start.",
  },
  {
    icon: TrendingUp,
    title: "Measured on Revenue",
    description:
      "We report on leads, orders, conversion rate and hours reclaimed. Impressions and likes are inputs, not the scoreboard.",
  },
  {
    icon: Users,
    title: "Specialists, Not Generalists",
    description:
      "Your Shopify build is run by people who only do commerce. Your AI agents by ML engineers. Nobody is learning on your budget.",
  },
];

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "10", label: "Service Lines" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "15+", label: "Countries Served" },
];

const journey = [
  {
    step: "01",
    icon: Sparkles,
    title: "Brand",
    desc: "Positioning, identity and messaging that make you the obvious choice.",
    href: "/services/branding-design",
  },
  {
    step: "02",
    icon: Layers,
    title: "Build",
    desc: "A website, store or app engineered for speed, search and conversion.",
    href: "/services/web-development",
  },
  {
    step: "03",
    icon: TrendingUp,
    title: "Grow",
    desc: "SEO, paid, social and email that fill the funnel you just built.",
    href: "/services/digital-marketing",
  },
  {
    step: "04",
    icon: Zap,
    title: "Automate",
    desc: "AI agents that handle the follow-up, support and admin behind it all.",
    href: "/services/ai-automation",
  },
];

const industries = [
  { icon: ShoppingBag, name: "E-Commerce & Retail" },
  { icon: Building2, name: "B2B & Professional Services" },
  { icon: Stethoscope, name: "Healthcare & Clinics" },
  { icon: HomeIcon, name: "Real Estate & Property" },
  { icon: UtensilsCrossed, name: "Hospitality & Food" },
  { icon: GraduationCap, name: "Education & Coaching" },
  { icon: Globe, name: "SaaS & Technology" },
  { icon: Handshake, name: "Agencies & Startups" },
];

const homePackages = [
  {
    name: "LaunchPad",
    tagline: "Website, branding and a professional digital foundation.",
    price: "$399",
    icon: Rocket,
    featured: false,
    highlights: [
      "Premium 5-Page Website + Custom UI/UX",
      "Logo, Brand Kit & Business Email Setup",
      "Basic SEO + AI-Assisted Copywriting",
      "1 Month Technical Support",
    ],
  },
  {
    name: "Growth Presence",
    tagline: "Website + branding + social and marketing built for growth.",
    price: "$899",
    icon: TrendingUp,
    featured: true,
    highlights: [
      "Everything in LaunchPad",
      "10-Page Site or Shopify/WordPress Store",
      "Meta Ads, SEO, Email & Analytics",
      "12 Monthly Posts + Content Strategy",
    ],
  },
  {
    name: "AI Automation Suite",
    tagline: "The full ecosystem, with AI running the repetitive work.",
    price: "$2,499",
    icon: Sparkles,
    featured: false,
    highlights: [
      "Everything in Growth Presence",
      "Custom AI Chatbot + Sales Assistant",
      "CRM, WhatsApp & Email Automation",
      "Dedicated PM + VIP Priority Support",
    ],
  },
];

// ─── Component ───────────────────────────────────────────────────────
const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Seo
        title="AI, Web, E-Commerce & Marketing Agency | Codilated"
        description="Codilated is an AI-first digital agency building AI automation, websites, Shopify and WordPress stores, branding, social media and marketing that grows revenue."
      />
      {/* ════════ HERO SECTION ════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient noise-overlay">
        {/* Background Decorations */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Gradient orbs */}
          <div className="absolute top-20 -right-32 w-[500px] h-[500px] bg-coral/8 rounded-full blur-[120px] animate-pulse-slow" />
          <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-sky/5 rounded-full blur-[140px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-coral/3 rounded-full blur-[200px]" />

          {/* Floating grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />

          {/* Animated floating particles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-coral/20 rounded-full"
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 18}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left, Text Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-coral/10 border border-coral/20 rounded-full text-coral text-xs font-mono font-semibold tracking-wider uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  AI-First Digital Agency
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.08] tracking-tight mb-6"
              >
                We Build the{" "}
                <span className="gradient-text">Systems</span>{" "}
                That Grow Your Business
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-white/50 max-w-lg mb-10 leading-relaxed"
              >
                AI agents and automation, websites and web apps, Shopify and
                WordPress stores, branding, social media and marketing, delivered
                by one team that expresses ideas through code.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4"
              >
                <Link to="/contact" className="btn-coral inline-flex items-center gap-2 text-base px-8 py-4">
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/packages"
                  className="btn-outline inline-flex items-center gap-2 text-base px-8 py-4"
                >
                  <Play className="w-4 h-4" />
                  See Packages
                </Link>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-8 mt-14 pt-8 border-t border-white/10"
              >
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl sm:text-3xl font-black text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/40 mt-1">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right, Hero Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative hidden lg:block"
            >
              {/* Main glass card */}
              <div className="relative">
                <div className="glass-card p-8 relative overflow-hidden">
                  {/* Animated header bar */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-coral" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                    <div className="w-3 h-3 rounded-full bg-green-400/60" />
                    <span className="ml-3 text-xs font-mono text-white/30">
                      growth-stack.js
                    </span>
                  </div>

                  {/* Code-style content */}
                  <div className="font-mono text-sm space-y-2">
                    <div>
                      <span className="text-coral/70">const</span>{" "}
                      <span className="text-sky">business</span>{" "}
                      <span className="text-white/40">=</span>{" "}
                      <span className="text-coral/70">await</span>{" "}
                      <span className="text-white/60">codilated</span>
                      <span className="text-coral">.</span>
                      <span className="text-green-400/70">build</span>
                      <span className="text-white/40">({"{"}</span>
                    </div>
                    <div className="pl-6">
                      <span className="text-sky/70">brand</span>
                      <span className="text-white/40">: </span>
                      <span className="text-coral-light/80">'identity + messaging'</span>
                      <span className="text-white/40">,</span>
                    </div>
                    <div className="pl-6">
                      <span className="text-sky/70">store</span>
                      <span className="text-white/40">: </span>
                      <span className="text-coral-light/80">'shopify-plus'</span>
                      <span className="text-white/40">,</span>
                    </div>
                    <div className="pl-6">
                      <span className="text-sky/70">marketing</span>
                      <span className="text-white/40">: [</span>
                    </div>
                    <div className="pl-10">
                      <span className="text-coral-light/80">'seo'</span>
                      <span className="text-white/40">,</span>{" "}
                      <span className="text-coral-light/80">'paid_social'</span>
                      <span className="text-white/40">,</span>
                    </div>
                    <div className="pl-10">
                      <span className="text-coral-light/80">'lifecycle_email'</span>
                    </div>
                    <div className="pl-6">
                      <span className="text-white/40">],</span>
                    </div>
                    <div className="pl-6">
                      <span className="text-sky/70">ai_agents</span>
                      <span className="text-white/40">: </span>
                      <span className="text-coral-light/80">'always_on'</span>
                    </div>
                    <div>
                      <span className="text-white/40">{"}"})</span>
                      <span className="text-white/40">;</span>
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/5">
                      <span className="text-green-400/50">
                        {"// "}✓ launched in 6 weeks, 42hrs/week reclaimed
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating badge, top right */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 glass-card px-4 py-2 flex items-center gap-2"
                >
                  <div className="w-8 h-8 rounded-lg bg-green-400/10 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">+340%</div>
                    <div className="text-[10px] text-white/40">Lead Growth</div>
                  </div>
                </motion.div>

                {/* Floating badge, bottom left */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-4 glass-card px-4 py-2 flex items-center gap-2"
                >
                  <div className="w-8 h-8 rounded-lg bg-coral/10 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-coral" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">42 hrs</div>
                    <div className="text-[10px] text-white/40">Saved / Week</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Hero bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent" />
      </section>

      {/* ════════ SERVICES GRID ════════ */}
      <section className="relative py-24 lg:py-32 bg-navy overflow-hidden">
        {/* Background */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-coral/3 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="section-tag">What We Do</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-6 text-balance">
              Ten Services.{" "}
              <span className="gradient-text">One Accountable Team.</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              AI automation is our flagship, but a smart agent is useless bolted
              to a slow website and a weak brand. So we build all of it.
            </p>
          </AnimatedSection>

          {serviceGroups.map((group, gi) => (
            <div key={group.title} className={gi > 0 ? "mt-16" : ""}>
              <AnimatedSection className="flex items-center gap-4 mb-8">
                <h3 className="text-sm font-mono font-bold text-coral uppercase tracking-widest whitespace-nowrap">
                  {group.title}
                </h3>
                <div className="flex-1 h-px bg-white/10" />
                <span className="text-xs text-white/30 whitespace-nowrap hidden sm:block">
                  {group.caption}
                </span>
              </AnimatedSection>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {group.items.map((service) => {
                  const Icon = service.icon;
                  return (
                    <motion.div key={service.href} variants={itemVariants}>
                      <Link
                        to={service.href}
                        className="block glass-card p-7 group hover:border-coral/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover h-full"
                      >
                        <div className="flex items-start justify-between mb-5">
                          <div className="w-12 h-12 rounded-2xl bg-coral/10 flex items-center justify-center group-hover:bg-coral/20 transition-colors duration-300">
                            <Icon className="w-6 h-6 text-coral" />
                          </div>
                          {service.tag && (
                            <span className="px-2.5 py-1 text-[10px] font-bold bg-coral/10 text-coral rounded-lg uppercase tracking-wider border border-coral/20">
                              {service.tag}
                            </span>
                          )}
                        </div>

                        <h4 className="text-lg font-bold text-white mb-2.5 group-hover:text-coral transition-colors duration-300 leading-snug">
                          {service.shortName}
                        </h4>

                        <p className="text-white/40 text-sm leading-relaxed mb-5">
                          {service.description}
                        </p>

                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-coral opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════ THE JOURNEY / HOW IT FITS TOGETHER ════════ */}
      <section className="relative py-24 lg:py-32 bg-navy-mid overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-sky/5 rounded-full blur-[150px] -translate-y-1/2" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16 max-w-2xl mx-auto">
            <span className="section-tag">How It Fits Together</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-6 text-balance">
              Brand. Build. Grow.{" "}
              <span className="gradient-text">Automate.</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed">
              Most businesses buy these four things from four different vendors
              and spend the year translating between them. You can start
              anywhere in this loop, and we'll pick up from where you are.
            </p>
          </AnimatedSection>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {journey.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.step} variants={itemVariants}>
                  <Link
                    to={item.href}
                    className="relative flex flex-col h-full glass-card p-8 group hover:border-coral/20 transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center group-hover:bg-coral/20 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-coral" />
                      </div>
                      <span className="text-3xl font-black text-coral/10 group-hover:text-coral/20 transition-colors duration-300">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-coral transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed flex-1">
                      {item.desc}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-coral mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Explore
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ════════ AI AUTOMATION SPOTLIGHT ════════ */}
      <section className="relative py-24 lg:py-32 bg-navy overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-coral/5 rounded-full blur-[150px] -translate-y-1/2" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left, Feature List */}
            <AnimatedSection direction="left">
              <span className="section-tag">Flagship Service</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-6">
                AI Automation That{" "}
                <span className="gradient-text">Works 24/7</span>
              </h2>
              <p className="text-white/50 text-lg mb-10 leading-relaxed">
                This is what makes everything else compound. AI agents handle
                the follow-up, qualification, support and admin that normally
                forces you to hire, so the traffic we send you actually gets
                converted.
              </p>

              <div className="space-y-5">
                {[
                  "Business process automation with custom AI models",
                  "AI lead generation that fills your pipeline on autopilot",
                  "Smart email marketing with hyper-personalization",
                  "AI chat and voice agents that answer every enquiry instantly",
                  "AI resume screening that finds top talent in seconds",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-coral/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-coral" />
                    </div>
                    <span className="text-white/70 text-sm leading-relaxed">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10">
                <Link
                  to="/services/ai-automation"
                  className="btn-coral inline-flex items-center gap-2"
                >
                  Explore AI Automation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </AnimatedSection>

            {/* Right, Visual Card */}
            <AnimatedSection direction="right">
              <div className="relative">
                <div className="glass-card p-8 space-y-6">
                  {/* Automation Flow Visual */}
                  <div className="text-sm font-mono text-white/30 mb-2">
                    Automation Pipeline
                  </div>
                  {[
                    { step: "01", label: "Lead Captured", status: "complete", time: "0.2s" },
                    { step: "02", label: "AI Qualification", status: "complete", time: "1.4s" },
                    { step: "03", label: "Personalized Email Sent", status: "complete", time: "2.1s" },
                    { step: "04", label: "CRM Updated", status: "complete", time: "2.3s" },
                    { step: "05", label: "Follow-up Scheduled", status: "active", time: "..." },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className={`flex items-center gap-4 p-4 rounded-xl border transition-colors duration-300 ${
                        item.status === "active"
                          ? "bg-coral/5 border-coral/20"
                          : "bg-white/[0.02] border-white/5"
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                          item.status === "active"
                            ? "bg-coral text-white"
                            : "bg-white/5 text-white/40"
                        }`}
                      >
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-white/80">
                          {item.label}
                        </div>
                      </div>
                      <div className="text-xs font-mono text-white/30">
                        {item.time}
                      </div>
                      {item.status === "complete" && (
                        <CheckCircle2 className="w-4 h-4 text-green-400/60" />
                      )}
                      {item.status === "active" && (
                        <div className="w-4 h-4 rounded-full border-2 border-coral border-t-transparent animate-spin" />
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Glow effect behind */}
                <div className="absolute -inset-4 bg-coral/5 rounded-3xl blur-2xl -z-10" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ════════ WHY CHOOSE US ════════ */}
      <section className="relative py-24 lg:py-32 bg-navy-mid overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sky/3 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="section-tag">Why Codilated</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-6 text-balance">
              Built Different.{" "}
              <span className="gradient-text">Built Smarter.</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              We don't just build software or run campaigns. We build the
              connected system that turns attention into revenue, then automate
              the parts that shouldn't need a human.
            </p>
          </AnimatedSection>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {whyChooseUs.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="glass-card p-8 group hover:border-coral/20 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center mb-5 group-hover:bg-coral/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-coral" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ════════ INDUSTRIES ════════ */}
      <section className="relative py-20 lg:py-24 bg-navy overflow-hidden border-y border-white/5">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 max-w-2xl mx-auto">
            <span className="section-tag">Who We Work With</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mt-4 mb-5 text-balance">
              Industries We Know{" "}
              <span className="gradient-text">Inside Out</span>
            </h2>
            <p className="text-white/50 leading-relaxed">
              From single-founder startups to multi-location operators, we've
              shipped in enough verticals to skip the twelve-week learning curve.
            </p>
          </AnimatedSection>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.name}
                  variants={itemVariants}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-coral/20 transition-colors duration-300"
                >
                  <Icon className="w-5 h-5 text-coral flex-shrink-0" />
                  <span className="text-sm text-white/60 leading-snug">
                    {industry.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ════════ PACKAGES SECTION ════════ */}
      <section className="relative py-24 lg:py-32 bg-navy-mid overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-coral/4 rounded-full blur-[180px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="section-tag">Packages & Pricing</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-6 text-balance">
              Plans Built to{" "}
              <span className="gradient-text">Scale With You</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              Website, branding, social and marketing bundled into one plan, with
              AI automation layered on when you're ready for it.
            </p>
          </AnimatedSection>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
          >
            {homePackages.map((pkg) => {
              const Icon = pkg.icon;
              return (
                <motion.div
                  key={pkg.name}
                  variants={itemVariants}
                  className={`relative flex flex-col rounded-2xl p-8 transition-all duration-500 ${
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

                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
                      pkg.featured
                        ? "bg-coral text-white"
                        : "bg-coral/10 text-coral"
                    }`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-black text-white mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed mb-6">
                    {pkg.tagline}
                  </p>

                  <div className="mb-6 pb-6 border-b border-white/10">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-black text-white">
                        {pkg.price}
                      </span>
                      <span className="text-xs text-white/40">one-time</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-white/60"
                      >
                        <Check className="w-4 h-4 text-coral flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/packages"
                    className={`flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                      pkg.featured
                        ? "bg-coral-gradient text-white hover:-translate-y-0.5 shadow-lg shadow-coral/30"
                        : "bg-white/5 border border-white/10 text-white hover:bg-coral/10 hover:border-coral/30 hover:text-coral"
                    }`}
                  >
                    View Full Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          <AnimatedSection className="text-center mt-12">
            <Link
              to="/packages"
              className="inline-flex items-center gap-2 text-coral font-semibold text-sm hover:gap-3 transition-all duration-300"
            >
              Compare all packages
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ════════ LADDER / HOW WE WORK ════════ */}
      <section className="relative py-24 lg:py-32 bg-navy overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-coral/4 rounded-full blur-[180px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-16 max-w-2xl">
            <span className="section-tag">How We Work Together</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-6 text-balance">
              A ladder, not a{" "}
              <span className="gradient-text">leap.</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed">
              We understand your business before recommending a single tool.
              Here's the path.
            </p>
          </AnimatedSection>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
          >
            {[
              {
                step: "01",
                icon: Play,
                title: "Discovery Call",
                price: "Free",
                desc: "Thirty minutes on your goals, your bottlenecks and what's already working. You leave knowing your single most important next move, whether or not you hire us.",
                meta: "30 min · Live · Book any week",
                forWho: "Owners and executives working out where to invest next",
                cta: "Book Your Call",
                featured: false,
              },
              {
                step: "02",
                icon: Search,
                title: "The Growth Audit",
                price: "$3,000",
                desc: "We map your website, funnel, brand and operations, then show exactly where revenue is leaking and where AI saves the most time. A prioritised roadmap, not a tool list.",
                meta: "14 days · Fixed price · No maybes",
                forWho: "Leaders who need a clear plan to take to their board",
                cta: "Learn About the Audit",
                featured: true,
              },
              {
                step: "03",
                icon: BadgeCheck,
                title: "The Build",
                price: "$15K–$75K",
                desc: "The two or three projects that pay for themselves fastest, built and shipped into your business. Site, store, brand, campaigns or automation, in production, not in a deck.",
                meta: "Custom scope · In production",
                forWho: "Companies with a roadmap who need it built and shipped",
                cta: "Scope Your Build",
                featured: false,
              },
            ].map((tier) => {
              const Icon = tier.icon;
              return (
                <motion.div
                  key={tier.step}
                  variants={itemVariants}
                  className={`relative flex flex-col rounded-2xl p-8 transition-all duration-500 ${
                    tier.featured
                      ? "bg-gradient-to-b from-coral/10 to-navy-light border-2 border-coral/40 shadow-2xl shadow-coral/10"
                      : "glass-card hover:border-coral/20 hover:-translate-y-1"
                  }`}
                >
                  {tier.featured && (
                    <div className="absolute -top-4 left-8">
                      <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-coral-gradient text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg shadow-coral/30">
                        <Star className="w-3 h-3 fill-white" />
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Top row: icon + price */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        tier.featured
                          ? "bg-coral text-white"
                          : "bg-coral/10 text-coral"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-coral font-bold text-base">
                      {tier.price}
                    </span>
                  </div>

                  {/* Step number */}
                  <div className="text-xs font-mono text-white/30 mb-2">
                    {tier.step}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-black text-white mb-4">
                    {tier.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-white/50 leading-relaxed mb-6">
                    {tier.desc}
                  </p>

                  {/* Meta line */}
                  <p className="text-sm font-semibold text-white/80 mb-6">
                    {tier.meta}
                  </p>

                  {/* Who it's for */}
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6 flex-1">
                    <p className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-wider mb-2">
                      Who It's For
                    </p>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {tier.forWho}
                    </p>
                  </div>

                  {/* CTA */}
                  <Link
                    to="/contact"
                    className={`flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                      tier.featured
                        ? "bg-coral-gradient text-white hover:-translate-y-0.5 shadow-lg shadow-coral/30"
                        : "bg-white/5 border border-white/10 text-white hover:bg-coral/10 hover:border-coral/30 hover:text-coral"
                    }`}
                  >
                    {tier.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ════════ FINAL CTA ════════ */}
      <section className="relative py-24 lg:py-32 bg-navy-mid overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-coral/5 rounded-full blur-[200px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="section-tag">Ready to Start?</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-6 text-balance">
              Let's Build Something{" "}
              <span className="gradient-text">Extraordinary</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10">
              A new website, a Shopify store, a rebrand, a marketing engine or a
              team of AI agents, tell us where you are and we'll tell you what
              we'd do first.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-coral inline-flex items-center gap-2 text-lg px-10 py-4">
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/about" className="btn-outline inline-flex items-center gap-2 text-lg px-10 py-4">
                Learn About Us
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
