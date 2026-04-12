import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Zap,
  Mail,
  Users,
  Database,
  Clock,
  TrendingUp,
  Shield,
  Settings,
  Workflow,
  BarChart3,
  RefreshCw,
} from "lucide-react";
import AnimatedSection from "../../components/ui/AnimatedSection";
import PageHero from "../../components/ui/PageHero";

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
    icon: Mail,
    title: "Email Marketing Automation",
    description:
      "AI-driven email campaigns with hyper-personalization, smart scheduling, and automated A/B testing that optimizes for conversions.",
  },
  {
    icon: Users,
    title: "AI Lead Generation",
    description:
      "Intelligent prospecting that identifies, qualifies, and scores leads automatically — filling your pipeline 24/7 on autopilot.",
  },
  {
    icon: Database,
    title: "Data Processing & ETL",
    description:
      "Automate data extraction, transformation, and loading across systems. No more manual data entry or error-prone spreadsheets.",
  },
  {
    icon: Settings,
    title: "HR & Resume Screening",
    description:
      "AI-powered resume parsing and candidate scoring that finds top talent in seconds, eliminating hours of manual screening.",
  },
  {
    icon: Workflow,
    title: "Workflow Orchestration",
    description:
      "Connect your existing tools and build intelligent multi-step workflows that adapt and improve with every execution.",
  },
  {
    icon: RefreshCw,
    title: "CRM Sync & Enrichment",
    description:
      "Keep your CRM data accurate and enriched automatically. AI fills in missing fields, deduplicates records, and logs activities.",
  },
];

const metrics = [
  { value: "340%", label: "Average Lead Growth", icon: TrendingUp },
  { value: "42 hrs", label: "Saved Per Week", icon: Clock },
  { value: "98%", label: "Automation Accuracy", icon: Shield },
  { value: "3x", label: "Faster Deployment", icon: Zap },
];

const processSteps = [
  {
    step: "01",
    title: "Workflow Audit",
    desc: "We map your current processes and identify the highest-impact automation opportunities using AI analysis.",
  },
  {
    step: "02",
    title: "AI Model Design",
    desc: "Our engineers design custom AI models tailored to your specific data, workflows, and business logic.",
  },
  {
    step: "03",
    title: "Build & Train",
    desc: "We build the automation pipeline, train models on your data, and run rigorous testing to ensure accuracy.",
  },
  {
    step: "04",
    title: "Deploy & Optimize",
    desc: "Launch to production with real-time monitoring. We continuously optimize performance based on live results.",
  },
];

const useCases = [
  "Automated lead qualification and CRM updates",
  "AI email outreach with dynamic personalization",
  "Invoice processing and financial reconciliation",
  "HR screening and candidate shortlisting",
  "Customer support ticket routing and triage",
  "Data extraction from documents and PDFs",
];

const AIAutomation = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* ════════ HERO ════════ */}
      <PageHero
        tag="Flagship Service"
        title="AI Automation & Process Optimization"
        description="Automate repetitive business processes with intelligent AI systems that work 24/7 — saving your team hundreds of hours every month."
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
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-coral/3 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="section-tag">What We Automate</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-6 text-balance">
              End-to-End <span className="gradient-text">AI Automation</span>{" "}
              Capabilities
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              From lead generation to HR workflows — we automate the tasks that
              drain your team's time and energy.
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

      {/* ════════ AUTOMATION PIPELINE VISUAL ════════ */}
      <section className="relative py-24 lg:py-32 bg-navy-mid overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-coral/5 rounded-full blur-[150px] -translate-y-1/2" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="section-tag">How It Works</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-6">
                Intelligent Pipelines That{" "}
                <span className="gradient-text">Never Sleep</span>
              </h2>
              <p className="text-white/50 text-lg mb-10 leading-relaxed">
                Our automation engine processes thousands of tasks simultaneously,
                learning and improving with every execution. Here's what a typical
                pipeline looks like in action.
              </p>

              <div className="space-y-4">
                {useCases.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
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

            <AnimatedSection direction="right">
              <div className="relative">
                <div className="glass-card p-8 space-y-4">
                  <div className="text-sm font-mono text-white/30 mb-2">
                    Live Automation Pipeline
                  </div>
                  {[
                    { step: "01", label: "Data Ingested", status: "complete", time: "0.1s" },
                    { step: "02", label: "AI Processing", status: "complete", time: "0.8s" },
                    { step: "03", label: "Quality Check", status: "complete", time: "1.2s" },
                    { step: "04", label: "Action Executed", status: "complete", time: "1.5s" },
                    { step: "05", label: "Results Synced", status: "active", time: "..." },
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
                <div className="absolute -inset-4 bg-coral/5 rounded-3xl blur-2xl -z-10" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ════════ PROCESS ════════ */}
      <section className="relative py-24 lg:py-32 bg-navy overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="section-tag">Our Process</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-6">
              From Audit to{" "}
              <span className="gradient-text">Fully Automated</span>
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((item, i) => (
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

      {/* ════════ TECH STACK VISUAL ════════ */}
      <section className="relative py-24 lg:py-32 bg-navy-mid overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sky/3 rounded-full blur-[150px] pointer-events-none" />

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
                      automation-config.yaml
                    </span>
                  </div>

                  <div className="font-mono text-sm space-y-2">
                    <div>
                      <span className="text-sky/70">pipeline</span>
                      <span className="text-white/40">:</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-sky/70">name</span>
                      <span className="text-white/40">: </span>
                      <span className="text-coral-light/80">lead-automation</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-sky/70">triggers</span>
                      <span className="text-white/40">:</span>
                    </div>
                    <div className="pl-8">
                      <span className="text-white/40">- </span>
                      <span className="text-coral-light/80">new_form_submission</span>
                    </div>
                    <div className="pl-8">
                      <span className="text-white/40">- </span>
                      <span className="text-coral-light/80">crm_webhook</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-sky/70">ai_model</span>
                      <span className="text-white/40">: </span>
                      <span className="text-coral-light/80">gpt-4-turbo</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-sky/70">actions</span>
                      <span className="text-white/40">:</span>
                    </div>
                    <div className="pl-8">
                      <span className="text-white/40">- </span>
                      <span className="text-coral-light/80">qualify_lead</span>
                    </div>
                    <div className="pl-8">
                      <span className="text-white/40">- </span>
                      <span className="text-coral-light/80">enrich_data</span>
                    </div>
                    <div className="pl-8">
                      <span className="text-white/40">- </span>
                      <span className="text-coral-light/80">send_personalized_email</span>
                    </div>
                    <div className="pl-8">
                      <span className="text-white/40">- </span>
                      <span className="text-coral-light/80">update_crm</span>
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/5">
                      <span className="text-green-400/50">
                        # Running 24/7 — 1,247 leads processed this week
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <span className="section-tag">Built for Scale</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 mb-6">
                Enterprise-Grade{" "}
                <span className="gradient-text">AI Infrastructure</span>
              </h2>
              <p className="text-white/50 text-lg mb-8 leading-relaxed">
                Our automation engine is built on robust, scalable infrastructure
                designed to handle millions of operations without breaking a sweat.
              </p>

              <div className="space-y-6">
                {[
                  { icon: BarChart3, title: "Real-Time Analytics", desc: "Monitor every automation with live dashboards and performance metrics." },
                  { icon: Shield, title: "Enterprise Security", desc: "End-to-end encryption, SOC 2 compliance, and strict access controls." },
                  { icon: Zap, title: "99.9% Uptime", desc: "Redundant infrastructure ensures your automations never miss a beat." },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      className="flex gap-4"
                    >
                      <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-coral" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                        <p className="text-white/40 text-sm">{item.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ════════ CTA ════════ */}
      <section className="relative py-24 lg:py-32 bg-navy overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-coral/5 rounded-full blur-[200px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="section-tag">Ready to Automate?</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-6 text-balance">
              Stop Wasting Hours on{" "}
              <span className="gradient-text">Manual Tasks</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10">
              Let our AI automation experts audit your workflows and show you
              exactly how much time and money you can save.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-coral inline-flex items-center gap-2 text-lg px-10 py-4"
              >
                Get a Free Audit
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services/conversational-ai"
                className="btn-outline inline-flex items-center gap-2 text-lg px-10 py-4"
              >
                Explore More Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  );
};

export default AIAutomation;
