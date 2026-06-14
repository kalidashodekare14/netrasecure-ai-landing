"use client";

import { motion } from "framer-motion";

export default function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.04, y: -4 }}
      className="group cursor-default rounded-xl border border-white/5 bg-dark-card p-6 transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.15)]"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-neon-blue/10 text-neon-blue transition-colors group-hover:bg-neon-blue group-hover:text-black">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-400">{description}</p>
    </motion.div>
  );
}
