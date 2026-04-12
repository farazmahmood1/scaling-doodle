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
} from "lucide-react";
import AnimatedSection from "../components/ui/AnimatedSection";

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

// ─── Blog Data ──────────────────────────────────────────────────────
const blogData = {
  "ai-automation-transforming-business-2025": {
    title: "How AI Automation Is Transforming Business Operations in 2025",
    category: "AI Automation",
    author: "Hashim Ali",
    date: "March 28, 2025",
    readTime: "8 min read",
    icon: Bot,
    image: "linear-gradient(135deg, #e44946 0%, #ef6c68 50%, #0A192F 100%)",
    intro:
      "Artificial intelligence is no longer a futuristic concept — it's the driving force behind the most efficient businesses in 2025. From automating mundane tasks to orchestrating complex workflows, AI automation is reshaping how companies operate at every level.",
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
          "Lead Generation & Sales — AI-powered prospecting tools can identify, qualify, and engage potential customers 24/7, increasing pipeline volume by 300% or more.",
          "Customer Support — Conversational AI agents handle 80% of routine inquiries, providing instant responses while freeing human agents for complex issues.",
          "Data Processing — Intelligent document processing and data extraction reduce manual data entry by 90%, with higher accuracy rates.",
          "HR & Recruitment — AI screening tools evaluate thousands of applications in minutes, identifying top candidates with remarkable precision.",
          "Email Marketing — Hyper-personalized campaigns powered by AI achieve 2-3x higher engagement rates compared to traditional approaches.",
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
          "The key to successful AI automation implementation is starting with high-impact, low-complexity processes. Identify the tasks that consume the most time, involve repetitive patterns, and have clear success metrics. These are your quick wins — the automations that deliver immediate value and build momentum for larger initiatives.\n\nFrom there, you can progressively automate more complex workflows, building an interconnected system of AI agents that work together to optimize your entire operation.",
      },
    ],
    quote: {
      text: "AI automation isn't about replacing humans — it's about amplifying human potential. When you automate the mundane, your team can focus on what truly matters: creativity, strategy, and building relationships.",
      author: "Hashim Ali",
    },
    keyTakeaways: [
      "AI automation in 2025 goes beyond simple rules — it understands context and learns from patterns.",
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
    author: "Hashim Ali",
    date: "March 15, 2025",
    readTime: "6 min read",
    icon: MessageSquare,
    image: "linear-gradient(135deg, #0D2137 0%, #e44946 100%)",
    intro:
      "Most chatbots fail because they're built to answer questions, not to drive outcomes. The difference between a chatbot and a conversational AI agent is intent — a well-designed agent guides users toward conversion while delivering genuine value.",
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
          "Natural Language Understanding — The agent must grasp user intent, not just keywords. This means fine-tuning models on your specific domain and customer language.",
          "Conversation Flow Design — Map out the ideal path from first message to conversion, with intelligent branching for different user needs.",
          "Context Memory — The agent should remember previous interactions and reference them naturally, creating a personalized experience.",
          "Integration Layer — Connect with your CRM, calendar, and knowledge base so the agent can take real actions, not just provide information.",
          "Handoff Protocol — Design smooth escalation paths to human agents when the AI reaches its limits.",
        ],
      },
      {
        heading: "Deploying Across Channels",
        content:
          "The most effective conversational AI strategy is omnichannel. Deploy your agent across your website, WhatsApp, Facebook Messenger, Instagram DMs, and even voice calls. The key is maintaining conversation continuity — a user who starts chatting on your website should be able to continue that same conversation on WhatsApp without repeating themselves.\n\nVoice agents are the fastest-growing channel in 2025. AI-powered voice agents can handle inbound and outbound calls, qualify leads, schedule appointments, and provide support — all with natural-sounding speech and real-time comprehension.",
      },
      {
        heading: "Measuring Conversion Impact",
        content:
          "Track these metrics to measure your conversational AI's impact: conversation-to-lead rate, average response time, resolution rate, customer satisfaction score (CSAT), and revenue attributed to AI-assisted conversations. Our clients typically see a 2-5x improvement in lead conversion within the first month of deploying a well-designed AI agent.",
      },
    ],
    quote: {
      text: "The best conversational AI doesn't feel like talking to a bot. It feels like talking to the most knowledgeable, patient, and helpful person at your company — available 24/7.",
      author: "Hashim Ali",
    },
    keyTakeaways: [
      "Design for outcomes, not just answers — every conversation should guide toward conversion.",
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
    author: "Hashim Ali",
    date: "March 5, 2025",
    readTime: "7 min read",
    icon: TrendingUp,
    image: "linear-gradient(135deg, #112240 0%, #ef6c68 100%)",
    intro:
      "In a world drowning in data, the companies that win are the ones that can see the future. Predictive analytics powered by AI turns your historical data into a crystal ball — forecasting customer behavior, market shifts, and operational bottlenecks before they happen.",
    sections: [
      {
        heading: "From Descriptive to Predictive",
        content:
          "Most businesses are still stuck in the descriptive analytics phase — looking at dashboards that tell them what happened last month. Predictive analytics takes you from rearview mirror to windshield. Using machine learning models trained on your historical data, you can forecast demand, predict churn, optimize pricing, and anticipate supply chain disruptions with remarkable accuracy.",
      },
      {
        heading: "Real-World Applications",
        content:
          "Predictive analytics is delivering transformative results across industries:",
        bullets: [
          "E-commerce — Demand forecasting that reduces inventory costs by 30% while eliminating stockouts.",
          "SaaS — Churn prediction models that identify at-risk customers 60 days before they cancel.",
          "Finance — Credit risk scoring that improves approval accuracy while reducing default rates.",
          "Healthcare — Patient outcome prediction that enables proactive care and reduces readmission rates.",
          "Manufacturing — Predictive maintenance that prevents equipment failures and reduces downtime by 45%.",
        ],
      },
      {
        heading: "Building Your Predictive Pipeline",
        content:
          "A successful predictive analytics implementation requires clean data, the right models, and a feedback loop. Start by auditing your data sources — identify what data you have, what's missing, and what needs cleaning. Then work with AI specialists to build and train models specific to your business questions.\n\nThe most critical step is creating a feedback loop where model predictions are continuously compared against actual outcomes, allowing the system to learn and improve over time.",
      },
      {
        heading: "The Competitive Advantage",
        content:
          "Companies using predictive analytics make decisions 5x faster than competitors relying on traditional reporting. They spot opportunities earlier, avoid risks sooner, and allocate resources more efficiently. In 2025, predictive analytics isn't a nice-to-have — it's the baseline for competitive survival.",
      },
    ],
    quote: {
      text: "Data without prediction is just history. Prediction without action is just trivia. The magic happens when AI connects your data to decisions that drive real business outcomes.",
      author: "Hashim Ali",
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
    author: "Hashim Ali",
    date: "February 22, 2025",
    readTime: "10 min read",
    icon: Brain,
    image: "linear-gradient(135deg, #0A192F 0%, #D0EAF5 100%)",
    intro:
      "Getting a machine learning model to work in a Jupyter notebook is one thing. Getting it to work reliably in production, at scale, with real users depending on it — that's an entirely different challenge. Here's what we've learned from deploying ML systems for dozens of enterprise clients.",
    sections: [
      {
        heading: "The Production Gap",
        content:
          "Studies show that 87% of ML models never make it to production. The gap between a working prototype and a production system is vast — it involves infrastructure, monitoring, versioning, testing, and operational considerations that most data scientists aren't trained to handle. Bridging this gap requires a combination of ML expertise and software engineering best practices.",
      },
      {
        heading: "Essential Production Practices",
        content:
          "Here are the practices that separate hobby projects from production-grade ML systems:",
        bullets: [
          "Model Versioning — Track every model version with its training data, hyperparameters, and performance metrics. Tools like MLflow and DVC make this manageable.",
          "Feature Stores — Centralize feature computation to ensure consistency between training and serving. This eliminates the #1 cause of training-serving skew.",
          "Automated Testing — Test your data pipeline, model performance, and API responses. Include data validation, schema checks, and regression tests.",
          "Monitoring & Alerting — Track model performance in real-time. Detect data drift, prediction drift, and performance degradation before they impact users.",
          "Graceful Degradation — Design fallback behavior for when models fail or confidence is low. Never let a model failure cascade into a system failure.",
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
      author: "Hashim Ali",
    },
    keyTakeaways: [
      "87% of ML models never reach production — engineering practices bridge the gap.",
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
    author: "Hashim Ali",
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
          "Traditional lead generation is manual, slow, and expensive. Sales reps spend hours researching prospects, crafting emails, and following up — with most of their effort wasted on unqualified leads. AI flips this model entirely. Instead of casting a wide net, AI systems identify your ideal customer profile, find matching prospects across the internet, and engage them with hyper-personalized outreach — all automatically.",
      },
      {
        heading: "The AI Lead Gen Stack",
        content:
          "A modern AI lead generation system consists of several interconnected components:",
        bullets: [
          "AI Prospecting — Scrape and analyze data from LinkedIn, company websites, job boards, and news to identify prospects matching your ICP.",
          "Lead Scoring — Machine learning models score each lead based on fit, intent signals, and engagement patterns, ensuring your team focuses on the hottest opportunities.",
          "Personalized Outreach — AI generates unique, relevant email sequences for each prospect based on their company, role, recent activity, and pain points.",
          "Smart Follow-ups — Automated follow-up sequences that adapt timing and messaging based on recipient behavior.",
          "CRM Sync — All activity is automatically logged in your CRM, keeping your data clean and your pipeline visible.",
        ],
      },
      {
        heading: "Results That Speak",
        content:
          "Our clients implementing AI lead generation consistently report dramatic results. Average pipeline growth of 300-500%. Cost per qualified lead reduction of 60-70%. And sales reps report reclaiming 15-20 hours per week that was previously spent on manual prospecting.\n\nThe compounding effect is what makes AI lead gen truly powerful. As the system learns which prospects convert and which messaging resonates, it continuously optimizes — getting smarter and more effective with every campaign.",
      },
    ],
    quote: {
      text: "The best salespeople shouldn't be prospecting — they should be closing. AI lead generation ensures your pipeline is always full so your team can focus on what they do best.",
      author: "Hashim Ali",
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
    author: "Hashim Ali",
    date: "January 30, 2025",
    readTime: "9 min read",
    icon: Code2,
    image: "linear-gradient(135deg, #0A192F 0%, #e44946 50%, #112240 100%)",
    intro:
      "Building a SaaS product is hard. Building an AI-powered SaaS product that delivers genuine intelligence — not just a ChatGPT wrapper — is harder. This guide covers the architecture decisions, AI integration patterns, and product strategies that separate successful AI SaaS products from the noise.",
    sections: [
      {
        heading: "Beyond the ChatGPT Wrapper",
        content:
          "The first wave of AI SaaS products was dominated by thin wrappers around GPT APIs. Users quickly saw through these — if all you're offering is a prompt template on top of an API, there's no defensible moat. The next generation of AI SaaS products embeds intelligence deeply into the product experience, using AI to deliver capabilities that would be impossible with traditional software.",
      },
      {
        heading: "Architecture Decisions That Matter",
        content:
          "Building AI into a SaaS product requires architectural decisions at every layer:",
        bullets: [
          "Model Selection — Choose between hosted APIs (OpenAI, Anthropic), open-source models (Llama, Mistral), or fine-tuned models based on your latency, cost, and data privacy requirements.",
          "Data Pipeline — Design your data ingestion, processing, and storage to support both real-time AI features and batch analytics.",
          "AI Feature Architecture — Decide which features use AI in real-time vs. batch, which need fine-tuned models vs. prompting, and how to handle AI failures gracefully.",
          "Multi-tenancy & Isolation — Ensure each customer's data is isolated while allowing your models to learn from aggregate patterns.",
          "Cost Management — AI API costs can explode at scale. Implement caching, request optimization, and tiered model selection to keep costs sustainable.",
        ],
      },
      {
        heading: "The Product Strategy",
        content:
          "The most successful AI SaaS products follow a specific pattern: they solve a painful, well-defined problem in a specific vertical, using AI to deliver 10x better results than the existing solution. They don't try to be everything to everyone — they go deep in one area and become indispensable.\n\nStart with the problem, not the technology. Identify a workflow where AI can deliver transformative value, then build the minimal product that proves that value. Expand from there based on what your users actually need.",
      },
      {
        heading: "Launching and Scaling",
        content:
          "Launch with a small, focused beta to validate your AI's real-world performance. Collect feedback aggressively and iterate on both your models and your UX. The biggest trap in AI SaaS is optimizing for impressive demos while neglecting the reliability and consistency that paying users demand.\n\nAs you scale, invest in observability — monitor your AI's performance, accuracy, and cost per request. Build dashboards that show you exactly how your AI is performing for each customer, and set up alerts for degradation.",
      },
    ],
    quote: {
      text: "The winning AI SaaS products aren't the ones with the most advanced models — they're the ones that solve real problems so well that users can't imagine going back to the old way.",
      author: "Hashim Ali",
    },
    keyTakeaways: [
      "Go beyond ChatGPT wrappers — embed AI deeply into your product experience.",
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
  "ai-automation-transforming-business-2025": {
    title: "How AI Automation Is Transforming Business Operations in 2025",
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
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
                    AI Solutions Architect
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
              Let's Build Your{" "}
              <span className="gradient-text">AI Solution</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10">
              Interested in implementing the strategies discussed in this
              article? Let's talk about how we can help.
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
