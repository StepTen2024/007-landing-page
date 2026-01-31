"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  { icon: "💰", text: "Commission pipeline (listing → settlement → paid)" },
  { icon: "⚖️", text: "Lawyer/conveyancer coordination" },
  { icon: "🏦", text: "Trust account tracking" },
  { icon: "📑", text: "Tax-ready reporting" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function BusinessAdmin() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Gold particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 7 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${5 + i * 13}%`,
              bottom: `${10 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.9}s`,
              animationDuration: `${5 + (i % 4)}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#c5a55a] text-sm font-semibold tracking-widest uppercase mb-3">
              Business Admin
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Run Your Business,{" "}
              <span className="text-white/40">Not Your Paperwork.</span>
            </h2>
            <p className="text-white/50 text-lg mb-8 leading-relaxed">
              Commission tracking, settlement coordination, lawyer management, BAS prep — 
              all in one place.
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.text}
                  variants={itemVariants}
                  className="feature-card-hover flex items-start gap-3 p-4 rounded-lg bg-white/[0.02] border border-white/5 hover:border-[#c5a55a]/20 transition-all duration-300"
                >
                  <span className="text-xl shrink-0">{feature.icon}</span>
                  <span className="text-sm text-white/60">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(197,165,90,0.08)]"
          >
            <Image
              src="/images/business-admin.png"
              alt="Commission tracking and business admin dashboard"
              width={768}
              height={512}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
