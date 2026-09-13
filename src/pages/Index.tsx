import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import Header from "@/components/Header";
import Hero from "@/components/HeroPremium";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Story from "@/components/Story";
import FAQ, { faqs } from "@/components/FAQ";
import WaitlistCTA from "@/components/WaitlistCTA";
import MobileWaitlistBar from "@/components/MobileWaitlistBar";
import Footer from "@/components/Footer";

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Kyro",
  url: "https://kyroapp.co",
  description:
    "Kyro is a flexible gym access platform being built for travellers, digital nomads and business travellers who want short-term gym access without long memberships.",
  applicationCategory: "HealthApplication",
  operatingSystem: "Web",
  creator: {
    "@type": "Organization",
    name: "Kyro",
    url: "https://kyroapp.co",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const Index = () => {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");

      setTimeout(() => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Kyro: Flexible Gym Passes for Travellers & Digital Nomads</title>

        <meta
          name="description"
          content="Find gym day passes and flexible gym access while travelling. Compare gyms, buy day, week or month passes and train anywhere with Kyro."
        />

        <link rel="canonical" href="https://kyroapp.co/" />

        <meta
          property="og:title"
          content="Kyro - Train Anywhere | Gym Passes for Travellers"
        />
        <meta
          property="og:description"
          content="Discover flexible gym access for travel with day, week and month passes through Kyro. Built for travellers and digital nomads."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kyroapp.co/" />
        <meta property="og:image" content="https://kyroapp.co/og-image.png" />
        <meta property="og:site_name" content="Kyro" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@KyroAppOfficial" />
        <meta
          name="twitter:title"
          content="Kyro - Train Anywhere | Gym Passes for Travellers"
        />
        <meta
          name="twitter:description"
          content="Discover flexible gym access for travel with day, week and month passes through Kyro. Built for travellers and digital nomads."
        />
        <meta name="twitter:image" content="https://kyroapp.co/og-image.png" />

        <script type="application/ld+json">
          {JSON.stringify(webApplicationSchema)}
        </script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Header />

      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Story />
        <FAQ />
        <WaitlistCTA />
      </main>

      <MobileWaitlistBar />
      <Footer />
    </div>
  );
};

export default Index;
