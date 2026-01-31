"use client";

import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

function AnimatedCounter({ target, suffix = "", duration = 2 }: { target: number; suffix?: string; duration?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: (value) => setDisplayValue(Math.round(value)),
    });
    return () => controls.stop();
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {displayValue.toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  { target: 2500, suffix: "+", label: "Listings Managed" },
  { target: 150, suffix: "+", label: "Suburbs Mapped" },
  { target: 98, suffix: "%", label: "Renewal Rate" },
];

const testimonials = [
  {
    quote: "I went from 3 listings to 14 in my first quarter. The prospecting map alone is worth the subscription.",
    name: "Sarah M.",
    title: "Agent — Brisbane Southside",
    avatar: "SM",
  },
  {
    quote: "The Buyer Intelligence System changed how I think about every buyer enquiry. Every conversation is a potential listing now.",
    name: "James T.",
    title: "Principal — Sydney Eastern Suburbs",
    avatar: "JT",
  },
  {
    quote: "My team of 6 agents use it daily. The voice-to-text alone saves us 10 hours a week in admin.",
    name: "Michelle K.",
    title: "Team Leader — Melbourne Inner West",
    avatar: "MK",
  },
];

export default function SocialProof() {
  return (
    <section className="py-24 sm:py-32 bg-[#0d0d0d] relative overflow-hidden">
      {/* Gold particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${15 + i * 14}%`,
              top: `${10 + (i % 3) * 30}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${5 + (i % 3)}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#c5a55a] text-sm font-semibold tracking-widest uppercase mb-3">
            Social Proof
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Trusted by agents across{" "}
            <span className="text-white/40">Australia.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Built by agents, for agents. Queensland, New South Wales, and Victoria — and growing.
          </p>
        </motion.div>

        {/* Animated Stats */}
        <div className="grid grid-cols-3 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold gold-text">
                <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              </p>
              <p className="text-white/40 text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Team image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 rounded-xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(197,165,90,0.08)]"
        >
          <Image
            src="/images/team-hero.png"
            alt="Confident real estate team in premium suits overlooking Sydney harbour"
            width={1536}
            height={1024}
            className="w-full h-auto"
          />
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="feature-card-hover rounded-xl bg-[#111] border border-white/5 p-6 hover:border-[#c5a55a]/20 transition-all"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-[#c5a55a]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#c5a55a]/20 flex items-center justify-center text-[#c5a55a] text-xs font-bold">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-white/30">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
