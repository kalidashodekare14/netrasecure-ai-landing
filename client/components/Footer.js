import { FiShield, FiGithub, FiTwitter, FiLinkedin, FiMail } from "react-icons/fi";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Trust & Security", href: "#trust-security" },
  { label: "Chatbot", href: "#chatbot" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: <FiGithub size={18} />, href: "#", label: "GitHub" },
  { icon: <FiTwitter size={18} />, href: "#", label: "Twitter" },
  { icon: <FiLinkedin size={18} />, href: "#", label: "LinkedIn" },
  { icon: <FiMail size={18} />, href: "#", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-dark-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <a href="#home" className="flex items-center gap-2 text-xl font-bold text-white">
              <FiShield className="text-neon-blue" size={24} />
              NetraSecure <span className="text-neon-blue">AI</span>
            </a>
            <p className="max-w-xs text-center text-sm text-gray-500 md:text-left">
              AI-powered cybersecurity platform protecting your digital world.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-gray-400 transition hover:text-neon-blue"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex gap-4">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition hover:border-neon-blue/30 hover:text-neon-blue"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6 text-center text-xs text-gray-600">
          &copy; {new Date().getFullYear()} NetraSecure AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
