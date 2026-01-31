"use client";

import { motion } from "framer-motion";

const integrations = [
  { name: "AgentBox", color: "#4A90D9" },
  { name: "VaultRE", color: "#2ECC71" },
  { name: "Locked On", color: "#E74C3C" },
  { name: "realestate.com.au", color: "#E4002B" },
  { name: "Domain", color: "#2B6CB0" },
];

export default function CRMIntegration() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#c5a55a] text-sm font-semibold tracking-widest uppercase mb-3">
            Integrations
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Works with{" "}
            <span className="text-white/40">your existing tools.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Talk to your bot → it updates your CRM. No double entry. No learning curve.
          </p>
        </motion.div>

        {/* Integration badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="px-6 py-3 rounded-xl bg-[#141414] border border-white/10 hover:border-[#c5a55a]/30 transition-all flex items-center gap-3"
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: integration.color }}
              />
              <span className="text-sm font-medium text-white/70">{integration.name}</span>
            </div>
          ))}
        </motion.div>

        {/* CRM conversation mockup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-lg mx-auto"
        >
          <div className="rounded-xl bg-[#111] border border-white/10 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#0d0d0d]">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-white/40">007 AI Assistant — Connected to AgentBox</span>
            </div>
            <div className="p-5 space-y-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-[#c5a55a]/20 flex items-center justify-center text-xs shrink-0">
                  You
                </div>
                <div className="bg-[#1a1a1a] rounded-lg px-4 py-2.5 text-sm text-white/70">
                  &ldquo;Just met John at 42 Smith Street, he&apos;s thinking of selling in 3 months&rdquo;
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-[#c5a55a]/20 flex items-center justify-center text-[10px] shrink-0 text-[#c5a55a]">
                  007
                </div>
                <div className="bg-[#c5a55a]/5 border border-[#c5a55a]/10 rounded-lg px-4 py-2.5 text-sm text-white/70 space-y-2">
                  <p>✅ Contact &ldquo;John&rdquo; created in AgentBox</p>
                  <p>📍 42 Smith St marked as &ldquo;Warm Lead&rdquo; on your map</p>
                  <p>⏰ Follow-up reminder set for 2 months</p>
                  <p>📋 Added to &ldquo;Thinking of Selling&rdquo; pipeline</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
