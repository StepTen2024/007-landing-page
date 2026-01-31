"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function FinalCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="absolute inset-0 hero-grid pointer-events-none opacity-50" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Your competition just found
            <br />
            <span className="gold-text">out about this page.</span>
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
            Don&apos;t let them get in first. Join the agents who are already
            using AI to close more deals and dominate their market.
          </p>

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full sm:flex-1 px-4 py-3.5 rounded bg-[#141414] border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#c5a55a]/50 transition-colors"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#c5a55a] text-black font-semibold rounded hover:bg-[#d4b96a] transition-all hover:shadow-[0_0_30px_rgba(197,165,90,0.3)] active:scale-95 whitespace-nowrap"
              >
                Request Early Access
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#c5a55a]/10 border border-[#c5a55a]/30"
            >
              <svg
                className="w-5 h-5 text-[#c5a55a]"
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
              <span className="text-[#c5a55a] font-medium">
                You&apos;re on the list. We&apos;ll be in touch.
              </span>
            </motion.div>
          )}

          <p className="text-white/30 text-xs mt-4">
            No spam. No credit card. Just early access.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
