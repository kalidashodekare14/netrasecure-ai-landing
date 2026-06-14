"use client";

import { useState, useRef, useEffect } from "react";
import { FiSend, FiMessageSquare } from "react-icons/fi";
import { motion } from "framer-motion";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function ChatbotSection() {
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi! Ask me anything about cybersecurity." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "bot", text: data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "Sorry, I'm having trouble connecting. Please try again later.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="chatbot" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Try Our <span className="text-neon-blue">AI Security Assistant</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Ask questions, scan threats, or get security recommendations — all
            in real time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="overflow-hidden rounded-xl border border-white/5 bg-dark-card shadow-[0_0_30px_rgba(0,212,255,0.08)]"
        >
          <div className="flex items-center gap-3 border-b border-white/5 px-5 py-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neon-blue/10">
              <FiMessageSquare className="text-neon-blue" size={18} />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Security Assistant</div>
              <div className="flex items-center gap-1.5 text-xs text-green-400">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                Online
              </div>
            </div>
          </div>

          <div className="flex h-80 flex-col gap-3 overflow-y-auto p-5">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-neon-blue text-black rounded-br-md"
                      : "bg-dark-bg text-gray-300 rounded-bl-md"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-2xl rounded-bl-md bg-dark-bg px-4 py-3 text-sm text-gray-400">
                  <span className="animate-pulse">typing...</span>
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          <div className="flex items-center gap-3 border-t border-white/5 p-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask a security question..."
              disabled={loading}
              className="flex-1 rounded-lg bg-dark-bg px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition focus:ring-1 focus:ring-neon-blue/50 disabled:opacity-50"
            />
            <button
              onClick={handleSend}
              disabled={loading || !input.trim()}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neon-blue text-black transition hover:brightness-110 disabled:opacity-40"
            >
              <FiSend size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
