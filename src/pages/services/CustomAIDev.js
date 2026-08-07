import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  CheckCircle2,
  Layers,
  Palette,
  Database,
  Cloud,
  Cpu,
  Lock,
  Rocket,
  GitBranch,
  Monitor,
  Smartphone,
  Blocks,
} from "lucide-react";
import AnimatedSection from "../../components/ui/AnimatedSection";
import PageHero from "../../components/ui/PageHero";
import RelatedServices from "../../components/ui/RelatedServices";
import Seo from "../../components/ui/Seo";
import JsonLd from "../../components/ui/JsonLd";
import { serviceSchema } from "../../seo/schemas";

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

const capabilities = [
  {
    icon: Layers,
    title: "AI-Powered Web Apps",
    description:
      "Full-stack web applications with AI baked into the core, from intelligent search to personalized content and smart recommendations.",
  },
  {
    icon: Blocks,
    title: "SaaS Product Development",
    description:
      "Build scalable SaaS products with AI features like usage prediction, automated workflows, and intelligent dashboards.",
  },
  {
    icon: Cpu,
    title: "Custom AI Model Integration",
    description:
      "Integrate GPT-4, Claude, Llama, or custom-trained models into your product with optimized inference and fine-tuning.",
  },
  {
    icon: Palette,
    title: "AI-Driven UX",
    description:
      "User interfaces that adapt to behavior, dynamic layouts, personalized content, and predictive navigation paths.",
  },
  {
    icon: Database,
    title: "Intelligent Data Layer",
    description:
      "Smart database architecture with AI-powered search, auto-categorization, and real-time data enrichment built-in.",
  },
  {
    icon: Cloud,
    title: "Cloud-Native Architecture",
    description:
      "Scalable, serverless infrastructure designed for AI workloads, auto-scaling, edge deployment, and cost optimization.",
  },
];

const metrics = [
  { value: "50+", label: "Apps Shipped", icon: Rocket },
  { value: "99.9%", label: "Uptime SLA", icon: Monitor },
  { value: "2x", label: "Faster to Market", icon: GitBranch },
  { value: "100%", label: "AI-Integrated", icon: Cpu },
];

const techStack = [
  { category: "Frontend", tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", tools: ["Node.js", "Python", "FastAPI", "GraphQL"] },
  { category: "AI / ML", tools: ["OpenAI", "LangChain", "PyTorch", "Hugging Face"] },
  { category: "Infrastructure", tools: ["AWS", "Vercel", "Docker", "PostgreSQL"] },
];

const CustomAIDev = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* ════════ HERO ════════ */}
      <Seo
        title="Custom AI Web & SaaS Development Services | Codilated"
        description="Full-stack, AI-powered web apps and SaaS products with intelligent personalization, smart recommendations, and ML systems built to scale."
      />
      <JsonLd
        data={serviceSchema({
          name: "Custom AI Web & SaaS Development",
          description:
            "Full-stack AI-powered web applications and SaaS products with intelligent personalization, recommendations, and integrated ML models.",
          slug: "/services/custom-ai-development",
          serviceType: "Custom AI Software Development",
        })}
      />
      <PageHero
        tag="Custom Development"
        title="Custom AI Web & SaaS Development"
        description="Build full-stack, AI-powered web applications and SaaS products that deliver intelligent experiences and scale with your business."
      />

      {/* ════════ METRICS BAR ════════ */}
      <section className="relative py-16 bg-navy border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {metrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-coral" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white">
                    {metric.value}
                  </div>
                  <div className="text-xs text-white/40 mt-1">
                    {metric.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ════════ CAPABILITIES ════════ */}
      <section className="relative py-24 lg:py-32 bg-navy overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-sky/3 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="section-tag">What We Build</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-6 text-balance">
              AI-First <span className="gradient-text">Products</span> That
              Scale
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              We don't bolt AI onto existing apps. We architect products where
              intelligence is woven into every layer of the stack.
            </p>
          </AnimatedSection>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {capabilities.map((item) => {
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

      {/* ════════ CODE VISUAL + FEATURES ════════ */}
      <section className="relative py-24 lg:py-32 bg-navy-mid overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-coral/5 rounded-full blur-[150px] -translate-y-1/2" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="glass-card p-8 relative overflow-hidden">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-coral" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                    <div className="w-3 h-3 rounded-full bg-green-400/60" />
                    <span className="ml-3 text-xs font-mono text-white/30">
                      ai-product.tsx
                    </span>
                  </div>

                  <div className="font-mono text-sm space-y-2">
                    <div>
                      <span className="text-coral/70">import</span>{" "}
                      <span className="text-white/40">{"{"}</span>{" "}
                      <span className="text-sky">useAI</span>{" "}
                      <span className="text-white/40">{"}"}</span>{" "}
                      <span className="text-coral/70">from</span>{" "}
                      <span className="text-coral-light/80">'@codilated/ai'</span>
                    </div>
                    <div className="mt-2">
                      <span className="text-coral/70">const</span>{" "}
                      <span className="text-sky">ProductPage</span>{" "}
                      <span className="text-white/40">= () =&gt; {"{"}</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-coral/70">const</span>{" "}
                      <span className="text-white/40">{"{"}</span>{" "}
                      <span className="text-sky">recommendations</span>
                      <span className="text-white/40">,</span>{" "}
                      <span className="text-sky">search</span>{" "}
                      <span className="text-white/40">{"}"}</span>{" "}
                      <span className="text-white/40">=</span>{" "}
                      <span className="text-green-400/70">useAI</span>
                      <span className="text-white/40">({"{"}</span>
                    </div>
                    <div className="pl-8">
                      <span className="text-sky/70">model</span>
                      <span className="text-white/40">: </span>
                      <span className="text-coral-light/80">'gpt-4-turbo'</span>
                      <span className="text-white/40">,</span>
                    </div>
                    <div className="pl-8">
                      <span className="text-sky/70">features</span>
                      <span className="text-white/40">: [</span>
                    </div>
                    <div className="pl-12">
                      <span className="text-coral-light/80">'personalization'</span>
                      <span className="text-white/40">,</span>
                    </div>
                    <div className="pl-12">
                      <span className="text-coral-light/80">'semantic-search'</span>
                      <span className="text-white/40">,</span>
                    </div>
                    <div className="pl-12">
                      <span className="text-coral-light/80">'auto-categorize'</span>
                    </div>
                    <div className="pl-8">
                      <span className="text-white/40">]</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-white/40">{"}"})</span>
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/5">
                      <span className="text-green-400/50">
                        {"// "}AI-powered features integrated in minutes
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <span className="section-tag">Development Approach</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 mb-6">
                Code That{" "}
                <span className="gradient-text">Thinks for Itself</span>
              </h2>
              <p className="text-white/50 text-lg mb-8 leading-relaxed">
                We build products where AI isn't a feature, it's the
                foundation. Every component is designed to learn, adapt, and
                deliver smarter experiences over time.
              </p>

              <div className="space-y-4">
                {[
                  "AI-powered search and recommendations built-in",
                  "Intelligent user onboarding that adapts to behavior",
                  "Automated content generation and moderation",
                  "Real-time analytics with predictive insights",
                  "Self-optimizing performance and caching",
                  "Role-based AI features with granular controls",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
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
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ════════ TECH STACK ════════ */}
      <section className="relative py-24 lg:py-32 bg-navy overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-coral/3 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="section-tag">Tech Stack</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-6">
              Modern Tools,{" "}
              <span className="gradient-text">Modern Results</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              We use the latest frameworks and AI tools to build products that
              are fast, scalable, and intelligent from day one.
            </p>
          </AnimatedSection>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {techStack.map((stack, i) => (
              <motion.div
                key={stack.category}
                variants={itemVariants}
                className="glass-card p-6 group hover:border-coral/20 transition-all duration-300"
              >
                <h3 className="text-sm font-mono text-coral font-semibold tracking-wider uppercase mb-4">
                  {stack.category}
                </h3>
                <div className="space-y-3">
                  {stack.tools.map((tool) => (
                    <div
                      key={tool}
                      className="flex items-center gap-3 text-white/60 text-sm"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-coral/40" />
                      {tool}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════ PROCESS ════════ */}
      <section className="relative py-24 lg:py-32 bg-navy-mid overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="section-tag">Development Process</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-6">
              From Concept to{" "}
              <span className="gradient-text">Production</span>
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery & Spec", desc: "We define your product's AI capabilities, user flows, and technical architecture." },
              { step: "02", title: "Design & Prototype", desc: "Interactive prototypes with AI features built-in, validated with real users." },
              { step: "03", title: "Build & Integrate", desc: "Full-stack development with AI models, APIs, and third-party integrations." },
              { step: "04", title: "Launch & Scale", desc: "Deploy to production with monitoring, CI/CD, and auto-scaling infrastructure." },
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

      {/* ════════ RELATED SERVICES ════════ */}
      <RelatedServices
        hrefs={[
          "/services/web-development",
          "/services/ai-data-analytics",
          "/services/branding-design",
        ]}
        background="bg-navy"
      />

      {/* ════════ CTA ════════ */}
      <section className="relative py-24 lg:py-32 bg-navy-mid overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-coral/5 rounded-full blur-[200px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="section-tag">Start Building</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-6 text-balance">
              Turn Your Idea Into an{" "}
              <span className="gradient-text">AI-Powered Product</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10">
              Whether it's a SaaS platform, internal tool, or customer-facing
              app, we'll build it with AI at the core.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-coral inline-flex items-center gap-2 text-lg px-10 py-4"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/packages"
                className="btn-outline inline-flex items-center gap-2 text-lg px-10 py-4"
              >
                Compare Packages
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  );
};

export default CustomAIDev;
