import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Features from "@/components/Features";
import WhyChooseUs from "@/components/WhyChooseUs";
import PlatformShowcase from "@/components/PlatformShowcase";
import HowItWorks from "@/components/HowItWorks";
import TrustSecurity from "@/components/TrustSecurity";
import ChatbotSection from "@/components/ChatbotSection";
import UrlScannerSection from "@/components/UrlScannerSection";
import ContactForm from "@/components/ContactForm";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Introduction />
      <Features />
      <WhyChooseUs />
      <PlatformShowcase />
      <HowItWorks />
      <TrustSecurity />
      <ChatbotSection />
      <UrlScannerSection />
      <ContactForm />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </>
  );
}
