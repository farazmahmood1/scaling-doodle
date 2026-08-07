import React from "react";
import {
  Search,
  MousePointerClick,
  Mail,
  Filter,
  PenLine,
  LineChart,
  TrendingUp,
  Target,
  DollarSign,
} from "lucide-react";
import ServiceTemplate from "../../components/ui/ServiceTemplate";

const capabilities = {
  tag: "Growth Channels",
  title: "Demand Generation That",
  titleAccent: "Compounds",
  intro:
    "SEO, paid search, content, email and conversion optimisation, run together so every channel feeds the next instead of competing for credit.",
  items: [
    {
      icon: Search,
      title: "SEO & Technical Optimisation",
      description:
        "Keyword and intent mapping, on-page work, site architecture, Core Web Vitals, schema markup and the technical fixes that unblock rankings.",
    },
    {
      icon: MousePointerClick,
      title: "Google & Paid Search",
      description:
        "Search, Performance Max and Shopping campaigns structured around profit, with negative keyword hygiene and proper conversion values.",
    },
    {
      icon: PenLine,
      title: "Content Marketing",
      description:
        "Editorial calendars, long-form articles, landing pages and comparison content that ranks and answers real buying questions.",
    },
    {
      icon: Mail,
      title: "Email & Lifecycle Marketing",
      description:
        "Welcome, nurture, abandonment and win-back flows, segmented properly and written to sound like a person rather than a template.",
    },
    {
      icon: Filter,
      title: "Funnels & Conversion Rate Optimisation",
      description:
        "Landing pages, offers and forms tested continuously, because doubling conversion is cheaper than doubling traffic.",
    },
    {
      icon: LineChart,
      title: "Analytics & Attribution",
      description:
        "GA4, server-side tracking, CRM pipeline reporting and a single dashboard that shows what actually produced revenue.",
    },
  ],
};

const metrics = [
  { value: "+187%", label: "Avg. Organic Traffic Growth", icon: TrendingUp },
  { value: "-41%", label: "Avg. Cost per Acquisition", icon: DollarSign },
  { value: "4.2x", label: "Avg. Blended ROAS", icon: Target },
  { value: "12 mo", label: "Typical Compounding Horizon", icon: LineChart },
];

const funnelVisual = (
  <div className="glass-card p-8">
    <div className="text-sm font-mono text-white/30 mb-6">
      Funnel, Last 30 Days
    </div>

    <div className="space-y-3 mb-6">
      {[
        { stage: "Impressions", value: "1,240,000", bar: "100%" },
        { stage: "Sessions", value: "84,600", bar: "76%" },
        { stage: "Engaged visits", value: "31,200", bar: "52%" },
        { stage: "Leads", value: "2,480", bar: "31%" },
        { stage: "Qualified leads", value: "710", bar: "18%" },
        { stage: "Closed won", value: "128", bar: "9%" },
      ].map((item) => (
        <div key={item.stage}>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs text-white/60">{item.stage}</span>
            <span className="text-xs font-mono text-white/40">
              {item.value}
            </span>
          </div>
          <div className="h-2 rounded-full bg-white/5 overflow-hidden">
            <div
              className="h-full rounded-full bg-coral-gradient"
              style={{ width: item.bar }}
            />
          </div>
        </div>
      ))}
    </div>

    <div className="pt-5 border-t border-white/5 grid grid-cols-2 gap-4">
      {[
        { value: "$62", label: "Cost per lead" },
        { value: "$1,140", label: "Cost per customer" },
      ].map((stat) => (
        <div
          key={stat.label}
          className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center"
        >
          <div className="text-xl font-black text-white">{stat.value}</div>
          <div className="text-[10px] text-white/40 mt-1">{stat.label}</div>
        </div>
      ))}
    </div>
  </div>
);

const seoVisual = (
  <div className="glass-card p-8">
    <div className="text-sm font-mono text-white/30 mb-6">
      Organic Growth, 9 Months
    </div>

    {/* Simple bar chart */}
    <div className="flex items-end gap-2 h-40 mb-6">
      {[18, 24, 31, 29, 44, 58, 71, 86, 100].map((h, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-2">
          <div
            className="w-full rounded-t-md bg-coral-gradient"
            style={{ height: `${h}%`, opacity: 0.35 + (h / 100) * 0.65 }}
          />
          <span className="text-[9px] font-mono text-white/25">M{i + 1}</span>
        </div>
      ))}
    </div>

    <div className="space-y-2.5">
      {[
        { label: "Keywords in top 3", value: "9 → 84" },
        { label: "Pages driving traffic", value: "31 → 218" },
        { label: "Monthly organic sessions", value: "4.2K → 26.8K" },
        { label: "Branded search volume", value: "+240%" },
      ].map((row) => (
        <div
          key={row.label}
          className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5"
        >
          <span className="text-sm text-white/60">{row.label}</span>
          <span className="text-sm font-mono text-green-400/80">
            {row.value}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const splits = [
  {
    tag: "The Whole Funnel",
    title: "We Optimise for Customers,",
    titleAccent: "Not Traffic",
    body:
      "Plenty of agencies can grow a traffic graph. Fewer can tell you which of those visits became revenue. We instrument the full path from first impression to closed deal.",
    bullets: [
      "Conversion tracking wired from ad click through to CRM stage and closed revenue",
      "Server-side tagging so attribution survives ad blockers and cookie restrictions",
      "Offer and landing page testing, because traffic is expensive and conversion is not",
      "Lifecycle email that keeps working on leads long after the ad budget is spent",
      "One dashboard your leadership team can read without a translator",
    ],
    visual: funnelVisual,
  },
  {
    tag: "Organic Compounding",
    title: "SEO Is a Compounding",
    titleAccent: "Asset",
    body:
      "Paid traffic stops the day the budget does. Organic keeps working. We build the technical foundation, then publish content aimed squarely at commercial intent, not word count.",
    bullets: [
      "Technical audit first: crawlability, indexation, speed, schema and internal linking",
      "Keyword clusters mapped to real buying stages rather than raw search volume",
      "Content built to answer the questions your sales team hears every week",
      "Digital PR and earned links, no purchased link schemes that risk penalties",
      "Optimisation for AI answers and Google's AI Overviews, where citations now begin",
    ],
    reverse: true,
    visual: seoVisual,
  },
];

const process = {
  tag: "Our Process",
  title: "Research, Ship,",
  titleAccent: "Measure, Repeat",
  steps: [
    {
      step: "01",
      title: "Audit & Benchmark",
      desc: "Full review of your analytics, ad accounts, rankings and funnel, with an honest baseline of where you stand today.",
    },
    {
      step: "02",
      title: "Strategy & Forecast",
      desc: "Channel mix, budget allocation and a realistic forecast of leads and cost per acquisition by quarter.",
    },
    {
      step: "03",
      title: "Launch Campaigns",
      desc: "Tracking, landing pages, ad campaigns and content go live together so we can read the results cleanly.",
    },
    {
      step: "04",
      title: "Optimise Monthly",
      desc: "Monthly reporting and a working session, with budget moved toward whatever produced the cheapest qualified pipeline.",
    },
  ],
};

const stack = {
  tag: "Our Toolkit",
  title: "The Data Behind Every",
  titleAccent: "Decision",
  body:
    "We do not guess. Every recommendation we make is traceable to something in one of these tools, and you get access to all of them.",
  groups: [
    {
      label: "Analytics",
      items: ["GA4", "Search Console", "Looker Studio", "PostHog", "Hotjar"],
    },
    {
      label: "Advertising",
      items: ["Google Ads", "Performance Max", "Meta Ads", "LinkedIn Ads", "Bing"],
    },
    {
      label: "SEO",
      items: ["Ahrefs", "Semrush", "Screaming Frog", "Schema markup", "IndexNow"],
    },
    {
      label: "Lifecycle",
      items: ["Klaviyo", "HubSpot", "Mailchimp", "Customer.io", "Zapier"],
    },
  ],
};

const faqs = [
  {
    question: "How quickly will we see results?",
    answer:
      "Paid channels produce measurable data within two to four weeks. SEO and content are a six to twelve month play, with early movement usually visible around month three. We are deliberately blunt about this before you sign, because agencies that promise fast SEO results are either misleading you or planning to do something that gets you penalised.",
  },
  {
    question: "Do you require a long contract?",
    answer:
      "We ask for a three-month initial commitment because anything shorter cannot fairly demonstrate results, and month-to-month after that. If we are not producing, you should be able to leave without a legal battle.",
  },
  {
    question: "Do we own our ad accounts and data?",
    answer:
      "Always. We work inside your Google Ads, Meta Business Manager, GA4 and CRM accounts rather than our own. If the relationship ends, your campaign history, audiences and conversion data stay with you.",
  },
  {
    question: "How does AI change SEO right now?",
    answer:
      "Search increasingly means AI Overviews, ChatGPT and Perplexity as well as ten blue links. That rewards content with clear, quotable answers, strong entity and schema signals, and genuine expertise attached to a named author. We optimise for citation in AI answers alongside traditional rankings, and we track brand mentions across AI platforms as a first-class metric.",
  },
  {
    question: "Can you work alongside our in-house marketing team?",
    answer:
      "Frequently, yes. Some clients use us as their entire marketing function, others hand us a single channel like paid search or technical SEO while their team handles brand and content. We are comfortable either way, as long as ownership of each metric is clear.",
  },
];

const DigitalMarketing = () => (
  <ServiceTemplate
    seo={{
      title: "Digital Marketing, SEO & Paid Ads Agency | Codilated",
      description:
        "SEO, Google and Meta ads, content, lifecycle email and conversion optimisation, tracked from first click to closed revenue with full account ownership.",
    }}
    schema={{
      name: "Digital Marketing, SEO & Paid Advertising",
      description:
        "Search engine optimisation, paid search and social advertising, content marketing, lifecycle email and conversion rate optimisation with full-funnel attribution.",
      slug: "/services/digital-marketing",
      serviceType: "Digital Marketing",
    }}
    hero={{
      tag: "Digital Marketing & SEO",
      title: "Marketing Measured in Revenue",
      description:
        "SEO, paid search, content, email and conversion optimisation run as one funnel, with tracking that ties every pound spent to a customer won.",
    }}
    metrics={metrics}
    capabilities={capabilities}
    splits={splits}
    process={process}
    stack={stack}
    faqs={faqs}
    related={[
      "/services/web-development",
      "/services/social-media-marketing",
      "/services/ai-automation",
    ]}
    cta={{
      tag: "Grow Predictably",
      title: "Let's Find Your Cheapest",
      titleAccent: "Path to Growth",
      body:
        "We'll audit your analytics, ad accounts and rankings, then show you where the budget is being wasted and what we would do about it.",
      primary: { label: "Request a Growth Audit", to: "/contact" },
      secondary: { label: "See Social Media Services", to: "/services/social-media-marketing" },
    }}
  />
);

export default DigitalMarketing;
