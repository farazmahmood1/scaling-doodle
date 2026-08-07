import React from "react";
import {
  Video,
  CalendarDays,
  Target,
  MessagesSquare,
  UserCheck,
  BarChart3,
  Eye,
  Heart,
  Sparkles,
} from "lucide-react";
import ServiceTemplate from "../../components/ui/ServiceTemplate";

const capabilities = {
  tag: "What We Handle",
  title: "Social That Does More Than",
  titleAccent: "Post",
  intro:
    "Strategy, creative, publishing, community and paid, run as one system so organic content and ad spend actually reinforce each other.",
  items: [
    {
      icon: CalendarDays,
      title: "Content Strategy & Calendars",
      description:
        "A monthly calendar built from real content pillars, audience research and what your competitors are quietly winning with.",
    },
    {
      icon: Video,
      title: "Short-Form Video & Reels",
      description:
        "Hooks, scripts, editing, captions and thumbnails for Reels, TikTok and Shorts, the format doing the heaviest lifting on every platform.",
    },
    {
      icon: Sparkles,
      title: "Creative & Graphic Design",
      description:
        "Scroll-stopping statics, carousels and story sets designed in your brand system, not recycled from a template pack.",
    },
    {
      icon: Target,
      title: "Paid Social Advertising",
      description:
        "Meta, TikTok, LinkedIn and Pinterest campaigns with proper audience structure, creative testing and clean conversion tracking.",
    },
    {
      icon: MessagesSquare,
      title: "Community Management",
      description:
        "Comments, DMs and reviews answered in your voice, with AI-assisted triage so genuine buying signals reach a human fast.",
    },
    {
      icon: UserCheck,
      title: "Influencer & UGC Programmes",
      description:
        "Creator sourcing, briefs, contracts and performance tracking, plus a UGC library you can reuse across ads and product pages.",
    },
  ],
};

const metrics = [
  { value: "+312%", label: "Avg. Reach Growth", icon: Eye },
  { value: "4.8%", label: "Avg. Engagement Rate", icon: Heart },
  { value: "20+", label: "Assets Shipped Monthly", icon: Video },
  { value: "3.4x", label: "Avg. Return on Ad Spend", icon: BarChart3 },
];

const calendarVisual = (
  <div className="glass-card p-8">
    <div className="text-sm font-mono text-white/30 mb-6">
      Content Calendar, This Week
    </div>

    <div className="space-y-2.5">
      {[
        { day: "MON", type: "Reel", topic: "Behind the build", status: "Live" },
        { day: "TUE", type: "Carousel", topic: "3 costly mistakes", status: "Live" },
        { day: "WED", type: "Story set", topic: "Client Q&A", status: "Live" },
        { day: "THU", type: "Static", topic: "Result snapshot", status: "Scheduled" },
        { day: "FRI", type: "Reel", topic: "Founder POV", status: "In edit" },
        { day: "SAT", type: "UGC", topic: "Customer unboxing", status: "Drafted" },
      ].map((item) => (
        <div
          key={item.day}
          className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5"
        >
          <div className="w-11 text-[10px] font-mono font-bold text-coral">
            {item.day}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm text-white/80 truncate">{item.topic}</div>
            <div className="text-[11px] text-white/30">{item.type}</div>
          </div>
          <span
            className={`px-2 py-0.5 rounded-md text-[10px] font-semibold ${
              item.status === "Live"
                ? "bg-green-400/10 text-green-400/80"
                : "bg-white/5 text-white/40"
            }`}
          >
            {item.status}
          </span>
        </div>
      ))}
    </div>

    <div className="mt-6 pt-5 border-t border-white/5 grid grid-cols-3 gap-4 text-center">
      {[
        { value: "184K", label: "Reach" },
        { value: "8.9K", label: "Engagements" },
        { value: "412", label: "Profile clicks" },
      ].map((stat) => (
        <div key={stat.label}>
          <div className="text-lg font-black text-white">{stat.value}</div>
          <div className="text-[10px] text-white/40 mt-0.5">{stat.label}</div>
        </div>
      ))}
    </div>
  </div>
);

const adsVisual = (
  <div className="glass-card p-8">
    <div className="text-sm font-mono text-white/30 mb-6">
      Paid Social, Creative Test
    </div>

    <div className="space-y-3 mb-6">
      {[
        { name: "Hook A · Problem-first", roas: "4.1x", bar: "92%", win: true },
        { name: "Hook B · Social proof", roas: "3.2x", bar: "72%", win: false },
        { name: "Hook C · Offer-led", roas: "2.4x", bar: "54%", win: false },
        { name: "Hook D · Founder story", roas: "1.9x", bar: "42%", win: false },
      ].map((item) => (
        <div key={item.name}>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs text-white/60">{item.name}</span>
            <span
              className={`text-xs font-mono ${
                item.win ? "text-green-400/80" : "text-white/40"
              }`}
            >
              {item.roas}
            </span>
          </div>
          <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
            <div
              className={`h-full rounded-full ${
                item.win ? "bg-coral-gradient" : "bg-white/15"
              }`}
              style={{ width: item.bar }}
            />
          </div>
        </div>
      ))}
    </div>

    <div className="pt-5 border-t border-white/5 space-y-2.5">
      {[
        { label: "Cost per lead", value: "$11.40" },
        { label: "Creatives tested this month", value: "24" },
        { label: "Budget reallocated to winners", value: "68%" },
      ].map((row) => (
        <div
          key={row.label}
          className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5"
        >
          <span className="text-sm text-white/60">{row.label}</span>
          <span className="text-sm font-medium text-white/80">{row.value}</span>
        </div>
      ))}
    </div>
  </div>
);

const splits = [
  {
    tag: "Organic Engine",
    title: "Consistency Beats",
    titleAccent: "Occasional Brilliance",
    body:
      "One viral post is luck. A content system that ships twenty good assets a month is a channel. We build the system, then let the data tell us what to make more of.",
    bullets: [
      "Content pillars derived from your sales objections, not from a trend list",
      "Hooks and scripts written before anything gets filmed, so shoots stay efficient",
      "One shoot repurposed into Reels, carousels, stories and long-form clips",
      "Weekly performance reviews that feed directly into next week's calendar",
      "Community management that turns comments into conversations and DMs into leads",
    ],
    visual: calendarVisual,
  },
  {
    tag: "Paid Social",
    title: "Ad Spend With",
    titleAccent: "Receipts",
    body:
      "We treat paid social as a creative testing machine. Structure the account properly, test hooks relentlessly, kill losers fast and pour budget into whatever survives contact with the audience.",
    bullets: [
      "Clean account structure with proper prospecting, retargeting and retention layers",
      "Server-side conversion tracking so attribution survives iOS and cookie loss",
      "Systematic hook and creative testing, typically 20+ variants a month",
      "Weekly budget reallocation toward the creatives actually producing revenue",
      "Reporting tied to leads and sales, not impressions and vanity engagement",
    ],
    reverse: true,
    visual: adsVisual,
  },
];

const process = {
  tag: "How We Run It",
  title: "A Repeatable",
  titleAccent: "Growth Loop",
  steps: [
    {
      step: "01",
      title: "Audit & Positioning",
      desc: "We review your accounts, competitors and audience, then define the angles that will actually differentiate you.",
    },
    {
      step: "02",
      title: "Content System",
      desc: "Pillars, formats, tone and a monthly calendar, plus the production workflow to fill it without chaos.",
    },
    {
      step: "03",
      title: "Produce & Publish",
      desc: "Creative production, scheduling, community management and paid campaigns running as one coordinated push.",
    },
    {
      step: "04",
      title: "Measure & Double Down",
      desc: "Monthly reporting on reach, engagement, leads and ROAS, with next month's plan built from what won this month.",
    },
  ],
};

const stack = {
  tag: "Platforms & Tools",
  title: "Where We",
  titleAccent: "Operate",
  body:
    "We go deep on the two or three platforms where your buyers actually spend time, rather than spreading thin across all of them.",
  groups: [
    {
      label: "Platforms",
      items: ["Instagram", "TikTok", "LinkedIn", "Facebook", "YouTube", "Pinterest"],
    },
    {
      label: "Ads",
      items: ["Meta Ads", "TikTok Ads", "LinkedIn Ads", "Pinterest Ads", "CAPI"],
    },
    {
      label: "Production",
      items: ["Adobe CC", "Figma", "CapCut", "Canva Pro", "AI creative tools"],
    },
    {
      label: "Ops & Reporting",
      items: ["Later", "Metricool", "Sprout", "GA4", "Looker Studio"],
    },
  ],
};

const faqs = [
  {
    question: "Do you create the content or do we have to supply it?",
    answer:
      "We create it. Scripts, design, editing, captions and hashtags are all included. For video-led brands we run remote or on-site shoot days a few times a quarter and repurpose that footage across the whole month. If you already produce content in-house, we can slot in as strategy and distribution only.",
  },
  {
    question: "How long before we see results?",
    answer:
      "Paid social gives directional data within two weeks and reliable numbers by week six. Organic is slower and more honest: month one is setup and baselining, month two is when engagement starts moving, and month three onward is where compounding shows up. We report the leading indicators every month so you are never guessing in the meantime.",
  },
  {
    question: "Which platforms should we actually be on?",
    answer:
      "Almost never all of them. We recommend based on where your buyers are and what content you can sustainably produce. For most B2B clients that is LinkedIn plus one video platform. For consumer brands it is usually Instagram and TikTok. We would rather do two platforms properly than six badly.",
  },
  {
    question: "How do you use AI in social media work?",
    answer:
      "For the unglamorous parts: research and trend mining, first-draft caption variants, comment and DM triage, automated lead qualification from inbound messages, and performance analysis across hundreds of posts. The strategy, the hooks and the brand voice stay human, because AI-generated social content reads exactly like AI-generated social content.",
  },
  {
    question: "Is ad spend included in your fee?",
    answer:
      "No, and you should be wary of any agency that blurs the two. Our management fee is separate and you pay platforms directly from your own ad accounts, which you own. That keeps spend transparent and means you keep all historical data if we ever part ways.",
  },
];

const SocialMediaMarketing = () => (
  <ServiceTemplate
    seo={{
      title: "Social Media Marketing & Management Agency | Codilated",
      description:
        "Social media strategy, short-form video, creative design, community management and paid social on Meta, TikTok and LinkedIn, reported on leads and ROAS.",
    }}
    schema={{
      name: "Social Media Marketing & Management",
      description:
        "Social media strategy, content production, short-form video, community management and paid social advertising across Instagram, TikTok, LinkedIn and Facebook.",
      slug: "/services/social-media-marketing",
      serviceType: "Social Media Marketing",
    }}
    hero={{
      tag: "Social Media Marketing",
      title: "Social Media That Builds Pipeline",
      description:
        "Strategy, creative, community and paid social run as one system, measured on leads and revenue rather than likes.",
    }}
    metrics={metrics}
    capabilities={capabilities}
    splits={splits}
    process={process}
    stack={stack}
    faqs={faqs}
    related={[
      "/services/branding-design",
      "/services/digital-marketing",
      "/services/conversational-ai",
    ]}
    cta={{
      tag: "Grow Your Audience",
      title: "Let's Build Your Content",
      titleAccent: "Engine",
      body:
        "Tell us your handles and your goal. We'll send back a free audit of your last 90 days and the three changes we'd make first.",
      primary: { label: "Get a Free Social Audit", to: "/contact" },
      secondary: { label: "See Marketing Services", to: "/services/digital-marketing" },
    }}
  />
);

export default SocialMediaMarketing;
