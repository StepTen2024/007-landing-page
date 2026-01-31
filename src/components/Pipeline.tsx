"use client";

import { motion } from "framer-motion";

const prospectStages = [
  { label: "Anonymous", icon: "👤", desc: "Address on map" },
  { label: "Interacted", icon: "🤝", desc: "Met them, got details" },
  { label: "Timeline", icon: "📅", desc: "Know when they'll move" },
  { label: "Warm Lead", icon: "🔥", desc: "Thinking of selling" },
  { label: "Appointment", icon: "📋", desc: "Listing presentation" },
  { label: "Listed", icon: "✅", desc: "You won it" },
];

const listingStages = [
  { label: "New Listing", icon: "🏠", desc: "Contract signed" },
  { label: "Marketing", icon: "📸", desc: "Photos, copy, ads" },
  { label: "Live", icon: "🟢", desc: "On REA & Domain" },
  { label: "Under Offer", icon: "📝", desc: "Negotiations active" },
  { label: "Exchange", icon: "🔄", desc: "Contracts exchanged" },
  { label: "Settled", icon: "💰", desc: "Commission day" },
];

function PipelineRow({ stages, label, delay }: { stages: typeof prospectStages; label: string; delay: number }) {
  return (
    <div>
      <p className="text-[#c5a55a] text-sm font-semibold tracking-widest uppercase mb-4">
        {label}
      </p>
      <div className="flex flex-wrap lg:flex-nowrap items-start gap-2">
        {stages.map((stage, i) => (
          <motion.div
            key={stage.label}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: delay + i * 0.1 }}
            className="flex items-center gap-2 flex-shrink-0"
          >
            <div className="bg-[#141414] border border-white/10 rounded-lg p-3 sm:p-4 text-center min-w-[100px] sm:min-w-[120px] hover:border-[#c5a55a]/30 transition-all">
              <div className="text-2xl mb-1">{stage.icon}</div>
              <p className="text-xs sm:text-sm font-semibold">{stage.label}</p>
              <p className="text-[10px] sm:text-xs text-white/30 mt-0.5">{stage.desc}</p>
            </div>
            {i < stages.length - 1 && (
              <svg className="w-4 h-4 text-[#c5a55a]/40 shrink-0 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Pipeline() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#c5a55a]/[0.02] to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#c5a55a] text-sm font-semibold tracking-widest uppercase mb-3">
            Property Pipeline
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            First door knock to{" "}
            <span className="gold-text">settlement day.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Track every property through two connected pipelines.
            Nothing gets lost. Nothing gets forgotten.
          </p>
        </motion.div>

        <div className="space-y-12 overflow-x-auto pb-4">
          <PipelineRow stages={prospectStages} label="Prospect Flow" delay={0} />
          <div className="border-t border-white/5" />
          <PipelineRow stages={listingStages} label="Listing Flow" delay={0.3} />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-white/30 text-sm mt-12"
        >
          Track every property from first door knock to settlement day.
          Both pipelines connected in one view.
        </motion.p>
      </div>
    </section>
  );
}
