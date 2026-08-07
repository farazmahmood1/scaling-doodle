import React from "react";
import {
  ShoppingBag,
  Paintbrush,
  Puzzle,
  CreditCard,
  Truck,
  Repeat,
  TrendingUp,
  Gauge,
  Percent,
} from "lucide-react";
import ServiceTemplate from "../../components/ui/ServiceTemplate";

const capabilities = {
  tag: "Shopify Services",
  title: "Everything Your Store Needs to",
  titleAccent: "Sell More",
  intro:
    "From a first launch on Shopify to a Plus migration doing eight figures, we design, build, integrate and optimise the whole commerce stack.",
  items: [
    {
      icon: ShoppingBag,
      title: "Store Setup & Launch",
      description:
        "Complete Shopify builds: products, collections, taxes, shipping zones, payment gateways and a launch checklist we work through with you.",
    },
    {
      icon: Paintbrush,
      title: "Custom Theme Development",
      description:
        "Bespoke Liquid themes or heavily customised premium themes, built with section-based layouts your team can rearrange without a developer.",
    },
    {
      icon: Puzzle,
      title: "Shopify Apps & Extensions",
      description:
        "Private and public apps, checkout extensions, metafield-driven features and custom logic when no app in the store does what you need.",
    },
    {
      icon: CreditCard,
      title: "Checkout & Conversion Optimisation",
      description:
        "One-page checkout tuning, upsells, bundles, express payments and A/B tested product pages that lift AOV and conversion rate.",
    },
    {
      icon: Truck,
      title: "Integrations & Operations",
      description:
        "ERP, 3PL, inventory, accounting and CRM sync so orders, stock and customer data stay accurate without anyone re-keying them.",
    },
    {
      icon: Repeat,
      title: "Migrations & Replatforming",
      description:
        "WooCommerce, Magento, BigCommerce or custom carts moved to Shopify with URLs, SEO equity, reviews and customer accounts intact.",
    },
  ],
};

const metrics = [
  { value: "+38%", label: "Avg. Conversion Lift", icon: Percent },
  { value: "+24%", label: "Avg. Order Value Lift", icon: TrendingUp },
  { value: "0.9s", label: "Store Load Time", icon: Gauge },
  { value: "100%", label: "SEO Preserved on Migration", icon: Repeat },
];

const storeVisual = (
  <div className="glass-card p-8">
    <div className="text-sm font-mono text-white/30 mb-6">
      Store Performance, Last 30 Days
    </div>

    <div className="grid grid-cols-2 gap-4 mb-6">
      {[
        { label: "Conversion Rate", value: "4.1%", delta: "+38%" },
        { label: "Avg. Order Value", value: "$128", delta: "+24%" },
        { label: "Checkout Completion", value: "82%", delta: "+16%" },
        { label: "Returning Customers", value: "31%", delta: "+9%" },
      ].map((item) => (
        <div
          key={item.label}
          className="p-4 rounded-xl bg-white/[0.03] border border-white/5"
        >
          <div className="text-2xl font-black text-white">{item.value}</div>
          <div className="text-[11px] text-white/40 mt-1">{item.label}</div>
          <div className="text-[11px] text-green-400/70 font-mono mt-1">
            {item.delta}
          </div>
        </div>
      ))}
    </div>

    <div className="space-y-2.5">
      <div className="text-[11px] font-mono text-white/30 mb-3">
        Abandoned Cart Recovery Flow
      </div>
      {[
        { step: "01", label: "Cart abandoned", meta: "trigger" },
        { step: "02", label: "AI-written reminder email", meta: "+1 hr" },
        { step: "03", label: "WhatsApp nudge with cart link", meta: "+18 hrs" },
        { step: "04", label: "Discount offer, last chance", meta: "+48 hrs" },
      ].map((item) => (
        <div
          key={item.step}
          className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5"
        >
          <div className="w-7 h-7 rounded-lg bg-coral/10 flex items-center justify-center text-[11px] font-bold text-coral">
            {item.step}
          </div>
          <span className="flex-1 text-sm text-white/70">{item.label}</span>
          <span className="text-[11px] font-mono text-white/30">
            {item.meta}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const migrationVisual = (
  <div className="glass-card p-8">
    <div className="text-sm font-mono text-white/30 mb-6">
      Migration Checklist
    </div>

    <div className="space-y-2.5">
      {[
        { label: "Products & variants", value: "4,812", done: true },
        { label: "Customer accounts", value: "26,340", done: true },
        { label: "Historical orders", value: "91,205", done: true },
        { label: "Product reviews", value: "7,118", done: true },
        { label: "301 redirect map", value: "5,406 URLs", done: true },
        { label: "Blog & landing pages", value: "212", done: true },
        { label: "Live traffic cutover", value: "scheduled", done: false },
      ].map((item) => (
        <div
          key={item.label}
          className={`flex items-center gap-3 p-3 rounded-xl border transition-colors duration-300 ${
            item.done
              ? "bg-white/[0.02] border-white/5"
              : "bg-coral/5 border-coral/20"
          }`}
        >
          <div
            className={`w-2 h-2 rounded-full flex-shrink-0 ${
              item.done ? "bg-green-400/60" : "bg-coral animate-pulse"
            }`}
          />
          <span className="flex-1 text-sm text-white/70">{item.label}</span>
          <span className="text-xs font-mono text-white/40">{item.value}</span>
        </div>
      ))}
    </div>

    <div className="mt-6 pt-5 border-t border-white/5">
      <p className="text-xs text-white/40 leading-relaxed">
        Every migration ships with a full redirect map and a rollback plan.
        Rankings are protected before a single DNS record changes.
      </p>
    </div>
  </div>
);

const splits = [
  {
    tag: "Revenue Engineering",
    title: "We Optimise for Orders,",
    titleAccent: "Not Applause",
    body:
      "A beautiful store that converts at 1.2% is a failure. We instrument every step of the funnel, find where money leaks out, and fix the biggest leak first.",
    bullets: [
      "Product page rebuilds around the objections that actually stop your buyers",
      "Bundles, volume discounts and post-purchase upsells that lift order value",
      "Abandoned cart, browse abandonment and win-back flows across email and WhatsApp",
      "Site search and merchandising tuned so people find the thing they came for",
      "Continuous A/B testing with real statistical significance, not vibes",
    ],
    visual: storeVisual,
  },
  {
    tag: "Migrations Done Safely",
    title: "Replatform Without",
    titleAccent: "Losing Rankings",
    body:
      "Most botched migrations lose organic traffic for months. We plan the URL structure, redirects and structured data before we touch anything, then monitor rankings daily for the first six weeks.",
    bullets: [
      "Complete data migration: products, variants, customers, orders and reviews",
      "One-to-one redirect mapping so no earned link goes to a 404",
      "Metafield architecture designed for how your catalogue will grow",
      "Staging store with real data for full team sign-off before cutover",
      "Post-launch rank and traffic monitoring with a documented rollback plan",
    ],
    reverse: true,
    visual: migrationVisual,
  },
];

const process = {
  tag: "How We Work",
  title: "From Catalogue to",
  titleAccent: "Cash Register",
  steps: [
    {
      step: "01",
      title: "Commerce Audit",
      desc: "We review your catalogue, funnel data, apps and operations to find where the revenue is actually being lost.",
    },
    {
      step: "02",
      title: "Design & Merchandise",
      desc: "Store design, category architecture and product page templates built around how your customers really buy.",
    },
    {
      step: "03",
      title: "Build & Integrate",
      desc: "Theme, apps, payments, shipping and back-office integrations built on a staging store you can test properly.",
    },
    {
      step: "04",
      title: "Launch & Grow",
      desc: "Cutover, then a continuous optimisation loop of testing, flows and merchandising to compound conversion month over month.",
    },
  ],
};

const stack = {
  tag: "Platforms & Tools",
  title: "The Commerce Stack",
  titleAccent: "We Run",
  body:
    "Shopify and Shopify Plus are our home turf, but we work across the wider commerce ecosystem and integrate whatever your operation already depends on.",
  groups: [
    {
      label: "Platforms",
      items: ["Shopify", "Shopify Plus", "WooCommerce", "BigCommerce", "Headless"],
    },
    {
      label: "Build Tools",
      items: ["Liquid", "Hydrogen", "Shopify Functions", "Metafields", "Storefront API"],
    },
    {
      label: "Marketing",
      items: ["Klaviyo", "Yotpo", "Judge.me", "Recharge", "Postscript", "Gorgias"],
    },
    {
      label: "Operations",
      items: ["ShipStation", "Xero", "NetSuite", "Stripe", "Shopify Flow"],
    },
  ],
};

const faqs = [
  {
    question: "Do you build custom themes or customise a premium theme?",
    answer:
      "Both, and the honest answer depends on budget. If you are launching or under roughly $1M a year, a well-customised premium theme gets you 90% of the result for a third of the cost. Above that, a custom theme built around your merchandising usually pays for itself in conversion lift within two quarters.",
  },
  {
    question: "Can you migrate us from WooCommerce or Magento without losing SEO?",
    answer:
      "Yes, and it is one of the most common projects we run. The work that protects rankings happens before launch: URL mapping, redirect rules, structured data parity and content migration. We monitor Search Console daily for six weeks after cutover and fix anything that moves the wrong way.",
  },
  {
    question: "Will you also handle the marketing for the store?",
    answer:
      "We can run the whole loop, store build, email and SMS flows, paid social, Google Shopping and organic content, or just the build if you already have an in-house team. See our digital marketing and social media services for how those pieces fit together.",
  },
  {
    question: "Where does AI fit into an e-commerce project?",
    answer:
      "Practically, not as a gimmick. AI product description generation at catalogue scale, semantic site search, a support chatbot that knows your order data, personalised recommendations, and automated review and returns triage. Each of these is measurable, and we only ship the ones that pay for themselves.",
  },
  {
    question: "Do you offer ongoing support after the store launches?",
    answer:
      "Yes. Most stores move onto a monthly retainer covering app updates, seasonal campaign builds, new landing pages, conversion testing and priority fixes during peak periods like BFCM.",
  },
];

const ShopifyEcommerce = () => (
  <ServiceTemplate
    seo={{
      title: "Shopify & E-Commerce Development Agency | Codilated",
      description:
        "Shopify and Shopify Plus store design, custom themes, apps, migrations and conversion optimisation, built by engineers who measure revenue, not clicks.",
    }}
    schema={{
      name: "Shopify & E-Commerce Development",
      description:
        "Shopify and Shopify Plus store development, custom theme and app builds, replatforming migrations, and conversion rate optimisation for online retailers.",
      slug: "/services/shopify-ecommerce",
      serviceType: "E-Commerce Development",
    }}
    hero={{
      tag: "Shopify & E-Commerce",
      title: "Shopify Stores Built to Convert",
      description:
        "Custom Shopify design, development, migrations and conversion optimisation, engineered around the numbers that actually grow your revenue.",
    }}
    metrics={metrics}
    capabilities={capabilities}
    splits={splits}
    process={process}
    stack={stack}
    faqs={faqs}
    related={[
      "/services/digital-marketing",
      "/services/social-media-marketing",
      "/services/conversational-ai",
    ]}
    cta={{
      tag: "Grow Your Store",
      title: "Let's Find the Revenue",
      titleAccent: "You're Leaving Behind",
      body:
        "Send us your store URL. We'll come back with the three highest-impact fixes we would make first, before you commit to anything.",
      primary: { label: "Get a Free Store Audit", to: "/contact" },
      secondary: { label: "Explore Packages", to: "/packages" },
    }}
  />
);

export default ShopifyEcommerce;
