import React from "react";
import {
  Palette,
  Type,
  BookOpen,
  Layout,
  Package,
  Sparkles,
  Fingerprint,
  Layers,
  Eye,
} from "lucide-react";
import ServiceTemplate from "../../components/ui/ServiceTemplate";

const capabilities = {
  tag: "Creative Services",
  title: "Identity Systems, Not Just",
  titleAccent: "Logos",
  intro:
    "Positioning, naming, visual identity, messaging and the design system that keeps everything consistent long after the launch deck is closed.",
  items: [
    {
      icon: Fingerprint,
      title: "Brand Strategy & Positioning",
      description:
        "Who you are for, what you stand against, and the one sentence that makes a buyer choose you over the cheaper option.",
    },
    {
      icon: Palette,
      title: "Visual Identity & Logo Design",
      description:
        "Logo systems, colour, typography, iconography and art direction, delivered in every format your team will realistically need.",
    },
    {
      icon: BookOpen,
      title: "Brand Guidelines",
      description:
        "A practical guideline document with real usage examples, so freelancers and new hires stay on-brand without asking permission.",
    },
    {
      icon: Type,
      title: "Messaging & Voice",
      description:
        "Value propositions, tone of voice, boilerplate copy and message hierarchy for every audience you sell to.",
    },
    {
      icon: Layout,
      title: "UI/UX & Product Design",
      description:
        "Website and app design in Figma with a component library and design tokens that map directly to the code we ship.",
    },
    {
      icon: Package,
      title: "Collateral & Packaging",
      description:
        "Pitch decks, proposals, social templates, signage, print and packaging, all drawn from the same visual system.",
    },
  ],
};

const metrics = [
  { value: "2-4 wks", label: "Identity Turnaround", icon: Sparkles },
  { value: "40+", label: "Assets Per Brand Kit", icon: Layers },
  { value: "100%", label: "Source Files Handed Over", icon: Package },
  { value: "3", label: "Concept Routes Presented", icon: Eye },
];

const brandKitVisual = (
  <div className="glass-card p-8">
    <div className="text-sm font-mono text-white/30 mb-6">Brand Kit</div>

    {/* Colour swatches */}
    <div className="mb-6">
      <div className="text-[11px] font-mono text-white/30 mb-3">Palette</div>
      <div className="grid grid-cols-5 gap-2">
        {[
          { hex: "#0A192F", name: "Navy" },
          { hex: "#112240", name: "Deep" },
          { hex: "#e44946", name: "Coral" },
          { hex: "#ef6c68", name: "Light" },
          { hex: "#D0EAF5", name: "Sky" },
        ].map((c) => (
          <div key={c.hex}>
            <div
              className="h-12 rounded-lg border border-white/10"
              style={{ background: c.hex }}
            />
            <div className="text-[9px] font-mono text-white/30 mt-1.5 text-center">
              {c.name}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Type scale */}
    <div className="mb-6">
      <div className="text-[11px] font-mono text-white/30 mb-3">Type Scale</div>
      <div className="space-y-1.5 p-4 rounded-xl bg-white/[0.03] border border-white/5">
        <div className="text-2xl font-black text-white leading-tight">
          Display / 900
        </div>
        <div className="text-base font-semibold text-white/80">
          Heading / 600
        </div>
        <div className="text-sm text-white/50">
          Body copy / 400, set for comfortable reading
        </div>
        <div className="text-[11px] font-mono text-coral/70 pt-1">
          MONO / LABELS
        </div>
      </div>
    </div>

    {/* Tokens */}
    <div>
      <div className="text-[11px] font-mono text-white/30 mb-3">
        Design Tokens
      </div>
      <div className="flex flex-wrap gap-2">
        {[
          "--radius-lg",
          "--space-6",
          "--shadow-card",
          "--brand-primary",
          "--font-display",
        ].map((token) => (
          <span
            key={token}
            className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-[11px] font-mono text-white/50"
          >
            {token}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const deliverablesVisual = (
  <div className="glass-card p-8">
    <div className="text-sm font-mono text-white/30 mb-6">
      What Lands in Your Drive
    </div>

    <div className="space-y-2.5">
      {[
        { label: "Primary & secondary logos", value: "SVG, PNG, EPS" },
        { label: "Favicon & app icon set", value: "12 sizes" },
        { label: "Brand guidelines", value: "PDF + Figma" },
        { label: "Social profile & cover art", value: "8 platforms" },
        { label: "Post & story templates", value: "24 layouts" },
        { label: "Pitch deck template", value: "Slides + Keynote" },
        { label: "Email signature & letterhead", value: "HTML + DOCX" },
        { label: "Editable source files", value: "yours to keep" },
      ].map((item) => (
        <div
          key={item.label}
          className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5"
        >
          <div className="w-2 h-2 rounded-full bg-coral/60 flex-shrink-0" />
          <span className="flex-1 text-sm text-white/70">{item.label}</span>
          <span className="text-[11px] font-mono text-white/35">
            {item.value}
          </span>
        </div>
      ))}
    </div>

    <div className="mt-6 pt-5 border-t border-white/5">
      <p className="text-xs text-white/40 leading-relaxed">
        Every file is editable and yours outright. No watermarked previews, no
        licence that expires, no coming back to us for a resize.
      </p>
    </div>
  </div>
);

const splits = [
  {
    tag: "Systems Over Assets",
    title: "A Brand Is a System,",
    titleAccent: "Not a File",
    body:
      "A logo alone falls apart the moment three different people start using it. We build the rules, tokens and templates that keep everything coherent as your team grows.",
    bullets: [
      "Colour, type, spacing and radius defined as tokens that map straight into code",
      "Component library in Figma mirroring the components we build in React",
      "Templates for the assets you make weekly, so nobody starts from a blank canvas",
      "Guidelines written for real use, with correct and incorrect examples side by side",
      "Accessibility checked, every colour pairing tested for contrast before it ships",
    ],
    visual: brandKitVisual,
  },
  {
    tag: "Deliverables",
    title: "You Leave With",
    titleAccent: "Everything",
    body:
      "No hostage files, no watermarks, no licensing games. When the project ends you have the complete kit and the source files behind it.",
    bullets: [
      "Full logo suite in vector and raster, for light and dark backgrounds",
      "Brand guidelines as both a shareable PDF and a live Figma file",
      "Social, presentation, document and email templates ready to use",
      "Web-ready assets already sized, compressed and named sensibly",
      "A recorded handover session so your team knows how to use all of it",
    ],
    reverse: true,
    visual: deliverablesVisual,
  },
];

const process = {
  tag: "Our Process",
  title: "Strategy First,",
  titleAccent: "Then Pixels",
  steps: [
    {
      step: "01",
      title: "Discovery",
      desc: "Workshops with your team, customer interviews and a competitor sweep to find the space you can credibly own.",
    },
    {
      step: "02",
      title: "Positioning",
      desc: "Audience, promise, personality and messaging framework agreed in writing before any design work starts.",
    },
    {
      step: "03",
      title: "Design Routes",
      desc: "Three distinct visual directions presented in real context, not on a blank page. You pick one and we refine it.",
    },
    {
      step: "04",
      title: "System & Handover",
      desc: "The chosen route expanded into a full identity system, guidelines, templates and a live handover session.",
    },
  ],
};

const stack = {
  tag: "How We Work",
  title: "Craft Tools and",
  titleAccent: "Clear Handovers",
  body:
    "We design in the same tools your team and developers already use, so nothing gets lost in translation between the deck and the build.",
  groups: [
    {
      label: "Design",
      items: ["Figma", "Illustrator", "Photoshop", "After Effects", "Blender"],
    },
    {
      label: "Systems",
      items: ["Design tokens", "Auto-layout", "Variants", "Storybook", "Tailwind"],
    },
    {
      label: "Deliverables",
      items: ["Brand book", "Figma library", "Template pack", "Motion kit"],
    },
    {
      label: "Collaboration",
      items: ["Figma comments", "Loom walkthroughs", "Notion", "Weekly reviews"],
    },
  ],
};

const faqs = [
  {
    question: "How many logo concepts do we get?",
    answer:
      "Three genuinely different strategic routes, each shown in real context: on a website, a phone screen, a business card and signage. Endless variations tend to produce design by committee rather than a better outcome, so we go deep on three rather than shallow on twelve. Two rounds of refinement on the chosen route are included.",
  },
  {
    question: "Do we own the copyright to the final designs?",
    answer:
      "Yes. Full ownership and all source files transfer to you on final payment, including working Figma and Adobe files. There are no ongoing licence fees and no restriction on how you use the work.",
  },
  {
    question: "Can you rebrand us without losing existing recognition?",
    answer:
      "That is usually the right approach for an established business. We assess which equity is genuinely worth keeping, colour, a shape, a name, and evolve rather than replace it. Complete resets make sense when the current brand is actively working against you, and we will say so plainly if that is what we find.",
  },
  {
    question: "Do you design websites as well as brands?",
    answer:
      "Yes, and it is usually the same project. We design UI in Figma with a component library, then our development team builds it in React or WordPress with design tokens carried straight through. One team from positioning to production means nothing gets lost at the handover.",
  },
  {
    question: "What if we only need a refresh, not a full rebrand?",
    answer:
      "That is a common and sensible engagement. A refresh typically covers logo cleanup, an updated palette and type scale, refreshed templates and a shorter guideline document, at roughly a third of the cost and time of a full identity project.",
  },
];

const BrandingDesign = () => (
  <ServiceTemplate
    seo={{
      title: "Branding, Identity & Creative Design Agency | Codilated",
      description:
        "Brand strategy, logo and visual identity, messaging, guidelines and UI/UX design, delivered as a complete system with every source file handed over.",
    }}
    schema={{
      name: "Branding & Creative Design",
      description:
        "Brand strategy, positioning, logo and visual identity design, messaging frameworks, brand guidelines, UI/UX design and marketing collateral systems.",
      slug: "/services/branding-design",
      serviceType: "Brand Design",
    }}
    hero={{
      tag: "Branding & Design",
      title: "Brands Built to Be Remembered",
      description:
        "Positioning, identity, messaging and design systems that make your business instantly recognisable, and easy for your team to keep consistent.",
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
      "/services/wordpress-development",
    ]}
    cta={{
      tag: "Start Your Brand",
      title: "Let's Define What You",
      titleAccent: "Stand For",
      body:
        "Whether you're naming something new or fixing a brand that has drifted, we'll start with a short strategy call and an honest read on what you need.",
      primary: { label: "Book a Brand Consult", to: "/contact" },
      secondary: { label: "See Web Development", to: "/services/web-development" },
    }}
  />
);

export default BrandingDesign;
