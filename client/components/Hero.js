"use client";

import { FiArrowRight, FiShield, FiMessageSquare } from "react-icons/fi";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-24 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-150 w-150 rounded-full bg-neon-blue/10 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 h-125 w-125 rounded-full bg-neon-orange/10 blur-[100px]" />
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-neon-blue/40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `particle ${4 + Math.random() * 6}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.2 + Math.random() * 0.5,
            }}
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-12 lg:flex-row lg:items-center"
      >
        <motion.div variants={itemVariants} className="flex-1 text-center lg:text-left">
          <span className="mb-4 inline-block rounded-full border border-neon-blue/30 bg-neon-blue/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-neon-blue">
            Next-Gen Security Platform
          </span>

          <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            AI-Powered Cybersecurity for the{" "}
            <span className="text-neon-blue">Modern Digital World</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-400 lg:mx-0 lg:text-lg">
            NetraSecure AI combines advanced machine learning with real-time threat
            intelligence to protect your digital infrastructure. Detect, respond, and
            neutralize threats before they impact your business.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-lg bg-neon-blue px-6 py-3 font-semibold text-black transition hover:brightness-110"
            >
              <FiShield size={18} />
              Explore Platform
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-lg border border-neon-blue/30 px-6 py-3 font-semibold text-neon-blue transition hover:bg-neon-blue/10"
            >
              <FiArrowRight size={18} />
              Start Scanning
            </a>
            <a
              href="#chatbot"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-600 px-6 py-3 font-semibold text-gray-300 transition hover:border-neon-orange hover:text-neon-orange"
            >
              <FiMessageSquare size={18} />
              Try AI Chatbot
            </a>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex-1 flex justify-center lg:justify-end"
        >
          <svg
            viewBox="0 0 400 400"
            className="h-72 w-72 sm:h-96 sm:w-96 drop-shadow-[0_0_40px_rgba(0,212,255,0.3)]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00d4ff" />
                <stop offset="100%" stopColor="#0066ff" />
              </linearGradient>
              <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#0066ff" stopOpacity="0.2" />
              </linearGradient>
              <filter id="neonGlow">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {[...Array(3)].map((_, i) => (
              <circle
                key={i}
                cx="200"
                cy="200"
                r={120 + i * 28}
                fill="none"
                stroke="url(#ringGrad)"
                strokeWidth="1"
                opacity={0.4 - i * 0.1}
                className="origin-center"
                style={{
                  animation: `spin ${6 + i * 2}s linear infinite`,
                  animationDirection: i % 2 === 0 ? "normal" : "reverse",
                }}
              />
            ))}

            <g filter="url(#neonGlow)">
              <path
                d="M200 80 L280 120 L280 200 C280 270 200 310 200 310 C200 310 120 270 120 200 L120 120 Z"
                fill="url(#shieldGrad)"
                opacity="0.9"
              />
              <path
                d="M200 80 L280 120 L280 200 C280 270 200 310 200 310 C200 310 120 270 120 200 L120 120 Z"
                fill="none"
                stroke="#00d4ff"
                strokeWidth="2"
                opacity="0.8"
              />
            </g>

            <circle cx="200" cy="190" r="12" fill="white" opacity="0.9" />
            <circle cx="200" cy="190" r="6" fill="#00d4ff" />
            <path
              d="M192 190 L198 196 L210 184"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.9"
            />

            <circle
              cx="200"
              cy="130"
              r="3"
              fill="#00d4ff"
              opacity="0.8"
              style={{
                animation: "pulse 2s ease-in-out infinite",
              }}
            />
            <circle
              cx="160"
              cy="160"
              r="2"
              fill="#00d4ff"
              opacity="0.6"
              style={{
                animation: "pulse 2.5s ease-in-out infinite",
                animationDelay: "0.5s",
              }}
            />
            <circle
              cx="240"
              cy="160"
              r="2"
              fill="#00d4ff"
              opacity="0.6"
              style={{
                animation: "pulse 2.5s ease-in-out infinite",
                animationDelay: "1s",
              }}
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
