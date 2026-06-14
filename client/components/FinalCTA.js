"use client";

import { FiShield, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/15 via-transparent to-neon-orange/10" />
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-neon-blue/20 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto max-w-3xl text-center"
      >
        <FiShield className="mx-auto mb-6 text-neon-blue" size={40} />
        <h2 className="text-3xl font-bold text-white sm:text-5xl">
          Protect Your Digital Future with{" "}
          <span className="text-neon-blue">AI</span>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-gray-400">
          Join thousands of users who trust NetraSecure AI to keep their digital
          world safe. Start your security journey today.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-lg bg-neon-blue px-8 py-4 font-semibold text-black transition hover:brightness-110"
          >
            <FiShield size={20} />
            Get Started
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-neon-blue/30 px-8 py-4 font-semibold text-neon-blue transition hover:bg-neon-blue/10"
          >
            <FiArrowRight size={20} />
            Contact Team
          </a>
        </div>
      </motion.div>
    </section>
  );
}
