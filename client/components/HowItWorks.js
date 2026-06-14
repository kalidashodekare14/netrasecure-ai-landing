"use client";

import { FiSearch, FiCpu, FiBarChart2, FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";

const steps = [
  {
    icon: <FiSearch size={22} />,
    title: "User Submits Request",
    description:
      "Enter a URL, file, or security query into the NetraSecure AI platform to begin the analysis.",
  },
  {
    icon: <FiCpu size={22} />,
    title: "AI Analyzes Threats",
    description:
      "Our machine learning models scan the submission against millions of known threat patterns and anomalies.",
  },
  {
    icon: <FiBarChart2 size={22} />,
    title: "System Generates Insights",
    description:
      "The platform compiles a detailed report with risk scores, threat categories, and behavioral analysis.",
  },
  {
    icon: <FiCheckCircle size={22} />,
    title: "User Receives Recommendations",
    description:
      "Actionable recommendations and step-by-step guidance are delivered to help you stay protected.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            How <span className="text-neon-blue">NetraSecure AI</span> Works
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            From submission to recommendation in four simple steps.
          </p>
        </motion.div>

        <div className="relative grid gap-12 md:grid-cols-4 md:gap-6">
          <div className="absolute top-8 left-[18px] hidden h-[calc(100%-4rem)] w-0.5 bg-gradient-to-b from-neon-blue via-neon-blue/50 to-transparent md:left-1/2 md:top-1/2 md:h-0.5 md:w-[calc(100%-8rem)] md:-translate-x-1/2 md:-translate-y-1/2 md:bg-gradient-to-r" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-neon-blue bg-dark-bg text-neon-blue shadow-[0_0_20px_rgba(0,212,255,0.2)]">
                {step.icon}
              </div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-neon-blue">
                Step {i + 1}
              </div>
              <h3 className="mt-2 text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-gray-400">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
