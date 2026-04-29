import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  MessageSquare,
  Code2,
  BarChart3,
  Zap,
  Shield,
  Clock,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  Users,
  Globe,
  Award,
  ChevronRight,
  Play,
} from "lucide-react";
import AnimatedSection from "../components/ui/AnimatedSection";
import Seo from "../components/ui/Seo";

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
const services = [
  {
    icon: Bot,
    title: "AI Automation & Process Optimization",
    description:
      "Automate repetitive business processes, lead generation, email marketing, and HR workflows with intelligent AI systems.",
    href: "/services/ai-automation",
    tag: "FLAGSHIP",
    color: "coral",
  },
  {
    icon: MessageSquare,
    title: "Conversational AI & Voice Agents",
    description:
      "Deploy AI chatbots across websites, WhatsApp, and social media, plus voice agents that handle calls autonomously.",
    href: "/services/conversational-ai",
    tag: null,
    color: "sky",
  },
  {
    icon: Code2,
    title: "Custom AI Web & SaaS Development",
    description:
      "Build full-stack AI-powered web applications and SaaS tools with intelligent personalization and recommendations.",
    href: "/services/custom-ai-development",
    tag: null,
    color: "emerald",
  },
  {
    icon: BarChart3,
    title: "AI Data & Predictive Analytics",
    description:
      "Transform raw data into predictive business insights that drive smarter, faster decision-making.",
    href: "/services/ai-data-analytics",
    tag: null,
    color: "violet",
  },
];

const whyChooseUs = [
  {
    icon: Zap,
    title: "AI-First Approach",
    description: "Every solution is built with artificial intelligence at its core, not bolted on as an afterthought.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Your data is protected with end-to-end encryption, SOC 2 practices, and strict access controls.",
  },
  {
    icon: Clock,
    title: "Rapid Deployment",
    description: "Go from concept to production in weeks, not months. We move fast without cutting corners.",
  },
  {
    icon: TrendingUp,
    title: "Measurable ROI",
    description: "Every automation we build is benchmarked against real KPIs, time saved, costs reduced, revenue gained.",
  },
  {
    icon: Users,
    title: "Dedicated AI Team",
    description: "Work with specialized AI engineers, not generalists. Our team lives and breathes machine learning.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Our AI solutions are designed to scale across regions, languages, and millions of data points.",
  },
];

const stats = [
  { value: "150+", label: "AI Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "40+", label: "Enterprise Clients" },
  { value: "10x", label: "Average ROI" },
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
        title="AI Automation & Custom AI Development Agency | Codilated"
        description="Codilated builds AI automation, conversational chatbots, voice agents, and custom AI/SaaS apps that scale operations and deliver up to 10x ROI."
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
                  AI-Powered Solutions
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.08] tracking-tight mb-6"
              >
                We Build{" "}
                <span className="gradient-text">AI Automations</span>{" "}
                That Scale Your Business
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-white/50 max-w-lg mb-10 leading-relaxed"
              >
                From intelligent process automation to conversational AI agents 
                we express ideas through code that transforms how businesses operate.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4"
              >
                <Link to="/contact" className="btn-coral inline-flex items-center gap-2 text-base px-8 py-4">
                  Start Your AI Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/services/ai-automation"
                  className="btn-outline inline-flex items-center gap-2 text-base px-8 py-4"
                >
                  <Play className="w-4 h-4" />
                  Explore Services
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
                      ai-automation-engine.js
                    </span>
                  </div>

                  {/* Code-style content */}
                  <div className="font-mono text-sm space-y-2">
                    <div>
                      <span className="text-coral/70">const</span>{" "}
                      <span className="text-sky">automation</span>{" "}
                      <span className="text-white/40">=</span>{" "}
                      <span className="text-coral/70">await</span>{" "}
                      <span className="text-white/60">codilated</span>
                      <span className="text-coral">.</span>
                      <span className="text-green-400/70">deploy</span>
                      <span className="text-white/40">({"{"}</span>
                    </div>
                    <div className="pl-6">
                      <span className="text-sky/70">type</span>
                      <span className="text-white/40">: </span>
                      <span className="text-coral-light/80">'lead-gen'</span>
                      <span className="text-white/40">,</span>
                    </div>
                    <div className="pl-6">
                      <span className="text-sky/70">ai_model</span>
                      <span className="text-white/40">: </span>
                      <span className="text-coral-light/80">'gpt-4-turbo'</span>
                      <span className="text-white/40">,</span>
                    </div>
                    <div className="pl-6">
                      <span className="text-sky/70">scale</span>
                      <span className="text-white/40">: </span>
                      <span className="text-coral-light/80">'enterprise'</span>
                      <span className="text-white/40">,</span>
                    </div>
                    <div className="pl-6">
                      <span className="text-sky/70">automations</span>
                      <span className="text-white/40">: [</span>
                    </div>
                    <div className="pl-10">
                      <span className="text-coral-light/80">'email_outreach'</span>
                      <span className="text-white/40">,</span>
                    </div>
                    <div className="pl-10">
                      <span className="text-coral-light/80">'lead_scoring'</span>
                      <span className="text-white/40">,</span>
                    </div>
                    <div className="pl-10">
                      <span className="text-coral-light/80">'crm_sync'</span>
                    </div>
                    <div className="pl-6">
                      <span className="text-white/40">]</span>
                    </div>
                    <div>
                      <span className="text-white/40">{"}"})</span>
                      <span className="text-white/40">;</span>
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/5">
                      <span className="text-green-400/50">
                        {"// "}✓ 3 automations deployed, saving 42hrs/week
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
              AI Solutions Built to{" "}
              <span className="gradient-text">Transform</span> Your Business
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              We deliver end-to-end AI services, from automating your workflows
              to building intelligent products that give you a competitive edge.
            </p>
          </AnimatedSection>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.title} variants={itemVariants}>
                  <Link
                    to={service.href}
                    className="block glass-card p-8 group hover:border-coral/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover h-full"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-coral/10 flex items-center justify-center group-hover:bg-coral/20 transition-colors duration-300">
                        <Icon className="w-7 h-7 text-coral" />
                      </div>
                      {service.tag && (
                        <span className="px-2.5 py-1 text-[10px] font-bold bg-coral/10 text-coral rounded-lg uppercase tracking-wider border border-coral/20">
                          {service.tag}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-coral transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-white/40 text-sm leading-relaxed mb-6">
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
      </section>

      {/* ════════ AI AUTOMATION SPOTLIGHT ════════ */}
      <section className="relative py-24 lg:py-32 bg-navy-mid overflow-hidden">
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
                Our flagship AI automation service handles your most time-consuming
                tasks, lead generation, email outreach, data processing, and HR
                screening, so your team can focus on what matters.
              </p>

              <div className="space-y-5">
                {[
                  "Business process automation with custom AI models",
                  "AI lead generation that fills your pipeline on autopilot",
                  "Smart email marketing with hyper-personalization",
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
      <section className="relative py-24 lg:py-32 bg-navy overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sky/3 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="section-tag">Why Codilated</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-6 text-balance">
              Built Different.{" "}
              <span className="gradient-text">Built Smarter.</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              We don't just build software. We build intelligent systems that
              learn, adapt, and deliver measurable results.
            </p>
          </AnimatedSection>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {whyChooseUs.map((item, i) => {
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

      {/* ════════ PROCESS SECTION ════════ */}
      <section className="relative py-24 lg:py-32 bg-navy-mid overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="section-tag">Our Process</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-6">
              From Idea to <span className="gradient-text">AI-Powered</span>{" "}
              Reality
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "We analyze your workflows to find the highest-impact automation opportunities." },
              { step: "02", title: "Design", desc: "Our AI architects design a custom solution tailored to your specific needs." },
              { step: "03", title: "Develop", desc: "We build, train, and test your AI system with rigorous quality assurance." },
              { step: "04", title: "Deploy", desc: "Launch to production with monitoring, support, and continuous optimization." },
            ].map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 0.1}>
                <div className="glass-card p-8 text-center group hover:border-coral/20 transition-all duration-300 h-full">
                  <div className="text-5xl font-black text-coral/10 group-hover:text-coral/20 transition-colors duration-300 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ FINAL CTA ════════ */}
      <section className="relative py-24 lg:py-32 bg-navy overflow-hidden">
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
              Whether you need AI automation, conversational agents, or a custom
              AI-powered platform, we're ready to bring your vision to life.
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
