import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  CheckCircle,
  CircleDollarSign,
  ClipboardCheck,
  Dumbbell,
  Globe2,
  Handshake,
  MapPin,
  Plane,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PartnerEnquiryForm from "@/components/PartnerEnquiryForm";
import { Button } from "@/components/ui/button";
import heroGym from "@/assets/hero-gym.jpg";
import { trackEvent } from "@/lib/analytics";

const faqs = [
  {
    question: "How much does it cost to join Kyro?",
    answer:
      "There is no upfront cost to join Kyro. Gyms do not pay a setup fee or monthly subscription. Kyro only earns revenue when your gym earns revenue through pass sales on the platform.",
  },
  {
    question: "Is there a setup fee?",
    answer:
      "No. Kyro does not charge gyms a setup fee to start a partnership conversation or prepare a gym listing.",
  },
  {
    question: "Is there a monthly subscription?",
    answer:
      "No. Gyms do not pay a monthly subscription to be part of Kyro. The model is designed to be low risk for partners.",
  },
  {
    question: "What happens if I do not receive any bookings?",
    answer:
      "If your gym does not receive bookings through Kyro, there is nothing to pay. Kyro only earns when the platform helps generate revenue for your gym.",
  },
  {
    question: "Am I locked into a contract?",
    answer:
      "Kyro is built around simple partner agreements, clear pass types and agreed terms before launch. The goal is to keep the partnership practical, transparent and low commitment for gyms.",
  },
  {
    question: "How does Kyro make money?",
    answer:
      "Kyro earns a share of pass sales generated through the platform. That means Kyro is aligned with gym partners: we only make money when we help gyms sell access.",
  },
  {
    question: "What is Kyro for gyms?",
    answer:
      "Kyro is a gym partner platform that helps gyms sell flexible gym access to travellers, digital nomads, business travellers and local users who want short-term access without a long-term membership.",
  },
  {
    question: "How does Kyro help gyms increase revenue?",
    answer:
      "Kyro helps gyms generate additional revenue by selling flexible passes to customers who may not otherwise become full members, especially people visiting a city temporarily.",
  },
  {
    question: "Can Kyro help us sell gym day passes?",
    answer:
      "Yes. Day passes are Kyro's primary launch product. Future pass options may include weekly and monthly access for longer stays.",
  },
  {
    question: "Will Kyro replace our existing memberships?",
    answer:
      "No. Kyro is designed to complement memberships by reaching visitors, travellers and flexible users who are unlikely to buy a traditional long-term membership.",
  },
  {
    question: "Is Kyro only for London gyms?",
    answer:
      "No. London is Kyro's first launch market, but the long-term vision is global. Gyms anywhere in the world can express interest in becoming a partner.",
  },
  {
    question: "What types of gyms can partner with Kyro?",
    answer:
      "Kyro is a fit for independent gyms, boutique fitness facilities, strength and conditioning gyms, functional fitness gyms, CrossFit gyms, premium health clubs, hotel gyms and selected gym chains.",
  },
  {
    question: "Can gyms control availability and capacity?",
    answer:
      "Kyro's partner model is designed so gyms can agree suitable pass types, pricing, availability and launch requirements before going live.",
  },
  {
    question: "How do we start a gym partnership conversation?",
    answer:
      "Complete the gym partner enquiry form and the Kyro team will follow up to understand your gym, your goals and whether Kyro is a good fit.",
  },
];

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

const partnerBenefits = [
  {
    icon: TrendingUp,
    title: "A new customer acquisition channel",
    text: "Reach people who are actively looking for flexible gym access while visiting, working remotely or staying temporarily in your city.",
  },
  {
    icon: CircleDollarSign,
    title: "Additional revenue with no upfront cost",
    text: "Sell access during suitable times without setup fees, monthly subscriptions or extra financial risk.",
  },
  {
    icon: Globe2,
    title: "Visibility with global travellers",
    text: "Put your gym in front of fitness-focused travellers, digital nomads and business visitors before they arrive.",
  },
  {
    icon: Users,
    title: "Potential future members",
    text: "Some short-term visitors become local, return often or recommend gyms to friends, colleagues and teams.",
  },
  {
    icon: ShieldCheck,
    title: "Pay only when you earn",
    text: "Kyro earns from pass sales generated through the platform, so our incentives are tied to your revenue.",
  },
];

const costProofPoints = [
  "Free to join",
  "No setup fee",
  "No monthly subscription",
  "Only pay when you earn",
];

const howItWorks = [
  "We learn about your gym, location, facilities, pricing and goals at no cost.",
  "You agree pass types, availability and commercial terms that suit your business.",
  "Kyro lists your gym for travellers and flexible users searching for access.",
  "Customers discover your gym, purchase access and arrive ready to train.",
  "You gain extra revenue, visibility and partner insights as usage grows. If Kyro does not generate bookings, there is nothing to pay.",
];

const userTypes = [
  {
    icon: Plane,
    title: "Travellers",
    text: "People visiting for a few days who want to train without researching visitor policies across multiple gyms.",
  },
  {
    icon: Briefcase,
    title: "Business travellers",
    text: "Professionals who want a reliable place to train around meetings, hotels and temporary work locations.",
  },
  {
    icon: Globe2,
    title: "Digital nomads",
    text: "Remote workers living in new cities for weeks or months who need flexible access without a fixed contract.",
  },
  {
    icon: Dumbbell,
    title: "Flexible local users",
    text: "People who want to try gyms, train occasionally or avoid long-term commitments while still paying for quality access.",
  },
];

const onboardingSteps = [
  {
    title: "Initial enquiry",
    text: "Tell us about your gym and the kind of partnership you want to explore. There is no upfront cost to start.",
  },
  {
    title: "Discovery call",
    text: "We discuss your current day pass setup, pricing, peak times, quieter periods and commercial goals.",
  },
  {
    title: "Commercial agreement",
    text: "We agree pass types, pricing, revenue share and launch requirements before anything goes live. No setup fee. No monthly subscription.",
  },
  {
    title: "Partner setup",
    text: "Kyro collects your gym information, images, facilities, opening hours and contact details.",
  },
  {
    title: "Launch",
    text: "Your gym becomes available to the right customers through Kyro, starting with the agreed access options.",
  },
];

const ForGyms = () => {
  const handleCtaClick = (ctaLocation: string) => {
    trackEvent("partner_cta_click", { cta_location: ctaLocation });
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Gym Partner Platform | Sell Gym Day Passes | Kyro</title>

        <meta
          name="description"
          content="Partner with Kyro to sell gym day passes, increase gym revenue and attract travellers. Free to join, no setup fees and no monthly costs."
        />

        <link rel="canonical" href="https://kyroapp.co/for-gyms" />

        <meta
          property="og:title"
          content="Gym Partner Platform | Sell Gym Day Passes | Kyro"
        />
        <meta
          property="og:description"
          content="Join Kyro as a gym partner for free. No setup fees, no monthly costs and no financial risk. Kyro only earns when your gym earns."
        />
        <meta property="og:url" content="https://kyroapp.co/for-gyms" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://kyroapp.co/og-image.png" />
        <meta property="og:site_name" content="Kyro" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Gym Partner Platform | Sell Gym Day Passes | Kyro"
        />
        <meta
          name="twitter:description"
          content="Partner with Kyro to increase gym revenue and attract travellers. Free to join with no setup fees or monthly costs."
        />
        <meta name="twitter:image" content="https://kyroapp.co/og-image.png" />

        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <Header />

      <main>
        <section
          className="relative flex min-h-screen items-center overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(20, 32, 26, 0.72), rgba(20, 32, 26, 0.72)), url(${heroGym})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="kyro-container relative z-10 pt-24">
            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="max-w-3xl">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                  <Handshake className="h-4 w-4 text-white" />
                  <span className="text-sm font-semibold text-white">
                    Free gym partnerships worldwide
                  </span>
                </div>

                <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-white md:text-6xl">
                  A new revenue channel for your gym. No setup fees. No monthly
                  costs.
                </h1>

                <p className="mb-6 text-lg text-white/85 md:text-xl">
                  Kyro helps gyms sell flexible access to travellers, digital
                  nomads and business travellers. Joining is free, and Kyro only
                  earns when your gym generates revenue through the platform.
                </p>

                <p className="mb-8 max-w-2xl text-white/80">
                  We are launching in London first and building toward a global
                  gym partner platform for flexible access anywhere in the
                  world.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button variant="hero" size="lg" asChild>
                    <a
                      href="#partner-enquiry"
                      onClick={() => handleCtaClick("hero")}
                    >
                      Request a conversation
                      <ArrowRight className="h-5 w-5" />
                    </a>
                  </Button>

                  <Button
                    variant="hero-outline"
                    size="lg"
                    className="border-white/40 bg-white/10 text-white hover:bg-white hover:text-primary"
                    asChild
                  >
                    <a href="#how-kyro-works">See how Kyro works</a>
                  </Button>
                </div>
              </div>

              <div className="rounded-2xl border border-white/20 bg-white/10 p-6 text-white shadow-elevated backdrop-blur-md">
                <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/70">
                  No financial risk to start
                </p>
                <div className="space-y-4">
                  {costProofPoints.map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-card py-6">
          <div className="kyro-container">
            <div className="grid gap-4 md:grid-cols-4">
              {costProofPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3 rounded-xl bg-secondary/60 px-4 py-3"
                >
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="font-semibold text-foreground">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="kyro-section bg-secondary/40">
          <div className="kyro-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-wide text-primary">
                Partner benefits
              </p>
              <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-5xl">
                A low-risk way to reach customers who are already looking for
                gym access
              </h2>
              <p className="text-lg text-muted-foreground">
                Kyro is designed to complement your existing memberships. The
                goal is simple: help you reach customers who are ready to pay
                for training access without asking your gym to pay upfront,
                commit to a subscription or take on extra financial risk.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {partnerBenefits.map((benefit) => (
                <div key={benefit.title} className="kyro-card p-6">
                  <benefit.icon className="mb-4 h-8 w-8 text-primary" />
                  <h3 className="mb-3 font-display text-xl font-bold">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="kyro-section">
          <div className="kyro-container">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-wide text-primary">
                  Revenue opportunity
                </p>
                <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-5xl">
                  Sell gym day passes without rebuilding your business
                </h2>
                <p className="mb-6 text-lg text-muted-foreground">
                  Many gyms already have people nearby who would pay to train:
                  visitors, professionals staying near the office, remote
                  workers, students, expats and locals who want flexibility.
                  The hard part is being found at the moment they need access.
                </p>
                <p className="mb-8 text-muted-foreground">
                  Kyro creates a focused channel for that demand. There is no
                  upfront cost, no setup fee and no monthly subscription. The
                  commercial model is based on revenue generated through pass
                  sales, so Kyro only earns when your gym earns.
                </p>
                <Button variant="hero" size="lg" asChild>
                  <a
                    href="#partner-enquiry"
                    onClick={() => handleCtaClick("revenue")}
                  >
                    Explore partnership revenue
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
              </div>

              <div className="grid gap-4">
                {[
                  "Fill suitable quieter periods",
                  "Reach high-intent visitors before they choose another gym",
                  "Offer flexible access while protecting peak-time capacity",
                  "Create a pathway from visitor access to future memberships",
                  "Avoid upfront spend before seeing whether Kyro works for your gym",
                ].map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl bg-card p-5 shadow-soft">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <p className="font-medium text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="how-kyro-works" className="kyro-section bg-secondary/40">
          <div className="kyro-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-wide text-primary">
                How Kyro works
              </p>
              <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-5xl">
                Simple for gyms, useful for customers, free to start
              </h2>
              <p className="text-lg text-muted-foreground">
                Kyro removes the friction that stops travellers from training
                and reduces the manual work gyms often face when handling
                short-term access. Your gym can explore the opportunity without
                setup fees or monthly costs.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-5">
              {howItWorks.map((step, index) => (
                <div key={step} className="kyro-card p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {index + 1}
                  </div>
                  <p className="text-muted-foreground">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="kyro-section">
          <div className="kyro-container">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-wide text-primary">
                  Who uses Kyro
                </p>
                <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-5xl">
                  Customers who need flexible access, not another membership
                </h2>
                <p className="text-lg text-muted-foreground">
                  Kyro focuses on people whose lives are not tied to one gym in
                  one location. That makes it a strong fit for cities with
                  tourism, business travel, remote work and international
                  movement.
                </p>
                <div className="mt-6 rounded-2xl bg-secondary/50 p-5">
                  <p className="font-semibold text-foreground">
                    These customers often would not buy a normal gym membership.
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    Kyro helps you monetise that demand without asking you to
                    discount memberships, run paid ads or pay another software
                    subscription.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {userTypes.map((userType) => (
                  <div key={userType.title} className="rounded-2xl bg-card p-6 shadow-soft">
                    <userType.icon className="mb-4 h-7 w-7 text-primary" />
                    <h3 className="mb-2 font-display text-xl font-bold">
                      {userType.title}
                    </h3>
                    <p className="text-muted-foreground">{userType.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="kyro-section bg-primary text-primary-foreground">
          <div className="kyro-container">
            <div className="mx-auto max-w-4xl text-center">
              <MapPin className="mx-auto mb-5 h-10 w-10" />
              <h2 className="mb-6 font-display text-3xl font-bold md:text-5xl">
                Why travellers need flexible gym access
              </h2>
              <p className="mb-8 text-lg text-primary-foreground/80">
                Travellers often face long-term membership requirements, unclear
                visitor policies, local phone number rules, language barriers
                and hidden fees. Many give up and skip training. Kyro helps
                remove that friction by making gym discovery and access clearer.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "No long-term contracts",
                  "Clearer visitor access",
                  "Less time searching",
                  "Better routine while away",
                  "More confidence before arriving",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="kyro-section">
          <div className="kyro-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-wide text-primary">
                Gym onboarding process
              </p>
              <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-5xl">
                From enquiry to launch
              </h2>
              <p className="text-lg text-muted-foreground">
                The process is built around understanding your gym first. Kyro
                should support your revenue goals, capacity and member
                experience, without forcing an upfront commitment before you
                know the fit is right.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-4xl space-y-5">
              {onboardingSteps.map((step, index) => (
                <div key={step.title} className="flex gap-5 rounded-2xl bg-card p-6 shadow-soft">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-secondary font-bold text-primary">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="mb-2 font-display text-xl font-bold">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="kyro-section bg-secondary/40">
          <div className="kyro-container">
            <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-wide text-primary">
                  Trust and fit
                </p>
                <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-5xl">
                  Built by travellers who kept running into the same gym access
                  problem
                </h2>
                <p className="mb-6 text-lg text-muted-foreground">
                  Kyro started from a simple frustration: finding a proper gym
                  while travelling should not require hours of research,
                  confusing sign-up rules or a membership that makes no sense
                  for a short stay.
                </p>
                <p className="text-muted-foreground">
                  Andrew and Rob are building Kyro to make flexible gym access
                  easier for customers and more valuable for gyms. London is the
                  first launch market, but the problem is global. Wherever
                  people travel, they still want a reliable place to train.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    icon: ClipboardCheck,
                    title: "Clear onboarding",
                    text: "No gym goes live without agreed pass types, pricing and launch requirements.",
                  },
                  {
                    icon: BarChart3,
                    title: "Useful partner insights",
                    text: "Kyro aims to help partners understand pass sales, check-ins, repeat users and revenue over time.",
                  },
                  {
                    icon: Handshake,
                    title: "Membership friendly",
                    text: "The model is intended to add customer demand, not undermine your existing members.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "No upfront risk",
                    text: "No setup fees, no monthly subscription and nothing to pay if Kyro does not generate bookings.",
                  },
                  {
                    icon: Globe2,
                    title: "Global ambition",
                    text: "Kyro is starting in London and building toward flexible gym access anywhere.",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl bg-card p-6 shadow-soft">
                    <item.icon className="mb-4 h-7 w-7 text-primary" />
                    <h3 className="mb-2 font-display text-xl font-bold">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="partner-enquiry" className="kyro-section">
          <div className="kyro-container">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-wide text-primary">
                  Partner enquiry
                </p>
                <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-5xl">
                  Request a conversation about joining Kyro for free
                </h2>
                <p className="mb-6 text-lg text-muted-foreground">
                  If your gym wants to sell gym day passes, increase gym
                  revenue or attract travellers to your gym, share a few details
                  and the Kyro team will follow up. There is no setup fee, no
                  monthly subscription and no upfront financial commitment.
                </p>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <p>Free to join and free to start the conversation.</p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <p>Only pay when Kyro helps your gym generate revenue.</p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <p>No monthly software fee or upfront listing cost.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-card p-6 shadow-elevated md:p-8">
                <PartnerEnquiryForm />
              </div>
            </div>
          </div>
        </section>

        <section className="kyro-section bg-secondary/40">
          <div className="kyro-container">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-center font-display text-3xl font-bold text-foreground md:text-5xl">
                Frequently asked questions
              </h2>

              <div className="space-y-6">
                {faqs.map((faq) => (
                  <div key={faq.question} className="rounded-2xl bg-card p-6 shadow-soft">
                    <h3 className="mb-2 font-display text-xl font-bold">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="kyro-section bg-primary text-primary-foreground">
          <div className="kyro-container text-center">
            <h2 className="mx-auto mb-6 max-w-3xl font-display text-3xl font-bold md:text-5xl">
              Ready to explore a no-upfront-cost revenue channel?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/80">
              Join Kyro for free, reach travellers looking for flexible gym
              access and only pay when your gym earns through the platform.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                variant="secondary"
                size="lg"
                className="text-primary"
                asChild
              >
                <a
                  href="#partner-enquiry"
                  onClick={() => handleCtaClick("final")}
                >
                  Request a conversation
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <a
                href="/london-gym-day-passes"
                className="font-semibold text-primary-foreground/80 underline-offset-4 hover:text-primary-foreground hover:underline"
              >
                View the London user page
              </a>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="kyro-container">
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <a href="/" className="hover:text-primary">
                Kyro homepage
              </a>
              <a href="/london-gym-day-passes" className="hover:text-primary">
                London gym day passes
              </a>
              <a href="#partner-enquiry" className="hover:text-primary">
                Gym partner enquiry
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ForGyms;
