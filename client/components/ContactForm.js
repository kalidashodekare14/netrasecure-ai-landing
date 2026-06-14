"use client";

import { useState } from "react";
import { FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { motion } from "framer-motion";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Full Name is required.";
    if (!form.email.trim()) errs.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Invalid email format.";
    if (!form.subject.trim()) errs.subject = "Subject is required.";
    if (!form.message.trim()) errs.message = "Message is required.";
    return errs;
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Get in <span className="text-neon-blue">Touch</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Have a question or want to learn more? We'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="overflow-hidden rounded-xl border border-white/5 bg-dark-card shadow-[0_0_30px_rgba(0,212,255,0.08)]"
        >
          {status === "success" ? (
            <div className="flex flex-col items-center gap-4 py-20 text-center">
              <FiCheckCircle className="text-green-400" size={48} />
              <p className="text-lg font-semibold text-white">Message Sent!</p>
              <p className="text-sm text-gray-400">We'll get back to you shortly.</p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-4 rounded-lg border border-neon-blue/30 px-6 py-2 text-sm font-medium text-neon-blue transition hover:bg-neon-blue/10"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full rounded-lg border border-white/10 bg-dark-bg px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/50"
                  />
                  {errors.name && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
                      <FiAlertCircle size={12} /> {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full rounded-lg border border-white/10 bg-dark-bg px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/50"
                  />
                  {errors.email && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
                      <FiAlertCircle size={12} /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className="w-full rounded-lg border border-white/10 bg-dark-bg px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/50"
                />
                {errors.subject && (
                  <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
                    <FiAlertCircle size={12} /> {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your inquiry..."
                  className="w-full resize-none rounded-lg border border-white/10 bg-dark-bg px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/50"
                />
                {errors.message && (
                  <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
                    <FiAlertCircle size={12} /> {errors.message}
                  </p>
                )}
              </div>

              {status === "error" && (
                <p className="flex items-center gap-2 text-sm text-red-400">
                  <FiAlertCircle size={16} /> Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-neon-blue px-6 py-3.5 font-semibold text-black transition hover:brightness-110 disabled:opacity-50 sm:w-auto"
              >
                <FiSend size={18} />
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
