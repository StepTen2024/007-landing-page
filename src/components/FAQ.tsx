"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Is this another CRM?",
    answer:
      "No. It connects to your CRM. This is your AI command center — the intelligence layer that sits on top of AgentBox, VaultRE, or Locked On and makes them 10x more powerful.",
  },
  {
    question: "I'm brand new — is this for me?",
    answer:
      "Absolutely. The Rookie plan was built specifically for new agents. Get suburb intelligence, prospecting scripts, SEO content, and AI tools to win your first listing faster than anyone in your office.",
  },
  {
    question: "Can it really write my ads?",
    answer:
      "Yes. Upload a listing once and it auto-generates Google dynamic ads and Facebook catalog entries. No copywriting. No design work. Your listings become ads automatically.",
  },
  {
    question: "What about my existing listings?",
    answer:
      "Import from AgentBox or VaultRE in one click. Your existing data flows straight into 007 — no re-entry, no spreadsheets, no pain.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Your data is yours. Always. Bank-level encryption, Australian-hosted servers, and we never share or sell your information. Full stop.",
  },
  {
    question: "What's the Buyer Intelligence System?",
    answer:
      "It's our proprietary methodology for turning buyer conversations into listing opportunities. Every buyer leaves a shell behind — we help you find it. Book a demo to learn more. 😏",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#c5a55a] text-sm font-semibold tracking-widest uppercase mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Questions?{" "}
            <span className="text-white/40">Answers.</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`rounded-xl border transition-all duration-300 ${
                openIndex === index
                  ? "bg-[#141414] border-[#c5a55a]/20"
                  : "bg-[#111] border-white/5 hover:border-white/10"
              }`}
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-medium pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-[#c5a55a] shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 text-white/50 text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
