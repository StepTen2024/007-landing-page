"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DashboardPreview() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#c5a55a]/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#c5a55a] text-sm font-semibold tracking-widest uppercase mb-3">
            Command Center
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            See everything.{" "}
            <span className="text-white/40">Control everything.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            One dashboard. Every listing, every lead, every market insight — at your fingertips.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-[#c5a55a]/5 rounded-2xl blur-xl" />

          <div className="relative rounded-xl border border-white/10 bg-[#111] overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#0d0d0d]">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-3 text-xs text-white/30 font-mono">
                007 Command Center — Prospecting Map
              </span>
            </div>

            <div className="relative w-full aspect-[3/2]">
              <Image
                src="/images/dashboard-map.png"
                alt="007 Command Center Dashboard — Prospecting Map with gold property pins"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:block absolute -right-4 top-1/4 rounded-lg bg-[#1a1a1a] border border-[#c5a55a]/20 p-3 shadow-xl"
          >
            <div className="flex items-center gap-2 text-xs">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-white/60">AI Assistant Active</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="hidden lg:block absolute -left-4 bottom-1/4 rounded-lg bg-[#1a1a1a] border border-[#c5a55a]/20 p-3 shadow-xl"
          >
            <div className="text-xs text-white/60">
              <span className="text-[#c5a55a]">↑ 24%</span> more leads this month
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
