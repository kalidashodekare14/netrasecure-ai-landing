"use client";

import {
  FiCpu,
  FiShield,
  FiLock,
  FiZap,
} from "react-icons/fi";
import { motion } from "framer-motion";

const trustPoints = [
  {
    icon: <FiCpu size={22} />,
    title: "AI-Powered Architecture",
    description:
      "Advanced machine learning models continuously trained on global threat data to detect and prevent cyber attacks.",
  },
  {
    icon: <FiShield size={22} />,
    title: "Security-First Design",
    description:
      "End-to-end encryption, zero-trust principles, and regular third-party security audits across all layers.",
  },
  {
    icon: <FiLock size={22} />,
    title: "Privacy-Focused Infrastructure",
    description:
      "Your data is encrypted in transit and at rest. We never share or sell your information to third parties.",
  },
  {
    icon: <FiZap size={22} />,
    title: "Startup-Ready Ecosystem",
    description:
      "Built for early-stage companies and growing teams who need enterprise-grade security without the complexity.",
  },
];

const badges = [
  { label: "Startup India", sub: "Recognized by DPIIT" },
  { label: "MCA Registered", sub: "Govt. of India" },
  { label: "Security Verified", sub: "Certified Secure" },
];

export default function TrustSecurity() {
  return (
    <section id="trust-security" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Built for <span className="text-neon-blue">Trust & Security</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Every layer of our platform is designed with security and privacy at
            its core.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {trustPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group flex gap-5 rounded-xl border border-white/5 bg-dark-card p-6 transition-all duration-300 hover:border-neon-blue/20 hover:shadow-[0_0_25px_rgba(0,212,255,0.1)]"
            >
              <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-neon-blue/10 text-neon-blue transition-colors group-hover:bg-neon-blue group-hover:text-black">
                {point.icon}
              </div>
              <div>
                <h3 className="mb-1 text-lg font-semibold text-white">
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="inline-flex items-center gap-3 rounded-xl border border-neon-blue/20 bg-dark-card px-6 py-4 shadow-[0_0_15px_rgba(0,212,255,0.08)]"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neon-blue/10">
                <FiShield className="text-neon-blue" size={16} />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">
                  {badge.label}
                </div>
                <div className="text-xs text-gray-500">{badge.sub}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
