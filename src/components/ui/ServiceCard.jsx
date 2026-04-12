import React from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ icon: Icon, title, description, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="glass-card p-8 group cursor-pointer hover:border-coral/30 transition-colors duration-300"
    >
      <div className="w-14 h-14 rounded-xl bg-coral/10 flex items-center justify-center mb-6 group-hover:bg-coral/20 transition-colors duration-300">
        {Icon && <Icon className="w-7 h-7 text-coral" />}
      </div>

      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-coral transition-colors duration-300">
        {title}
      </h3>

      <p className="text-white/50 leading-relaxed text-sm">
        {description}
      </p>
    </motion.div>
  );
};

export default ServiceCard;
