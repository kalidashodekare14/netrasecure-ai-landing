import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "NetraSecure AI - AI-Powered Cybersecurity Platform",
  description:
    "NetraSecure AI is an AI-powered cybersecurity platform that protects your digital world with advanced threat detection, URL scanning, deepfake detection, and real-time monitoring.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-dark-bg text-gray-200">{children}</body>
    </html>
  );
}
