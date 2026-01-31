"use client";

import { motion } from "framer-motion";

const adTypes = [
  {
    platform: "Google Dynamic Ads",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
    ),
    headline: "Your listings become ads automatically",
    description: "Dynamic ad templates auto-populate with your listing data. Google picks the best creative and shows it to the right buyer. You don't write a single ad.",
    mockAds: ["NEW LISTING — 42 Ocean Pde", "JUST SOLD — $1.82M", "OPEN HOME Sat 10am"],
  },
  {
    platform: "Facebook XML Catalog",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.234 2.686.234v2.953H15.83c-1.491 0-1.956.925-1.956 1.875V12h3.328l-.532 3.469h-2.796v8.385C19.612 22.954 24 17.99 24 12z" fill="#1877F2"/>
      </svg>
    ),
    headline: "New listing? It's already in your ad feed",
    description: "XML feed auto-updates as listings change. New listing uploaded? It's already a carousel ad. No manual creation. Just update the feed.",
    mockAds: ["4BR Queenslander — $875K", "Riverfront Estate — Auction", "Modern Townhouse — EOI"],
  },
];

export default function AdvertisingEngine() {
  return (
    <section className="py-24 sm:py-32 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#c5a55a] text-sm font-semibold tracking-widest uppercase mb-3">
            Advertising Engine
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Stop writing ads.{" "}
            <span className="gold-text">Start feeding machines.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Upload once. Advertise everywhere. Your listings automatically become
            high-performing Google and Facebook ads.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {adTypes.map((ad, i) => (
            <motion.div
              key={ad.platform}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="rounded-xl bg-[#111] border border-white/5 p-8 hover:border-[#c5a55a]/20 transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center">
                  {ad.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{ad.platform}</h3>
                  <p className="text-[#c5a55a] text-sm">{ad.headline}</p>
                </div>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                {ad.description}
              </p>

              {/* Mock ad carousel */}
              <div className="flex gap-3 overflow-x-auto pb-2">
                {ad.mockAds.map((mockAd) => (
                  <div
                    key={mockAd}
                    className="flex-shrink-0 w-48 rounded-lg bg-[#1a1a1a] border border-white/5 overflow-hidden"
                  >
                    <div className="h-24 bg-gradient-to-br from-[#c5a55a]/20 to-[#c5a55a]/5" />
                    <div className="p-3">
                      <p className="text-xs font-semibold truncate">{mockAd}</p>
                      <p className="text-[10px] text-white/30 mt-1">Sponsored</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* The flow diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 rounded-xl bg-[#111] border border-[#c5a55a]/10 p-8 text-center"
        >
          <p className="text-white/40 text-sm mb-4">THE FLOW</p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="px-4 py-2 rounded-lg bg-[#c5a55a]/10 text-[#c5a55a] font-semibold">
              Upload Listing
            </span>
            <span className="text-white/20">→</span>
            <span className="px-3 py-1.5 rounded bg-white/5 text-white/60">Landing Page</span>
            <span className="text-white/20">+</span>
            <span className="px-3 py-1.5 rounded bg-white/5 text-white/60">Google Ad</span>
            <span className="text-white/20">+</span>
            <span className="px-3 py-1.5 rounded bg-white/5 text-white/60">Facebook Ad</span>
            <span className="text-white/20">+</span>
            <span className="px-3 py-1.5 rounded bg-white/5 text-white/60">Email Blast</span>
            <span className="text-white/20">+</span>
            <span className="px-3 py-1.5 rounded bg-white/5 text-white/60">Social Post</span>
          </div>
          <p className="text-white/30 text-xs mt-4">All from one upload. That&apos;s the value prop.</p>
        </motion.div>
      </div>
    </section>
  );
}
