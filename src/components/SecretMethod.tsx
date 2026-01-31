"use client";

import { motion } from "framer-motion";

export default function SecretMethod() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Dark dramatic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]" />
      <div className="absolute inset-0 hero-glow pointer-events-none opacity-50" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Lock icon */}
          <div className="w-20 h-20 rounded-full bg-[#c5a55a]/10 border border-[#c5a55a]/20 flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10 text-[#c5a55a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
          </div>

          <p className="text-[#c5a55a] text-sm font-semibold tracking-widest uppercase mb-6">
            The Secret Weapon
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Includes our proprietary
            <br />
            <span className="gold-text">Buyer Intelligence System</span>
          </h2>

          <div className="space-y-4 text-lg text-white/50 max-w-2xl mx-auto mb-10">
            <p>
              Developed by a former top-producing agent who managed{" "}
              <span className="text-white font-semibold">200+ listings.</span>
            </p>
            <p>
              This isn&apos;t just software. It&apos;s a complete{" "}
              <span className="text-[#c5a55a] font-semibold">listing generation methodology.</span>
            </p>
            <p className="text-white/30 text-base">
              Every buyer leaves a shell behind. We show you how to find it.
            </p>
          </div>

          {/* Teaser bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10">
            {[
              { icon: "🔍", text: "Identify hidden sellers" },
              { icon: "🧠", text: "AI-powered classification" },
              { icon: "📈", text: "2x your listing pipeline" },
            ].map((item) => (
              <div
                key={item.text}
                className="px-4 py-3 rounded-lg bg-[#c5a55a]/5 border border-[#c5a55a]/10"
              >
                <span className="text-xl mr-2">{item.icon}</span>
                <span className="text-sm text-white/60">{item.text}</span>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#c5a55a] text-black font-semibold rounded text-lg hover:bg-[#d4b96a] transition-all hover:shadow-[0_0_30px_rgba(197,165,90,0.3)] active:scale-95"
          >
            Book a Demo to Learn More
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
