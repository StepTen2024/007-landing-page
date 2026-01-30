"use client";

import { motion } from "framer-motion";

export default function DashboardPreview() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background accent */}
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

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          {/* Glow behind */}
          <div className="absolute -inset-4 bg-[#c5a55a]/5 rounded-2xl blur-xl" />

          {/* Main frame */}
          <div className="relative rounded-xl border border-white/10 bg-[#111] overflow-hidden shadow-2xl">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#0d0d0d]">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-3 text-xs text-white/30 font-mono">
                007 Command Center — Dashboard
              </span>
            </div>

            {/* Mock dashboard content */}
            <div className="p-6 sm:p-8 min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">
              {/* Top row of cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                {[
                  { label: "Active Listings", value: "47", delta: "+3" },
                  { label: "Pipeline Value", value: "$28.4M", delta: "+12%" },
                  { label: "Leads This Week", value: "156", delta: "+24" },
                  { label: "Avg Days on Market", value: "18", delta: "-2" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg bg-[#1a1a1a] border border-white/5 p-4"
                  >
                    <p className="text-xs text-white/40 mb-1">{stat.label}</p>
                    <p className="text-xl sm:text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs text-[#c5a55a] mt-1">{stat.delta}</p>
                  </div>
                ))}
              </div>

              {/* Chart placeholder + side panel */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Chart area */}
                <div className="md:col-span-2 rounded-lg bg-[#1a1a1a] border border-white/5 p-4 min-h-[200px]">
                  <p className="text-xs text-white/40 mb-4">
                    Market Performance — Last 90 Days
                  </p>
                  {/* Fake chart bars */}
                  <div className="flex items-end gap-1.5 h-32">
                    {Array.from({ length: 24 }).map((_, i) => {
                      const height = 20 + Math.sin(i * 0.5) * 30 + Math.random() * 30;
                      return (
                        <div
                          key={i}
                          className="flex-1 rounded-t bg-gradient-to-t from-[#c5a55a]/40 to-[#c5a55a]/80"
                          style={{ height: `${height}%` }}
                        />
                      );
                    })}
                  </div>
                </div>

                {/* Recent activity */}
                <div className="rounded-lg bg-[#1a1a1a] border border-white/5 p-4">
                  <p className="text-xs text-white/40 mb-3">Recent Activity</p>
                  <div className="space-y-3">
                    {[
                      "New lead — 42 Ocean St",
                      "Listing updated — 8 Park Ave",
                      "Offer received — $1.2M",
                      "Inspection booked — 15 High St",
                      "Content published — Bondi report",
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs text-white/50"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#c5a55a]/60 shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating elements */}
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
