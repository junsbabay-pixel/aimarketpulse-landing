import type { Metadata } from "next";
import ContactHeroSection from "@/components/contact/ContactHeroSection";
import NewsletterCTASection from "@/components/contact/NewsletterCTASection";
import ContactInfoSection from "@/components/contact/ContactInfoSection";

export const metadata: Metadata = {
  title: "Contact AI Market Pulse",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <ContactHeroSection />
      <NewsletterCTASection />
      <ContactInfoSection />
    </main>
  );
}
