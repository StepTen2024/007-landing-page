"use client";

import { motion } from "framer-motion";

export default function SocialProof() {
  return (
    <section className="relative py-12 border-y border-white/5 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <p className="text-white/40 text-sm font-medium tracking-wide uppercase">
            Trusted by 50+ agencies across Australia
          </p>

          {/* Logo placeholders */}
          <div className="flex items-center gap-8 md:gap-12">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="w-20 h-8 rounded bg-white/5 flex items-center justify-center"
              >
                <div className="w-12 h-3 rounded-sm bg-white/10" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
