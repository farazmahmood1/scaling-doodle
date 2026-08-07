import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  User,
  Calendar,
  Tag,
  Share2,
  Bookmark,
  Sparkles,
  Bot,
  Brain,
  TrendingUp,
  MessageSquare,
  Code2,
  CheckCircle2,
  Lightbulb,
  Quote,
  ShoppingBag,
  Video,
  Gauge,
  Palette,
  Layers,
  Search,
} from "lucide-react";
import AnimatedSection from "../components/ui/AnimatedSection";
import Seo from "../components/ui/Seo";
import JsonLd from "../components/ui/JsonLd";
import { articleSchema } from "../seo/schemas";

// ─── Animation Variants ─────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// Author bylines, kept in step with the team listed on the About page.
const AUTHOR_ROLES = {
  "Victoria Zoe": "Head of Growth & Brand",
  "Fentola James": "Lead Full-Stack Developer",
  "Sarah Khan": "Head of AI Engineering",
  "Joseph Lee": "Founder & AI Architect",
};

// ─── Blog Data ──────────────────────────────────────────────────────
const blogData = {
  "ai-first-growth-stack": {
    title: "The AI-First Growth Stack: Why Brand, Site and Marketing Compound",
    category: "Industry Trends",
    author: "Victoria Zoe",
    date: "August 4, 2026",
    readTime: "9 min read",
    icon: Layers,
    image: "linear-gradient(135deg, #e44946 0%, #ef6c68 50%, #0A192F 100%)",
    intro:
      "Most growing businesses buy their brand from one place, their website from another, their marketing from a third, and their AI tooling from whoever demoed best last quarter. Each vendor optimises their own slice. Nobody owns the number that matters. Here's what changes when those four things are designed as one system.",
    sections: [
      {
        heading: "The Four-Vendor Problem",
        content:
          "The pattern is remarkably consistent. A designer delivers a beautiful brand that the web developer implements approximately. The marketing agency then drives traffic to pages they had no say in, and blames conversion. The AI vendor bolts a chatbot on top that doesn't know what any of them decided.\n\nEverybody is individually competent and collectively ineffective, because there is no shared definition of success. The designer measures aesthetics. The developer measures uptime. The agency measures traffic. The AI vendor measures deflected tickets. Not one of them is accountable for revenue.",
      },
      {
        heading: "What Compounding Actually Looks Like",
        content:
          "When the same team owns all four layers, each one makes the others cheaper and more effective:",
        bullets: [
          "Brand into build, design tokens defined during identity work map directly into components, so the site ships on-brand without a translation phase.",
          "Build into marketing, a site engineered for Core Web Vitals and schema from day one means SEO doesn't start with a three-month technical remediation project.",
          "Marketing into AI, the objections your ads surface become the training material for your support chatbot and your lead qualification logic.",
          "AI back into brand, transcripts from thousands of conversations tell you exactly which words your customers use, which sharpens your messaging far better than a workshop does.",
        ],
      },
      {
        heading: "The Cost of the Gaps",
        content:
          "Gaps between vendors are expensive in ways that never appear on an invoice. Rebuilding a page because the design file and the code drifted. Losing a month of ad spend to conversion tracking nobody owned. Discovering at launch that the CMS can't produce the landing page structure the SEO strategy depends on.\n\nIn our experience these integration costs routinely account for 20 to 30 percent of a project's total spend, and they are entirely avoidable. They are also invisible, which is why they persist.",
      },
      {
        heading: "Where AI Belongs in the Stack",
        content:
          "AI is not a fifth product bolted onto the other four. It is a layer that runs across all of them, and it only produces value when the layers underneath are sound.\n\nAn AI agent handling enquiries is worth very little if your site takes eight seconds to load and nobody arrives. Conversely, a fast site with strong traffic and no automated follow-up leaks every lead that arrives outside working hours. Sequence matters: fix the foundation, drive the demand, then automate the response.",
      },
      {
        heading: "How to Start Without Rebuilding Everything",
        content:
          "You do not need to replace all four vendors on day one. Start by defining one shared metric that every layer is judged against, usually qualified leads or orders, and instrument it properly end to end.\n\nThat single act exposes where the leaks are. Sometimes the answer is a faster site. Sometimes it's clearer positioning. Sometimes it's an AI agent answering at 11pm on a Sunday. What matters is that you can now see it, rather than receiving four separate reports that all look green.",
      },
    ],
    quote: {
      text: "Four competent vendors optimising four different metrics will reliably lose to one team optimising the metric that pays the bills.",
      author: "Victoria Zoe",
    },
    keyTakeaways: [
      "Separate vendors optimise separate metrics, and nobody owns revenue.",
      "Integration gaps quietly consume 20 to 30 percent of typical project budgets.",
      "AI is a layer across the stack, not a fifth product bolted onto it.",
      "Start by instrumenting one shared metric end to end, then fix what it exposes.",
    ],
    relatedPosts: [
      "shopify-conversion-optimisation",
      "ai-automation-transforming-business-2025",
    ],
  },
  "shopify-conversion-optimisation": {
    title: "Shopify Conversion Optimisation: Where Stores Actually Lose Money",
    category: "E-Commerce",
    author: "Fentola James",
    date: "July 22, 2026",
    readTime: "8 min read",
    icon: ShoppingBag,
    image: "linear-gradient(135deg, #0D2137 0%, #e44946 100%)",
    intro:
      "We audit a lot of Shopify stores. The same six leaks turn up in almost every one, and none of them are the things store owners worry about. Here they are, ranked by how much revenue they typically cost, along with the fixes that reliably move the number within a month.",
    sections: [
      {
        heading: "Leak One: Product Pages That Answer the Wrong Questions",
        content:
          "Most product pages describe the product. Very few address the reason someone hesitates. Will it fit? How long is delivery? What happens if I hate it? Is this the right one for my situation?\n\nGo read thirty support tickets and thirty pre-purchase chat transcripts, then rebuild the page around what people actually ask. In practice this usually means moving sizing, delivery and returns information above the fold and adding a short comparison block for whichever two products people confuse. It is unglamorous, and it is consistently the highest-return change we make.",
      },
      {
        heading: "Leak Two: A Slow Store on Mobile",
        content:
          "Shopify's infrastructure is fast. Most themes are not, once they have accumulated six apps that each inject their own JavaScript. We regularly see stores loading five megabytes on a product page.\n\nAudit your app list ruthlessly. Every app you keep should be earning more than it costs in load time. Compress and resize images properly, defer third-party scripts, and test on a mid-range Android phone on 4G rather than your laptop on office wifi.",
      },
      {
        heading: "Leak Three: Nothing Happens After an Abandoned Cart",
        content:
          "Roughly seven in ten carts are abandoned. Most stores send one generic email three hours later, if anything at all. A sequenced recovery flow across email and WhatsApp, with genuinely useful content rather than an immediate discount, typically recovers 10 to 15 percent of those carts.\n\nHold the discount back until the third message. Offering it in the first email teaches your customers to abandon deliberately, which is an expensive habit to instil.",
      },
      {
        heading: "Leak Four: Search That Doesn't Find Things",
        content:
          "Visitors who use site search convert at several times the rate of those who don't, which makes default keyword-matching search an unusually costly weakness. Someone typing 'waterproof jacket' and getting zero results because you called it a 'shell' is a customer you paid to acquire and then turned away.\n\nSemantic search fixes this properly, and it is one of the clearest, most measurable places AI earns its keep in commerce.",
      },
      {
        heading: "Leak Five: No Post-Purchase Sequence",
        content:
          "Acquiring a new customer costs several times more than selling to an existing one, yet most stores go silent the moment an order confirmation is sent. A post-purchase sequence covering delivery updates, care or usage guidance, a review request at the right moment and a replenishment reminder timed to actual product life is the cheapest revenue in commerce.",
      },
      {
        heading: "Leak Six: Testing Based on Vibes",
        content:
          "Plenty of stores run 'tests' that end after four days because the founder preferred one version. That isn't a test, it's a decision with extra steps.\n\nRun one change at a time, to a genuine sample size, for a full business cycle including weekends. Fewer, better-run tests will teach you more in a quarter than a dozen abandoned ones.",
      },
    ],
    quote: {
      text: "Nobody has ever left a store because the hero animation wasn't smooth enough. They leave because they couldn't find the delivery time.",
      author: "Fentola James",
    },
    keyTakeaways: [
      "Rebuild product pages around real customer objections, not product features.",
      "Audit your app list, each one should earn more than it costs in load time.",
      "Sequence cart recovery across channels and hold the discount until message three.",
      "Semantic site search and post-purchase flows are the cheapest revenue available.",
    ],
    relatedPosts: ["choosing-your-web-stack", "seo-in-the-age-of-ai-answers"],
  },
  "seo-in-the-age-of-ai-answers": {
    title: "SEO in the Age of AI Answers: How to Get Cited, Not Just Ranked",
    category: "SEO & Marketing",
    author: "Victoria Zoe",
    date: "July 8, 2026",
    readTime: "10 min read",
    icon: Search,
    image: "linear-gradient(135deg, #112240 0%, #ef6c68 100%)",
    intro:
      "Ranking first used to mean getting the click. Now an AI Overview, ChatGPT or Perplexity often answers the question before anyone scrolls. That doesn't make SEO obsolete, but it does change what you optimise for: being the source the answer is built from.",
    sections: [
      {
        heading: "What Actually Changed",
        content:
          "The mechanics of discovery haven't changed as much as the commentary suggests. Crawlers still crawl, links still signal authority, and page quality still matters. What changed is the surface. A meaningful share of informational queries now resolve inside an AI answer, with two or three sources cited beneath it.\n\nThe practical consequence is that mid-funnel informational traffic is falling for almost everyone, while commercial and comparison queries still send clicks. Optimising for volume alone has never been a worse strategy.",
      },
      {
        heading: "What Earns a Citation",
        content:
          "Across the sites we manage, the content that gets cited by AI systems shares a consistent set of traits:",
        bullets: [
          "Direct answers early, a clear, self-contained paragraph that answers the question in the first hundred words, before any preamble.",
          "Extractable structure, real headings that match real questions, short paragraphs, and tables or lists where the data suits them.",
          "Specific, checkable facts, numbers, dates, named methods and stated conditions. Vague copy is unquotable and gets skipped.",
          "Named authorship and evidence, a real author with demonstrable experience, first-hand data and sources that can be verified.",
          "Strong entity signals, consistent organisation and author schema so the model can connect your content to a credible entity.",
        ],
      },
      {
        heading: "The Technical Layer Still Decides",
        content:
          "None of the above matters if the crawlers can't reach you. Check that GPTBot, ClaudeBot, PerplexityBot and Google-Extended are allowed in your robots.txt if you want to appear in AI answers, and understand that blocking them is a legitimate choice with an obvious cost.\n\nBeyond that, the fundamentals are unchanged and unforgiving: fast server responses, content rendered without requiring JavaScript execution, clean canonical URLs, accurate sitemaps and complete structured data.",
      },
      {
        heading: "Measuring Something New",
        content:
          "Rank tracking alone no longer describes reality. Add brand mention tracking across AI platforms, monitor impressions against clicks in Search Console to spot queries being answered without you, and watch branded search volume as a proxy for the awareness AI citations create even when they don't send a click.\n\nExpect a widening gap between impressions and clicks on informational content. That gap is not necessarily failure. It is often visibility you are gaining without attribution, which is uncomfortable but real.",
      },
      {
        heading: "What to Stop Doing",
        content:
          "Stop publishing thin content targeting long-tail informational keywords, that traffic is precisely what AI answers absorb first. Stop padding articles to hit an arbitrary word count. Stop chasing volume without commercial intent.\n\nWrite fewer, better pages that a person with genuine expertise would be willing to put their name on. That has always been the advice. The difference now is that the alternative has stopped working entirely.",
      },
    ],
    quote: {
      text: "Optimising for AI answers isn't a new discipline. It's the old advice, finally enforced: say something specific, say it early, and be someone worth quoting.",
      author: "Victoria Zoe",
    },
    keyTakeaways: [
      "Informational traffic is being absorbed by AI answers, commercial queries still click.",
      "Answer directly in the first hundred words, with structure a model can extract.",
      "Allow AI crawlers deliberately and keep schema, speed and rendering clean.",
      "Track brand mentions in AI platforms alongside traditional rankings.",
    ],
    relatedPosts: ["short-form-video-system", "ai-first-growth-stack"],
  },
  "short-form-video-system": {
    title: "The Short-Form Video System That Actually Builds Pipeline",
    category: "Social Media",
    author: "Victoria Zoe",
    date: "June 24, 2026",
    readTime: "7 min read",
    icon: Video,
    image: "linear-gradient(135deg, #c83c38 0%, #0D2137 100%)",
    intro:
      "Every business knows it should be making short-form video. Most produce four decent pieces, run out of ideas, and quietly stop. The problem is almost never talent or budget. It's the absence of a system that makes the next twenty assets obvious.",
    sections: [
      {
        heading: "Start With Objections, Not Trends",
        content:
          "The most reliable content source in any business is the sales team's inbox. Every objection, every 'but what about', every question asked three times a week is a video.\n\nThis works because it is content with commercial intent baked in. Trend-chasing might get you reach among people who will never buy. Answering the question that stops people buying gets you reach among people who are actively considering it.",
      },
      {
        heading: "The Hook Is Most of the Work",
        content:
          "The first two seconds decide whether the other twenty-eight are watched. Write hooks before you write scripts, and write ten for every video you plan to make.\n\nThe patterns that consistently perform for us: name the mistake ('Most Shopify stores lose money here'), contradict the consensus, state a specific number, or open mid-story. What consistently fails: introducing yourself, explaining what the video will cover, and any sentence beginning 'In today's video'.",
      },
      {
        heading: "One Shoot, Twenty Assets",
        content:
          "Sustainable output comes from batching, not discipline. A single half-day shoot, properly planned, produces a month of content:",
        bullets: [
          "Eight to ten talking-head pieces from your objection list, filmed back to back.",
          "B-roll of the actual work, which becomes overlay for every one of them.",
          "Two longer conversations that cut down into six or seven clips each.",
          "Stills for carousels and statics, captured in the same session and lighting.",
        ],
      },
      {
        heading: "Where AI Helps and Where It Doesn't",
        content:
          "AI is genuinely useful for research, generating hook variants to react to, captioning, transcription, repurposing a video into a carousel outline, and analysing performance patterns across hundreds of posts.\n\nIt is not useful for writing your actual scripts. AI-generated social copy has a texture that audiences now recognise instantly, and it reads as effort you were not willing to spend. Use it to remove friction from production, not to replace the point of view that makes anyone follow you.",
      },
      {
        heading: "Measure Watch Time, Then Pipeline",
        content:
          "For the first ninety days, optimise for retention. Average watch time and three-second hold rate tell you whether your hooks and pacing work, long before follower count means anything.\n\nAfter that, connect it to pipeline: profile clicks, link clicks, DMs and, most importantly, how often new leads mention having seen your content. That last one rarely shows up in any dashboard, so add the question to your intake form.",
      },
    ],
    quote: {
      text: "You don't need more ideas. You need a list of the questions your customers already ask, and a camera.",
      author: "Victoria Zoe",
    },
    keyTakeaways: [
      "Source content from real sales objections rather than platform trends.",
      "Write ten hooks per video, the first two seconds do most of the work.",
      "Batch production, one planned half-day shoot yields a month of assets.",
      "Optimise for retention first, then connect output to actual pipeline.",
    ],
    relatedPosts: ["seo-in-the-age-of-ai-answers", "brand-system-not-just-logo"],
  },
  "wordpress-speed-what-works": {
    title: "Why Your WordPress Site Is Slow, and What Actually Fixes It",
    category: "Web Development",
    author: "Fentola James",
    date: "June 10, 2026",
    readTime: "7 min read",
    icon: Gauge,
    image: "linear-gradient(135deg, #0A192F 0%, #D0EAF5 100%)",
    intro:
      "Installing a caching plugin is the WordPress equivalent of turning it off and on again. Sometimes it helps. It rarely addresses why the site was slow in the first place. Here's what we find when we open the hood on genuinely slow WordPress sites, in order of how much damage it's doing.",
    sections: [
      {
        heading: "The Page Builder Tax",
        content:
          "Page builders are the single largest cause of slow WordPress sites we encounter. They are convenient, and they ship enormous CSS and JavaScript payloads on every single page, most of which is never used by that page.\n\nOn a recent rescue project, moving a thirty-page site from a builder to native blocks with Advanced Custom Fields took page weight from 5.4MB to 780KB, with no visual change the client could point to. The editing experience got simpler, not harder, because the team could only compose layouts that were on-brand by construction.",
      },
      {
        heading: "Plugin Sprawl",
        content:
          "Forty-plus active plugins is common and almost always indefensible. Each one adds queries, scripts, styles and an update surface. We regularly find three plugins doing overlapping jobs, a slider plugin used once on a page nobody visits, and two SEO plugins actively fighting each other over meta tags.\n\nThe test for each plugin is simple: what does it earn, and could twenty lines of code in the theme do the same thing? Roughly a third of the average install fails that test.",
      },
      {
        heading: "Images, Still",
        content:
          "It's 2026 and we are still finding 4000-pixel-wide JPEGs being displayed at 400 pixels. Images remain the largest byte contributor on most pages, and the fix is well understood: modern formats, correct responsive sources, explicit width and height attributes to prevent layout shift, and lazy loading everything below the fold.\n\nAutomate it at upload so nobody has to remember, because eventually nobody will.",
      },
      {
        heading: "The Database Nobody Has Ever Cleaned",
        content:
          "A five-year-old site typically carries tens of thousands of post revisions, expired transients, orphaned metadata from plugins removed years ago, and spam comments in the queue. This bloats every query and slows the admin experience your team uses daily.\n\nPrune revisions, clear expired transients, remove orphaned rows and add object caching. Admin speed matters more than people admit, because a slow editor is how content programmes quietly die.",
      },
      {
        heading: "Then, and Only Then, Caching",
        content:
          "Once the underlying page is lean, caching and a CDN are genuinely transformative rather than a plaster over the problem. Page caching, object caching, a CDN in front of static assets and sensible cache headers will take an already-lean site to consistently sub-second loads.\n\nDo it in this order. Caching a bloated page just means you serve the bloat faster.",
      },
    ],
    quote: {
      text: "Caching a 5MB page doesn't make it fast. It makes it a 5MB page that arrives slightly sooner.",
      author: "Fentola James",
    },
    keyTakeaways: [
      "Page builders are usually the biggest single cause of slow WordPress sites.",
      "Audit plugins ruthlessly, around a third typically earn nothing.",
      "Automate the image pipeline so correct sizing never depends on memory.",
      "Clean the database and fix the page first, then add caching and a CDN.",
    ],
    relatedPosts: ["choosing-your-web-stack", "shopify-conversion-optimisation"],
  },
  "brand-system-not-just-logo": {
    title: "A Brand Is a System, Not a Logo File",
    category: "Branding & Design",
    author: "Victoria Zoe",
    date: "May 27, 2026",
    readTime: "6 min read",
    icon: Palette,
    image: "linear-gradient(135deg, #0A192F 0%, #e44946 50%, #112240 100%)",
    intro:
      "Six months after a rebrand, most brands have quietly drifted. Three shades of the primary colour are in circulation, the deck uses a different typeface to the site, and somebody has stretched the logo. This isn't carelessness. It's what happens when you deliver assets instead of a system.",
    sections: [
      {
        heading: "Why Identities Drift",
        content:
          "Drift is a supply problem, not a discipline problem. Someone needs a social graphic at 5pm, the template doesn't cover that format, and the brand guidelines are a 40-page PDF in a folder nobody can find. So they improvise, reasonably, and the improvisation becomes precedent.\n\nMultiply that by a growing team, three freelancers and an agency, and within two quarters the brand is whatever the last person made.",
      },
      {
        heading: "Tokens, Not Swatches",
        content:
          "The fix starts with defining your brand as named values rather than colour chips in a PDF. Colour, type scale, spacing, radii and shadow all become tokens with names, and those names appear identically in Figma and in code.\n\nThis matters because it removes judgement from the moment of use. Nobody has to decide which navy this is. There is one, it is called brand-primary, and it resolves to the same hex everywhere it appears.",
      },
      {
        heading: "Templates for Whatever You Make Weekly",
        content:
          "Audit what your team genuinely produces most often. For most businesses that's social posts, proposals, decks and email. Those are the templates that prevent drift, and they're often the ones brand projects skip in favour of stationery nobody prints.",
        bullets: [
          "Social post and story sets for the formats you actually publish.",
          "A deck template with real slide layouts, not just a branded title slide.",
          "Proposal and document templates with the type scale already applied.",
          "A component library in Figma that mirrors the components in your codebase.",
        ],
      },
      {
        heading: "Guidelines People Will Actually Open",
        content:
          "A brand guideline is a working document, not a monument. The version people use is short, shows correct and incorrect side by side, lives somewhere linkable, and answers the awkward questions: what happens on a photo background, what's the minimum size, which logo variant on dark.\n\nShip the long PDF if you like the artefact. Also ship the live Figma file, because that's the one your team will open at 5pm.",
      },
      {
        heading: "Accessibility Is Part of the System",
        content:
          "Test every colour pairing for contrast before it enters the palette, not after a customer complains. Brands that only work at full brightness on a designer's calibrated monitor fail on a phone in daylight, which is where most of your audience will encounter them.",
      },
    ],
    quote: {
      text: "Brands don't drift because people stop caring. They drift because at 5pm the template didn't exist and the deadline did.",
      author: "Victoria Zoe",
    },
    keyTakeaways: [
      "Identity drift is a supply problem, solved with templates and tokens.",
      "Define brand values as named tokens shared between Figma and code.",
      "Build templates for what your team makes weekly, not for stationery.",
      "Ship a short, linkable, living guideline alongside any formal PDF.",
    ],
    relatedPosts: ["ai-first-growth-stack", "short-form-video-system"],
  },
  "choosing-your-web-stack": {
    title: "React, Shopify or WordPress? Choosing a Stack You Won't Regret",
    category: "Web Development",
    author: "Fentola James",
    date: "May 13, 2026",
    readTime: "8 min read",
    icon: Code2,
    image: "linear-gradient(135deg, #0D2137 0%, #D0EAF5 100%)",
    intro:
      "Agencies tend to recommend whatever they build in. That's a bad reason to pick a platform you'll live with for five years. We build in all three, so here's the decision framework we actually use internally, including the cases where the honest answer costs us the project.",
    sections: [
      {
        heading: "Start With Who Edits It",
        content:
          "The single most predictive question is not technical. It's who updates this site on a Tuesday afternoon, and what are they comfortable with?\n\nA beautifully architected headless build is a liability if the marketing team then has to file a ticket to change a headline. Conversely, giving a technical team WordPress when they need custom application logic guarantees years of fighting the framework. Match the tool to the humans first.",
      },
      {
        heading: "When WordPress Is Right",
        content:
          "WordPress remains an excellent choice when content volume is high and changes are frequent, when a non-technical team needs genuine autonomy, when you need a mature ecosystem for forms, memberships or multilingual content, and when budget favours proven solutions over bespoke ones.\n\nIt's the wrong choice when your product is an application rather than a site, when you need real-time features, or when your team has no appetite for ongoing maintenance. WordPress is not maintenance-free, and treating it that way is how sites get compromised.",
      },
      {
        heading: "When Shopify Is Right",
        content:
          "If you sell physical products, Shopify's default position should be very strong. Payments, tax, shipping, inventory, fraud handling and PCI compliance are solved problems you would otherwise rebuild badly.\n\nIt becomes the wrong answer when commerce is a minor part of a mostly-content site, when you need highly unusual checkout logic outside what Shopify Functions allow, or when your catalogue and pricing model genuinely doesn't fit a products-and-variants shape. Those cases are rarer than founders think.",
      },
      {
        heading: "When Custom React Is Right",
        content:
          "Custom builds earn their cost when the site is really an application, when you need bespoke interaction or data models, when performance is a competitive requirement rather than a preference, or when you're building something you intend to own and extend for years.\n\nThey are the wrong answer when you need a ten-page brochure site next month. We turn that work down, or steer it to WordPress, because a custom build there is us taking money to solve a problem that didn't need solving.",
      },
      {
        heading: "The Hybrid Nobody Mentions",
        content:
          "Plenty of the best setups mix platforms deliberately. A Next.js marketing site with a headless CMS, in front of a Shopify storefront handling checkout. A custom application with a WordPress blog on a subdirectory for content velocity.\n\nThe cost of hybrid is complexity at the seams, which is real. The benefit is that each part of your business runs on the tool that's genuinely best for it. That trade is usually worth it above a certain size, and rarely worth it below it.",
      },
    ],
    quote: {
      text: "The right stack is the one your team can still move fast on in year three, not the one that demos best in week one.",
      author: "Fentola James",
    },
    keyTakeaways: [
      "Ask who edits the site weekly before asking anything technical.",
      "WordPress wins on content velocity and non-technical autonomy.",
      "Shopify wins on physical product commerce, by a wide margin.",
      "Custom React earns its cost for applications, not brochure sites.",
    ],
    relatedPosts: ["wordpress-speed-what-works", "shopify-conversion-optimisation"],
  },
  "ai-automation-transforming-business-2025": {
    title: "How AI Automation Is Transforming Business Operations in 2025",
    category: "AI Automation",
    author: "Victoria Zoe",
    date: "March 28, 2025",
    readTime: "8 min read",
    icon: Bot,
    image: "linear-gradient(135deg, #e44946 0%, #ef6c68 50%, #0A192F 100%)",
    intro:
      "Artificial intelligence is no longer a futuristic concept, it's the driving force behind the most efficient businesses in 2025. From automating mundane tasks to orchestrating complex workflows, AI automation is reshaping how companies operate at every level.",
    sections: [
      {
        heading: "The Current State of AI Automation",
        content:
          "In 2025, AI automation has moved far beyond simple rule-based systems. Modern AI agents can understand context, learn from patterns, and make decisions that previously required human judgment. Businesses across industries are leveraging these capabilities to streamline operations, reduce costs, and unlock new revenue streams.\n\nThe global AI automation market is projected to reach $25.6 billion by the end of 2025, with adoption rates increasing by 40% year-over-year across mid-market and enterprise companies.",
      },
      {
        heading: "Key Areas Being Transformed",
        content:
          "AI automation is making the biggest impact in several critical business areas:",
        bullets: [
          "Lead Generation & Sales, AI-powered prospecting tools can identify, qualify, and engage potential customers 24/7, increasing pipeline volume by 300% or more.",
          "Customer Support, Conversational AI agents handle 80% of routine inquiries, providing instant responses while freeing human agents for complex issues.",
          "Data Processing, Intelligent document processing and data extraction reduce manual data entry by 90%, with higher accuracy rates.",
          "HR & Recruitment, AI screening tools evaluate thousands of applications in minutes, identifying top candidates with remarkable precision.",
          "Email Marketing, Hyper-personalized campaigns powered by AI achieve 2-3x higher engagement rates compared to traditional approaches.",
        ],
      },
      {
        heading: "The ROI of Intelligent Automation",
        content:
          "Companies implementing AI automation are seeing measurable results within weeks, not months. On average, businesses report a 10x return on their AI automation investment within the first year. This ROI comes from multiple sources: reduced labor costs, faster processing times, fewer errors, and the ability to scale operations without proportionally increasing headcount.\n\nOne of our clients, a mid-sized B2B company, automated their entire lead qualification process. Within 60 days, they saw a 340% increase in qualified leads while reducing their sales team's prospecting time by 42 hours per week.",
      },
      {
        heading: "Getting Started with AI Automation",
        content:
          "The key to successful AI automation implementation is starting with high-impact, low-complexity processes. Identify the tasks that consume the most time, involve repetitive patterns, and have clear success metrics. These are your quick wins, the automations that deliver immediate value and build momentum for larger initiatives.\n\nFrom there, you can progressively automate more complex workflows, building an interconnected system of AI agents that work together to optimize your entire operation.",
      },
    ],
    quote: {
      text: "AI automation isn't about replacing humans, it's about amplifying human potential. When you automate the mundane, your team can focus on what truly matters: creativity, strategy, and building relationships.",
      author: "Victoria Zoe",
    },
    keyTakeaways: [
      "AI automation in 2025 goes beyond simple rules, it understands context and learns from patterns.",
      "The biggest ROI comes from automating lead gen, customer support, data processing, and HR workflows.",
      "Start with high-impact, low-complexity processes for quick wins.",
      "Companies see an average 10x ROI within the first year of implementing AI automation.",
    ],
    relatedPosts: [
      "ai-lead-generation-autopilot",
      "building-conversational-ai-agents",
    ],
  },
  "building-conversational-ai-agents": {
    title: "Building Conversational AI Agents That Actually Convert",
    category: "Conversational AI",
    author: "Victoria Zoe",
    date: "March 15, 2025",
    readTime: "6 min read",
    icon: MessageSquare,
    image: "linear-gradient(135deg, #0D2137 0%, #e44946 100%)",
    intro:
      "Most chatbots fail because they're built to answer questions, not to drive outcomes. The difference between a chatbot and a conversational AI agent is intent, a well-designed agent guides users toward conversion while delivering genuine value.",
    sections: [
      {
        heading: "Why Most Chatbots Fail",
        content:
          "The first generation of chatbots was built on rigid decision trees and keyword matching. They frustrated users with canned responses and dead-end conversations. In contrast, modern conversational AI agents leverage large language models to understand nuance, maintain context across multi-turn conversations, and adapt their approach based on user behavior.",
      },
      {
        heading: "Architecture of a High-Converting AI Agent",
        content:
          "Building an AI agent that converts requires careful architecture across several layers:",
        bullets: [
          "Natural Language Understanding, The agent must grasp user intent, not just keywords. This means fine-tuning models on your specific domain and customer language.",
          "Conversation Flow Design, Map out the ideal path from first message to conversion, with intelligent branching for different user needs.",
          "Context Memory, The agent should remember previous interactions and reference them naturally, creating a personalized experience.",
          "Integration Layer, Connect with your CRM, calendar, and knowledge base so the agent can take real actions, not just provide information.",
          "Handoff Protocol, Design smooth escalation paths to human agents when the AI reaches its limits.",
        ],
      },
      {
        heading: "Deploying Across Channels",
        content:
          "The most effective conversational AI strategy is omnichannel. Deploy your agent across your website, WhatsApp, Facebook Messenger, Instagram DMs, and even voice calls. The key is maintaining conversation continuity, a user who starts chatting on your website should be able to continue that same conversation on WhatsApp without repeating themselves.\n\nVoice agents are the fastest-growing channel in 2025. AI-powered voice agents can handle inbound and outbound calls, qualify leads, schedule appointments, and provide support, all with natural-sounding speech and real-time comprehension.",
      },
      {
        heading: "Measuring Conversion Impact",
        content:
          "Track these metrics to measure your conversational AI's impact: conversation-to-lead rate, average response time, resolution rate, customer satisfaction score (CSAT), and revenue attributed to AI-assisted conversations. Our clients typically see a 2-5x improvement in lead conversion within the first month of deploying a well-designed AI agent.",
      },
    ],
    quote: {
      text: "The best conversational AI doesn't feel like talking to a bot. It feels like talking to the most knowledgeable, patient, and helpful person at your company, available 24/7.",
      author: "Victoria Zoe",
    },
    keyTakeaways: [
      "Design for outcomes, not just answers, every conversation should guide toward conversion.",
      "Modern AI agents use LLMs for context-aware, multi-turn conversations.",
      "Omnichannel deployment with conversation continuity is the winning strategy.",
      "Track conversion metrics, not just engagement metrics, to measure real impact.",
    ],
    relatedPosts: [
      "ai-automation-transforming-business-2025",
      "custom-ai-saas-development-guide",
    ],
  },
  "predictive-analytics-competitive-edge": {
    title: "Predictive Analytics: Your Next Competitive Edge",
    category: "Data Analytics",
    author: "Victoria Zoe",
    date: "March 5, 2025",
    readTime: "7 min read",
    icon: TrendingUp,
    image: "linear-gradient(135deg, #112240 0%, #ef6c68 100%)",
    intro:
      "In a world drowning in data, the companies that win are the ones that can see the future. Predictive analytics powered by AI turns your historical data into a crystal ball, forecasting customer behavior, market shifts, and operational bottlenecks before they happen.",
    sections: [
      {
        heading: "From Descriptive to Predictive",
        content:
          "Most businesses are still stuck in the descriptive analytics phase, looking at dashboards that tell them what happened last month. Predictive analytics takes you from rearview mirror to windshield. Using machine learning models trained on your historical data, you can forecast demand, predict churn, optimize pricing, and anticipate supply chain disruptions with remarkable accuracy.",
      },
      {
        heading: "Real-World Applications",
        content:
          "Predictive analytics is delivering transformative results across industries:",
        bullets: [
          "E-commerce, Demand forecasting that reduces inventory costs by 30% while eliminating stockouts.",
          "SaaS, Churn prediction models that identify at-risk customers 60 days before they cancel.",
          "Finance, Credit risk scoring that improves approval accuracy while reducing default rates.",
          "Healthcare, Patient outcome prediction that enables proactive care and reduces readmission rates.",
          "Manufacturing, Predictive maintenance that prevents equipment failures and reduces downtime by 45%.",
        ],
      },
      {
        heading: "Building Your Predictive Pipeline",
        content:
          "A successful predictive analytics implementation requires clean data, the right models, and a feedback loop. Start by auditing your data sources, identify what data you have, what's missing, and what needs cleaning. Then work with AI specialists to build and train models specific to your business questions.\n\nThe most critical step is creating a feedback loop where model predictions are continuously compared against actual outcomes, allowing the system to learn and improve over time.",
      },
      {
        heading: "The Competitive Advantage",
        content:
          "Companies using predictive analytics make decisions 5x faster than competitors relying on traditional reporting. They spot opportunities earlier, avoid risks sooner, and allocate resources more efficiently. In 2025, predictive analytics isn't a nice-to-have, it's the baseline for competitive survival.",
      },
    ],
    quote: {
      text: "Data without prediction is just history. Prediction without action is just trivia. The magic happens when AI connects your data to decisions that drive real business outcomes.",
      author: "Victoria Zoe",
    },
    keyTakeaways: [
      "Move from descriptive to predictive analytics to see the future, not just the past.",
      "Clean data and continuous model feedback loops are essential for accuracy.",
      "Predictive analytics delivers ROI across e-commerce, SaaS, finance, healthcare, and manufacturing.",
      "Companies using predictive analytics make decisions 5x faster than competitors.",
    ],
    relatedPosts: [
      "machine-learning-production-best-practices",
      "ai-automation-transforming-business-2025",
    ],
  },
  "machine-learning-production-best-practices": {
    title: "Machine Learning in Production: Best Practices for 2025",
    category: "Machine Learning",
    author: "Victoria Zoe",
    date: "February 22, 2025",
    readTime: "10 min read",
    icon: Brain,
    image: "linear-gradient(135deg, #0A192F 0%, #D0EAF5 100%)",
    intro:
      "Getting a machine learning model to work in a Jupyter notebook is one thing. Getting it to work reliably in production, at scale, with real users depending on it, that's an entirely different challenge. Here's what we've learned from deploying ML systems for dozens of enterprise clients.",
    sections: [
      {
        heading: "The Production Gap",
        content:
          "Studies show that 87% of ML models never make it to production. The gap between a working prototype and a production system is vast, it involves infrastructure, monitoring, versioning, testing, and operational considerations that most data scientists aren't trained to handle. Bridging this gap requires a combination of ML expertise and software engineering best practices.",
      },
      {
        heading: "Essential Production Practices",
        content:
          "Here are the practices that separate hobby projects from production-grade ML systems:",
        bullets: [
          "Model Versioning, Track every model version with its training data, hyperparameters, and performance metrics. Tools like MLflow and DVC make this manageable.",
          "Feature Stores, Centralize feature computation to ensure consistency between training and serving. This eliminates the #1 cause of training-serving skew.",
          "Automated Testing, Test your data pipeline, model performance, and API responses. Include data validation, schema checks, and regression tests.",
          "Monitoring & Alerting, Track model performance in real-time. Detect data drift, prediction drift, and performance degradation before they impact users.",
          "Graceful Degradation, Design fallback behavior for when models fail or confidence is low. Never let a model failure cascade into a system failure.",
        ],
      },
      {
        heading: "Infrastructure Patterns",
        content:
          "The right infrastructure depends on your scale and latency requirements. For real-time inference, containerized model serving with auto-scaling (using tools like Kubernetes and TensorFlow Serving) is the standard. For batch predictions, orchestrated pipelines with Airflow or Prefect provide reliability and observability.\n\nRegardless of your approach, separate your training and serving infrastructure. Training workloads are bursty and GPU-intensive; serving workloads require low latency and high availability. Treating them as the same system leads to compromises in both areas.",
      },
      {
        heading: "Continuous Improvement",
        content:
          "Production ML is not deploy-and-forget. Establish a retraining cadence based on how quickly your data distribution changes. Set up A/B testing infrastructure to validate model improvements against production traffic. And build a human-in-the-loop system where edge cases and failures are captured and used to improve the next model version.",
      },
    ],
    quote: {
      text: "The best ML teams spend 20% of their time building models and 80% making them work reliably in production. That ratio is the difference between a demo and a product.",
      author: "Victoria Zoe",
    },
    keyTakeaways: [
      "87% of ML models never reach production, engineering practices bridge the gap.",
      "Model versioning, feature stores, and automated testing are non-negotiable.",
      "Separate training and serving infrastructure for optimal performance.",
      "Build continuous retraining, A/B testing, and human-in-the-loop feedback systems.",
    ],
    relatedPosts: [
      "predictive-analytics-competitive-edge",
      "custom-ai-saas-development-guide",
    ],
  },
  "ai-lead-generation-autopilot": {
    title: "AI Lead Generation: Putting Your Pipeline on Autopilot",
    category: "AI Automation",
    author: "Victoria Zoe",
    date: "February 10, 2025",
    readTime: "5 min read",
    icon: Sparkles,
    image: "linear-gradient(135deg, #c83c38 0%, #0D2137 100%)",
    intro:
      "What if your sales pipeline filled itself? AI-driven lead generation is making this a reality for B2B companies worldwide. By combining intelligent prospecting, automated outreach, and smart scoring, you can 10x your qualified leads without 10x-ing your team.",
    sections: [
      {
        heading: "The Old Way vs. The AI Way",
        content:
          "Traditional lead generation is manual, slow, and expensive. Sales reps spend hours researching prospects, crafting emails, and following up, with most of their effort wasted on unqualified leads. AI flips this model entirely. Instead of casting a wide net, AI systems identify your ideal customer profile, find matching prospects across the internet, and engage them with hyper-personalized outreach, all automatically.",
      },
      {
        heading: "The AI Lead Gen Stack",
        content:
          "A modern AI lead generation system consists of several interconnected components:",
        bullets: [
          "AI Prospecting, Scrape and analyze data from LinkedIn, company websites, job boards, and news to identify prospects matching your ICP.",
          "Lead Scoring, Machine learning models score each lead based on fit, intent signals, and engagement patterns, ensuring your team focuses on the hottest opportunities.",
          "Personalized Outreach, AI generates unique, relevant email sequences for each prospect based on their company, role, recent activity, and pain points.",
          "Smart Follow-ups, Automated follow-up sequences that adapt timing and messaging based on recipient behavior.",
          "CRM Sync, All activity is automatically logged in your CRM, keeping your data clean and your pipeline visible.",
        ],
      },
      {
        heading: "Results That Speak",
        content:
          "Our clients implementing AI lead generation consistently report dramatic results. Average pipeline growth of 300-500%. Cost per qualified lead reduction of 60-70%. And sales reps report reclaiming 15-20 hours per week that was previously spent on manual prospecting.\n\nThe compounding effect is what makes AI lead gen truly powerful. As the system learns which prospects convert and which messaging resonates, it continuously optimizes, getting smarter and more effective with every campaign.",
      },
    ],
    quote: {
      text: "The best salespeople shouldn't be prospecting, they should be closing. AI lead generation ensures your pipeline is always full so your team can focus on what they do best.",
      author: "Victoria Zoe",
    },
    keyTakeaways: [
      "AI lead gen replaces manual prospecting with intelligent, automated systems.",
      "The full stack includes AI prospecting, scoring, personalized outreach, and CRM sync.",
      "Expect 300-500% pipeline growth and 60-70% cost reduction per qualified lead.",
      "The system continuously improves as it learns from your conversion data.",
    ],
    relatedPosts: [
      "ai-automation-transforming-business-2025",
      "building-conversational-ai-agents",
    ],
  },
  "custom-ai-saas-development-guide": {
    title: "The Complete Guide to Custom AI SaaS Development",
    category: "Industry Trends",
    author: "Victoria Zoe",
    date: "January 30, 2025",
    readTime: "9 min read",
    icon: Code2,
    image: "linear-gradient(135deg, #0A192F 0%, #e44946 50%, #112240 100%)",
    intro:
      "Building a SaaS product is hard. Building an AI-powered SaaS product that delivers genuine intelligence, not just a ChatGPT wrapper, is harder. This guide covers the architecture decisions, AI integration patterns, and product strategies that separate successful AI SaaS products from the noise.",
    sections: [
      {
        heading: "Beyond the ChatGPT Wrapper",
        content:
          "The first wave of AI SaaS products was dominated by thin wrappers around GPT APIs. Users quickly saw through these, if all you're offering is a prompt template on top of an API, there's no defensible moat. The next generation of AI SaaS products embeds intelligence deeply into the product experience, using AI to deliver capabilities that would be impossible with traditional software.",
      },
      {
        heading: "Architecture Decisions That Matter",
        content:
          "Building AI into a SaaS product requires architectural decisions at every layer:",
        bullets: [
          "Model Selection, Choose between hosted APIs (OpenAI, Anthropic), open-source models (Llama, Mistral), or fine-tuned models based on your latency, cost, and data privacy requirements.",
          "Data Pipeline, Design your data ingestion, processing, and storage to support both real-time AI features and batch analytics.",
          "AI Feature Architecture, Decide which features use AI in real-time vs. batch, which need fine-tuned models vs. prompting, and how to handle AI failures gracefully.",
          "Multi-tenancy & Isolation, Ensure each customer's data is isolated while allowing your models to learn from aggregate patterns.",
          "Cost Management, AI API costs can explode at scale. Implement caching, request optimization, and tiered model selection to keep costs sustainable.",
        ],
      },
      {
        heading: "The Product Strategy",
        content:
          "The most successful AI SaaS products follow a specific pattern: they solve a painful, well-defined problem in a specific vertical, using AI to deliver 10x better results than the existing solution. They don't try to be everything to everyone, they go deep in one area and become indispensable.\n\nStart with the problem, not the technology. Identify a workflow where AI can deliver transformative value, then build the minimal product that proves that value. Expand from there based on what your users actually need.",
      },
      {
        heading: "Launching and Scaling",
        content:
          "Launch with a small, focused beta to validate your AI's real-world performance. Collect feedback aggressively and iterate on both your models and your UX. The biggest trap in AI SaaS is optimizing for impressive demos while neglecting the reliability and consistency that paying users demand.\n\nAs you scale, invest in observability, monitor your AI's performance, accuracy, and cost per request. Build dashboards that show you exactly how your AI is performing for each customer, and set up alerts for degradation.",
      },
    ],
    quote: {
      text: "The winning AI SaaS products aren't the ones with the most advanced models, they're the ones that solve real problems so well that users can't imagine going back to the old way.",
      author: "Victoria Zoe",
    },
    keyTakeaways: [
      "Go beyond ChatGPT wrappers, embed AI deeply into your product experience.",
      "Architecture decisions around model selection, data pipelines, and cost management are critical.",
      "Focus on a specific vertical and deliver 10x better results than existing solutions.",
      "Launch with a focused beta, collect aggressive feedback, and invest in AI observability.",
    ],
    relatedPosts: [
      "machine-learning-production-best-practices",
      "building-conversational-ai-agents",
    ],
  },
};

// Minimal post reference for related posts
const postIndex = {
  "ai-first-growth-stack": {
    title: "The AI-First Growth Stack: Why Brand, Site and Marketing Compound",
    category: "Industry Trends",
    readTime: "9 min read",
    icon: Layers,
    image: "linear-gradient(135deg, #e44946 0%, #ef6c68 50%, #0A192F 100%)",
  },
  "shopify-conversion-optimisation": {
    title: "Shopify Conversion Optimisation: Where Stores Actually Lose Money",
    category: "E-Commerce",
    readTime: "8 min read",
    icon: ShoppingBag,
    image: "linear-gradient(135deg, #0D2137 0%, #e44946 100%)",
  },
  "seo-in-the-age-of-ai-answers": {
    title: "SEO in the Age of AI Answers: How to Get Cited, Not Just Ranked",
    category: "SEO & Marketing",
    readTime: "10 min read",
    icon: Search,
    image: "linear-gradient(135deg, #112240 0%, #ef6c68 100%)",
  },
  "short-form-video-system": {
    title: "The Short-Form Video System That Actually Builds Pipeline",
    category: "Social Media",
    readTime: "7 min read",
    icon: Video,
    image: "linear-gradient(135deg, #c83c38 0%, #0D2137 100%)",
  },
  "wordpress-speed-what-works": {
    title: "Why Your WordPress Site Is Slow, and What Actually Fixes It",
    category: "Web Development",
    readTime: "7 min read",
    icon: Gauge,
    image: "linear-gradient(135deg, #0A192F 0%, #D0EAF5 100%)",
  },
  "brand-system-not-just-logo": {
    title: "A Brand Is a System, Not a Logo File",
    category: "Branding & Design",
    readTime: "6 min read",
    icon: Palette,
    image: "linear-gradient(135deg, #0A192F 0%, #e44946 50%, #112240 100%)",
  },
  "choosing-your-web-stack": {
    title: "React, Shopify or WordPress? Choosing a Stack You Won't Regret",
    category: "Web Development",
    readTime: "8 min read",
    icon: Code2,
    image: "linear-gradient(135deg, #0D2137 0%, #D0EAF5 100%)",
  },
  "ai-automation-transforming-business-2025": {
    title: "How AI Automation Is Transforming Business Operations",
    category: "AI Automation",
    readTime: "8 min read",
    icon: Bot,
    image: "linear-gradient(135deg, #e44946 0%, #ef6c68 50%, #0A192F 100%)",
  },
  "building-conversational-ai-agents": {
    title: "Building Conversational AI Agents That Actually Convert",
    category: "Conversational AI",
    readTime: "6 min read",
    icon: MessageSquare,
    image: "linear-gradient(135deg, #0D2137 0%, #e44946 100%)",
  },
  "predictive-analytics-competitive-edge": {
    title: "Predictive Analytics: Your Next Competitive Edge",
    category: "Data Analytics",
    readTime: "7 min read",
    icon: TrendingUp,
    image: "linear-gradient(135deg, #112240 0%, #ef6c68 100%)",
  },
  "machine-learning-production-best-practices": {
    title: "Machine Learning in Production: Best Practices for 2025",
    category: "Machine Learning",
    readTime: "10 min read",
    icon: Brain,
    image: "linear-gradient(135deg, #0A192F 0%, #D0EAF5 100%)",
  },
  "ai-lead-generation-autopilot": {
    title: "AI Lead Generation: Putting Your Pipeline on Autopilot",
    category: "AI Automation",
    readTime: "5 min read",
    icon: Sparkles,
    image: "linear-gradient(135deg, #c83c38 0%, #0D2137 100%)",
  },
  "custom-ai-saas-development-guide": {
    title: "The Complete Guide to Custom AI SaaS Development",
    category: "Industry Trends",
    readTime: "9 min read",
    icon: Code2,
    image: "linear-gradient(135deg, #0A192F 0%, #e44946 50%, #112240 100%)",
  },
};

// ─── Component ───────────────────────────────────────────────────────
const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogData[slug];

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-navy">
        <Seo
          title="Article Not Found | Codilated Blog"
          description="The blog post you're looking for doesn't exist. Browse Codilated's latest articles on AI, web development, e-commerce, branding and marketing."
          noindex
        />
        <span className="section-tag mb-4">404 Error</span>
        <h1 className="text-4xl font-black text-white mb-4">
          Article Not Found
        </h1>
        <p className="text-white/60 mb-8">
          The blog post you're looking for doesn't exist.
        </p>
        <Link to="/blog" className="btn-coral inline-flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>
    );
  }

  const Icon = post.icon;

  const seoDescription = (post.intro || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 158);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Seo
        title={`${post.title} | Codilated Blog`}
        description={seoDescription}
        type="article"
      />
      <JsonLd
        data={articleSchema({
          title: post.title,
          description: seoDescription,
          slug: `/blog/${slug}`,
          author: post.author,
          datePublished: new Date(post.date).toISOString(),
          category: post.category,
        })}
      />
      {/* ════════ HERO ════════ */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden noise-overlay">
        {/* Background gradient image */}
        <div
          className="absolute inset-0"
          style={{ background: post.image }}
        />
        <div className="absolute inset-0 bg-navy/80 backdrop-blur-sm" />

        {/* Grid pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-coral transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1.5 text-[10px] font-bold bg-coral/10 text-coral rounded-lg uppercase tracking-wider border border-coral/20">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-white/40">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-white/40">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-8">
              {post.title}
            </h1>

            {/* Author */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center border border-coral/20">
                  <User className="w-6 h-6 text-coral" />
                </div>
                <div>
                  <div className="text-base font-semibold text-white">
                    {post.author}
                  </div>
                  <div className="text-sm text-white/40">
                    {AUTHOR_ROLES[post.author] || "Codilated Team"}
                  </div>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-3">
                <button className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-coral/30 hover:text-coral text-white/40 transition-all duration-300">
                  <Share2 className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-coral/30 hover:text-coral text-white/40 transition-all duration-300">
                  <Bookmark className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent" />
      </section>

      {/* ════════ ARTICLE BODY ════════ */}
      <section className="relative py-16 lg:py-24 bg-navy">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-coral/3 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <AnimatedSection>
            <div className="glass-card p-8 lg:p-10 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-coral" />
                </div>
                <p className="text-lg text-white/70 leading-relaxed italic">
                  {post.intro}
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Sections */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-12"
          >
            {post.sections.map((section, i) => (
              <motion.div key={i} variants={itemVariants}>
                <h2 className="text-2xl lg:text-3xl font-black text-white mb-5 leading-tight">
                  {section.heading}
                </h2>
                {section.content.split("\n\n").map((paragraph, j) => (
                  <p
                    key={j}
                    className="text-white/50 text-base leading-relaxed mb-4"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.bullets && (
                  <div className="space-y-3 mt-6">
                    {section.bullets.map((bullet, k) => (
                      <div key={k} className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-coral/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-coral" />
                        </div>
                        <span className="text-white/60 text-sm leading-relaxed">
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Quote */}
          {post.quote && (
            <AnimatedSection className="my-16">
              <div className="relative glass-card p-8 lg:p-10 border-l-4 border-coral overflow-hidden">
                <Quote className="absolute top-4 right-4 w-16 h-16 text-coral/5" />
                <p className="text-xl lg:text-2xl font-bold text-white/80 leading-relaxed mb-4 relative z-10">
                  "{post.quote.text}"
                </p>
                <div className="flex items-center gap-3 relative z-10">
                  <div className="w-1 h-6 bg-coral rounded-full" />
                  <span className="text-sm font-semibold text-coral">
                    {post.quote.author}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          )}

          {/* Key Takeaways */}
          {post.keyTakeaways && (
            <AnimatedSection className="mb-16">
              <div className="glass-card p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-coral" />
                  </div>
                  <h3 className="text-xl font-black text-white">
                    Key Takeaways
                  </h3>
                </div>
                <div className="space-y-4">
                  {post.keyTakeaways.map((takeaway, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-7 h-7 rounded-lg bg-coral/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-coral">
                          {i + 1}
                        </span>
                      </div>
                      <span className="text-white/60 text-sm leading-relaxed">
                        {takeaway}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* ════════ RELATED POSTS ════════ */}
      {post.relatedPosts && post.relatedPosts.length > 0 && (
        <section className="relative py-16 lg:py-24 bg-navy-mid overflow-hidden">
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky/3 rounded-full blur-[150px] pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12">
              <span className="section-tag">Continue Reading</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-4">
                Related Articles
              </h2>
            </AnimatedSection>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
            >
              {post.relatedPosts.map((relatedSlug) => {
                const related = postIndex[relatedSlug];
                if (!related) return null;
                const RelatedIcon = related.icon;
                return (
                  <motion.div key={relatedSlug} variants={itemVariants}>
                    <Link
                      to={`/blog/${relatedSlug}`}
                      className="block glass-card overflow-hidden group hover:border-coral/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover h-full"
                    >
                      <div
                        className="relative h-40 overflow-hidden"
                        style={{ background: related.image }}
                      >
                        <div className="absolute inset-0 bg-navy/20" />
                        <div className="absolute bottom-4 left-4">
                          <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                            <RelatedIcon className="w-5 h-5 text-white" />
                          </div>
                        </div>
                        <div className="absolute top-4 right-4">
                          <span className="flex items-center gap-1.5 px-2.5 py-1 bg-black/30 backdrop-blur-md rounded-lg text-[10px] font-semibold text-white/80">
                            <Clock className="w-3 h-3" />
                            {related.readTime}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <span className="px-2.5 py-1 text-[10px] font-bold bg-coral/10 text-coral rounded-lg uppercase tracking-wider border border-coral/20">
                          {related.category}
                        </span>
                        <h3 className="text-lg font-bold text-white mt-3 group-hover:text-coral transition-colors duration-300 leading-snug">
                          {related.title}
                        </h3>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      )}

      {/* ════════ CTA ════════ */}
      <section className="relative py-24 lg:py-32 bg-navy overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-coral/5 rounded-full blur-[200px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="section-tag">Ready to Start?</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-6 text-balance">
              Want This{" "}
              <span className="gradient-text">Done Properly?</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10">
              We do this work every week across AI automation, web and
              e-commerce builds, branding and marketing. Tell us where you're
              stuck and we'll tell you what we'd do first.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-coral inline-flex items-center gap-2 text-lg px-10 py-4"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/blog"
                className="btn-outline inline-flex items-center gap-2 text-lg px-10 py-4"
              >
                More Articles
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  );
};

export default BlogDetail;
