"use client";

import { FiStar } from "react-icons/fi";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "Founder, SecureStack Labs",
    text: "NetraSecure AI has transformed how we approach cybersecurity. The AI chatbot alone saves us hours of manual analysis every week.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "CTO, CloudNest Technologies",
    text: "The URL scanner caught a phishing link that our previous tools missed. The real-time monitoring feature is a game changer for our team.",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "Lead Engineer, FinGuard",
    text: "Deepfake detection is incredibly accurate. We now feel confident verifying media authenticity before making critical decisions.",
    rating: 5,
  },
];

export default function Testimonials() {
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
            What Our <span className="text-neon-blue">Users Say</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Trusted by security professionals and businesses worldwide.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group cursor-default rounded-xl border border-white/5 bg-dark-card p-6 transition-shadow duration-300 hover:border-neon-blue/20 hover:shadow-[0_0_25px_rgba(0,212,255,0.12)]"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <FiStar key={j} className="fill-neon-blue text-neon-blue" size={16} />
                ))}
              </div>
              <p className="mb-5 text-sm leading-relaxed text-gray-400">"{t.text}"</p>
              <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neon-blue/10 text-sm font-semibold text-neon-blue">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-medium text-white">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
