"use client";

import { motion } from "framer-motion";

export default function Introduction() {
  return (
    <section className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 lg:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-6"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            What is <span className="text-neon-blue">NetraSecure AI</span>?
          </h2>

          <p className="leading-relaxed text-gray-400">
            NetraSecure AI is an AI-powered cybersecurity platform that leverages
            advanced machine learning to protect your digital presence. From
            real-time threat detection to intelligent URL scanning, our platform
            offers comprehensive security solutions for individuals and
            businesses alike.
          </p>

          <p className="leading-relaxed text-gray-400">
            At its core, NetraSecure AI features a smart protection system that
            continuously monitors your digital environment, identifying and
            neutralizing threats before they cause harm. Our AI assistant
            provides real-time guidance, helping you navigate security concerns
            with ease and confidence.
          </p>

          <p className="leading-relaxed text-gray-400">
            Whether it is detecting deepfakes, scanning suspicious links, or
            safeguarding your mobile devices, NetraSecure AI delivers a
            user-friendly security experience designed for the modern digital
            world — where threats evolve, but your defenses stay ahead.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 flex justify-center"
        >
          <svg
            viewBox="0 0 400 360"
            className="h-72 w-72 sm:h-80 sm:w-80 drop-shadow-[0_0_40px_rgba(0,212,255,0.2)]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="introGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00d4ff" />
                <stop offset="100%" stopColor="#0066ff" />
              </linearGradient>
              <filter id="introGlow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <rect
              x="40"
              y="60"
              width="320"
              height="240"
              rx="20"
              fill="#131826"
              stroke="#00d4ff"
              strokeWidth="1.5"
              strokeOpacity="0.3"
            />

            <rect
              x="60"
              y="80"
              width="280"
              height="40"
              rx="8"
              fill="#00d4ff"
              fillOpacity="0.1"
              stroke="#00d4ff"
              strokeWidth="1"
              strokeOpacity="0.3"
            />
            <circle cx="80" cy="100" r="5" fill="#00d4ff" opacity="0.8" />
            <rect x="95" y="95" width="60" height="10" rx="3" fill="#00d4ff" opacity="0.5" />
            <rect x="165" y="95" width="40" height="10" rx="3" fill="#00d4ff" opacity="0.3" />
            <circle cx="320" cy="100" r="5" fill="#00d4ff" opacity="0.8" />

            <rect
              x="60"
              y="135"
              width="130"
              height="70"
              rx="8"
              fill="#00d4ff"
              fillOpacity="0.08"
              stroke="#00d4ff"
              strokeWidth="0.8"
              strokeOpacity="0.2"
            />
            <rect x="75" y="150" width="40" height="6" rx="2" fill="#00d4ff" opacity="0.6" />
            <rect x="75" y="165" width="60" height="4" rx="2" fill="#00d4ff" opacity="0.3" />
            <rect x="75" y="178" width="50" height="4" rx="2" fill="#00d4ff" opacity="0.2" />
            <circle cx="165" cy="170" r="12" fill="url(#introGrad)" opacity="0.6" />
            <path
              d="M160 170 L164 174 L172 166"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <rect
              x="205"
              y="135"
              width="135"
              height="70"
              rx="8"
              fill="#ff6b35"
              fillOpacity="0.08"
              stroke="#ff6b35"
              strokeWidth="0.8"
              strokeOpacity="0.2"
            />
            <rect x="220" y="150" width="40" height="6" rx="2" fill="#ff6b35" opacity="0.6" />
            <rect x="220" y="165" width="60" height="4" rx="2" fill="#ff6b35" opacity="0.3" />
            <rect x="220" y="178" width="50" height="4" rx="2" fill="#ff6b35" opacity="0.2" />
            <text x="290" y="178" fontSize="20" fill="#ff6b35" textAnchor="middle" fontWeight="bold">
              !
            </text>

            <rect
              x="60"
              y="220"
              width="280"
              height="55"
              rx="8"
              fill="none"
              stroke="#00d4ff"
              strokeWidth="0.8"
              strokeOpacity="0.2"
              strokeDasharray="4 4"
            />
            <circle cx="80" cy="247" r="4" fill="#00d4ff" opacity="0.6" />
            <rect x="95" y="243" width="100" height="8" rx="3" fill="#00d4ff" opacity="0.4" />
            <rect x="205" y="243" width="60" height="8" rx="3" fill="#00d4ff" opacity="0.2" />

            <circle cx="200" cy="30" r="3" fill="#00d4ff" opacity="0.6">
              <animate
                attributeName="opacity"
                values="0.6;1;0.6"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="300" cy="50" r="2" fill="#00d4ff" opacity="0.4">
              <animate
                attributeName="opacity"
                values="0.4;0.9;0.4"
                dur="2.5s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="100" cy="50" r="2" fill="#ff6b35" opacity="0.4">
              <animate
                attributeName="opacity"
                values="0.4;0.9;0.4"
                dur="3s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
