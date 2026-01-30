"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "297",
    description: "For solo agents getting started with AI",
    features: [
      "1 agent",
      "50 active listings",
      "Basic AI assistant",
      "Market intelligence (your suburb)",
      "Property description generator",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "597",
    description: "For growing teams who want the full suite",
    features: [
      "5 agents",
      "Unlimited listings",
      "Full AI suite",
      "Market intelligence (your region)",
      "Content machine",
      "Deal pipeline & CRM sync",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "997",
    description: "For agencies that dominate their market",
    features: [
      "Unlimited agents",
      "Unlimited everything",
      "Custom AI training",
      "Market intelligence (national)",
      "Custom integrations",
      "Dedicated support & onboarding",
      "Team KPI dashboard",
      "White-label reports",
    ],
    popular: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
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
        {/* Section header */}
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
            14-day free trial. No credit card required. Cancel anytime.
          </p>
        </motion.div>

        {/* Pricing cards */}
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
              className={`relative rounded-xl p-6 sm:p-8 border transition-all duration-300 ${
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

              <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
              <p className="text-sm text-white/40 mb-6">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-white/40 ml-1">/month AUD</span>
              </div>

              <a
                href="#contact"
                className={`block w-full text-center py-3 rounded font-semibold transition-all ${
                  plan.popular
                    ? "bg-[#c5a55a] text-black hover:bg-[#d4b96a]"
                    : "bg-white/5 text-white border border-white/10 hover:border-[#c5a55a]/50 hover:text-[#c5a55a]"
                }`}
              >
                Start Free Trial
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
      </div>
    </section>
  );
}
