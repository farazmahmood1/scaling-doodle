/**
 * Single source of truth for the service catalogue.
 * Imported by the Navbar, Footer, Home, Contact form and sitemap-facing SEO.
 *
 * Codilated is an AI-first agency, but AI is only half the story: we also ship
 * the websites, stores, brands and campaigns that the AI plugs into.
 */

import {
  Bot,
  MessageSquare,
  Code2,
  BarChart3,
  Layers,
  ShoppingBag,
  Globe2,
  Share2,
  Megaphone,
  Palette,
} from "lucide-react";

/* ── Group 1: AI & Automation (flagship) ─────────────────────────── */
export const aiServices = [
  {
    name: "AI Automation & Process Optimization",
    shortName: "AI Automation",
    href: "/services/ai-automation",
    icon: Bot,
    tag: "FLAGSHIP",
    description: "AI agents that run lead gen, outreach and back-office work 24/7",
    formValue: "ai-automation",
  },
  {
    name: "Conversational AI & Voice Agents",
    shortName: "Conversational AI",
    href: "/services/conversational-ai",
    icon: MessageSquare,
    tag: null,
    description: "Chatbots and voice agents for web, WhatsApp, social and phone",
    formValue: "conversational-ai",
  },
  {
    name: "Custom AI Web & SaaS Development",
    shortName: "Custom AI Development",
    href: "/services/custom-ai-development",
    icon: Code2,
    tag: null,
    description: "AI-powered SaaS products, copilots and internal tools",
    formValue: "custom-ai-development",
  },
  {
    name: "AI Data & Predictive Analytics",
    shortName: "AI Data Analytics",
    href: "/services/ai-data-analytics",
    icon: BarChart3,
    tag: null,
    description: "Turn raw data into forecasts, scoring models and live dashboards",
    formValue: "ai-data-analytics",
  },
];

/* ── Group 2: Web, Commerce & Growth ─────────────────────────────── */
export const digitalServices = [
  {
    name: "Full-Stack Web & App Development",
    shortName: "Web & App Development",
    href: "/services/web-development",
    icon: Layers,
    tag: null,
    description: "React, Next.js, Node and mobile builds engineered to scale",
    formValue: "web-development",
  },
  {
    name: "Shopify & E-Commerce Development",
    shortName: "Shopify & E-Commerce",
    href: "/services/shopify-ecommerce",
    icon: ShoppingBag,
    tag: "POPULAR",
    description: "Shopify stores, custom themes, apps and checkout optimisation",
    formValue: "shopify-ecommerce",
  },
  {
    name: "WordPress Design & Development",
    shortName: "WordPress Development",
    href: "/services/wordpress-development",
    icon: Globe2,
    tag: null,
    description: "Fast, secure, editor-friendly WordPress and WooCommerce sites",
    formValue: "wordpress-development",
  },
  {
    name: "Social Media Marketing & Management",
    shortName: "Social Media Marketing",
    href: "/services/social-media-marketing",
    icon: Share2,
    tag: null,
    description: "Content, community and paid social that compounds every month",
    formValue: "social-media-marketing",
  },
  {
    name: "Digital Marketing, SEO & Paid Ads",
    shortName: "Digital Marketing & SEO",
    href: "/services/digital-marketing",
    icon: Megaphone,
    tag: null,
    description: "SEO, Google & Meta ads, funnels and lifecycle email that convert",
    formValue: "digital-marketing",
  },
  {
    name: "Branding & Creative Design",
    shortName: "Branding & Design",
    href: "/services/branding-design",
    icon: Palette,
    tag: null,
    description: "Identity, messaging, UI/UX and creative systems that stick",
    formValue: "branding-design",
  },
];

export const allServices = [...aiServices, ...digitalServices];

export const serviceGroups = [
  {
    title: "AI & Automation",
    caption: "Our flagship practice",
    items: aiServices,
  },
  {
    title: "Web, Commerce & Growth",
    caption: "Everything around the AI",
    items: digitalServices,
  },
];

/** Label map used by the contact form email payload. */
export const SERVICE_LABELS = allServices.reduce(
  (acc, s) => ({ ...acc, [s.formValue]: s.name }),
  { other: "Other / Not Sure" }
);
