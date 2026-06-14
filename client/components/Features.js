"use client";

import {
  FiMessageSquare,
  FiSearch,
  FiShield,
  FiSmartphone,
  FiCamera,
  FiActivity,
} from "react-icons/fi";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: <FiMessageSquare size={22} />,
    title: "AI Chatbot",
    description:
      "Cybersecurity-related AI assistant that answers your security questions and provides instant guidance on potential threats.",
  },
  {
    icon: <FiSearch size={22} />,
    title: "URL Scanner",
    description:
      "Scan suspicious URLs for phishing, malware, and malicious activity using our advanced AI detection engine.",
  },
  {
    icon: <FiShield size={22} />,
    title: "Threat Detection",
    description:
      "AI-powered threat analysis that identifies and neutralizes cyber risks in real time before they cause damage.",
  },
  {
    icon: <FiSmartphone size={22} />,
    title: "Mobile Security",
    description:
      "Comprehensive smart device protection to safeguard your mobile ecosystem from evolving threats.",
  },
  {
    icon: <FiCamera size={22} />,
    title: "Deepfake Detection",
    description:
      "AI-based fake content detection that identifies manipulated media and protects against disinformation.",
  },
  {
    icon: <FiActivity size={22} />,
    title: "Real-Time Monitoring",
    description:
      "Live threat alert system that monitors your digital environment and notifies you of suspicious activity instantly.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Powerful <span className="text-neon-blue">Features</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Everything you need to stay secure in an increasingly complex digital
            landscape.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
