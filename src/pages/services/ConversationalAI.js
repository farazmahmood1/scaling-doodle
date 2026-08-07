import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageSquare,
  CheckCircle2,
  Phone,
  Globe,
  Brain,
  Headphones,
  MessagesSquare,
  Languages,
  Mic,
  Clock,
  Users,
  Zap,
  BarChart3,
} from "lucide-react";
import AnimatedSection from "../../components/ui/AnimatedSection";
import PageHero from "../../components/ui/PageHero";
import RelatedServices from "../../components/ui/RelatedServices";
import Seo from "../../components/ui/Seo";
import JsonLd from "../../components/ui/JsonLd";
import { serviceSchema } from "../../seo/schemas";

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

const capabilities = [
  {
    icon: MessagesSquare,
    title: "Website Chatbots",
    description:
      "Intelligent chatbots that engage visitors, answer questions, qualify leads, and book meetings, all without human intervention.",
  },
  {
    icon: Phone,
    title: "AI Voice Agents",
    description:
      "Voice-powered AI that handles inbound and outbound calls with natural conversation, sentiment detection, and real-time responses.",
  },
  {
    icon: Globe,
    title: "WhatsApp & Social Media",
    description:
      "Deploy conversational AI across WhatsApp, Instagram, Facebook Messenger, and more, meeting customers where they already are.",
  },
  {
    icon: Languages,
    title: "Multilingual Support",
    description:
      "AI agents that speak 30+ languages fluently, providing seamless support to your global customer base around the clock.",
  },
  {
    icon: Brain,
    title: "Context-Aware Responses",
    description:
      "Our AI remembers conversation history, understands intent, and delivers personalized responses that feel genuinely human.",
  },
  {
    icon: Headphones,
    title: "Seamless Handoff",
    description:
      "When human touch is needed, AI smoothly transfers the conversation with full context, no customer has to repeat themselves.",
  },
];

const metrics = [
  { value: "24/7", label: "Availability", icon: Clock },
  { value: "30+", label: "Languages Supported", icon: Languages },
  { value: "85%", label: "Resolution Rate", icon: Zap },
  { value: "3s", label: "Avg Response Time", icon: MessageSquare },
];

const channels = [
  "Website live chat",
  "WhatsApp Business",
  "Instagram DMs",
  "Facebook Messenger",
  "Phone & voice calls",
  "SMS & text messaging",
  "Slack & Teams",
  "Custom integrations",
];

const ConversationalAI = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* ════════ HERO ════════ */}
      <Seo
        title="AI Chatbots & Voice Agents for Business | Codilated"
        description="Deploy AI chatbots and voice agents across web, WhatsApp, Instagram, and phone. Engage customers 24/7 with conversational AI that converts."
      />
      <JsonLd
        data={serviceSchema({
          name: "AI Chatbots & Voice Agents",
          description:
            "Conversational AI chatbots and voice agents deployed across websites, WhatsApp, Instagram, Facebook Messenger, and phone in 30+ languages.",
          slug: "/services/conversational-ai",
          serviceType: "Conversational AI Development",
        })}
      />
      <PageHero
        tag="Conversational AI"
        title="AI Chatbots & Voice Agents"
        description="Deploy intelligent conversational AI across every channel, websites, WhatsApp, social media, and phone, to engage customers 24/7."
      />

      {/* ════════ METRICS BAR ════════ */}
      <section className="relative py-16 bg-navy border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {metrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-coral" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white">
                    {metric.value}
                  </div>
                  <div className="text-xs text-white/40 mt-1">
                    {metric.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ════════ CAPABILITIES ════════ */}
      <section className="relative py-24 lg:py-32 bg-navy overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-coral/3 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="section-tag">Capabilities</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-6 text-balance">
              Conversations That{" "}
              <span className="gradient-text">Convert</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              Our conversational AI goes beyond scripted responses, it
              understands context, remembers history, and drives real business
              outcomes.
            </p>
          </AnimatedSection>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="glass-card p-8 group hover:border-coral/20 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center mb-5 group-hover:bg-coral/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-coral" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ════════ CHAT DEMO + CHANNELS ════════ */}
      <section className="relative py-24 lg:py-32 bg-navy-mid overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-sky/5 rounded-full blur-[150px] -translate-y-1/2" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Chat Demo */}
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="glass-card p-6 space-y-4">
                  <div className="flex items-center gap-3 pb-4 border-b border-white/5">
                    <div className="w-8 h-8 rounded-full bg-coral/20 flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 text-coral" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">
                        AI Assistant
                      </div>
                      <div className="text-xs text-green-400/60">Online</div>
                    </div>
                  </div>

                  {[
                    { from: "user", text: "Hi, I'm interested in your enterprise plan." },
                    {
                      from: "ai",
                      text: "Great to hear! Our enterprise plan includes unlimited API access, dedicated support, and custom model training. Would you like me to schedule a demo with our team?",
                    },
                    { from: "user", text: "Yes, how about tomorrow at 2 PM?" },
                    {
                      from: "ai",
                      text: "Done! I've booked a demo for tomorrow at 2:00 PM EST with Sarah from our enterprise team. You'll receive a calendar invite shortly. Is there anything specific you'd like covered?",
                    },
                  ].map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.15 }}
                      className={`flex ${
                        msg.from === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                          msg.from === "user"
                            ? "bg-coral/20 text-white/90 rounded-br-md"
                            : "bg-white/5 text-white/70 rounded-bl-md"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}

                  <div className="flex items-center gap-2 pt-2 border-t border-white/5">
                    <div className="flex-1 h-10 rounded-xl bg-white/5 border border-white/10 px-4 flex items-center">
                      <span className="text-white/20 text-sm">
                        Type a message...
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-coral flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
                <div className="absolute -inset-4 bg-coral/5 rounded-3xl blur-2xl -z-10" />
              </div>
            </AnimatedSection>

            {/* Channels */}
            <AnimatedSection direction="right">
              <span className="section-tag">Omnichannel</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 mb-6">
                One AI, <span className="gradient-text">Every Channel</span>
              </h2>
              <p className="text-white/50 text-lg mb-8 leading-relaxed">
                Deploy your AI agent once and reach customers across all their
                preferred channels, with consistent brand voice and full context
                awareness.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {channels.map((channel, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-coral/20 transition-colors duration-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-coral flex-shrink-0" />
                    <span className="text-white/60 text-sm">{channel}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ════════ VOICE AGENT SPOTLIGHT ════════ */}
      <section className="relative py-24 lg:py-32 bg-navy overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky/3 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="section-tag">Voice AI</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 mb-6">
                AI Voice Agents That{" "}
                <span className="gradient-text">Sound Human</span>
              </h2>
              <p className="text-white/50 text-lg mb-8 leading-relaxed">
                Our AI voice agents handle inbound and outbound calls with
                natural-sounding speech, real-time sentiment analysis, and
                intelligent call routing.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Mic, title: "Natural Speech", desc: "Ultra-realistic voice synthesis that customers can't distinguish from human agents." },
                  { icon: Brain, title: "Intent Recognition", desc: "Understands caller intent in real-time and routes to the optimal resolution path." },
                  { icon: BarChart3, title: "Call Analytics", desc: "Every call is transcribed, analyzed for sentiment, and logged with actionable insights." },
                  { icon: Users, title: "Smart Escalation", desc: "Knows when to hand off to a human agent, transferring full conversation context." },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      className="flex gap-4"
                    >
                      <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-coral" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">
                          {item.title}
                        </h4>
                        <p className="text-white/40 text-sm">{item.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <div className="glass-card p-8">
                  <div className="text-sm font-mono text-white/30 mb-6">
                    Voice Agent, Live Call
                  </div>

                  {/* Waveform visual */}
                  <div className="flex items-center justify-center gap-1 mb-8 h-20">
                    {[...Array(24)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1.5 bg-coral/40 rounded-full"
                        animate={{
                          height: [8, 20 + Math.random() * 40, 8],
                        }}
                        transition={{
                          duration: 1 + Math.random(),
                          repeat: Infinity,
                          delay: i * 0.05,
                        }}
                      />
                    ))}
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5">
                      <span className="text-sm text-white/60">Status</span>
                      <span className="text-sm text-green-400 font-medium">
                        Active Call
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5">
                      <span className="text-sm text-white/60">Sentiment</span>
                      <span className="text-sm text-sky font-medium">
                        Positive
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5">
                      <span className="text-sm text-white/60">Intent</span>
                      <span className="text-sm text-coral font-medium">
                        Product Inquiry
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5">
                      <span className="text-sm text-white/60">Duration</span>
                      <span className="text-sm text-white/70 font-mono">
                        02:34
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute -inset-4 bg-sky/5 rounded-3xl blur-2xl -z-10" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ════════ RELATED SERVICES ════════ */}
      <RelatedServices
        hrefs={[
          "/services/ai-automation",
          "/services/social-media-marketing",
          "/services/shopify-ecommerce",
        ]}
        background="bg-navy"
      />

      {/* ════════ CTA ════════ */}
      <section className="relative py-24 lg:py-32 bg-navy-mid overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-coral/5 rounded-full blur-[200px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="section-tag">Get Started</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-6 text-balance">
              Let AI Handle Your{" "}
              <span className="gradient-text">Conversations</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10">
              Deploy an AI agent that engages customers across every channel,
              qualifies leads, and books meetings, all while you sleep.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-coral inline-flex items-center gap-2 text-lg px-10 py-4"
              >
                Deploy Your AI Agent
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/packages"
                className="btn-outline inline-flex items-center gap-2 text-lg px-10 py-4"
              >
                Compare Packages
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  );
};

export default ConversationalAI;
