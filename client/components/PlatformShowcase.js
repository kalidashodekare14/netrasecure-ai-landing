"use client";

import { FiShield, FiSearch, FiMessageSquare } from "react-icons/fi";
import { motion } from "framer-motion";

const stats = [
  { value: "10K+", label: "Users" },
  { value: "5K+", label: "Scans" },
  { value: "99.9%", label: "Uptime" },
];

export default function PlatformShowcase() {
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
            Experience the Future of{" "}
            <span className="text-neon-blue">Digital Security</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            A glimpse into the tools that keep you protected around the clock.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0 }}
            className="group overflow-hidden rounded-xl border border-white/5 bg-dark-card p-5 transition-all duration-300 hover:border-neon-blue/20 hover:shadow-[0_0_30px_rgba(0,212,255,0.12)]"
          >
            <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
              <FiShield className="text-neon-blue" size={14} />
              <span>Dashboard Preview</span>
            </div>

            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="flex-1 rounded-lg bg-dark-bg p-3">
                  <div className="text-xs text-gray-500">Threat Level</div>
                  <div className="mt-1 text-lg font-bold text-green-400">Low</div>
                  <div className="mt-2 h-1.5 w-full rounded-full bg-gray-700">
                    <div className="h-1.5 w-1/4 rounded-full bg-green-400" />
                  </div>
                </div>
                <div className="flex-1 rounded-lg bg-dark-bg p-3">
                  <div className="text-xs text-gray-500">Active Scans</div>
                  <div className="mt-1 text-lg font-bold text-neon-blue">12</div>
                  <div className="mt-2 h-1.5 w-full rounded-full bg-gray-700">
                    <div className="h-1.5 w-3/4 rounded-full bg-neon-blue" />
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-dark-bg p-3">
                <div className="mb-2 text-xs text-gray-500">Recent Threats</div>
                {["Phishing", "Malware", "Suspicious IP"].map((t, i) => (
                  <div
                    key={t}
                    className="flex items-center justify-between py-1.5 text-sm"
                  >
                    <span className="text-gray-400">{t}</span>
                    <span
                      className={`text-xs ${
                        i === 2 ? "text-red-400" : "text-green-400"
                      }`}
                    >
                      {i === 2 ? "Blocked" : "Safe"}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <div className="h-2 flex-1 rounded-full bg-gray-700">
                  <div
                    className="h-2 w-5/6 rounded-full bg-neon-blue"
                    style={{ opacity: 0.6 }}
                  />
                </div>
                <div className="h-2 flex-1 rounded-full bg-gray-700">
                  <div
                    className="h-2 w-1/3 rounded-full bg-neon-orange"
                    style={{ opacity: 0.6 }}
                  />
                </div>
                <div className="h-2 flex-1 rounded-full bg-gray-700">
                  <div
                    className="h-2 w-2/3 rounded-full bg-neon-blue"
                    style={{ opacity: 0.6 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="group overflow-hidden rounded-xl border border-white/5 bg-dark-card p-5 transition-all duration-300 hover:border-neon-blue/20 hover:shadow-[0_0_30px_rgba(0,212,255,0.12)]"
          >
            <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
              <FiSearch className="text-neon-blue" size={14} />
              <span>Mobile App Preview</span>
            </div>

            <div className="mx-auto w-44 space-y-4 rounded-2xl border border-white/10 bg-dark-bg p-4">
              <div className="flex items-center justify-between">
                <div className="h-2 w-12 rounded-full bg-neon-blue/40" />
                <div className="flex gap-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-gray-600" />
                  <div className="h-1.5 w-1.5 rounded-full bg-gray-600" />
                  <div className="h-1.5 w-1.5 rounded-full bg-gray-600" />
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-lg bg-dark-card p-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-400/20">
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-medium text-white">Network</div>
                  <div className="text-[10px] text-green-400">Protected</div>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-lg bg-dark-card p-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neon-blue/20">
                  <FiShield className="text-neon-blue" size={14} />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-medium text-white">Firewall</div>
                  <div className="text-[10px] text-neon-blue">Active</div>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-lg bg-dark-card p-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neon-orange/20">
                  <div className="text-xs font-bold text-neon-orange">!</div>
                </div>
                <div className="flex-1">
                  <div className="text-xs font-medium text-white">Alerts</div>
                  <div className="text-[10px] text-neon-orange">2 Pending</div>
                </div>
              </div>

              <div className="flex justify-center gap-1">
                <div className="h-1 w-4 rounded-full bg-neon-blue" />
                <div className="h-1 w-4 rounded-full bg-gray-700" />
                <div className="h-1 w-4 rounded-full bg-gray-700" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group overflow-hidden rounded-xl border border-white/5 bg-dark-card p-5 transition-all duration-300 hover:border-neon-blue/20 hover:shadow-[0_0_30px_rgba(0,212,255,0.12)]"
          >
            <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
              <FiMessageSquare className="text-neon-blue" size={14} />
              <span>AI Assistant UI</span>
            </div>

            <div className="space-y-3 rounded-xl bg-dark-bg p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neon-blue/20 text-[10px] text-neon-blue">
                  AI
                </div>
                <div className="rounded-lg bg-dark-card px-3 py-2 text-sm text-gray-300">
                  I detected a phishing attempt. Want me to block it?
                </div>
              </div>

              <div className="flex items-start justify-end gap-3">
                <div className="rounded-lg bg-neon-blue/10 px-3 py-2 text-sm text-neon-blue">
                  Yes, block it.
                </div>
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-700 text-[10px] text-gray-300">
                  U
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neon-orange/20 text-[10px] text-neon-orange">
                  AI
                </div>
                <div className="rounded-lg bg-dark-card px-3 py-2 text-sm text-gray-300">
                  Threat neutralized. Scanning linked files...
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <div className="h-8 flex-1 rounded-lg border border-white/10 bg-dark-card px-3 text-xs text-gray-500 leading-8">
                  Ask me anything...
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neon-blue text-black">
                  <FiMessageSquare size={14} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 grid gap-6 sm:grid-cols-3"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/5 bg-dark-card py-8 text-center"
            >
              <div className="text-3xl font-bold text-neon-blue">{stat.value}</div>
              <div className="mt-1 text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
