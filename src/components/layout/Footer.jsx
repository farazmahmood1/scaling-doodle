import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Heart,
} from "lucide-react";
import { FaLinkedinIn, FaXTwitter, FaGithub, FaInstagram } from "react-icons/fa6";

const footerSections = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
      { name: "Careers", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "AI Automation", href: "/services/ai-automation", badge: "Hot" },
      { name: "Conversational AI", href: "/services/conversational-ai" },
      { name: "Custom AI Development", href: "/services/custom-ai-development" },
      { name: "AI Data Analytics", href: "/services/ai-data-analytics" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Case Studies", href: "/blog" },
      { name: "AI Insights", href: "/blog" },
      { name: "Documentation", href: "/blog" },
      { name: "FAQ", href: "/contact" },
    ],
  },
];

const socialLinks = [
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaXTwitter, href: "#", label: "Twitter" },
  { icon: FaGithub, href: "#", label: "GitHub" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
];

const Footer = () => {
  return (
    <footer className="relative bg-navy border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-coral/5 rounded-full blur-[120px] pointer-events-none" />

      {/* CTA Banner */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative -top-16 bg-gradient-to-r from-coral to-coral-light rounded-2xl p-8 sm:p-12 overflow-hidden"
        >
          {/* CTA decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                Ready to Automate Your Business?
              </h3>
              <p className="text-white/80 text-sm sm:text-base max-w-lg">
                Let's build intelligent AI systems that save you time, cut costs,
                and scale your operations effortlessly.
              </p>
            </div>
            <Link
              to="/contact"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-coral font-bold px-8 py-4 rounded-xl hover:bg-white/90 transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
            >
              Start a Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center group mb-6">
              <img
                src="/logo.png"
                alt="Codilated"
                className="h-10 object-contain"
              />
            </Link>

            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              Expressing Ideas Through Code. We build intelligent AI solutions
              that transform businesses and create competitive advantages.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:hello@codilated.com"
                className="flex items-center gap-3 text-sm text-white/50 hover:text-coral transition-colors duration-200"
              >
                <Mail className="w-4 h-4 text-coral flex-shrink-0" />
                hello@codilated.com
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-sm text-white/50 hover:text-coral transition-colors duration-200"
              >
                <Phone className="w-4 h-4 text-coral flex-shrink-0" />
                +1 (234) 567-890
              </a>
              <div className="flex items-center gap-3 text-sm text-white/50">
                <MapPin className="w-4 h-4 text-coral flex-shrink-0" />
                Global — Remote First
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {footerSections.map((section) => (
            <div key={section.title} className="lg:col-span-2">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="group flex items-center gap-2 text-sm text-white/40 hover:text-coral transition-colors duration-200"
                    >
                      {link.name}
                      {link.badge && (
                        <span className="px-1.5 py-0.5 text-[9px] font-bold bg-coral/20 text-coral rounded-md uppercase">
                          {link.badge}
                        </span>
                      )}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Column */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              Stay Updated
            </h4>
            <p className="text-sm text-white/40 mb-4">
              Get AI insights and updates delivered to your inbox.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-3"
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-white/30 focus:outline-none focus:border-coral/50 focus:ring-1 focus:ring-coral/20 transition-colors duration-200"
              />
              <button
                type="submit"
                className="w-full px-4 py-2.5 bg-coral/10 text-coral text-sm font-semibold rounded-lg hover:bg-coral/20 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3 mt-12 mb-8">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-coral hover:border-coral/30 hover:bg-coral/5 transition-all duration-200"
              >
                <Icon className="w-4 h-4" />
              </a>
            );
          })}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Codilated. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-white/30">
            Built with
            <Heart className="w-3 h-3 text-coral mx-1 fill-coral" />
            by Codilated Team
          </div>
          <div className="flex items-center gap-6 text-xs text-white/30">
            <a href="#" className="hover:text-coral transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-coral transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
