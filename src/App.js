import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Layout
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/ui/WhatsAppButton";
import Seo from "./components/ui/Seo";
import JsonLd from "./components/ui/JsonLd";
import { organizationSchema, websiteSchema } from "./seo/schemas";

// Pages
import Home    from "./pages/Home";
import About   from "./pages/About";
import Blog       from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Contact    from "./pages/Contact";

// Service Pages
import AIAutomation       from "./pages/services/AIAutomation";
import ConversationalAI   from "./pages/services/ConversationalAI";
import CustomAIDev        from "./pages/services/CustomAIDev";
import AIDataAnalytics    from "./pages/services/AIDataAnalytics";

// Scroll-to-top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

// Animated page wrapper
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Core Pages */}
        <Route path="/"        element={<Home />} />
        <Route path="/about"   element={<About />} />
        <Route path="/blog"       element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/contact"    element={<Contact />} />

        {/* Service Pages */}
        <Route
          path="/services/ai-automation"
          element={<AIAutomation />}
        />
        <Route
          path="/services/conversational-ai"
          element={<ConversationalAI />}
        />
        <Route
          path="/services/custom-ai-development"
          element={<CustomAIDev />}
        />
        <Route
          path="/services/ai-data-analytics"
          element={<AIDataAnalytics />}
        />

        {/* 404 Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

// Minimal 404
function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-navy">
      <Seo
        title="Page Not Found (404) | Codilated"
        description="The page you're looking for doesn't exist. Return to Codilated to explore our AI automation, chatbot, and custom AI development services."
        noindex
      />
      <span className="section-tag mb-4">404 Error</span>
      <h1 className="text-6xl font-black text-white mb-4">Page Not Found</h1>
      <p className="text-white/60 mb-8">
        The page you're looking for doesn't exist.
      </p>
      <a href="/" className="btn-coral">
        Return Home
      </a>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <JsonLd data={organizationSchema()} />
      <JsonLd data={websiteSchema()} />
      <div className="relative min-h-screen bg-navy overflow-x-hidden">
        <Navbar />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}
