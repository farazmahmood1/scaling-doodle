import React from "react";
import {
  Layers,
  Smartphone,
  Server,
  PlugZap,
  ShieldCheck,
  GitBranch,
  Gauge,
  Rocket,
  Users,
} from "lucide-react";
import ServiceTemplate from "../../components/ui/ServiceTemplate";

const capabilities = {
  tag: "What We Build",
  title: "Web Products Engineered to",
  titleAccent: "Last",
  intro:
    "Marketing sites, customer portals, internal tools, mobile apps and the APIs behind them, built by the same engineers who ship our AI systems.",
  items: [
    {
      icon: Layers,
      title: "Marketing Sites & Landing Pages",
      description:
        "Hand-built React and Next.js front-ends with server rendering, sub-second loads and a CMS your marketing team can actually use.",
    },
    {
      icon: Users,
      title: "Web Apps & Customer Portals",
      description:
        "Dashboards, client portals and multi-tenant platforms with real authentication, role-based permissions and audit trails.",
    },
    {
      icon: Server,
      title: "APIs & Backend Systems",
      description:
        "Node, Python and serverless backends with clean data models, queues, caching and documented REST or GraphQL endpoints.",
    },
    {
      icon: Smartphone,
      title: "Mobile & Cross-Platform Apps",
      description:
        "React Native and PWA builds that share business logic with your web product instead of forking into a second codebase.",
    },
    {
      icon: PlugZap,
      title: "Integrations & Middleware",
      description:
        "Stripe, HubSpot, Salesforce, Xero, shipping carriers, ERPs, whatever your stack runs on, wired together and monitored.",
    },
    {
      icon: GitBranch,
      title: "Rescue & Modernisation",
      description:
        "Inherited a codebase nobody wants to touch? We audit it, stabilise it, add tests and migrate it off legacy dependencies.",
    },
  ],
};

const metrics = [
  { value: "95+", label: "Typical Lighthouse Score", icon: Gauge },
  { value: "<1.5s", label: "Largest Contentful Paint", icon: Rocket },
  { value: "99.9%", label: "Deployment Uptime", icon: ShieldCheck },
  { value: "2 wks", label: "First Deployable Release", icon: GitBranch },
];

const codeVisual = (
  <div className="glass-card p-8 relative overflow-hidden">
    <div className="flex items-center gap-2 mb-6">
      <div className="w-3 h-3 rounded-full bg-coral" />
      <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
      <div className="w-3 h-3 rounded-full bg-green-400/60" />
      <span className="ml-3 text-xs font-mono text-white/30">
        app/api/quote/route.ts
      </span>
    </div>

    <div className="font-mono text-sm space-y-2">
      <div>
        <span className="text-coral/70">export async function</span>{" "}
        <span className="text-sky">POST</span>
        <span className="text-white/40">(req: Request) {"{"}</span>
      </div>
      <div className="pl-4">
        <span className="text-coral/70">const</span>{" "}
        <span className="text-white/60">payload</span>{" "}
        <span className="text-white/40">=</span>{" "}
        <span className="text-coral/70">await</span>{" "}
        <span className="text-white/60">req.json()</span>
      </div>
      <div className="pl-4">
        <span className="text-coral/70">const</span>{" "}
        <span className="text-white/60">lead</span>{" "}
        <span className="text-white/40">=</span>{" "}
        <span className="text-coral/70">await</span>{" "}
        <span className="text-green-400/70">scoreLead</span>
        <span className="text-white/40">(payload)</span>
      </div>
      <div className="pl-4">
        <span className="text-coral/70">await</span>{" "}
        <span className="text-white/60">crm</span>
        <span className="text-coral">.</span>
        <span className="text-green-400/70">upsert</span>
        <span className="text-white/40">(lead)</span>
      </div>
      <div className="pl-4">
        <span className="text-coral/70">return</span>{" "}
        <span className="text-white/60">Response</span>
        <span className="text-coral">.</span>
        <span className="text-green-400/70">json</span>
        <span className="text-white/40">({"{ ok: "}</span>
        <span className="text-coral-light/80">true</span>
        <span className="text-white/40">{" }"})</span>
      </div>
      <div>
        <span className="text-white/40">{"}"}</span>
      </div>
      <div className="mt-4 pt-4 border-t border-white/5 space-y-1.5">
        <span className="text-green-400/50 block">
          {"// "}✓ typed end-to-end · 94% test coverage
        </span>
        <span className="text-green-400/50 block">
          {"// "}✓ deployed on every merge to main
        </span>
      </div>
    </div>
  </div>
);

const scoreVisual = (
  <div className="glass-card p-8">
    <div className="text-sm font-mono text-white/30 mb-6">
      Post-Launch Performance Report
    </div>

    <div className="grid grid-cols-2 gap-4 mb-6">
      {[
        { label: "Performance", value: 98 },
        { label: "Accessibility", value: 100 },
        { label: "Best Practices", value: 96 },
        { label: "SEO", value: 100 },
      ].map((item) => (
        <div
          key={item.label}
          className="p-4 rounded-xl bg-white/[0.03] border border-white/5 text-center"
        >
          <div className="text-3xl font-black text-white">{item.value}</div>
          <div className="text-[11px] text-white/40 mt-1">{item.label}</div>
        </div>
      ))}
    </div>

    <div className="space-y-3">
      {[
        { label: "LCP", value: "1.1s", bar: "88%" },
        { label: "INP", value: "94ms", bar: "94%" },
        { label: "CLS", value: "0.02", bar: "97%" },
      ].map((item) => (
        <div key={item.label}>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-mono text-white/40">
              {item.label}
            </span>
            <span className="text-xs font-mono text-green-400/70">
              {item.value}
            </span>
          </div>
          <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
            <div
              className="h-full rounded-full bg-coral-gradient"
              style={{ width: item.bar }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const splits = [
  {
    tag: "How We Engineer",
    title: "Built Properly the",
    titleAccent: "First Time",
    body:
      "No page builders, no throwaway templates, no mystery plugins. You get a codebase your next developer can read, deploy and extend without calling us first.",
    bullets: [
      "TypeScript end to end, so breaking changes surface at build time, not in production",
      "Component libraries and design tokens so every new page stays on-brand automatically",
      "Automated tests and preview deployments on every pull request",
      "Infrastructure as code, environment parity and one-command rollbacks",
      "Full documentation handover, and the repository is yours from day one",
    ],
    visual: codeVisual,
  },
  {
    tag: "Performance & SEO",
    title: "Fast Sites",
    titleAccent: "Rank and Convert",
    body:
      "Speed is a revenue feature. We treat Core Web Vitals, semantic markup and structured data as launch requirements, not a post-launch cleanup task.",
    bullets: [
      "Server-side rendering and edge caching for near-instant first paint",
      "Image pipelines with modern formats, responsive sizing and lazy loading",
      "Schema.org structured data, clean canonical URLs and generated sitemaps",
      "Accessibility to WCAG 2.2 AA so every visitor can use what you built",
      "Real-user monitoring after launch, with a performance budget we hold ourselves to",
    ],
    reverse: true,
    visual: scoreVisual,
  },
];

const process = {
  tag: "Our Process",
  title: "From Discovery to",
  titleAccent: "Production",
  steps: [
    {
      step: "01",
      title: "Discovery & Scope",
      desc: "We map user journeys, data models and integrations, then agree a fixed scope with a written technical plan.",
    },
    {
      step: "02",
      title: "Design & Prototype",
      desc: "Clickable UI in your brand system, reviewed and signed off before a single production component is written.",
    },
    {
      step: "03",
      title: "Build in Sprints",
      desc: "Two-week sprints with a live preview URL from week one. You see progress continuously, never in one big reveal.",
    },
    {
      step: "04",
      title: "Launch & Support",
      desc: "Staged rollout, monitoring, analytics and a support window, plus optional ongoing retainer for new features.",
    },
  ],
};

const stack = {
  tag: "Our Stack",
  title: "Modern Tools,",
  titleAccent: "Boring Reliability",
  body:
    "We pick technology for how well it will age, not how new it is. Every choice below is something we run in production for clients today.",
  groups: [
    {
      label: "Front-End",
      items: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion", "Vite"],
    },
    {
      label: "Back-End",
      items: ["Node.js", "Python", "PostgreSQL", "Supabase", "Redis", "GraphQL"],
    },
    {
      label: "Infrastructure",
      items: ["Vercel", "AWS", "Docker", "GitHub Actions", "Cloudflare"],
    },
    {
      label: "Product Layer",
      items: ["Stripe", "Auth0", "Sanity", "Segment", "Sentry", "PostHog"],
    },
  ],
};

const faqs = [
  {
    question: "Do you work with our existing codebase or start from scratch?",
    answer:
      "Both. Roughly half our development work is greenfield and half is inherited code. If you already have a product, we start with a paid technical audit: dependency health, test coverage, security issues and the highest-risk areas. You get that report whether or not you continue with us.",
  },
  {
    question: "Who owns the code and the accounts?",
    answer:
      "You do, from the first commit. We build in your GitHub organisation where possible, use your cloud accounts, and hand over full documentation at launch. There is no proprietary platform you have to keep paying us to access.",
  },
  {
    question: "How long does a typical build take?",
    answer:
      "A marketing site with a CMS is usually 4 to 6 weeks. A customer portal or web app is 8 to 16 weeks depending on integrations. We ship a deployable release in the first two weeks either way, so you are never waiting months to see something real.",
  },
  {
    question: "Can you add AI features to a site you build?",
    answer:
      "That is our favourite kind of project. Support copilots, semantic search, document processing, lead scoring and personalisation all sit naturally on top of a well-built application, and our AI and web teams are the same team.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Every build includes a 30-day support window covering bugs and adjustments. After that, most clients move to a monthly retainer for new features, performance monitoring and dependency updates. Some take the code in-house entirely, which is a perfectly good outcome.",
  },
];

const WebDevelopment = () => (
  <ServiceTemplate
    seo={{
      title: "Full-Stack Web & App Development Company | Codilated",
      description:
        "Custom websites, web apps, portals and APIs built in React, Next.js and Node. Fast, accessible, SEO-ready code your team actually owns.",
    }}
    schema={{
      name: "Full-Stack Web & App Development",
      description:
        "Custom web application, website, API and mobile app development using React, Next.js, Node.js and modern cloud infrastructure.",
      slug: "/services/web-development",
      serviceType: "Web Development",
    }}
    hero={{
      tag: "Web & App Development",
      title: "Full-Stack Web & App Development",
      description:
        "Websites, web apps, portals and APIs designed for speed, built for scale, and handed over as code your team genuinely owns.",
    }}
    metrics={metrics}
    capabilities={capabilities}
    splits={splits}
    process={process}
    stack={stack}
    faqs={faqs}
    related={[
      "/services/branding-design",
      "/services/custom-ai-development",
      "/services/digital-marketing",
    ]}
    cta={{
      tag: "Start Building",
      title: "Let's Scope Your",
      titleAccent: "Build",
      body:
        "Send us the rough idea, a competitor you admire, or a codebase that needs rescuing. We'll come back with a scope, a timeline and a fixed price.",
      primary: { label: "Get a Project Quote", to: "/contact" },
      secondary: { label: "See Our Packages", to: "/packages" },
    }}
  />
);

export default WebDevelopment;
