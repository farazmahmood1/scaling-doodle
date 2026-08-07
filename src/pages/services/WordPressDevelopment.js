import React from "react";
import {
  LayoutTemplate,
  ShoppingCart,
  Wrench,
  ShieldCheck,
  Search,
  Gauge,
  Lock,
  Clock,
  FileEdit,
} from "lucide-react";
import ServiceTemplate from "../../components/ui/ServiceTemplate";

const capabilities = {
  tag: "WordPress Services",
  title: "WordPress Without the",
  titleAccent: "Usual Baggage",
  intro:
    "Custom themes, block editor sites, WooCommerce stores and rescue work, built lean so your site stays fast, secure and easy to edit.",
  items: [
    {
      icon: LayoutTemplate,
      title: "Custom Theme Development",
      description:
        "Purpose-built themes with native block patterns, so your marketing team can compose new pages that stay on-brand by default.",
    },
    {
      icon: FileEdit,
      title: "Block Editor & ACF Builds",
      description:
        "Editor-first sites using Gutenberg blocks and Advanced Custom Fields, with no bloated page builder slowing every page load.",
    },
    {
      icon: ShoppingCart,
      title: "WooCommerce Stores",
      description:
        "Product catalogues, subscriptions, memberships, payment gateways and shipping rules configured for how your business actually operates.",
    },
    {
      icon: Wrench,
      title: "Maintenance & Care Plans",
      description:
        "Core, theme and plugin updates on a staging site first, daily off-site backups, uptime monitoring and a monthly health report.",
    },
    {
      icon: ShieldCheck,
      title: "Security & Malware Recovery",
      description:
        "Hardening, firewall rules, login protection and full cleanup if you have been hacked, including reindexing after a Google warning.",
    },
    {
      icon: Search,
      title: "Speed & SEO Overhauls",
      description:
        "Plugin audits, database cleanup, caching, image optimisation and technical SEO on sites that have quietly slowed to a crawl.",
    },
  ],
};

const metrics = [
  { value: "3.4x", label: "Avg. Speed Improvement", icon: Gauge },
  { value: "99.9%", label: "Monitored Uptime", icon: Clock },
  { value: "0", label: "Page Builder Bloat", icon: FileEdit },
  { value: "24/7", label: "Security Monitoring", icon: Lock },
];

const healthVisual = (
  <div className="glass-card p-8">
    <div className="text-sm font-mono text-white/30 mb-6">
      Site Health, Before → After
    </div>

    <div className="space-y-4 mb-6">
      {[
        { label: "Page load time", before: "6.8s", after: "1.2s" },
        { label: "Active plugins", before: "42", after: "11" },
        { label: "Page weight", before: "5.4 MB", after: "780 KB" },
        { label: "PageSpeed score", before: "31", after: "97" },
      ].map((item) => (
        <div
          key={item.label}
          className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5"
        >
          <span className="flex-1 text-sm text-white/70">{item.label}</span>
          <span className="text-xs font-mono text-white/30 line-through">
            {item.before}
          </span>
          <span className="text-xs text-white/20">→</span>
          <span className="text-xs font-mono text-green-400/80">
            {item.after}
          </span>
        </div>
      ))}
    </div>

    <div className="pt-5 border-t border-white/5">
      <div className="text-[11px] font-mono text-white/30 mb-3">
        What We Removed
      </div>
      <div className="flex flex-wrap gap-2">
        {[
          "Page builder",
          "3 slider plugins",
          "Duplicate SEO plugin",
          "Unused fonts",
          "Render-blocking JS",
        ].map((item) => (
          <span
            key={item}
            className="px-2.5 py-1 rounded-lg bg-coral/5 border border-coral/20 text-xs text-coral/80"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const careVisual = (
  <div className="glass-card p-8">
    <div className="text-sm font-mono text-white/30 mb-6">
      Care Plan, This Month
    </div>

    <div className="space-y-2.5">
      {[
        { label: "Core & plugin updates", value: "14 applied", ok: true },
        { label: "Staging test run", value: "passed", ok: true },
        { label: "Off-site backups", value: "30 / 30 days", ok: true },
        { label: "Malware scans", value: "clean", ok: true },
        { label: "Blocked login attempts", value: "1,284", ok: true },
        { label: "Uptime", value: "99.98%", ok: true },
        { label: "Broken links found", value: "3 fixed", ok: true },
      ].map((item) => (
        <div
          key={item.label}
          className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5"
        >
          <div className="w-2 h-2 rounded-full bg-green-400/60 flex-shrink-0" />
          <span className="flex-1 text-sm text-white/70">{item.label}</span>
          <span className="text-xs font-mono text-white/40">{item.value}</span>
        </div>
      ))}
    </div>

    <div className="mt-6 pt-5 border-t border-white/5">
      <p className="text-xs text-white/40 leading-relaxed">
        Updates always run on a staging clone first. If something breaks, it
        breaks there, not on the site your customers are looking at.
      </p>
    </div>
  </div>
);

const splits = [
  {
    tag: "Speed & Cleanup",
    title: "Most WordPress Sites Are",
    titleAccent: "Slow by Accident",
    body:
      "Years of plugins, three overlapping SEO tools and a page builder rendering 400KB of CSS on every request. We strip it back to what earns its place.",
    bullets: [
      "Full plugin audit: what stays, what gets replaced with 20 lines of code, what goes",
      "Database cleanup, revision pruning and object caching for faster admin and front end",
      "Modern image formats, responsive sources and genuine lazy loading",
      "Critical CSS, deferred scripts and a CDN in front of everything",
      "Before-and-after Core Web Vitals report so the improvement is provable, not claimed",
    ],
    visual: healthVisual,
  },
  {
    tag: "Care Plans",
    title: "Someone Should Be Watching",
    titleAccent: "Your Site",
    body:
      "WordPress powers a huge share of the web, which makes it the most attacked platform on it. An unmaintained site is not stable, it is just quiet until it isn't.",
    bullets: [
      "Updates tested on staging before they ever reach production",
      "Daily off-site backups with a tested one-click restore, not just a backup folder",
      "Firewall, login rate limiting, 2FA and file integrity monitoring",
      "Uptime and Core Web Vitals monitoring with alerts that reach a human",
      "A plain-English monthly report, plus a bank of support hours for small changes",
    ],
    reverse: true,
    visual: careVisual,
  },
];

const process = {
  tag: "Our Process",
  title: "Clean Builds,",
  titleAccent: "Calm Handovers",
  steps: [
    {
      step: "01",
      title: "Audit & Plan",
      desc: "We review your current site, hosting, plugins and content model, then agree exactly what the new build needs to do.",
    },
    {
      step: "02",
      title: "Design & Block System",
      desc: "Page designs plus a reusable block library, so future pages are assembled by your team, not quoted by ours.",
    },
    {
      step: "03",
      title: "Build & Migrate",
      desc: "Theme development, content migration, redirects and integrations on a staging site with your real content in it.",
    },
    {
      step: "04",
      title: "Train & Maintain",
      desc: "A recorded walkthrough for your team, then an optional care plan that keeps the site fast, updated and backed up.",
    },
  ],
};

const stack = {
  tag: "What We Use",
  title: "A Lean, Boring,",
  titleAccent: "Reliable Stack",
  body:
    "Fewer moving parts means fewer things to break. These are the tools we trust on client sites we have to keep running for years.",
  groups: [
    {
      label: "Core",
      items: ["WordPress", "Gutenberg", "ACF Pro", "Timber", "WP-CLI", "Headless WP"],
    },
    {
      label: "Commerce",
      items: ["WooCommerce", "Subscriptions", "Memberships", "Stripe", "PayPal"],
    },
    {
      label: "Performance",
      items: ["Cloudflare", "Redis", "WP Rocket", "Imagify", "Kinsta", "WP Engine"],
    },
    {
      label: "SEO & Forms",
      items: ["Rank Math", "Yoast", "Gravity Forms", "Schema Pro", "Search Console"],
    },
  ],
};

const faqs = [
  {
    question: "Why do you avoid page builders like Elementor and Divi?",
    answer:
      "They are genuinely useful for a quick brochure site, and if you already have one we will happily work within it. But they add significant weight to every page and lock your content into their markup. For sites where speed and SEO matter commercially, native blocks with ACF give your team the same editing freedom without the performance tax.",
  },
  {
    question: "Can you fix a site that has been hacked?",
    answer:
      "Yes. We isolate the site, identify the entry point, clean the infected files and database entries, rotate every credential, harden the install and submit a reconsideration request if Google has flagged you. We also tell you honestly if a full rebuild is cheaper than the cleanup, which it sometimes is.",
  },
  {
    question: "Do you host, or do we keep our current hosting?",
    answer:
      "Either. We are happy on your existing host if it is decent, and we will say plainly if it isn't. For sites that need it, we set you up on managed WordPress hosting in your own account, so you keep full control and the billing relationship.",
  },
  {
    question: "Can WordPress handle a serious e-commerce catalogue?",
    answer:
      "WooCommerce is excellent up to a few thousand SKUs and moderate order volume, especially when you need content and commerce tightly integrated. Beyond that, or if your operations lean heavily on apps and multi-channel selling, Shopify is usually the better call. We build both and we will recommend against ourselves if it's the right answer.",
  },
  {
    question: "Can you add AI features to a WordPress site?",
    answer:
      "Yes. Common ones are an AI support chatbot trained on your own content, semantic search across posts and documentation, AI-assisted content drafting inside the editor, and automated lead routing from form submissions. All of it can run alongside a standard WordPress install.",
  },
];

const WordPressDevelopment = () => (
  <ServiceTemplate
    seo={{
      title: "WordPress Development & WooCommerce Agency | Codilated",
      description:
        "Custom WordPress themes, block editor builds, WooCommerce stores, speed overhauls, security cleanup and managed care plans, without page builder bloat.",
    }}
    schema={{
      name: "WordPress Design & Development",
      description:
        "Custom WordPress theme and block editor development, WooCommerce stores, performance optimisation, security hardening and ongoing maintenance care plans.",
      slug: "/services/wordpress-development",
      serviceType: "WordPress Development",
    }}
    hero={{
      tag: "WordPress Development",
      title: "WordPress Sites That Stay Fast",
      description:
        "Custom themes, WooCommerce stores, speed rescues and care plans, built lean so your site loads quickly and your team can edit it without fear.",
    }}
    metrics={metrics}
    capabilities={capabilities}
    splits={splits}
    process={process}
    stack={stack}
    faqs={faqs}
    related={[
      "/services/digital-marketing",
      "/services/branding-design",
      "/services/shopify-ecommerce",
    ]}
    cta={{
      tag: "Fix or Rebuild",
      title: "Let's Look Under Your",
      titleAccent: "Hood",
      body:
        "Send us your URL and we'll run a free health check: speed, plugin bloat, security exposure and the three things worth fixing first.",
      primary: { label: "Request a Free Health Check", to: "/contact" },
      secondary: { label: "Compare Packages", to: "/packages" },
    }}
  />
);

export default WordPressDevelopment;
