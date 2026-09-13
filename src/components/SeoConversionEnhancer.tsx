import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Heart,
  MapPin,
  Search,
  SlidersHorizontal,
  Sparkles,
  Ticket,
} from "lucide-react";

import WaitlistForm from "@/components/WaitlistForm";
import heroGym from "@/assets/hero-gym.jpg";

const seoRoutes = new Set([
  "/london-gym-day-passes",
  "/gym-day-passes-uk",
  "/how-to-find-a-gym-while-travelling",
  "/can-tourists-use-gyms-in-london",
  "/fitness-while-travelling-guide",
  "/gym-access-for-digital-nomads",
  "/business-travel-gym-access",
  "/visitor-gym-access",
  "/airport-layover-gym-access",
  "/can-you-use-a-gym-without-a-membership",
  "/gym-day-passes-explained",
  "/how-to-find-gyms-with-day-passes",
  "/flexible-gym-passes-for-travellers",
  "/finding-a-gym-in-a-new-city",
  "/short-term-gym-membership-alternatives",
  "/tourist-gym-pass",
  "/how-to-stay-fit-while-travelling",
]);

type ContextCopy = {
  firstTitle: string;
  firstText: string;
  secondTitle: string;
  secondText: string;
};

const getContextCopy = (pathname: string): ContextCopy => {
  if (pathname.includes("digital-nomad")) {
    return {
      firstTitle: "A new city should not mean rebuilding your gym routine from scratch.",
      firstText:
        "Kyro is being built so digital nomads can discover gyms, compare what matters and buy flexible access without getting trapped in a local contract.",
      secondTitle: "Keep the routine. Change the location.",
      secondText:
        "Join the founding waitlist for early access to flexible gym passes designed around temporary stays and changing cities.",
    };
  }

  if (pathname.includes("business-travel")) {
    return {
      firstTitle: "Your training window is already small. Finding a gym should not use it up.",
      firstText:
        "Kyro will help business travellers find practical gym access around hotels, offices and transport without calling venues one by one.",
      secondTitle: "Land. Find a gym. Train. Get on with the trip.",
      secondText:
        "Join the Kyro waitlist for early access to flexible passes built for work travel and short stays.",
    };
  }

  if (pathname.includes("airport-layover")) {
    return {
      firstTitle: "Know whether the gym works before you leave the terminal.",
      firstText:
        "Kyro is being built to make travel-day gym access clearer, with practical venue details, facilities and flexible passes in one place.",
      secondTitle: "Make long travel days easier to plan.",
      secondText:
        "Join the waitlist for early access as Kyro expands flexible gym discovery across multiple countries.",
    };
  }

  if (pathname.includes("tourist") || pathname.includes("tourists")) {
    return {
      firstTitle: "Visiting a city? Find a gym that actually fits the trip.",
      firstText:
        "Kyro will help travellers compare gyms, facilities and flexible access without wasting time on membership forms and unclear visitor rules.",
      secondTitle: "Spend less of the trip researching where to train.",
      secondText:
        "Join the founding waitlist for early access to Kyro's flexible gym marketplace.",
    };
  }

  if (pathname.includes("london")) {
    return {
      firstTitle: "Looking for a London gym without the membership hassle?",
      firstText:
        "Kyro will bring gym discovery, facilities and flexible pass access into one simple flow — so visitors can spend less time researching and more time training.",
      secondTitle: "London gym access, without the endless tabs and phone calls.",
      secondText:
        "Join the waitlist for early access to Kyro as the platform launches across multiple countries.",
    };
  }

  if (pathname.includes("gym-day-passes-uk")) {
    return {
      firstTitle: "Gym access should not restart every time the city changes.",
      firstText:
        "Kyro is being built to make flexible passes easier to discover and use as you move between cities, trips and temporary stays.",
      secondTitle: "Train around your route, not around a contract.",
      secondText:
        "Join the founding waitlist for early access to flexible gym passes through Kyro.",
    };
  }

  if (pathname.includes("stay-fit") || pathname.includes("fitness-while")) {
    return {
      firstTitle: "The workout is rarely the hard part. Access is.",
      firstText:
        "Kyro is focused on removing the friction between arriving in a new place and finding somewhere good to train.",
      secondTitle: "Keep training when your location changes.",
      secondText:
        "Join the founding waitlist for early access to flexible gym discovery and passes.",
    };
  }

  if (pathname.includes("membership")) {
    return {
      firstTitle: "Need the gym, not another long-term contract?",
      firstText:
        "Kyro is being built around temporary and flexible access — helping you find a gym that works for the time you actually need it.",
      secondTitle: "Flexible access for temporary plans.",
      secondText:
        "Join the Kyro waitlist for early access to a simpler alternative to membership friction.",
    };
  }

  if (pathname.includes("day-pass") || pathname.includes("day-passes")) {
    return {
      firstTitle: "Day passes should be easy to find before you arrive.",
      firstText:
        "Kyro will help you discover gyms, compare facilities and buy flexible access without hunting across individual websites.",
      secondTitle: "One place to find the gym and the pass.",
      secondText:
        "Join the founding waitlist for early access to Kyro's flexible gym marketplace.",
    };
  }

  return {
    firstTitle: "Stop researching gyms one by one.",
    firstText:
      "Kyro is being built to make gym access simpler wherever you travel: discover gyms, compare what matters and buy flexible passes in one place.",
    secondTitle: "Train anywhere without the access friction.",
    secondText:
      "Join the founding waitlist for early access as Kyro prepares to launch across multiple countries.",
  };
};

const launchCopyReplacements: Array<[RegExp, string]> = [
  [/preparing to launch in London first/gi, "preparing for a multi-country launch"],
  [/preparing to open in London first/gi, "preparing for a multi-country launch"],
  [/with London as the first launch market/gi, "with multiple launch markets planned"],
  [/London is Kyro(?:'s|’s) first launch market/gi, "Kyro is planning a multi-country launch"],
  [/London is the first launch market/gi, "Kyro is planning a multi-country launch"],
  [/launching in London first/gi, "launching across multiple countries"],
  [/from London first/gi, "across multiple countries"],
  [/starting with London/gi, "across multiple launch markets"],
  [/London is the first market/gi, "Kyro is launching across multiple markets"],
];

const replaceLaunchCopy = (root: HTMLElement) => {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();

  while (node) {
    const original = node.textContent ?? "";
    let next = original;

    launchCopyReplacements.forEach(([pattern, replacement]) => {
      next = next.replace(pattern, replacement);
    });

    if (next !== original) node.textContent = next;
    node = walker.nextNode();
  }

  document
    .querySelectorAll<HTMLMetaElement>(
      'meta[name="description"], meta[property="og:description"], meta[name="twitter:description"]',
    )
    .forEach((meta) => {
      let next = meta.content;
      launchCopyReplacements.forEach(([pattern, replacement]) => {
        next = next.replace(pattern, replacement);
      });
      meta.content = next;
    });
};

const PhoneFrame = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div
    className={`relative rounded-[2.5rem] bg-[linear-gradient(145deg,#b6bdb8_0%,#28312c_15%,#050806_40%,#151b17_72%,#838b86_90%)] p-[6px] shadow-[0_34px_65px_rgba(10,24,16,0.30),0_12px_24px_rgba(10,24,16,0.18)] ${className}`}
  >
    <span className="absolute -left-[4px] top-24 h-11 w-1 rounded-l bg-[#424944]" />
    <span className="absolute -right-[4px] top-32 h-16 w-1 rounded-r bg-[#424944]" />
    <div className="relative h-full overflow-hidden rounded-[2.18rem] border border-white/10 bg-[#f6f8f7] ring-2 ring-black/70">
      <div className="absolute left-1/2 top-2 z-30 h-4 w-16 -translate-x-1/2 rounded-full bg-[#050806]" />
      {children}
    </div>
  </div>
);

const DiscoverPhone = () => (
  <PhoneFrame className="h-[420px] w-[205px] -rotate-[7deg] [transform:rotateY(10deg)_rotateZ(-7deg)]">
    <div className="flex h-full flex-col pt-8 text-[#162019]">
      <div className="flex items-center justify-between px-3 py-2">
        <div className="flex items-center gap-1.5">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#173426] font-display text-[10px] font-bold text-white">K</span>
          <div>
            <p className="text-[5px] font-semibold uppercase tracking-wider text-[#7a8780]">Current</p>
            <p className="text-[7px] font-semibold">London, UK</p>
          </div>
          <ChevronDown className="h-2.5 w-2.5" />
        </div>
        <Ticket className="h-3.5 w-3.5" />
      </div>

      <div className="px-3">
        <div className="flex h-8 items-center gap-2 rounded-lg border border-[#dce2de] bg-white px-2.5">
          <Search className="h-3 w-3 text-[#64748b]" />
          <span className="flex-1 text-[6px] text-[#66736c]">Search gyms or cities...</span>
          <SlidersHorizontal className="h-3 w-3 text-[#315f40]" />
        </div>

        <div className="mt-2 flex gap-1.5">
          {['All', 'Open Now', 'Day Pass'].map((label, index) => (
            <span key={label} className={`rounded-full border px-2 py-1 text-[5.5px] font-medium ${index === 0 ? 'border-[#173426] bg-[#173426] text-white' : 'border-[#d7ddd9] bg-white'}`}>
              {label}
            </span>
          ))}
        </div>

        <div className="mt-3 rounded-xl bg-[linear-gradient(135deg,#2d493c,#173426)] p-3 text-white shadow-[0_8px_18px_rgba(20,52,37,.18)]">
          <div className="flex items-center justify-between gap-2">
            <span className="rounded-sm bg-[#c8eed2] px-1.5 py-1 text-[5.5px] font-bold uppercase text-[#173426]">Active Pass</span>
            <span className="text-[5px] text-white/65">4h left</span>
          </div>
          <p className="mt-2 font-display text-[10px] font-semibold">Riverside Athletic Club</p>
          <p className="mt-1 text-[6px] text-white/70">Full club & spa access</p>
          <button className="mt-2 rounded-md bg-[#c8eed2] px-2 py-1.5 text-[6px] font-semibold text-[#173426]">Show Pass</button>
        </div>

        <div className="mb-2 mt-4 flex items-end justify-between">
          <p className="font-display text-[11px] font-semibold">Top Gyms Nearby</p>
          <span className="text-[5.5px] font-medium text-[#3e694d]">See all</span>
        </div>

        <div className="overflow-hidden rounded-xl border border-[#dce1de] bg-white shadow-sm">
          <div className="relative h-[95px] overflow-hidden">
            <img src={heroGym} alt="Illustrative gym preview" className="h-full w-full object-cover" />
            <span className="absolute left-2 top-2 rounded bg-[#20372c]/90 px-2 py-1 text-[5px] text-white">★ 4.8</span>
            <Heart className="absolute right-2 top-2 h-5 w-5 rounded bg-white/95 p-1" />
          </div>
          <div className="p-2.5">
            <div className="flex justify-between gap-2">
              <p className="font-display text-[8px] font-semibold">Riverside Athletic Club</p>
              <p className="text-[7px] font-bold">£20 <span className="font-normal text-[#6f7f76]">/ day</span></p>
            </div>
            <div className="mt-2 flex gap-1">
              {['Pool', 'Sauna', 'Weights'].map((tag) => (
                <span key={tag} className="rounded bg-[#edf4ef] px-1.5 py-1 text-[5px] text-[#47634f]">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </PhoneFrame>
);

const DetailPhone = () => (
  <PhoneFrame className="h-[400px] w-[195px] rotate-[7deg] [transform:rotateY(-10deg)_rotateZ(7deg)]">
    <div className="flex h-full flex-col pt-7 text-[#162019]">
      <div className="relative h-[150px] overflow-hidden">
        <img src={heroGym} alt="Illustrative gym detail preview" className="h-full w-full object-cover" />
        <span className="absolute bottom-2 left-2 rounded bg-[#173426]/90 px-2 py-1 text-[5.5px] text-white">0.8 mi · London</span>
      </div>
      <div className="p-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="font-display text-[11px] font-semibold">Riverside Athletic Club</p>
            <p className="mt-1 flex items-center gap-1 text-[5.5px] text-[#708078]"><MapPin className="h-2.5 w-2.5" /> Central London</p>
          </div>
          <p className="text-[8px] font-bold">£20<span className="text-[5px] font-normal"> / day</span></p>
        </div>
        <p className="mt-3 text-[6px] leading-relaxed text-[#66736c]">Premium training space with flexible access and recovery facilities.</p>
        <div className="mt-3 grid grid-cols-3 gap-1">
          {['Pool', 'Sauna', 'Showers'].map((tag) => (
            <span key={tag} className="rounded-md bg-[#edf4ef] px-1 py-1.5 text-center text-[5px] text-[#47634f]">{tag}</span>
          ))}
        </div>
        <button className="mt-4 w-full rounded-lg bg-[#173426] py-2.5 text-[7px] font-semibold text-white">Buy Day Pass →</button>
        <div className="mt-4 rounded-lg border border-[#dde2df] bg-white p-2.5">
          <p className="text-[6px] font-semibold">Flexible access</p>
          <p className="mt-1 text-[5.5px] leading-relaxed text-[#708078]">No long-term membership. Clear entry details before you arrive.</p>
        </div>
      </div>
    </div>
  </PhoneFrame>
);

const ProductPreview = ({ compact = false }: { compact?: boolean }) => (
  <div className={`relative mx-auto ${compact ? 'h-[330px] w-[310px]' : 'h-[470px] w-full max-w-[470px]'}`} style={{ perspective: '1200px' }}>
    <div className={`absolute left-1/2 top-1/2 -translate-x-[84%] -translate-y-1/2 ${compact ? 'scale-[0.72]' : ''}`}>
      <DiscoverPhone />
    </div>
    <div className={`absolute left-1/2 top-1/2 -translate-x-[18%] -translate-y-[46%] ${compact ? 'scale-[0.72]' : ''}`}>
      <DetailPhone />
    </div>
    <div className="absolute bottom-[7%] left-1/2 h-8 w-[78%] -translate-x-1/2 rounded-full bg-primary/10 blur-2xl" />
  </div>
);

const ContextualSignup = ({ title, text, id }: { title: string; text: string; id?: string }) => (
  <section id={id} className="seo-contextual-signup py-8 md:py-12">
    <div className="kyro-container">
      <div className="relative overflow-hidden rounded-[2rem] border border-primary/10 bg-[linear-gradient(135deg,hsl(var(--primary))_0%,#294438_100%)] px-6 py-8 text-primary-foreground shadow-[0_26px_70px_rgba(20,36,27,0.16)] md:px-10 md:py-10 lg:grid lg:grid-cols-[1.08fr_0.72fr] lg:items-center lg:gap-10">
        <div className="relative z-10 max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white/85">
            <Sparkles className="h-3.5 w-3.5" />
            Kyro early access
          </div>
          <h2 className="font-display text-3xl font-bold leading-tight text-white md:text-4xl">{title}</h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-white/75 md:text-lg">{text}</p>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/75">
            {['Discover gyms faster', 'Compare facilities', 'Buy flexible passes'].map((item) => (
              <span key={item} className="flex items-center gap-2"><Check className="h-4 w-4 text-[#c8eed2]" />{item}</span>
            ))}
          </div>
          <div className="mt-7 rounded-2xl bg-[#f8f6ef] p-3 text-foreground shadow-xl md:p-4">
            <WaitlistForm variant="section" />
          </div>
          <p className="mt-3 text-xs text-white/55">Founding waitlist · Early access · No spam</p>
        </div>

        <div className="relative z-10 mt-8 hidden lg:block">
          <ProductPreview compact />
        </div>

        <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/7 blur-3xl" />
      </div>
    </div>
  </section>
);

const SeoHeroVisual = () => (
  <div className="relative">
    <div className="absolute inset-10 rounded-full bg-white/10 blur-3xl" />
    <ProductPreview />
  </div>
);

const SeoConversionEnhancer = () => {
  const { pathname } = useLocation();
  const isSeoPage = seoRoutes.has(pathname);
  const copy = useMemo(() => getContextCopy(pathname), [pathname]);
  const [heroMount, setHeroMount] = useState<HTMLElement | null>(null);
  const [firstMount, setFirstMount] = useState<HTMLElement | null>(null);
  const [secondMount, setSecondMount] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setHeroMount(null);
    setFirstMount(null);
    setSecondMount(null);

    if (!isSeoPage) return;

    const main = document.querySelector<HTMLElement>("main");
    if (!main) return;

    main.classList.add("seo-refined");
    replaceLaunchCopy(main);

    const sections = Array.from(main.children).filter(
      (element): element is HTMLElement => element instanceof HTMLElement && element.tagName === "SECTION",
    );

    if (sections.length < 3) return;

    const hero = sections[0];
    const intro = sections[1];
    hero.classList.add("seo-hero");
    intro.classList.add("seo-intro");

    const heroContainer = hero.querySelector<HTMLElement>(".kyro-container");
    heroContainer?.classList.add("seo-hero-grid");

    const heroVisualMount = document.createElement("div");
    heroVisualMount.className = "seo-hero-visual-mount";
    heroContainer?.appendChild(heroVisualMount);

    const relatedCard = intro.querySelector<HTMLElement>(".grid > div:last-child");
    relatedCard?.classList.add("seo-related-card");

    const faqSection = sections.find((section) =>
      section.querySelector("h2")?.textContent?.toLowerCase().includes("frequently asked questions"),
    );
    faqSection?.classList.add("seo-faq-section");

    const finalWaitlist = document.getElementById("waitlist")?.closest<HTMLElement>("section");
    finalWaitlist?.classList.add("seo-final-waitlist");

    const bridgeCta = sections.find(
      (section) => section !== hero && section !== finalWaitlist && section.className.includes("bg-primary"),
    );
    bridgeCta?.classList.add("seo-bridge-cta");

    const firstSignupMount = document.createElement("div");
    firstSignupMount.id = "seo-early-access";
    firstSignupMount.className = "seo-signup-portal";
    intro.after(firstSignupMount);

    const contentSections = sections.filter(
      (section) =>
        section !== hero &&
        section !== intro &&
        section !== faqSection &&
        section !== finalWaitlist &&
        section !== bridgeCta,
    );

    const midTarget = contentSections[Math.max(0, Math.floor(contentSections.length * 0.55) - 1)];
    const secondSignupMount = document.createElement("div");
    secondSignupMount.className = "seo-signup-portal";
    midTarget?.after(secondSignupMount);

    const heroPrimaryCta = hero.querySelector<HTMLAnchorElement>('a[href="#waitlist"]');
    heroPrimaryCta?.setAttribute("href", "#seo-early-access");

    setHeroMount(heroVisualMount);
    setFirstMount(firstSignupMount);
    setSecondMount(secondSignupMount);

    return () => {
      main.classList.remove("seo-refined");
      hero.classList.remove("seo-hero");
      intro.classList.remove("seo-intro");
      heroContainer?.classList.remove("seo-hero-grid");
      relatedCard?.classList.remove("seo-related-card");
      faqSection?.classList.remove("seo-faq-section");
      finalWaitlist?.classList.remove("seo-final-waitlist");
      bridgeCta?.classList.remove("seo-bridge-cta");
      heroVisualMount.remove();
      firstSignupMount.remove();
      secondSignupMount.remove();
    };
  }, [isSeoPage, pathname]);

  if (!isSeoPage) return null;

  return (
    <>
      {heroMount && createPortal(<SeoHeroVisual />, heroMount)}
      {firstMount &&
        createPortal(
          <ContextualSignup id="seo-early-access-form" title={copy.firstTitle} text={copy.firstText} />,
          firstMount,
        )}
      {secondMount &&
        createPortal(
          <ContextualSignup title={copy.secondTitle} text={copy.secondText} />,
          secondMount,
        )}
    </>
  );
};

export default SeoConversionEnhancer;
