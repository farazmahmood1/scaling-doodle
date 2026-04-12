import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  TrendingUp,
  PieChart,
  LineChart,
  Database,
  Brain,
  Target,
  Eye,
  Gauge,
  FileBarChart,
  Activity,
  Lightbulb,
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
    icon: Brain,
    title: "Predictive Analytics",
    description:
      "Machine learning models that forecast trends, customer behavior, churn risk, and revenue — so you can act before it happens.",
  },
  {
    icon: PieChart,
    title: "Business Intelligence Dashboards",
    description:
      "Real-time, interactive dashboards that surface the KPIs that matter — with AI-generated insights and anomaly detection.",
  },
  {
    icon: Database,
    title: "Data Pipeline Automation",
    description:
      "Automated ETL pipelines that clean, transform, and unify data from dozens of sources into a single source of truth.",
  },
  {
    icon: Target,
    title: "Customer Segmentation",
    description:
      "AI-powered clustering that identifies your highest-value customer segments and reveals hidden growth opportunities.",
  },
  {
    icon: Eye,
    title: "Anomaly Detection",
    description:
      "Real-time monitoring that catches outliers, fraud patterns, and operational anomalies before they impact your business.",
  },
  {
    icon: FileBarChart,
    title: "Automated Reporting",
    description:
      "AI-generated reports with natural language summaries — delivered on schedule with actionable recommendations.",
  },
];

const metrics = [
  { value: "10M+", label: "Data Points Processed", icon: Database },
  { value: "95%", label: "Prediction Accuracy", icon: Target },
  { value: "60%", label: "Faster Decisions", icon: Gauge },
  { value: "3x", label: "Revenue Insights", icon: TrendingUp },
];

const insightTypes = [
  { label: "Revenue Forecasting", value: "+23%", trend: "up" },
  { label: "Churn Prediction", value: "4.2%", trend: "down" },
  { label: "Customer Lifetime Value", value: "$2,847", trend: "up" },
  { label: "Conversion Rate", value: "12.8%", trend: "up" },
  { label: "Acquisition Cost", value: "$34", trend: "down" },
];

const AIDataAnalytics = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* ════════ HERO ════════ */}
      <PageHero
        tag="Data & Analytics"
        title="AI Data & Predictive Analytics"
        description="Transform raw data into predictive business insights that drive smarter, faster decision-making across your entire organization."
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
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sky/3 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="section-tag">Analytics Capabilities</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-6 text-balance">
              Data-Driven{" "}
              <span className="gradient-text">Intelligence</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              We turn your raw data into a competitive advantage with AI-powered
              analytics that predict, detect, and recommend.
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

      {/* ════════ DASHBOARD VISUAL + INSIGHTS ════════ */}
      <section className="relative py-24 lg:py-32 bg-navy-mid overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-coral/5 rounded-full blur-[150px] -translate-y-1/2" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="glass-card p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-sm font-mono text-white/30">
                      AI Analytics Dashboard
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-xs text-green-400/60">Live</span>
                    </div>
                  </div>

                  {/* Chart visualization */}
                  <div className="flex items-end gap-2 mb-8 h-32">
                    {[35, 52, 41, 67, 55, 78, 62, 89, 74, 95, 82, 91].map(
                      (h, i) => (
                        <motion.div
                          key={i}
                          className="flex-1 bg-coral/30 rounded-t-md hover:bg-coral/50 transition-colors duration-200"
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.05, duration: 0.5 }}
                        />
                      )
                    )}
                  </div>

                  {/* Insight cards */}
                  <div className="space-y-3">
                    {insightTypes.map((insight, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.08 }}
                        className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5"
                      >
                        <span className="text-sm text-white/60">
                          {insight.label}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-white">
                            {insight.value}
                          </span>
                          <TrendingUp
                            className={`w-3.5 h-3.5 ${
                              insight.trend === "up"
                                ? "text-green-400"
                                : "text-coral rotate-180"
                            }`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="absolute -inset-4 bg-coral/5 rounded-3xl blur-2xl -z-10" />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <span className="section-tag">Predictive Power</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 mb-6">
                See the Future of{" "}
                <span className="gradient-text">Your Business</span>
              </h2>
              <p className="text-white/50 text-lg mb-8 leading-relaxed">
                Our predictive models analyze historical patterns and real-time
                signals to forecast what's coming — so you can make decisions
                with confidence, not guesswork.
              </p>

              <div className="space-y-4">
                {[
                  "Revenue forecasting with 95%+ accuracy",
                  "Customer churn prediction before it happens",
                  "Demand forecasting for inventory optimization",
                  "Market trend detection from unstructured data",
                  "Automated anomaly alerts in real-time",
                  "Natural language insights delivered weekly",
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

      {/* ════════ DATA PIPELINE ════════ */}
      <section className="relative py-24 lg:py-32 bg-navy overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky/3 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="section-tag">Data Infrastructure</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 mb-6">
                From Raw Data to{" "}
                <span className="gradient-text">Actionable Insights</span>
              </h2>
              <p className="text-white/50 text-lg mb-8 leading-relaxed">
                We build the entire data pipeline — from ingestion and cleaning to
                model training and dashboard delivery. No data silo left behind.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Database, title: "Data Ingestion", desc: "Connect to any data source — APIs, databases, spreadsheets, IoT sensors, and more." },
                  { icon: Activity, title: "Real-Time Processing", desc: "Stream processing pipelines that transform data as it flows, enabling instant insights." },
                  { icon: Brain, title: "ML Model Training", desc: "Custom models trained on your data, continuously improved with automated retraining." },
                  { icon: Lightbulb, title: "Insight Delivery", desc: "AI-generated summaries, alerts, and recommendations delivered where your team works." },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      className="flex gap-4"
                    >
                      <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-coral" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">
                          {item.title}
                        </h4>
                        <p className="text-white/40 text-sm">{item.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <div className="glass-card p-8 space-y-4">
                  <div className="text-sm font-mono text-white/30 mb-2">
                    Data Pipeline Status
                  </div>
                  {[
                    { step: "01", label: "Sources Connected", count: "12 active", status: "complete" },
                    { step: "02", label: "Data Cleaned & Unified", count: "2.4M rows", status: "complete" },
                    { step: "03", label: "Models Trained", count: "6 models", status: "complete" },
                    { step: "04", label: "Predictions Generated", count: "847 today", status: "complete" },
                    { step: "05", label: "Reports Delivered", count: "Next: 9 AM", status: "active" },
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
                        {item.count}
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
                <div className="absolute -inset-4 bg-sky/5 rounded-3xl blur-2xl -z-10" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ════════ PROCESS ════════ */}
      <section className="relative py-24 lg:py-32 bg-navy-mid overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="section-tag">Our Process</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-6">
              Data to <span className="gradient-text">Decisions</span> in Four
              Steps
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Data Audit", desc: "We assess your existing data sources, quality, and infrastructure to identify opportunities." },
              { step: "02", title: "Pipeline Design", desc: "Architect a scalable data pipeline that connects, cleans, and unifies all your data." },
              { step: "03", title: "Model & Build", desc: "Train predictive models on your data and build dashboards that surface actionable insights." },
              { step: "04", title: "Monitor & Refine", desc: "Continuous monitoring, model retraining, and insight delivery to keep you ahead." },
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

      {/* ════════ CTA ════════ */}
      <section className="relative py-24 lg:py-32 bg-navy overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-coral/5 rounded-full blur-[200px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="section-tag">Unlock Your Data</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-6 text-balance">
              Make Smarter Decisions With{" "}
              <span className="gradient-text">AI Analytics</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10">
              Stop guessing and start knowing. Let our AI analytics team show
              you what your data has been trying to tell you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-coral inline-flex items-center gap-2 text-lg px-10 py-4"
              >
                Get a Data Audit
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services/ai-automation"
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

export default AIDataAnalytics;
