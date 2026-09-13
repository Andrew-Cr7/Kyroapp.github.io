import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  Globe2,
  Handshake,
  Menu,
  Plane,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  X,
} from "lucide-react";

import Footer from "@/components/Footer";
import PartnerEnquiryForm from "@/components/PartnerEnquiryForm";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";

const proofPoints = [
  "£0 setup fee",
  "£0 monthly fee",
  "You control availability",
  "Kyro earns when you earn",
];

const journey = [
  {
    number: "01",
    title: "Traveller finds your gym",
    text: "Kyro puts your venue in front of people actively looking for flexible access.",
  },
  {
    number: "02",
    title: "They buy a Kyro pass",
    text: "The customer chooses an access option that you have agreed with Kyro.",
  },
  {
    number: "03",
    title: "They check in and train",
    text: "Customers arrive ready to use the access they have already purchased.",
  },
  {
    number: "04",
    title: "Your gym earns",
    text: "You generate additional pass revenue without another fixed monthly cost.",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Incremental revenue",
    text: "Monetise the times and capacity you want to make available, without changing your core membership model.",
  },
  {
    icon: Globe2,
    title: "New demand",
    text: "Reach travellers, digital nomads and business visitors already searching for somewhere to train.",
  },
  {
    icon: ShieldCheck,
    title: "Low fixed risk",
    text: "There is no setup fee or monthly subscription. Kyro's commercial model is tied to pass sales.",
  },
  {
    icon: Building2,
    title: "You stay in control",
    text: "Agree suitable pricing, pass types and availability before your gym goes live on Kyro.",
  },
];

const audiences = [
  { icon: Plane, title: "Travellers", text: "Visitors who want a gym for a few days." },
  { icon: Globe2, title: "Digital nomads", text: "Remote workers staying for weeks or months." },
  { icon: Users, title: "Business travellers", text: "Professionals fitting training around temporary stays." },
  { icon: Sparkles, title: "Flexible local users", text: "People who want quality access without another long contract." },
];

const faqs = [
  {
    question: "How much does it cost to join Kyro?",
    answer:
      "There is no setup fee or monthly subscription to become a Kyro gym partner. Kyro earns through the pass revenue generated through the platform.",
  },
  {
    question: "Can we control when Kyro customers can visit?",
    answer:
      "Yes. The partner model is designed so your gym can agree suitable pass types, pricing and availability before going live.",
  },
  {
    question: "Does Kyro replace our memberships?",
    answer:
      "No. Kyro is designed to complement your membership business by reaching people who need temporary or flexible access and may not otherwise become a traditional member.",
  },
  {
    question: "Where is Kyro launching?",
    answer:
      "Kyro is being built as a global flexible gym access platform and is planning to launch across multiple markets rather than a single-city-only rollout.",
  },
  {
    question: "What happens after I apply?",
    answer:
      "We review your gym, get in touch to discuss fit, pricing and availability, then work through the practical setup required before anything goes live.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const ForGymsV2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCtaClick = (location: string) => {
    trackEvent("partner_cta_click", { cta_location: location });
  };

  const nav = [
    { label: "How it works", href: "#how-it-works" },
    { label: "Why Kyro", href: "#why-kyro" },
    { label: "Who uses Kyro", href: "#audience" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Gym Partners | Grow Revenue With Flexible Access | Kyro</title>
        <meta
          name="description"
          content="Become a Kyro gym partner. Reach travellers looking for flexible gym access with no setup fee or monthly subscription, while keeping control of availability."
        />
        <link rel="canonical" href="https://kyroapp.co/for-gyms" />
        <meta property="og:title" content="Become a Kyro Gym Partner" />
        <meta
          property="og:description"
          content="Turn flexible access into a new revenue channel. £0 setup fee, £0 monthly fee and you control availability."
        />
        <meta property="og:url" content="https://kyroapp.co/for-gyms" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://kyroapp.co/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 sm:px-8 lg:px-12">
          <a href="/" className="flex items-center gap-2" aria-label="Kyro home">
            <span className="font-display text-3xl font-bold tracking-tight text-primary">Kyro</span>
            <span className="font-display text-3xl font-bold text-accent">&lt;</span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Gym partner navigation">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <Button variant="hero" className="hidden h-11 rounded-xl px-5 lg:inline-flex" asChild>
            <a href="#partner-enquiry" onClick={() => handleCtaClick("header")}>
              Become a Founding Gym
            </a>
          </Button>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-border bg-background px-6 py-5 lg:hidden">
            <nav className="mx-auto flex max-w-[1440px] flex-col gap-4">
              {nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-medium"
                >
                  {item.label}
                </a>
              ))}
              <Button variant="hero" className="mt-2" asChild>
                <a
                  href="#partner-enquiry"
                  onClick={() => {
                    setMenuOpen(false);
                    handleCtaClick("mobile_header");
                  }}
                >
                  Become a Founding Gym
                </a>
              </Button>
            </nav>
          </div>
        )}
      </header>

      <main>
        <section className="overflow-hidden pt-20">
          <div className="mx-auto max-w-[1440px] px-6 pb-16 pt-16 sm:px-8 md:pb-20 md:pt-24 lg:px-12 lg:pb-24">
            <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
              <div className="max-w-[650px]">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  <Handshake className="h-4 w-4" />
                  For gym partners
                </div>

                <h1 className="font-display text-[48px] font-bold leading-[1.02] tracking-[-0.035em] text-primary sm:text-[58px] lg:text-[68px]">
                  Turn flexible access into new revenue.
                </h1>

                <p className="mt-7 max-w-[610px] text-lg leading-8 text-muted-foreground md:text-xl">
                  Reach travellers looking for quality gym access without adding another fixed cost or changing your membership business.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {proofPoints.slice(0, 3).map((point) => (
                    <div key={point} className="flex items-center gap-2.5 text-sm font-medium text-foreground/90">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#d9f1df] text-[#2f6b44]">
                        <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                      </span>
                      {point}
                    </div>
                  ))}
                </div>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button variant="hero" size="lg" className="h-14 rounded-xl px-7 text-base" asChild>
                    <a href="#partner-enquiry" onClick={() => handleCtaClick("hero")}>
                      Become a Founding Gym
                      <ArrowRight className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="lg" className="h-14 rounded-xl px-6" asChild>
                    <a href="#how-it-works">See how it works</a>
                  </Button>
                </div>

                <p className="mt-3 text-sm text-muted-foreground">No commitment to apply. Takes around 2 minutes.</p>
              </div>

              <div className="relative">
                <div className="absolute -inset-10 -z-10 rounded-full bg-primary/5 blur-3xl" />
                <div className="overflow-hidden rounded-[28px] border border-border bg-card shadow-[0_28px_80px_rgba(24,37,28,0.12)]">
                  <div className="border-b border-border px-6 py-5 sm:px-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary/70">How Kyro works for your gym</p>
                    <h2 className="mt-2 font-display text-2xl font-semibold text-primary">Simple from discovery to revenue.</h2>
                  </div>

                  <div className="divide-y divide-border px-6 sm:px-8">
                    {journey.map((step, index) => (
                      <div key={step.number} className="grid grid-cols-[44px_1fr] gap-4 py-5">
                        <div className="flex flex-col items-center">
                          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                            {step.number}
                          </span>
                          {index < journey.length - 1 && <span className="mt-2 h-full w-px bg-border" />}
                        </div>
                        <div className="pb-1">
                          <h3 className="font-display text-lg font-semibold">{step.title}</h3>
                          <p className="mt-1 text-sm leading-6 text-muted-foreground">{step.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="m-5 rounded-2xl bg-primary px-5 py-4 text-primary-foreground sm:m-6 sm:flex sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary-foreground/65">Aligned economics</p>
                      <p className="mt-1 font-display text-lg font-semibold">Kyro earns when your gym earns.</p>
                    </div>
                    <CircleDollarSign className="mt-3 h-8 w-8 text-primary-foreground/80 sm:mt-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-card py-5">
          <div className="mx-auto grid max-w-[1200px] gap-3 px-6 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
            {proofPoints.map((point) => (
              <div key={point} className="flex items-center justify-center gap-2.5 py-2 text-center text-sm font-semibold text-primary">
                <CheckCircle2 className="h-5 w-5 text-[#4f9165]" />
                {point}
              </div>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="kyro-section scroll-mt-24">
          <div className="kyro-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">How it works</p>
              <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">A new channel without rebuilding your business.</h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                Kyro is designed to sit alongside your existing memberships and operations, giving temporary and flexible customers a clearer way to discover and buy access.
              </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
              {[
                ["01", "Set your access", "Agree the pass types, pricing and availability that make sense for your gym."],
                ["02", "Get discovered", "Kyro helps travellers and flexible users find your gym when they need somewhere to train."],
                ["03", "Generate revenue", "Customers purchase access and your gym earns from a customer you may not otherwise have reached."],
              ].map(([number, title, text]) => (
                <div key={number} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <span className="text-sm font-bold text-primary/50">{number}</span>
                  <h3 className="mt-4 font-display text-xl font-semibold">{title}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="why-kyro" className="kyro-section scroll-mt-24 bg-secondary/35">
          <div className="kyro-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">Why gyms join</p>
              <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">More demand. More control. No new fixed subscription.</h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/8 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="kyro-section">
          <div className="kyro-container">
            <div className="grid items-center gap-10 rounded-[30px] bg-primary p-8 text-primary-foreground md:p-12 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary-foreground/65">Illustrative revenue</p>
                <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">What could five extra visits a day mean?</h2>
                <p className="mt-5 max-w-xl text-primary-foreground/75">
                  Kyro's value is easiest to understand in commercial terms: helping you monetise access that fits around your own operating model.
                </p>
              </div>

              <div className="rounded-2xl bg-white/8 p-6 ring-1 ring-white/12">
                <div className="flex items-end justify-between border-b border-white/15 pb-4">
                  <span className="text-primary-foreground/70">5 passes × £15 × 30 days</span>
                  <BadgeCheck className="h-6 w-6 text-[#bfe6c9]" />
                </div>
                <p className="mt-5 font-display text-5xl font-bold">£2,250</p>
                <p className="mt-2 text-sm text-primary-foreground/70">illustrative monthly pass revenue</p>
                <p className="mt-5 text-xs leading-5 text-primary-foreground/50">Illustrative example only. Actual pricing, demand and partner revenue will vary.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="audience" className="kyro-section scroll-mt-24 bg-card">
          <div className="kyro-container">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div className="max-w-lg">
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">Who uses Kyro</p>
                <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">Customers who need flexibility, not another membership.</h2>
                <p className="mt-5 text-lg leading-8 text-muted-foreground">Kyro is built around customers whose circumstances make traditional long-term gym access a poor fit.</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {audiences.map(({ icon: Icon, title, text }) => (
                  <div key={title} className="rounded-2xl border border-border p-5">
                    <Icon className="h-6 w-6 text-primary" />
                    <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="partner-enquiry" className="kyro-section scroll-mt-24">
          <div className="kyro-container">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">Become a Founding Gym</p>
                <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">Start with four details.</h2>
                <p className="mt-5 max-w-lg text-lg leading-8 text-muted-foreground">
                  We only need enough information to understand who you are and where your gym is. Everything else can come later.
                </p>

                <div className="mt-8 space-y-5">
                  {[
                    ["1", "We review your gym", "We check that the venue looks like a suitable fit for Kyro."],
                    ["2", "We get in touch", "A short conversation about passes, pricing and availability."],
                    ["3", "You decide whether to go live", "Nothing goes live until the commercial and practical setup is agreed."],
                  ].map(([number, title, text]) => (
                    <div key={number} className="flex gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">{number}</span>
                      <div>
                        <h3 className="font-display font-semibold">{title}</h3>
                        <p className="mt-1 text-sm leading-6 text-muted-foreground">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-primary">
                  <span>£0 setup fee</span>
                  <span>£0 monthly fee</span>
                  <span>No commitment to apply</span>
                </div>
              </div>

              <div className="rounded-[26px] border border-border bg-card p-6 shadow-[0_24px_70px_rgba(24,37,28,0.09)] sm:p-8">
                <div className="mb-7">
                  <p className="font-display text-2xl font-semibold">Apply to join Kyro</p>
                  <p className="mt-2 text-sm text-muted-foreground">Takes around 2 minutes.</p>
                </div>
                <PartnerEnquiryForm />
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="kyro-section scroll-mt-24 bg-secondary/35">
          <div className="kyro-container">
            <div className="mx-auto max-w-3xl">
              <div className="text-center">
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">Partner FAQ</p>
                <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">The practical questions.</h2>
              </div>

              <div className="mt-10 space-y-3">
                {faqs.map((faq) => (
                  <details key={faq.question} className="group rounded-2xl border border-border bg-card px-5 py-4">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-semibold">
                      {faq.question}
                      <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
                    </summary>
                    <p className="mt-3 pr-8 text-sm leading-7 text-muted-foreground">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="kyro-section">
          <div className="kyro-container">
            <div className="rounded-[30px] bg-primary px-7 py-10 text-center text-primary-foreground md:px-12 md:py-14">
              <Handshake className="mx-auto h-8 w-8 text-primary-foreground/70" />
              <h2 className="mx-auto mt-5 max-w-3xl font-display text-3xl font-bold md:text-5xl">Build the flexible gym network with us.</h2>
              <p className="mx-auto mt-5 max-w-2xl text-primary-foreground/70">If your gym is a fit, becoming a founding partner gives you a chance to help shape how Kyro works for operators from the start.</p>
              <Button size="lg" className="mt-8 h-14 rounded-xl bg-white px-7 text-primary hover:bg-white/90" asChild>
                <a href="#partner-enquiry" onClick={() => handleCtaClick("final")}>
                  Become a Founding Gym
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ForGymsV2;
