import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { allServices } from "../../data/services";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  },
};

/**
 * Cross-links a service page to the neighbouring services people usually
 * bundle with it. Pass the hrefs you want, in the order you want them.
 */
const RelatedServices = ({
  hrefs = [],
  tag = "Works Well With",
  title = "Pair This With",
  titleAccent = "the Rest of the Stack",
  intro = "Most of our clients combine two or three of these. Each one makes the others work harder.",
  background = "bg-navy",
}) => {
  const items = hrefs
    .map((href) => allServices.find((s) => s.href === href))
    .filter(Boolean);

  if (items.length === 0) return null;

  return (
    <section
      className={`relative py-20 lg:py-24 ${background} border-y border-white/5 overflow-hidden`}
    >
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-sky/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12 max-w-2xl mx-auto">
          <span className="section-tag">{tag}</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mt-4 mb-5 text-balance">
            {title} <span className="gradient-text">{titleAccent}</span>
          </h2>
          <p className="text-white/50 leading-relaxed">{intro}</p>
        </AnimatedSection>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.href} variants={itemVariants}>
                <Link
                  to={service.href}
                  className="flex flex-col h-full glass-card p-6 group hover:border-coral/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-coral/10 flex items-center justify-center mb-4 group-hover:bg-coral/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-coral" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-coral transition-colors duration-300">
                    {service.shortName}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-coral mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default RelatedServices;
