import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  AlertCircle,
  ArrowRight,
  Loader2,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Zap,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import AnimatedSection from "../components/ui/AnimatedSection";
import Seo from "../components/ui/Seo";
import JsonLd from "../components/ui/JsonLd";
import { faqSchema } from "../seo/schemas";
import { serviceGroups, SERVICE_LABELS } from "../data/services";

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
const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "info@codilated.com",
    description: "We'll respond within 24 hours",
    href: "mailto:info@codilated.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+1 (805) 251-9188",
    description: "Mon–Fri, 9 AM – 6 PM EST",
    href: "tel:+18052519188",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Global, Remote First",
    description: "Serving clients worldwide",
    href: null,
  },
  {
    icon: Clock,
    title: "Response Time",
    value: "Under 24 Hours",
    description: "Typical first reply time",
    href: null,
  },
];

const faqs = [
  {
    question: "What services do you actually offer?",
    answer:
      "Ten connected service lines: AI automation, conversational AI and voice agents, custom AI and SaaS development, AI data analytics, full-stack web and app development, Shopify and e-commerce, WordPress and WooCommerce, social media marketing, digital marketing and SEO, and branding and creative design. Most clients start with one and add others as they grow.",
  },
  {
    question: "What types of businesses do you work with?",
    answer:
      "Startups, SMBs and enterprise teams across e-commerce and retail, professional services, healthcare, real estate, hospitality, education, SaaS and agencies. If you sell something online or want to, we've almost certainly shipped in a similar context.",
  },
  {
    question: "Can we hire you for just one thing?",
    answer:
      "Yes. Plenty of clients bring us in only for a Shopify build, a rebrand, an SEO programme or a single AI agent. There's no requirement to buy the whole stack. We'll tell you honestly if something else is a bigger constraint on your growth, then leave the decision to you.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A brand identity takes 2 to 4 weeks. A marketing site or WordPress build is 4 to 6 weeks. Shopify stores and web apps run 6 to 16 weeks depending on integrations. Simple AI automations deploy in about 2 weeks, larger AI platforms in 3 to 4 months. Marketing retainers are ongoing, with a 3-month initial commitment.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "Fixed-price for defined build projects, monthly retainers for marketing, social and maintenance. Our packages start at $399 for a launch website and brand kit and go up to $2,499 for the full AI automation suite. Custom scopes are quoted after a free discovery call, always in writing before any work starts.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes. Every build includes a post-launch support window. After that most clients move to a care plan or retainer covering updates, hosting, monitoring, new pages and campaigns, and priority fixes during peak trading periods.",
  },
  {
    question: "Can you work with our existing site, store or team?",
    answer:
      "Almost always. We take over inherited codebases, existing Shopify and WordPress installs and running ad accounts regularly. We start with an audit so nobody is guessing, and we're comfortable slotting in alongside an in-house team as long as ownership of each metric is clear.",
  },
];

// ─── FAQ Item Component ──────────────────────────────────────────────
const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className="glass-card overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="text-sm sm:text-base font-semibold text-white pr-4">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-coral flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-6 text-sm text-white/50 leading-relaxed">
          {answer}
        </p>
      </motion.div>
    </motion.div>
  );
};

// ─── EmailJS Config ──────────────────────────────────────────────────
// Public credentials are safe in the browser bundle. The "private key" from
// the EmailJS dashboard is for server-side strict mode only — never ship it.
const EMAILJS_SERVICE_ID = "service_tszw8fnå";
const EMAILJS_TEMPLATE_ID = "template_wxhypsd";
const EMAILJS_PUBLIC_KEY = "XCP4G2fWIRPUWixZ1";

const BUDGET_LABELS = {
  "under-1k": "Under $1,000",
  "1k-5k": "$1,000 – $5,000",
  "5k-10k": "$5,000 – $10,000",
  "10k-25k": "$10,000 – $25,000",
  "25k-50k": "$25,000 – $50,000",
  "50k+": "$50,000+",
  "monthly-retainer": "Monthly Retainer",
  "not-sure": "Not Sure Yet",
};

// ─── Component ───────────────────────────────────────────────────────
const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
          company: formData.company || "—",
          service: SERVICE_LABELS[formData.service] || "Not specified",
          budget: BUDGET_LABELS[formData.budget] || "Not specified",
          message: formData.message,
          submitted_at: new Date().toLocaleString("en-US", {
            dateStyle: "full",
            timeStyle: "short",
          }),
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setIsSubmitted(true);
    } catch (err) {
      console.error("EmailJS send failed:", err);
      setSubmitError(
        err?.text ||
          "We couldn't send your message. Please try again, or email info@codilated.com directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Seo
        title="Contact Codilated, Free Discovery Call & Project Quote"
        description="Book a free discovery call with Codilated. Get a transparent quote on AI automation, web and Shopify development, WordPress, branding, social media or SEO."
      />
      <JsonLd data={faqSchema(faqs)} />
      {/* ════════ HERO SECTION ════════ */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-hero-gradient overflow-hidden noise-overlay">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-coral/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-sky/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-coral/3 rounded-full blur-[200px]" />

          {/* Floating grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />

          {/* Animated floating particles */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-coral/20 rounded-full"
              style={{
                top: `${25 + i * 15}%`,
                left: `${15 + i * 20}%`,
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

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-32">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-tag"
          >
            Get In Touch
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-4 mb-6 text-balance"
          >
            Let's Build Your{" "}
            <span className="gradient-text">Next Move</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto"
          >
            A website, a store, a rebrand, a marketing engine or AI agents,
            tell us what you're trying to do and we'll come back with a plan,
            a timeline and a price.
          </motion.p>
        </div>

        {/* Hero bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent" />
      </section>

      {/* ════════ CONTACT INFO CARDS ════════ */}
      <section className="relative py-16 bg-navy border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactInfo.map((info) => {
              const Icon = info.icon;
              const Wrapper = info.href ? "a" : "div";
              const wrapperProps = info.href
                ? { href: info.href }
                : {};
              return (
                <motion.div key={info.title} variants={itemVariants}>
                  <Wrapper
                    {...wrapperProps}
                    className="block glass-card p-6 group hover:border-coral/20 transition-all duration-500 hover:-translate-y-2 text-center h-full"
                  >
                    <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-coral/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-coral" />
                    </div>
                    <h3 className="text-sm font-bold text-white/60 uppercase tracking-wider mb-2">
                      {info.title}
                    </h3>
                    <p className="text-base font-semibold text-white mb-1">
                      {info.value}
                    </p>
                    <p className="text-xs text-white/40">{info.description}</p>
                  </Wrapper>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ════════ CONTACT FORM + SIDE INFO ════════ */}
      <section className="relative py-24 lg:py-32 bg-navy overflow-hidden">
        {/* Background */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-coral/3 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky/3 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left, Form */}
            <AnimatedSection className="lg:col-span-3" direction="left">
              <div className="glass-card p-8 sm:p-10">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-400/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-white/50 max-w-md mx-auto mb-8">
                      Thank you for reaching out. We'll review your message and
                      get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          company: "",
                          service: "",
                          budget: "",
                          message: "",
                        });
                      }}
                      className="btn-outline inline-flex items-center gap-2"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                        Tell Us About Your Project
                      </h2>
                      <p className="text-white/40 text-sm">
                        Fill out the form below and we'll get back to you with a
                        free consultation.
                      </p>
                    </div>

                    <form
                      ref={formRef}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      {submitError && (
                        <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-sm text-red-200">
                          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                          <span>{submitError}</span>
                        </div>
                      )}
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-white/25 focus:outline-none focus:border-coral/50 focus:ring-1 focus:ring-coral/20 transition-colors duration-200"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@company.com"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-white/25 focus:outline-none focus:border-coral/50 focus:ring-1 focus:ring-coral/20 transition-colors duration-200"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-white/25 focus:outline-none focus:border-coral/50 focus:ring-1 focus:ring-coral/20 transition-colors duration-200"
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">
                            Service Interested In
                          </label>
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-coral/50 focus:ring-1 focus:ring-coral/20 transition-colors duration-200 appearance-none"
                            style={{
                              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "right 12px center",
                            }}
                          >
                            <option value="" className="bg-navy">
                              Select a service
                            </option>
                            {serviceGroups.map((group) => (
                              <optgroup
                                key={group.title}
                                label={group.title}
                                className="bg-navy"
                              >
                                {group.items.map((service) => (
                                  <option
                                    key={service.formValue}
                                    value={service.formValue}
                                    className="bg-navy"
                                  >
                                    {service.name}
                                  </option>
                                ))}
                              </optgroup>
                            ))}
                            <option value="other" className="bg-navy">
                              Other / Not Sure
                            </option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">
                            Budget Range
                          </label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-coral/50 focus:ring-1 focus:ring-coral/20 transition-colors duration-200 appearance-none"
                            style={{
                              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "right 12px center",
                            }}
                          >
                            <option value="" className="bg-navy">
                              Select budget range
                            </option>
                            {Object.entries(BUDGET_LABELS).map(
                              ([value, label]) => (
                                <option
                                  key={value}
                                  value={value}
                                  className="bg-navy"
                                >
                                  {label}
                                </option>
                              )
                            )}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">
                          Project Details *
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project, goals, and any specific requirements..."
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-white/25 focus:outline-none focus:border-coral/50 focus:ring-1 focus:ring-coral/20 transition-colors duration-200 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-coral inline-flex items-center gap-2 text-base px-8 py-4 w-full sm:w-auto justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </AnimatedSection>

            {/* Right, Side Info */}
            <AnimatedSection className="lg:col-span-2" direction="right">
              <div className="space-y-6">
                {/* Why reach out card */}
                <div className="glass-card p-8">
                  <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center mb-5">
                    <MessageSquare className="w-6 h-6 text-coral" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    What Happens Next?
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        step: "01",
                        text: "We review your message and project details",
                      },
                      {
                        step: "02",
                        text: "Schedule a free 30-minute discovery call",
                      },
                      {
                        step: "03",
                        text: "Receive a tailored proposal with timeline & pricing",
                      },
                      {
                        step: "04",
                        text: "Kick off with a dedicated team and a live preview link",
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-coral">
                            {item.step}
                          </span>
                        </div>
                        <span className="text-sm text-white/50 leading-relaxed">
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick CTA card */}
                <div className="glass-card p-8 border-coral/10">
                  <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center mb-5">
                    <Zap className="w-6 h-6 text-coral" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Need a Quick Answer?
                  </h3>
                  <p className="text-sm text-white/40 mb-5 leading-relaxed">
                    For urgent inquiries or quick questions, reach out directly
                    via email or phone.
                  </p>
                  <a
                    href="mailto:info@codilated.com"
                    className="btn-outline inline-flex items-center gap-2 text-sm w-full justify-center"
                  >
                    <Mail className="w-4 h-4" />
                    info@codilated.com
                  </a>
                </div>

                {/* Trust indicators */}
                <div className="glass-card p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { value: "150+", label: "Projects Delivered" },
                      { value: "<24h", label: "Response Time" },
                      { value: "98%", label: "Client Satisfaction" },
                      { value: "10", label: "Service Lines" },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center py-3">
                        <div className="text-xl font-black text-white">
                          {stat.value}
                        </div>
                        <div className="text-[11px] text-white/40 mt-1">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ════════ FAQ SECTION ════════ */}
      <section className="relative py-24 lg:py-32 bg-navy-mid overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sky/3 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="section-tag">FAQ</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-6 text-balance">
              Frequently Asked{" "}
              <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              Everything you need to know before getting started.
            </p>
          </AnimatedSection>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                index={i}
              />
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
              Whether it's a site, a store, a brand, a campaign or a team of AI
              agents, we're ready to bring your vision to life.
            </p>
            <a
              href="mailto:info@codilated.com"
              className="btn-coral inline-flex items-center gap-2 text-lg px-10 py-4"
            >
              Email Us Directly
              <ArrowRight className="w-5 h-5" />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
