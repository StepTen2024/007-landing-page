"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Agent",
    description: "For individual agents ready to dominate their market",
    features: [
      "AI command center",
      "Prospecting map",
      "Buyer intelligence system",
      "SEO content engine",
      "Email marketing automation",
      "Voice-to-text field intel",
      "AI chat clone",
    ],
    popular: false,
    cta: "Book a Demo",
    ctaLink: "#contact",
  },
  {
    name: "Office",
    description: "For agencies scaling their team's performance",
    features: [
      "Everything in Agent, plus:",
      "Team management & KPIs",
      "Multi-suburb coverage",
      "CRM integration (AgentBox, VaultRE)",
      "Google & Facebook ads engine",
      "Listing pipeline automation",
      "Document AI",
    ],
    popular: true,
    cta: "Book a Demo",
    ctaLink: "#contact",
  },
  {
    name: "Enterprise",
    description: "Full white-label command center on your domain",
    features: [
      "Everything in Office, plus:",
      "Custom branding & your domain",
      "Dedicated AI bot",
      "API access",
      "Priority support",
      "Custom integrations",
      "White-label everything",
    ],
    popular: false,
    cta: "Talk to Us",
    ctaLink: "#contact",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#c5a55a] text-sm font-semibold tracking-widest uppercase mb-3">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Invest in your{" "}
            <span className="text-white/40">unfair advantage.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Choose the plan that matches your ambition.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              className={`relative rounded-xl p-6 sm:p-8 border transition-all duration-300 feature-card-hover ${
                plan.popular
                  ? "bg-[#141414] border-[#c5a55a]/40 pulse-gold"
                  : "bg-[#111] border-white/5 hover:border-white/10"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#c5a55a] text-black text-xs font-bold rounded-full uppercase tracking-wide">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-1 gold-text">{plan.name}</h3>
              <p className="text-sm text-white/40 mb-8">{plan.description}</p>

              <a
                href={plan.ctaLink}
                className={`block w-full text-center py-3.5 rounded font-semibold transition-all ${
                  plan.popular
                    ? "bg-[#c5a55a] text-black hover:bg-[#d4b96a] hover:shadow-[0_0_30px_rgba(197,165,90,0.3)]"
                    : "bg-white/5 text-white border border-white/10 hover:border-[#c5a55a]/50 hover:text-[#c5a55a]"
                }`}
              >
                {plan.cta}
              </a>

              <div className="mt-6 pt-6 border-t border-white/5">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-white/60"
                    >
                      <svg
                        className="w-4 h-4 text-[#c5a55a] shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Investment note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-white/60 text-lg mb-2">
            Investment starts from{" "}
            <span className="text-[#c5a55a] font-semibold">$999/month</span>.
            Enterprise includes setup and onboarding.
          </p>
          <p className="text-white/30 text-sm">
            Every plan includes our proprietary Buyer Intelligence System.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
