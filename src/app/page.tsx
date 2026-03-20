import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustedBrands from "@/components/TrustedBrands";
import Testimonials from "@/components/Testimonials";
import Features from "@/components/Features";
import ProductPillars from "@/components/ProductPillars";
import USP from "@/components/USP";
import Integrations from "@/components/Integrations";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "GoHyperLocal",
            url: "https://gohyperlocal.com",
            description:
              "GoHyperLocal powers ultra-fast hyperlocal deliveries with real-time tracking, smart carrier switching, accurate ETAs, and a branded customer-facing delivery experience for D2C quick commerce.",
            sameAs: [],
            offers: {
              "@type": "Offer",
              name: "Quick Commerce Logistics Platform",
              description:
                "End-to-end logistics intelligence and customer delivery experience platform for quick commerce and express delivery.",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How does GoHyperLocal improve the customer experience for quick commerce?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "GoHyperLocal provides branded tracking pages with live rider maps, real-time ETA updates, and multi-channel notifications. We build the complete customer-facing delivery experience under your brand.",
                },
              },
              {
                "@type": "Question",
                name: "Which hyperlocal carriers does GoHyperLocal integrate with?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We integrate with 30+ hyperlocal and express delivery carriers including Shadowfax, Porter, Dunzo, Borzo, Zomato, Swiggy, Uber, Delhivery, and many more.",
                },
              },
              {
                "@type": "Question",
                name: "What makes GoHyperLocal different from other logistics platforms?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "GoHyperLocal offers everything other platforms do — multi-carrier integrations, smart allocation, tracking, NDR management, returns — PLUS we build the customer-facing frontend for your express delivery and quick commerce operations.",
                },
              },
              {
                "@type": "Question",
                name: "How quickly can I launch quick commerce with GoHyperLocal?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most brands go live within 1-2 weeks with dedicated onboarding support and pre-built integrations.",
                },
              },
            ],
          }),
        }}
      />

      <Header />
      <main>
        <Hero />
        <TrustedBrands />
        <Testimonials />
        <Features />
        <ProductPillars />
        <USP />
        <Integrations />
        <Stats />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
