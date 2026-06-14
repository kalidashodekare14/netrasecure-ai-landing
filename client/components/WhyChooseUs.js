"use client";

import {
  FiCpu,
  FiLayers,
  FiUsers,
  FiServer,
  FiLock,
} from "react-icons/fi";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: <FiCpu size={24} />,
    title: "AI-Driven Platform",
    description:
      "Our machine learning models continuously evolve to detect and neutralize emerging threats before they reach you.",
  },
  {
    icon: <FiLayers size={24} />,
    title: "Unified Security Ecosystem",
    description:
      "All your security tools — scanning, monitoring, chatbot — integrated into a single seamless platform.",
  },
  {
    icon: <FiUsers size={24} />,
    title: "Easy-to-Use Interface",
    description:
      "Designed for both security experts and everyday users with an intuitive, clutter-free dashboard.",
  },
  {
    icon: <FiServer size={24} />,
    title: "Scalable Infrastructure",
    description:
      "From individual users to enterprise deployments, our cloud-native architecture scales with your needs.",
  },
  {
    icon: <FiLock size={24} />,
    title: "Privacy-Focused Architecture",
    description:
      "Your data stays yours. End-to-end encryption and zero-trust principles baked into every layer.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Why Choose <span className="text-neon-blue">NetraSecure AI</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Built on cutting-edge AI, designed for real-world protection.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group flex gap-5 rounded-xl border border-white/5 bg-dark-card p-6 transition-all duration-300 hover:border-neon-blue/20 hover:shadow-[0_0_25px_rgba(0,212,255,0.1)]"
            >
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neon-blue/10 text-neon-blue transition-colors group-hover:bg-neon-blue group-hover:text-black">
                {item.icon}
              </div>
              <div>
                <h3 className="mb-1.5 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
