import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight, Zap } from "lucide-react";
import { serviceGroups } from "../../data/services";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "#", hasDropdown: true },
  { name: "Packages", href: "/packages" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const location = useLocation();

  // Scroll listener for transparent-to-solid transition
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  }, [location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsServicesOpen(false), 200);
  };

  const isActive = (href) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  const isServiceActive = location.pathname.startsWith("/services");

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-navy/95 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <img
                src="/logo.png"
                alt="Codilated"
                className="h-10 object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div
                    key={link.name}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        isServiceActive
                          ? "text-coral"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Services Dropdown */}
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          // x lives in the motion transform, not a Tailwind
                          // class: framer-motion writes an inline transform that
                          // would otherwise clobber -translate-x-1/2 and leave
                          // the panel left-anchored (overflowing at ~1024px).
                          initial={{ opacity: 0, y: 10, scale: 0.95, x: "-50%" }}
                          animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
                          exit={{ opacity: 0, y: 10, scale: 0.95, x: "-50%" }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-1/2 mt-3 w-[720px] max-w-[calc(100vw-2rem)] p-3 rounded-2xl bg-navy-light/95 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/30"
                        >
                          {/* Dropdown arrow */}
                          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-navy-light/95 border-l border-t border-white/10 rotate-45" />

                          <div className="relative z-10 grid grid-cols-2 gap-3">
                            {serviceGroups.map((group) => (
                              <div key={group.title}>
                                <div className="px-3 pb-2 mb-1 border-b border-white/5">
                                  <div className="text-[10px] font-mono font-bold text-coral uppercase tracking-wider">
                                    {group.title}
                                  </div>
                                  <div className="text-[10px] text-white/30 mt-0.5">
                                    {group.caption}
                                  </div>
                                </div>

                                <div className="space-y-0.5">
                                  {group.items.map((service) => {
                                    const Icon = service.icon;
                                    const active =
                                      location.pathname === service.href;
                                    return (
                                      <Link
                                        key={service.href}
                                        to={service.href}
                                        className={`flex items-start gap-3 p-2.5 rounded-xl transition-all duration-200 group/item ${
                                          active
                                            ? "bg-coral/10 border border-coral/20"
                                            : "hover:bg-white/5 border border-transparent"
                                        }`}
                                      >
                                        <div
                                          className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
                                            active
                                              ? "bg-coral text-white"
                                              : "bg-white/5 text-coral group-hover/item:bg-coral/10"
                                          }`}
                                        >
                                          <Icon className="w-4 h-4" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <div className="flex items-center gap-2">
                                            <span className="text-[13px] font-semibold text-white group-hover/item:text-coral transition-colors duration-200 leading-snug">
                                              {service.shortName}
                                            </span>
                                            {service.tag && (
                                              <span className="px-1.5 py-0.5 text-[8px] font-bold bg-coral/20 text-coral rounded-md uppercase tracking-wider flex-shrink-0">
                                                {service.tag}
                                              </span>
                                            )}
                                          </div>
                                          <p className="text-[11px] text-white/40 mt-0.5 leading-relaxed">
                                            {service.description}
                                          </p>
                                        </div>
                                      </Link>
                                    );
                                  })}
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Dropdown footer */}
                          <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between gap-4 px-2">
                            <p className="text-[11px] text-white/35 leading-relaxed">
                              Need several of these? Our packages bundle web,
                              brand, marketing and AI into one plan.
                            </p>
                            <Link
                              to="/packages"
                              className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-coral hover:bg-coral/10 transition-colors duration-200 whitespace-nowrap"
                            >
                              View Packages
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive(link.href)
                        ? "text-coral"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                className="hidden lg:inline-flex items-center gap-2 btn-coral text-sm"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                aria-label={isMobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileOpen}
                className="lg:hidden w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors duration-200"
              >
                {isMobileOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Mobile Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-navy-light/98 backdrop-blur-xl border-l border-white/10 z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* Mobile header */}
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-coral-gradient flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg font-bold text-white">
                      Codilated
                    </span>
                  </div>
                  <button
                    onClick={() => setIsMobileOpen(false)}
                    aria-label="Close menu"
                    className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/60 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile links */}
                <div className="space-y-1">
                  {navLinks.map((link, idx) =>
                    link.hasDropdown ? (
                      <div key={link.name}>
                        <button
                          onClick={() =>
                            setIsMobileServicesOpen(!isMobileServicesOpen)
                          }
                          className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-colors duration-200 ${
                            isServiceActive
                              ? "text-coral bg-coral/5"
                              : "text-white/70 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          {link.name}
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${
                              isMobileServicesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {isMobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-2 py-2 space-y-4">
                                {serviceGroups.map((group) => (
                                  <div key={group.title}>
                                    <div className="px-4 mb-1.5 text-[10px] font-mono font-bold text-coral uppercase tracking-wider">
                                      {group.title}
                                    </div>
                                    <div className="space-y-1">
                                      {group.items.map((service) => {
                                        const Icon = service.icon;
                                        const active =
                                          location.pathname === service.href;
                                        return (
                                          <Link
                                            key={service.href}
                                            to={service.href}
                                            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200 ${
                                              active
                                                ? "text-coral bg-coral/10"
                                                : "text-white/60 hover:text-white hover:bg-white/5"
                                            }`}
                                          >
                                            <Icon className="w-4 h-4 text-coral flex-shrink-0" />
                                            <span className="leading-snug">
                                              {service.shortName}
                                            </span>
                                            {service.tag && (
                                              <span className="ml-auto px-1.5 py-0.5 text-[8px] font-bold bg-coral/20 text-coral rounded-md flex-shrink-0">
                                                {service.tag}
                                              </span>
                                            )}
                                          </Link>
                                        );
                                      })}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <Link
                          to={link.href}
                          className={`block px-4 py-3.5 rounded-xl text-base font-medium transition-colors duration-200 ${
                            isActive(link.href)
                              ? "text-coral bg-coral/5"
                              : "text-white/70 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    )
                  )}
                </div>

                {/* Mobile CTA */}
                <div className="mt-10 pt-6 border-t border-white/10">
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2 btn-coral w-full text-center"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Mobile footer info */}
                <div className="mt-8 text-center">
                  <p className="text-xs text-white/30 font-mono">
                    AI, Web, Commerce & Growth
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
