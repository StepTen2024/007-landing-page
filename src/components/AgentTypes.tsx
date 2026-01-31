"use client";

import { motion } from "framer-motion";

const agents = [
  {
    name: "The Rookie",
    emoji: "🚀",
    tagline: "0–2 listings",
    description:
      "Just got your licence? Get your first listing faster than anyone in your office.",
    features: ["Prospecting scripts", "SEO content", "Personal branding", "Suburb intelligence"],
    color: "from-blue-500/20 to-blue-500/5",
    borderColor: "border-blue-500/20 hover:border-blue-500/40",
  },
  {
    name: "The Grower",
    emoji: "📈",
    tagline: "5–20 listings",
    description:
      "Got a few listings but drowning in admin? Scale without hiring.",
    features: ["Marketing automation", "Listing engine", "CRM integration", "Ad generation"],
    color: "from-[#c5a55a]/20 to-[#c5a55a]/5",
    borderColor: "border-[#c5a55a]/30 hover:border-[#c5a55a]/50",
    popular: true,
  },
  {
    name: "The Machine",
    emoji: "⚡",
    tagline: "20+ listings",
    description:
      "Running a team? Give them AI superpowers and track everything.",
    features: ["Team management", "KPI dashboard", "Multi-suburb", "API access"],
    color: "from-purple-500/20 to-purple-500/5",
    borderColor: "border-purple-500/20 hover:border-purple-500/40",
  },
];

export default function AgentTypes() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#c5a55a] text-sm font-semibold tracking-widest uppercase mb-3">
            Built for You
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Which agent{" "}
            <span className="text-white/40">are you?</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Whether you&apos;re chasing your first listing or managing a team of twenty,
            007 scales with you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {agents.map((agent, i) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative rounded-xl p-8 border transition-all duration-300 bg-gradient-to-b ${agent.color} ${agent.borderColor}`}
            >
              {agent.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#c5a55a] text-black text-xs font-bold rounded-full uppercase tracking-wide">
                  Most Common
                </div>
              )}
              <div className="text-4xl mb-4">{agent.emoji}</div>
              <h3 className="text-2xl font-bold mb-1">{agent.name}</h3>
              <p className="text-white/40 text-sm mb-4">{agent.tagline}</p>
              <p className="text-white/60 leading-relaxed mb-6">{agent.description}</p>
              <ul className="space-y-2">
                {agent.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/50">
                    <svg className="w-4 h-4 text-[#c5a55a] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
