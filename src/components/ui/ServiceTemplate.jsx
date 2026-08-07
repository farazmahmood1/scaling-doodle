import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import PageHero from "./PageHero";
import RelatedServices from "./RelatedServices";
import Seo from "./Seo";
import JsonLd from "./JsonLd";
import { serviceSchema, faqSchema } from "../../seo/schemas";

/**
 * Data-driven layout shared by the non-AI service pages. Each page supplies its
 * own copy, metrics and a bespoke visual panel, so the pages stay distinctive
 * without duplicating several hundred lines of section markup apiece.
 */

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

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
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
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
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

/** Small helper so pages can build their bespoke visual panels consistently. */
export const PanelRow = ({ label, value, accent = "text-white/70" }) => (
  <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5">
    <span className="text-sm text-white/60">{label}</span>
    <span className={`text-sm font-medium ${accent}`}>{value}</span>
  </div>
);

const ServiceTemplate = ({
  seo,
  schema,
  hero,
  metrics = [],
  capabilities,
  splits = [],
  process,
  stack,
  faqs = [],
  related = [],
  cta,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Seo title={seo.title} description={seo.description} />
      <JsonLd data={serviceSchema(schema)} />
      {faqs.length > 0 && <JsonLd data={faqSchema(faqs)} />}

      <PageHero
        tag={hero.tag}
        title={hero.title}
        description={hero.description}
      />

      {/* ════════ METRICS BAR ════════ */}
      {metrics.length > 0 && (
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
      )}

      {/* ════════ CAPABILITIES ════════ */}
      {capabilities && (
        <section className="relative py-24 lg:py-32 bg-navy overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-coral/3 rounded-full blur-[150px] pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <span className="section-tag">{capabilities.tag}</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-6 text-balance">
                {capabilities.title}{" "}
                <span className="gradient-text">{capabilities.titleAccent}</span>
                {capabilities.titleTail ? ` ${capabilities.titleTail}` : ""}
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto text-lg">
                {capabilities.intro}
              </p>
            </AnimatedSection>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {capabilities.items.map((item) => {
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
      )}

      {/* ════════ SPLIT SECTIONS ════════ */}
      {splits.map((split, idx) => (
        <section
          key={split.title}
          className={`relative py-24 lg:py-32 overflow-hidden ${
            idx % 2 === 0 ? "bg-navy-mid" : "bg-navy"
          }`}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div
              className={`absolute top-1/2 w-[500px] h-[500px] rounded-full blur-[150px] -translate-y-1/2 ${
                idx % 2 === 0 ? "left-0 bg-coral/5" : "right-0 bg-sky/5"
              }`}
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection
                direction="left"
                className={split.reverse ? "lg:order-2" : ""}
              >
                <span className="section-tag">{split.tag}</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-6">
                  {split.title}{" "}
                  <span className="gradient-text">{split.titleAccent}</span>
                </h2>
                <p className="text-white/50 text-lg mb-10 leading-relaxed">
                  {split.body}
                </p>

                <div className="space-y-5">
                  {split.bullets.map((item, i) => (
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

              <AnimatedSection
                direction="right"
                className={split.reverse ? "lg:order-1" : ""}
              >
                <div className="relative">
                  {split.visual}
                  <div className="absolute -inset-4 bg-coral/5 rounded-3xl blur-2xl -z-10" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      ))}

      {/* ════════ PROCESS ════════ */}
      {process && (
        <section className="relative py-24 lg:py-32 bg-navy overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <span className="section-tag">{process.tag}</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-6">
                {process.title}{" "}
                <span className="gradient-text">{process.titleAccent}</span>
              </h2>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.steps.map((item, i) => (
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
      )}

      {/* ════════ TECH / DELIVERY STACK ════════ */}
      {stack && (
        <section className="relative py-24 lg:py-32 bg-navy-mid overflow-hidden">
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sky/3 rounded-full blur-[150px] pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-14 max-w-2xl mx-auto">
              <span className="section-tag">{stack.tag}</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 mb-5">
                {stack.title}{" "}
                <span className="gradient-text">{stack.titleAccent}</span>
              </h2>
              <p className="text-white/50 text-lg leading-relaxed">
                {stack.body}
              </p>
            </AnimatedSection>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {stack.groups.map((group) => (
                <motion.div
                  key={group.label}
                  variants={itemVariants}
                  className="glass-card p-6"
                >
                  <h3 className="text-[11px] font-mono font-bold text-white/40 uppercase tracking-wider mb-4">
                    {group.label}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs text-white/60"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* ════════ FAQ ════════ */}
      {faqs.length > 0 && (
        <section className="relative py-24 lg:py-32 bg-navy overflow-hidden">
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sky/3 rounded-full blur-[150px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-14">
              <span className="section-tag">FAQ</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 mb-5 text-balance">
                Questions We Get{" "}
                <span className="gradient-text">All the Time</span>
              </h2>
            </AnimatedSection>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <FAQItem key={faq.question} index={i} {...faq} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ════════ RELATED SERVICES ════════ */}
      <RelatedServices hrefs={related} background="bg-navy" />

      {/* ════════ CTA ════════ */}
      <section className="relative py-24 lg:py-32 bg-navy-mid overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-coral/5 rounded-full blur-[200px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="section-tag">{cta.tag}</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-6 text-balance">
              {cta.title} <span className="gradient-text">{cta.titleAccent}</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10">
              {cta.body}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to={cta.primary.to}
                className="btn-coral inline-flex items-center gap-2 text-lg px-10 py-4"
              >
                {cta.primary.label}
                <ArrowRight className="w-5 h-5" />
              </Link>
              {cta.secondary && (
                <Link
                  to={cta.secondary.to}
                  className="btn-outline inline-flex items-center gap-2 text-lg px-10 py-4"
                >
                  {cta.secondary.label}
                </Link>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  );
};

export default ServiceTemplate;
