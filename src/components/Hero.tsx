"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-grid">
      <div className="absolute inset-0 hero-glow pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${10 + (i * 4.2) % 80}%`,
              top: `${5 + (i * 3.7) % 90}%`,
              animationDelay: `${(i * 0.3) % 6}s`,
              animationDuration: `${4 + (i % 4)}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c5a55a]/30 bg-[#c5a55a]/5 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#c5a55a] animate-pulse" />
            <span className="text-[#c5a55a] text-sm font-medium">
              Now accepting early access applications
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
            Outperform Every Agent{" "}
            <br className="hidden sm:block" />
            <span className="gold-text">in Your Market</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-4 leading-relaxed">
            AI-powered listing intelligence, prospecting, and marketing
            <br className="hidden sm:block" />
            — all from one command center.
          </p>
          <p className="text-sm text-white/30 mb-10">
            Built by a former top-producing agent. Not another CRM.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-3.5 bg-[#c5a55a] text-black font-semibold rounded text-lg hover:bg-[#d4b96a] transition-all hover:shadow-[0_0_30px_rgba(197,165,90,0.3)] active:scale-95"
            >
              Request Early Access
            </a>
            <a
              href="#features"
              className="px-8 py-3.5 border border-white/20 text-white/80 font-medium rounded text-lg hover:border-[#c5a55a]/50 hover:text-[#c5a55a] transition-all"
            >
              See Features
            </a>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg
            className="w-6 h-6 text-white/20"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
