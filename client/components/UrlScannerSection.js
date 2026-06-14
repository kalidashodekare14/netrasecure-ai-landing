"use client";

import { useState } from "react";
import { FiSearch, FiShield, FiAlertTriangle, FiCheckCircle, FiLoader } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const statusIcons = {
  Safe: <FiCheckCircle size={20} />,
  Suspicious: <FiAlertTriangle size={20} />,
};

const statusColors = {
  Safe: { text: "text-green-400", bg: "bg-green-400/10", border: "border-green-400/30", icon: "text-green-400" },
  Suspicious: { text: "text-red-400", bg: "bg-red-400/10", border: "border-red-400/30", icon: "text-red-400" },
};

const riskColors = {
  Low: "text-green-400 bg-green-400/10",
  Medium: "text-yellow-400 bg-yellow-400/10",
  High: "text-red-400 bg-red-400/10",
};

export default function UrlScannerSection() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleScan = async () => {
    const trimmed = url.trim();
    if (!trimmed) {
      setError("Please enter a URL to scan.");
      return;
    }
    setError("");
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch(`${API_URL}/scan-url`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: trimmed }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Scan failed");
      setResult(data);
    } catch {
      setError("Unable to scan the URL. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleScan();
  };

  return (
    <section id="url-scanner" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Scan Any URL for <span className="text-neon-blue">Threats</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Instantly analyze URLs for phishing, malware, and suspicious activity
            using our AI engine.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="overflow-hidden rounded-xl border border-white/5 bg-dark-card shadow-[0_0_30px_rgba(0,212,255,0.08)]"
        >
          <div className="p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <FiSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                <input
                  type="text"
                  value={url}
                  onChange={(e) => { setUrl(e.target.value); setError(""); }}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter a URL to scan (e.g. https://example.com)"
                  disabled={loading}
                  className="w-full rounded-lg bg-dark-bg py-3.5 pl-11 pr-4 text-sm text-white placeholder-gray-500 outline-none transition focus:ring-1 focus:ring-neon-blue/50 disabled:opacity-50"
                />
              </div>
              <button
                onClick={handleScan}
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-neon-blue px-6 py-3.5 font-semibold text-black transition hover:brightness-110 disabled:opacity-50"
              >
                {loading ? (
                  <FiLoader className="animate-spin" size={18} />
                ) : (
                  <FiShield size={18} />
                )}
                {loading ? "Scanning..." : "Scan Now"}
              </button>
            </div>

            {error && (
              <p className="mt-3 text-sm text-red-400">{error}</p>
            )}
          </div>

          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden border-t border-white/5"
              >
                <div className="p-6 sm:p-8 space-y-5">
                  <div className="truncate rounded-lg bg-dark-bg px-4 py-3 text-sm text-gray-400">
                    <span className="text-gray-500">Scanned:</span> {result.scannedUrl}
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className={`inline-flex items-center gap-3 rounded-xl border px-5 py-3 ${statusColors[result.status].border} ${statusColors[result.status].bg}`}>
                      <span className={statusColors[result.status].icon}>
                        {statusIcons[result.status]}
                      </span>
                      <div>
                        <div className={`text-sm font-semibold ${statusColors[result.status].text}`}>
                          {result.status}
                        </div>
                        <div className="text-xs text-gray-500">Status</div>
                      </div>
                    </div>

                    <div className={`inline-flex items-center gap-3 rounded-xl border border-white/5 px-5 py-3 ${riskColors[result.riskLevel]}`}>
                      <div>
                        <div className={`text-sm font-semibold ${riskColors[result.riskLevel].split(" ")[0]}`}>
                          {result.riskLevel}
                        </div>
                        <div className="text-xs text-gray-500">Risk Level</div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg bg-dark-bg p-4">
                    <p className="text-sm leading-relaxed text-gray-300">{result.message}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
