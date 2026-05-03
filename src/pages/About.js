import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Lightbulb,
  Rocket,
  Handshake,
  ExternalLink,
  Link2,
  Award,
  Building2,
  Users,
  Globe,
  Sparkles,
  ChevronRight,
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
const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We stay ahead of the curve, constantly exploring cutting-edge AI research and translating it into real-world solutions.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "Every project is benchmarked against measurable outcomes, time saved, revenue gained, efficiency improved.",
  },
  {
    icon: Handshake,
    title: "True Partnership",
    description:
      "We embed ourselves into your team, understanding your business deeply before writing a single line of code.",
  },
  {
    icon: Heart,
    title: "Craft & Quality",
    description:
      "We take pride in clean architecture, robust testing, and solutions that stand the test of time.",
  },
  {
    icon: Rocket,
    title: "Speed to Market",
    description:
      "We move fast without cutting corners, agile sprints, rapid prototyping, and iterative delivery.",
  },
  {
    icon: Eye,
    title: "Radical Transparency",
    description:
      "No black boxes. We keep you informed at every stage with clear communication and open roadmaps.",
  },
];

const team = [
  {
    name: "Joseph Lee",
    role: "AI Architect",
    bio: "AI strategist with 10+ years building intelligent systems for enterprise clients worldwide.",
    image: "JA",
  },
  {
    name: "Sarah Khan",
    role: "Head of AI Engineering",
    bio: "Former ML lead at a Fortune 500. Specializes in NLP, computer vision, and production AI pipelines.",
    image: "SK",
  },
  {
    name: "Fentola James",
    role: "Lead Full-Stack Developer",
    bio: "Architect behind our SaaS platform. Obsessed with performance, scalability, and developer experience.",
    image: "FJ",
  },
  {
    name: "Victoria Zoe",
    role: "AI Solutions Architect",
    bio: "Bridges the gap between business needs and AI capabilities. Expert in automation design and process optimization.",
    image: "VZ",
  },
];

const milestones = [
  { year: "2019", title: "Founded", desc: "Codilated was born from a simple belief, AI should be accessible to every business." },
  { year: "2020", title: "First Enterprise Client", desc: "Landed our first Fortune 500 contract, automating supply chain workflows." },
  { year: "2022", title: "50+ Projects Delivered", desc: "Expanded our team and crossed the 50-project milestone with a 98% satisfaction rate." },
  { year: "2024", title: "Global Expansion", desc: "Opened operations across 3 continents, serving clients in 15+ countries." },
  { year: "2025", title: "150+ Projects & Counting", desc: "Recognized as a top AI solutions provider with 40+ enterprise clients." },
];

const companyStats = [
  { icon: Award, value: "150+", label: "Projects Delivered" },
  { icon: Building2, value: "40+", label: "Enterprise Clients" },
  { icon: Users, value: "25+", label: "AI Specialists" },
  { icon: Globe, value: "15+", label: "Countries Served" },
];

// ─── Component ───────────────────────────────────────────────────────
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Seo
        title="About Codilated, AI Engineers Building Smarter Workflows"
        description="Meet the AI engineering team behind Codilated. We design intelligent automation, conversational AI, and custom ML systems that deliver measurable ROI."
      />
      {/* ════════ HERO SECTION ════════ */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-hero-gradient noise-overlay">
        {/* Background Decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 -right-32 w-[500px] h-[500px] bg-coral/8 rounded-full blur-[120px] animate-pulse-slow" />
          <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-sky/5 rounded-full blur-[140px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-coral/3 rounded-full blur-[200px]" />

          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />

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
          <div className="max-w-3xl">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-coral/10 border border-coral/20 rounded-full text-coral text-xs font-mono font-semibold tracking-wider uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  About Codilated
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.08] tracking-tight mb-6"
              >
                We're on a Mission to Make{" "}
                <span className="gradient-text">AI Accessible</span> for Every Business
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-white/50 max-w-2xl mb-10 leading-relaxed"
              >
                Codilated is a team of AI engineers, architects, and strategists
                building intelligent automation that transforms how companies
                operate, compete, and grow.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4"
              >
                <Link to="/contact" className="btn-coral inline-flex items-center gap-2 text-base px-8 py-4">
                  Work With Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/services/ai-automation"
                  className="btn-outline inline-flex items-center gap-2 text-base px-8 py-4"
                >
                  Our Services
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent" />
      </section>

      {/* ════════ COMPANY STATS ════════ */}
      <section className="relative py-16 bg-navy border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {companyStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-coral" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/40">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ════════ OUR STORY ════════ */}
      <section className="relative py-24 lg:py-32 bg-navy overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-coral/3 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="section-tag">Our Story</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-6">
                From a Bold Idea to a{" "}
                <span className="gradient-text">Global AI Partner</span>
              </h2>
              <div className="space-y-5 text-white/50 text-lg leading-relaxed">
                <p>
                  Codilated started with a simple observation: most businesses know
                  AI can help them, but they don't know where to start. The gap
                  between cutting-edge research and practical implementation was
                  massive.
                </p>
                <p>
                  We set out to bridge that gap, building a team that combines deep
                  AI expertise with real-world business understanding. Today, we've
                  delivered 150+ projects across industries, helping companies
                  automate workflows, build intelligent products, and unlock the
                  full potential of their data.
                </p>
                <p>
                  Our approach is simple: understand the problem deeply, design
                  the right AI solution, build it with engineering excellence, and
                  deploy it fast.
                </p>
              </div>
            </AnimatedSection>

            {/* Story Visual, Timeline */}
            <AnimatedSection direction="right">
              <div className="relative">
                <div className="glass-card p-8 space-y-1">
                  <div className="text-sm font-mono text-white/30 mb-4">
                    Our Journey
                  </div>
                  {milestones.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="flex gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-coral/20 transition-colors duration-300"
                    >
                      <div className="w-14 h-8 rounded-lg bg-coral/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-coral font-mono">
                          {item.year}
                        </span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white/80">
                          {item.title}
                        </div>
                        <div className="text-xs text-white/40 mt-1 leading-relaxed">
                          {item.desc}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="absolute -inset-4 bg-coral/5 rounded-3xl blur-2xl -z-10" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ════════ OUR VALUES ════════ */}
      <section className="relative py-24 lg:py-32 bg-navy-mid overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sky/3 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="section-tag">Our Values</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-6 text-balance">
              The Principles That{" "}
              <span className="gradient-text">Guide Us</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              These aren't just words on a wall. They're the standards we hold
              ourselves to on every project, every day.
            </p>
          </AnimatedSection>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {values.map((item) => {
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

      {/* ════════ TEAM SECTION ════════ */}
      <section className="relative py-24 lg:py-32 bg-navy overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-coral/3 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="section-tag">Our Team</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-6 text-balance">
              Meet the <span className="gradient-text">Minds</span> Behind
              Codilated
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              A tight-knit team of AI engineers, architects, and strategists who
              are passionate about building intelligent systems.
            </p>
          </AnimatedSection>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                className="glass-card p-8 text-center group hover:border-coral/20 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Avatar */}
                <div className="w-20 h-20 rounded-2xl bg-coral/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-coral/20 transition-colors duration-300">
                  <span className="text-2xl font-black text-coral">
                    {member.image}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1">
                  {member.name}
                </h3>
                <div className="text-sm text-coral font-medium mb-3">
                  {member.role}
                </div>
                <p className="text-white/40 text-sm leading-relaxed mb-5">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-3">
                  <button className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-coral/20 transition-colors duration-300">
                    <ExternalLink className="w-4 h-4 text-white/40 hover:text-coral" />
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-coral/20 transition-colors duration-300">
                    <Link2 className="w-4 h-4 text-white/40 hover:text-coral" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════ MISSION & VISION ════════ */}
      <section className="relative py-24 lg:py-32 bg-navy-mid overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-coral/5 rounded-full blur-[150px] -translate-y-1/2" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <AnimatedSection direction="left">
              <div className="glass-card p-10 h-full group hover:border-coral/20 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-coral/10 flex items-center justify-center mb-6 group-hover:bg-coral/20 transition-colors duration-300">
                  <Target className="w-7 h-7 text-coral" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Our Mission
                </h3>
                <p className="text-white/50 text-lg leading-relaxed">
                  To democratize artificial intelligence by building practical,
                  powerful AI solutions that any business can deploy, regardless
                  of size, industry, or technical expertise. We believe the
                  companies that embrace AI today will define the industries of
                  tomorrow.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="glass-card p-10 h-full group hover:border-coral/20 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-coral/10 flex items-center justify-center mb-6 group-hover:bg-coral/20 transition-colors duration-300">
                  <Eye className="w-7 h-7 text-coral" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Our Vision
                </h3>
                <p className="text-white/50 text-lg leading-relaxed">
                  A world where every business has an AI co-pilot, automating the
                  mundane, surfacing insights from data, and empowering teams to
                  focus on creative, high-impact work. We envision a future where
                  human ingenuity and AI capability work hand in hand.
                </p>
              </div>
            </AnimatedSection>
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
            <span className="section-tag">Join Us</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-6 text-balance">
              Ready to Build the{" "}
              <span className="gradient-text">Future Together?</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10">
              Whether you're looking to automate your business, build an
              AI-powered product, or just explore what's possible, let's talk.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-coral inline-flex items-center gap-2 text-lg px-10 py-4">
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/blog" className="btn-outline inline-flex items-center gap-2 text-lg px-10 py-4">
                Read Our Blog
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
