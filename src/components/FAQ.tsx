"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How is this different from a CRM?",
    answer:
      "It's not a CRM — it's a command center. Your CRM stores data. We make it work for you. Think of us as the intelligence layer that sits on top of your existing tools and actually tells you what to do next.",
  },
  {
    question: "Do I need to be technical?",
    answer:
      "If you can use Instagram, you can use this. We built 007 for real estate agents, not developers. Everything is point-and-click, and our AI assistant speaks plain English.",
  },
  {
    question: "What AI models does it use?",
    answer:
      "We use the best AI for each job — GPT-4o, Claude, Gemini — you don't need to know which. We automatically route to the best model for each task so you always get the best results without thinking about it.",
  },
  {
    question: "Can it write property descriptions?",
    answer:
      "Yes, and they'll sound like YOU, not a template. Our AI learns your writing style, your preferred tone, and your market's language. Every description is unique and on-brand.",
  },
  {
    question: "What about my existing tools?",
    answer:
      "We integrate with major CRMs, REA, Domain, and more. 007 doesn't replace your tools — it supercharges them. Keep using what works, and let us fill in the gaps.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
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

        {/* FAQ items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
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
