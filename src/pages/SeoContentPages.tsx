import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";
import {
  Briefcase,
  CheckCircle,
  Compass,
  Dumbbell,
  Globe2,
  Luggage,
  MapPin,
  Plane,
  Search,
  ShieldCheck,
} from "lucide-react";
import heroGym from "@/assets/hero-gym.jpg";

type LinkItem = {
  label: string;
  href: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type SectionItem = {
  title: string;
  body: string;
};

type ContentSection = {
  eyebrow?: string;
  title: string;
  intro?: string;
  paragraphs?: string[];
  items?: SectionItem[];
  checklist?: string[];
};

type SeoPageData = {
  slug: string;
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;
  breadcrumbName: string;
  heroBadge: string;
  h1: string;
  heroText: string;
  heroSupport: string;
  primaryCta: string;
  secondaryCta: string;
  introTitle: string;
  introParagraphs: string[];
  quickLinks: LinkItem[];
  sections: ContentSection[];
  ctaOne: {
    title: string;
    text: string;
    button: string;
  };
  ctaTwo: {
    title: string;
    text: string;
  };
  faqs: FaqItem[];
};

const relatedGuideLinks: LinkItem[] = [
  { label: "London gym day passes", href: "/london-gym-day-passes" },
  { label: "Gym day passes in the UK", href: "/gym-day-passes-uk" },
  {
    label: "How to find a gym while travelling",
    href: "/how-to-find-a-gym-while-travelling",
  },
  {
    label: "Can tourists use gyms in London?",
    href: "/can-tourists-use-gyms-in-london",
  },
];

const pages: Record<string, SeoPageData> = {
  uk: {
    slug: "gym-day-passes-uk",
    title: "Gym Day Passes in the UK | Flexible Gym Access | Kyro",
    description:
      "Looking for gym day passes in the UK? Join Kyro for flexible gym access built for travellers, digital nomads and business visitors.",
    ogTitle: "Gym Day Passes in the UK | Flexible Gym Access | Kyro",
    ogDescription:
      "A practical guide to finding flexible gym access across the UK without long contracts, unclear visitor rules or time-consuming research.",
    twitterTitle: "Gym Day Passes in the UK | Kyro",
    twitterDescription:
      "Join Kyro for early access to flexible gym passes built for UK travel, remote work and business trips.",
    breadcrumbName: "Gym Day Passes in the UK",
    heroBadge: "United Kingdom guide",
    h1: "Gym Day Passes in the UK",
    heroText:
      "Flexible gym access for travellers, digital nomads, business travellers and short-stay visitors who want to train across the UK without a long-term membership.",
    heroSupport:
      "Kyro is pre-launch, with London as the first launch market. Join the waitlist for early access as flexible gym passes roll out.",
    primaryCta: "Join the UK waitlist",
    secondaryCta: "View London guide",
    introTitle: "Finding a gym day pass in the UK should not feel like research homework",
    introParagraphs: [
      "The UK is a practical place to train, but gym access can still be awkward when you are not a local member. A traveller arriving for a work trip, a digital nomad spending a month in a new city and a visitor staying with friends all have the same basic need: find a good place to train without being pulled into a contract.",
      "That sounds simple until you start comparing options. Some gyms offer day passes clearly. Others hide visitor access behind trial forms, app downloads, membership tours or local sign-up requirements. Opening hours can change by location. Peak-time rules can matter. A gym that looks ideal online might be too far from your hotel, station or office once you factor in UK transport and weather.",
      "This guide is for people who want a clear way to think about UK gym day passes before Kyro launches. London is Kyro's first launch market, but the need is bigger than one city. People travel between London, Manchester, Edinburgh, Birmingham, Bristol, Leeds, Glasgow and smaller towns every week. Flexible gym access should work around where you actually are, not where your home membership happens to be.",
    ],
    quickLinks: relatedGuideLinks.filter(
      (link) => link.href !== "/gym-day-passes-uk",
    ),
    sections: [
      {
        eyebrow: "UK access",
        title: "Why gym day passes matter for UK travel",
        paragraphs: [
          "A gym day pass is useful because it matches the reality of travel. You may be in London for two nights, Manchester for a conference, Edinburgh for a festival, Birmingham for an event or Bristol for a remote-work week. In those situations, a normal membership is too heavy for the job. You need a single session, a few sessions or a short burst of access close to where your day is happening.",
          "The UK also has a wide mix of gyms. There are budget chains, independent strength gyms, leisure centres, boutique studios, hotel gyms, university facilities and premium clubs. That variety is good, but it makes visitor access inconsistent. The question is rarely whether a city has gyms. The question is which gyms are realistic for a visitor, what they cost, whether they allow non-members and how much friction sits between you and the session.",
          "For travellers who train regularly, losing routine has a cost. One missed workout is not a crisis, but repeated travel can break momentum quickly. Flexible gym access helps people keep training without planning their whole trip around a facility. It is especially valuable for business travellers with tight schedules and digital nomads who need repeatable routines in temporary places.",
        ],
      },
      {
        eyebrow: "Current focus",
        title: "London is the first launch market, not the whole vision",
        paragraphs: [
          "Kyro is currently pre-launch and preparing to launch in London first. That matters because London has the clearest immediate mix of tourist demand, business travel, remote work, transport hubs and gym density. It is the right place to validate flexible access before expanding the model into wider UK coverage.",
          "The wider UK need is still important. People do not move through the country in neat single-city journeys. A consultant might train in London on Monday and Manchester on Wednesday. A founder might split time between Bristol and London. A student visiting friends in Edinburgh might want one session without joining a local gym. Those journeys all create the same question: how do you find reliable gym access without making a short stay more complicated?",
          "If you are specifically visiting the capital, start with the London guide. It covers where visitors often look, why central locations matter and what to check before committing to a session. If you are moving around the UK, use this page as a practical framework for comparing day pass options city by city.",
        ],
      },
      {
        eyebrow: "Traveller fit",
        title: "Who should use a UK gym day pass?",
        items: [
          {
            title: "Travellers on short stays",
            body: "If you are in a UK city for a weekend, a day pass can be easier than arranging a membership trial. Look for a gym near your accommodation, station or main plans so training does not become a separate journey.",
          },
          {
            title: "Digital nomads and remote workers",
            body: "Remote workers often need more than one session but less than a long contract. Flexible access is useful while you test neighbourhoods, coworking spaces and routines before deciding where you will spend most of your time.",
          },
          {
            title: "Business travellers",
            body: "Work trips often leave narrow windows. A gym close to a hotel, office or transport hub can make the difference between training and skipping the session. Clear visitor rules matter because there is little time for uncertainty.",
          },
          {
            title: "Flexible local users",
            body: "Some people live locally but do not want a full membership. Day passes can help with trying a gym, training near a temporary workplace or keeping access flexible when life is split between cities.",
          },
        ],
      },
      {
        eyebrow: "How to compare",
        title: "What to check before choosing a UK gym day pass",
        paragraphs: [
          "The best gym day pass is not always the cheapest or the closest. It is the one that fits the session you actually want to do. A proper strength session needs different equipment from a quick treadmill run. A traveller with luggage needs different practical details from a local user heading home afterwards. A business traveller may care more about showers, towels and opening hours than brand name.",
          "Before travelling to a gym, check whether visitor access is currently available. Some gyms use day passes all year. Some offer trials only during campaigns. Some require advance booking, ID, a waiver or a specific app. If a gym cannot answer those questions clearly online, assume you may need extra time before training.",
        ],
        checklist: [
          "Visitor access or day pass availability",
          "Price, payment method and whether the cost is shown clearly",
          "Distance from your hotel, office, station or accommodation",
          "Opening hours, weekend hours and bank holiday changes",
          "Peak-time restrictions for non-members",
          "Equipment, classes and training space",
          "Showers, lockers, towel rules and luggage practicality",
          "Whether ID, advance registration or a local phone number is required",
        ],
      },
      {
        eyebrow: "Planning your trip",
        title: "How to choose the right UK gym day pass for your route",
        paragraphs: [
          "Start with the city you are actually spending time in, then narrow the search to the areas that sit naturally inside your day. In London, that might mean a gym near King's Cross, London Bridge, Canary Wharf, Paddington or your hotel. In other UK cities, the same logic applies: look around the station you arrive at, the neighbourhood where you are staying, the office district you are visiting or the area where you will spend the evening.",
          "Think carefully about how much effort the session can justify. If you are staying for one night, a gym that requires a long journey, a tour, a membership conversation or unclear registration steps is probably the wrong choice. If you are working remotely in one city for several weeks, you may care more about repeat access, quieter training times and whether the gym fits your weekly routine.",
          "For tourists visiting London, the dedicated tourist gym access guide explains what visitors should check before turning up. For broader trips, the guide to finding a gym while travelling gives a step-by-step process you can use in the UK or abroad. The goal is simple: choose a gym that supports your trip instead of creating another piece of admin.",
        ],
      },
    ],
    ctaOne: {
      title: "Want flexible gym access when travelling in the UK?",
      text: "Join the Kyro waitlist for early access updates as we prepare to launch flexible gym passes, starting with London.",
      button: "Join the waitlist",
    },
    ctaTwo: {
      title: "Train around your route, not around a contract",
      text: "Kyro is being built for people who move between cities, hotels, offices, stations and coworking spaces. Get early access before launch.",
    },
    faqs: [
      {
        question: "Can you buy gym day passes in the UK?",
        answer:
          "Yes, some UK gyms offer day passes, trial passes or visitor access, but rules vary by gym and location. Always check price, access rules and opening hours before travelling to the gym.",
      },
      {
        question: "Is Kyro live across the UK?",
        answer:
          "Kyro is currently pre-launch. London is the first launch market, and the wider goal is to make flexible gym access easier across the UK and beyond.",
      },
      {
        question: "Are UK gym day passes useful for business travellers?",
        answer:
          "Yes. They can help business travellers train near a hotel, office or station without committing to a local membership, especially when time is limited.",
      },
      {
        question: "Do tourists need a UK phone number to use a gym?",
        answer:
          "Some gyms may ask for local contact details or app registration, while others do not. This is one reason visitor access can feel inconsistent for tourists.",
      },
      {
        question: "Where should I start if I need a gym in London?",
        answer:
          "Start with Kyro's London gym day passes guide. It covers visitor-friendly considerations, useful areas and what to check before choosing a gym.",
      },
      {
        question: "How do I get early access to Kyro?",
        answer:
          "Join the waitlist with your email address. Kyro will share launch updates and early access information as flexible gym passes become available.",
      },
    ],
  },
  travel: {
    slug: "how-to-find-a-gym-while-travelling",
    title: "How to Find a Gym While Travelling | Kyro",
    description:
      "Learn how to find a gym while travelling, compare visitor access and avoid membership friction. Join Kyro for early flexible gym access.",
    ogTitle: "How to Find a Gym While Travelling | Kyro",
    ogDescription:
      "A practical guide for travellers, digital nomads and business visitors who want reliable gym access away from home.",
    twitterTitle: "How to Find a Gym While Travelling | Kyro",
    twitterDescription:
      "Find gyms while travelling without wasting hours on unclear visitor rules, memberships or local sign-up friction.",
    breadcrumbName: "How to Find a Gym While Travelling",
    heroBadge: "Traveller gym guide",
    h1: "How to Find a Gym While Travelling",
    heroText:
      "A practical guide to finding gym access away from home without wasting your trip on unclear visitor policies, long contracts or dead-end searches.",
    heroSupport:
      "Kyro is pre-launch and being built for travellers, digital nomads and business travellers who want flexible gym access wherever they go.",
    primaryCta: "Join the traveller waitlist",
    secondaryCta: "Explore London passes",
    introTitle: "The problem is not motivation. It is friction.",
    introParagraphs: [
      "Most people who care about training do not stop caring because they travel. They stop because finding a suitable gym becomes one more task in a trip that already has flights, meetings, check-ins, maps, luggage and time pressure. The workout gets pushed aside because the access problem is annoying, not because the routine stopped mattering.",
      "Finding a gym while travelling is a different problem from finding a gym at home. At home, you can compare memberships slowly. On a trip, you need a decision that works today. You need to know whether visitors are allowed, whether the location fits your route, whether the equipment is right, whether you can pay easily and whether the gym will still be open when you arrive.",
      "This guide gives you a practical way to make that decision. It is written for leisure travellers, digital nomads, business travellers and anyone who wants training to stay part of life on the road. Kyro's long-term goal is to make this process much simpler through flexible gym access, but the checklist below will help even before Kyro launches.",
    ],
    quickLinks: relatedGuideLinks.filter(
      (link) => link.href !== "/how-to-find-a-gym-while-travelling",
    ),
    sections: [
      {
        eyebrow: "Step one",
        title: "Start with your route, not the gym brand",
        paragraphs: [
          "When you are travelling, location usually beats reputation. A famous gym across the city may look tempting, but it can cost you an hour each way once you include transport, walking, waiting and getting changed. The best travel gym is normally the one that fits naturally around where you are already going.",
          "Map your real day first. Where are you sleeping? Where are your meetings, sights, coworking spaces or dinner plans? Which station or airport are you using? The right gym should sit inside that pattern. If training requires a completely separate journey, it becomes easier to skip when plans change.",
          "This is especially true in cities such as London, where distance on a map can be misleading. A gym near King's Cross might be perfect if you are arriving by train. A gym near Canary Wharf might be perfect for a work trip. A gym near your hotel may beat both if your schedule is tight. Think in routes, not just pins.",
        ],
      },
      {
        eyebrow: "Access rules",
        title: "Confirm whether visitors can actually train",
        paragraphs: [
          "The most common mistake is assuming that every gym with a website or map listing accepts visitors. Many gyms are built around memberships. Some offer day passes but only at certain times. Some require a trial form, an induction, a local payment method or advance booking. Others may allow visitors but make the process hard to understand online.",
          "Before you travel to the gym, look for clear wording such as day pass, guest pass, visitor access, drop-in, pay as you go or casual entry. If the website only talks about annual plans or joining fees, be careful. A quick call or message can save a wasted trip, especially if you are training on a tight schedule.",
          "Tourists should also check whether ID, a local phone number or app registration is needed. Digital nomads should ask about repeat short-term access. Business travellers should check whether non-members can enter during peak hours. The rules can change by location, even inside the same gym chain.",
        ],
      },
      {
        eyebrow: "Training fit",
        title: "Match the gym to the session you need",
        items: [
          {
            title: "Strength training",
            body: "Check free weights, racks, platforms, benches and peak-time crowding. A gym can look large online but still be poor for heavy sessions if the main strength area is small.",
          },
          {
            title: "Cardio and conditioning",
            body: "Look for treadmills, bikes, rowing machines, functional space and whether equipment is likely to be available at the time you train.",
          },
          {
            title: "Quick travel sessions",
            body: "Prioritise changing rooms, showers, lockers and distance from your route. A simple gym that is convenient can be better than a premium facility that steals half your day.",
          },
          {
            title: "Classes and recovery",
            body: "If you want classes, saunas or recovery areas, check whether day pass users can access them. Some facilities limit extras to members or require separate booking.",
          },
        ],
      },
      {
        eyebrow: "Traveller details",
        title: "Check the practical details people forget",
        paragraphs: [
          "Small details can decide whether a travel workout works. If you have luggage, ask whether lockers can hold it or whether reception can store it. If you are training before a flight or meeting, check shower access and towel rules. If you are visiting during a holiday period, confirm opening hours rather than trusting old listings.",
          "Payment also matters. Some gyms may not accept cash. Some may require online booking. Some may make you create an account before seeing prices. When you are in a new country, even a simple registration form can become friction if it expects local address formats or phone numbers.",
          "A good travel-gym process reduces uncertainty before you leave your accommodation. You should know where you are going, how you will get in, what it costs, what you can train and what you need to bring.",
        ],
        checklist: [
          "Visitor access confirmed before arrival",
          "Opening hours checked for the exact day",
          "Travel time from your real route, not just city centre",
          "Equipment matched to your planned session",
          "Showers, lockers and towels checked if needed",
          "Payment method and registration steps understood",
          "Peak-time restrictions checked",
          "Backup gym identified if your first choice falls through",
        ],
      },
      {
        eyebrow: "By traveller type",
        title: "Different travellers need different gym access",
        paragraphs: [
          "Leisure travellers usually need convenience. The gym should sit near the hotel, station or neighbourhood they are already exploring. A single session is often enough, so a long sign-up process makes no sense.",
          "Digital nomads need repeatability. They may stay long enough to train several times but not long enough to justify a full membership. They should look for flexible access near accommodation and coworking spaces, then build a routine that can survive changes in work schedule.",
          "Business travellers need speed and certainty. The best option is often close to the office district, hotel or transport hub. They should avoid any gym where visitor rules are vague, because a missed session window may not come back.",
        ],
      },
      {
        eyebrow: "Kyro approach",
        title: "How Kyro is being built to simplify travel gym access",
        paragraphs: [
          "Kyro exists because this process is still too fragmented. Travellers should not have to stitch together search results, old reviews, unclear gym websites and guesswork just to train for an hour. The long-term vision is simple: arrive somewhere, find a gym, access a pass and start training within minutes.",
          "Kyro is pre-launch, with London as the first launch market. The product is being built around flexible gym access rather than coaching, workout tracking or nutrition. That focus matters. The problem Kyro solves is access: finding a suitable place to train when you are away from your home gym.",
          "Until Kyro is live, use this guide as your decision framework. When Kyro launches, the goal is to make those decisions faster, clearer and more reliable for travellers, digital nomads and business visitors.",
        ],
      },
    ],
    ctaOne: {
      title: "Want an easier way to train while travelling?",
      text: "Join the Kyro waitlist for early access to flexible gym passes built around real travel routines.",
      button: "Join the waitlist",
    },
    ctaTwo: {
      title: "Keep your routine when your location changes",
      text: "Kyro is for travellers, digital nomads and business visitors who want gym access without long contracts or confusing visitor rules.",
    },
    faqs: [
      {
        question: "How do I find a gym while travelling?",
        answer:
          "Start by mapping your route, then check gyms near your hotel, station, office or coworking space. Confirm visitor access, price, opening hours, equipment and practical details before travelling there.",
      },
      {
        question: "Can tourists usually use gyms abroad?",
        answer:
          "Sometimes, but rules vary by country, city and gym. Some gyms offer day passes or visitor access, while others require memberships, local registration or advance booking.",
      },
      {
        question: "What should business travellers prioritise?",
        answer:
          "Business travellers should prioritise location, certainty and shower access. A convenient gym with clear visitor rules is usually better than a better-known gym that takes too long to reach.",
      },
      {
        question: "How can digital nomads build a gym routine?",
        answer:
          "Digital nomads should look for flexible access near accommodation and coworking spaces, then choose gyms that can support repeat sessions without a long-term contract.",
      },
      {
        question: "Is Kyro a workout app?",
        answer:
          "No. Kyro is focused on flexible gym access and gym discovery for travellers. It is not a coaching, workout tracking or nutrition platform.",
      },
      {
        question: "Is Kyro available now?",
        answer:
          "Kyro is currently pre-launch. Join the waitlist to receive early access updates as Kyro prepares to launch flexible gym passes, starting with London.",
      },
    ],
  },
  touristsLondon: {
    slug: "can-tourists-use-gyms-in-london",
    title: "Can Tourists Use Gyms in London? | Visitor Gym Access | Kyro",
    description:
      "Can tourists use gyms in London? Learn how visitor gym access works, what to check before training and how Kyro is preparing flexible access.",
    ogTitle: "Can Tourists Use Gyms in London? | Kyro",
    ogDescription:
      "A practical guide to London gym access for tourists, short-stay visitors, digital nomads and business travellers.",
    twitterTitle: "Can Tourists Use Gyms in London? | Kyro",
    twitterDescription:
      "Learn what tourists should check before using gyms in London and join Kyro for early flexible access updates.",
    breadcrumbName: "Can Tourists Use Gyms in London?",
    heroBadge: "London tourist access",
    h1: "Can Tourists Use Gyms in London?",
    heroText:
      "Yes, tourists can use some gyms in London, but visitor rules vary. This guide explains what to check before you train and how to avoid wasting time during a short stay.",
    heroSupport:
      "Kyro is pre-launch and preparing to launch in London first, with flexible gym access built for travellers, digital nomads and business visitors.",
    primaryCta: "Join the London waitlist",
    secondaryCta: "Read London day pass guide",
    introTitle: "Tourist gym access in London is possible, but it is not always obvious",
    introParagraphs: [
      "London has a huge fitness scene, but tourists do not always experience it smoothly. The city has gyms in central neighbourhoods, business districts, residential areas, hotels, leisure centres and transport corridors. The issue is not a lack of places to train. The issue is working out which ones will actually let a visitor in for a single session or short stay.",
      "Some London gyms offer day passes. Some offer trial visits. Some welcome guests at certain times. Others focus mainly on members and do not make casual access clear. A tourist might find a gym five minutes from the hotel, only to discover the pass needs advance booking, the price is not listed, or the facility requires a local registration step.",
      "This guide is for visitors who want a realistic answer before they waste part of their trip. It covers how tourist gym access usually works, what to check, which areas are useful and why Kyro is starting in London.",
    ],
    quickLinks: relatedGuideLinks.filter(
      (link) => link.href !== "/can-tourists-use-gyms-in-london",
    ),
    sections: [
      {
        eyebrow: "Short answer",
        title: "Yes, but every gym sets its own visitor rules",
        paragraphs: [
          "Tourists can use some gyms in London through day passes, guest passes, trial sessions, hotel partnerships or leisure-centre casual entry. The important phrase is some gyms. There is no single London-wide rule that guarantees visitor access everywhere. Each gym decides how it handles non-members.",
          "That means tourists should avoid assuming access from a map listing alone. A gym can appear open, nearby and highly rated while still requiring a membership. Another gym may allow visitors but only through a specific booking page. A third may sell day passes at reception but not advertise them clearly.",
          "The best approach is to confirm the basics before you go: can a tourist train there, what does it cost, do you need to book, do you need ID, and are there any time restrictions? Those five questions prevent most wasted journeys.",
        ],
      },
      {
        eyebrow: "Best areas",
        title: "Where tourists often look for gyms in London",
        paragraphs: [
          "The right area depends on where you are staying and how your trip is structured. Tourists in the West End may look around Soho, Covent Garden, Fitzrovia or Oxford Circus. Visitors near museums and west London hotels may search around South Kensington, Paddington or Victoria. People arriving by train may want King's Cross, London Bridge, Liverpool Street or Waterloo.",
          "Sightseeing plans matter too. If your day moves from a hotel to a museum to dinner, choose a gym that sits naturally between those points. If you are training on a travel day, look near the station or airport route. London is large enough that a gym across town can quietly consume the time you meant to spend training.",
          "For a broader breakdown of flexible access in the capital, use the London gym day passes guide. This tourist page focuses on visitor rules, while the London day pass page covers the wider city use case for travellers, business visitors and digital nomads.",
        ],
      },
      {
        eyebrow: "Common friction",
        title: "Why tourists struggle with London gym access",
        items: [
          {
            title: "Unclear pass availability",
            body: "Some gyms mention day passes clearly, while others bury visitor access inside trial forms or membership pages. Tourists may not know whether the option exists until they contact the gym.",
          },
          {
            title: "Short trip time pressure",
            body: "A local can try again tomorrow. A tourist may only have one free morning. If the first gym does not work, the session often disappears from the trip.",
          },
          {
            title: "Registration requirements",
            body: "Some gyms may ask for ID, waivers, app sign-up, local contact details or advance payment. None of these are impossible, but they add friction when you are away from home.",
          },
          {
            title: "Equipment uncertainty",
            body: "A visitor may not know whether the gym suits strength training, cardio, classes or a quick shower before sightseeing. Photos and old reviews do not always answer the practical questions.",
          },
        ],
      },
      {
        eyebrow: "Before you go",
        title: "What tourists should check before using a London gym",
        paragraphs: [
          "The safest move is to treat a gym visit like any other travel booking. Confirm the details while you still have options. If a gym is unclear about visitor access, have a backup nearby. If you need showers or lockers, check them specifically rather than assuming every gym includes them for day pass users.",
          "Tourists should also think about timing. London gyms can be busy before work, after work and around lunch in business areas. A facility that is perfect at 11am may feel crowded at 6pm. Opening hours can also change on weekends and bank holidays, which matters for short trips.",
        ],
        checklist: [
          "Day pass or visitor access is available to tourists",
          "The price is clear before you arrive",
          "Booking, app registration or ID requirements are understood",
          "Opening hours match your travel day",
          "Peak-time restrictions do not block your planned session",
          "The equipment matches the workout you want",
          "Showers, lockers and towels are available if needed",
          "The location fits your hotel, station or sightseeing route",
        ],
      },
      {
        eyebrow: "Traveller types",
        title: "Tourists, digital nomads and business visitors use gyms differently",
        paragraphs: [
          "A weekend tourist may only need one efficient session near the hotel. The priority is convenience. A gym twenty minutes away might still be too far if the day is already full of sightseeing, restaurants and transport.",
          "A digital nomad staying in London for several weeks needs something more repeatable. They may want access near a coworking space in Shoreditch, accommodation in south London or meetings around King's Cross. Flexibility matters because the routine is still forming.",
          "A business traveller may need certainty above everything else. The gym should be close to the office, hotel or transport route, and the visitor process should be clear. If a meeting runs late, there may not be time to solve access problems at reception.",
        ],
      },
      {
        eyebrow: "Kyro in London",
        title: "How Kyro will help London visitors",
        paragraphs: [
          "Kyro is being built to reduce the friction tourists face when they want to train away from home. The goal is not to turn Kyro into a workout planner. The goal is flexible gym access: helping people discover places to train, understand access options and keep their routine moving while travelling.",
          "London is the first launch market because it has the right mix of visitor demand, transport density, business travel and gym choice. Starting in one city also helps Kyro focus on quality before expanding wider. The UK hub explains how this can grow nationally, while the travel guide explains the process for finding gyms in any destination.",
          "For now, Kyro is pre-launch. Join the London waitlist if you want early access updates and launch news for flexible gym passes in the capital.",
        ],
      },
    ],
    ctaOne: {
      title: "Visiting London and want easier gym access?",
      text: "Join the Kyro waitlist for early access updates as flexible gym passes prepare to launch in London.",
      button: "Join the London waitlist",
    },
    ctaTwo: {
      title: "Spend less of your trip checking visitor rules",
      text: "Kyro is being built so tourists, digital nomads and business travellers can find flexible gym access with less friction.",
    },
    faqs: [
      {
        question: "Can tourists use gyms in London?",
        answer:
          "Yes, tourists can use some gyms in London, but access depends on the individual gym. Look for day passes, guest passes, casual entry or visitor access and confirm the rules before arriving.",
      },
      {
        question: "Do London gyms sell day passes to visitors?",
        answer:
          "Many gyms do, but not all. Availability, pricing, booking steps and peak-time restrictions vary by location, so it is worth checking before you travel to the gym.",
      },
      {
        question: "Do tourists need ID to use a London gym?",
        answer:
          "Some gyms may ask for ID, a waiver, app registration or payment details. Requirements vary, so check the visitor policy before you go.",
      },
      {
        question: "What is the best area for tourist gym access in London?",
        answer:
          "The best area is the one that fits your route. Common starting points include Soho, Covent Garden, King's Cross, London Bridge, Paddington, Victoria, Liverpool Street and South Kensington.",
      },
      {
        question: "Is Kyro already selling London gym passes?",
        answer:
          "Kyro is currently pre-launch and preparing to launch in London first. Join the waitlist to receive early access and launch updates.",
      },
      {
        question: "Where can I learn more about London gym day passes?",
        answer:
          "Read Kyro's London gym day passes guide for a broader overview of flexible gym access, useful areas and what to check before training in the capital.",
      },
    ],
  },
};

const iconSet = [Search, MapPin, ShieldCheck, Briefcase, Luggage, Compass];

const getFaqSchema = (faqs: FaqItem[]) => ({
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
});

const getBreadcrumbSchema = (page: SeoPageData) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://kyroapp.co/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: page.breadcrumbName,
      item: `https://kyroapp.co/${page.slug}`,
    },
  ],
});

const SeoContentPage = ({ page }: { page: SeoPageData }) => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{page.title}</title>
        <meta name="description" content={page.description} />
        <link rel="canonical" href={`https://kyroapp.co/${page.slug}`} />

        <meta property="og:title" content={page.ogTitle} />
        <meta property="og:description" content={page.ogDescription} />
        <meta property="og:url" content={`https://kyroapp.co/${page.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://kyroapp.co/og-image.png" />
        <meta property="og:site_name" content="Kyro" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@KyroAppOfficial" />
        <meta name="twitter:title" content={page.twitterTitle} />
        <meta name="twitter:description" content={page.twitterDescription} />
        <meta name="twitter:image" content="https://kyroapp.co/og-image.png" />

        <script type="application/ld+json">
          {JSON.stringify(getFaqSchema(page.faqs))}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(getBreadcrumbSchema(page))}
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
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                <Globe2 className="h-4 w-4 text-white" />
                <span className="text-sm font-semibold text-white">
                  {page.heroBadge}
                </span>
              </div>

              <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-white md:text-6xl">
                {page.h1}
              </h1>

              <p className="mb-6 text-lg text-white/85 md:text-xl">
                {page.heroText}
              </p>

              <p className="mb-8 max-w-2xl text-white/80">{page.heroSupport}</p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#waitlist"
                  className="inline-flex justify-center rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-elevated transition hover:opacity-90"
                >
                  {page.primaryCta}
                </a>
                <a
                  href={
                    page.slug === "can-tourists-use-gyms-in-london"
                      ? "/london-gym-day-passes"
                      : "/london-gym-day-passes"
                  }
                  className="inline-flex justify-center rounded-full border border-white/40 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  {page.secondaryCta}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="kyro-section bg-secondary/40">
          <div className="kyro-container">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-start">
              <div>
                <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-5xl">
                  {page.introTitle}
                </h2>
                <div className="space-y-5 text-lg text-muted-foreground">
                  {page.introParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-card p-6 shadow-soft">
                <h2 className="mb-5 font-display text-2xl font-bold">
                  Related Kyro guides
                </h2>
                <div className="space-y-3 text-muted-foreground">
                  {page.quickLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="block hover:text-primary"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {page.sections.map((section, sectionIndex) => {
          const Icon = iconSet[sectionIndex % iconSet.length];

          return (
            <section
              key={section.title}
              className={`kyro-section ${sectionIndex % 2 === 1 ? "bg-secondary/40" : ""}`}
            >
              <div className="kyro-container">
                <div className="mx-auto max-w-4xl">
                  {section.eyebrow && (
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
                      <Icon className="h-4 w-4 text-primary" />
                      <span className="text-sm font-semibold text-primary">
                        {section.eyebrow}
                      </span>
                    </div>
                  )}
                  <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-5xl">
                    {section.title}
                  </h2>
                  {section.intro && (
                    <p className="mb-8 text-lg text-muted-foreground">
                      {section.intro}
                    </p>
                  )}
                  {section.paragraphs && (
                    <div className="space-y-5 text-lg text-muted-foreground">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  )}
                  {section.items && (
                    <div className="mt-8 grid gap-5 md:grid-cols-2">
                      {section.items.map((item) => (
                        <div
                          key={item.title}
                          className="rounded-2xl bg-card p-6 shadow-soft"
                        >
                          <h3 className="mb-3 font-display text-xl font-bold">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground">{item.body}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {section.checklist && (
                    <div className="mt-8 rounded-2xl bg-card p-6 shadow-soft">
                      <h3 className="mb-5 font-display text-2xl font-bold">
                        Quick checklist
                      </h3>
                      <div className="grid gap-4 md:grid-cols-2">
                        {section.checklist.map((item) => (
                          <div key={item} className="flex gap-3">
                            <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                            <p className="text-muted-foreground">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          );
        })}

        <section className="kyro-section bg-primary text-primary-foreground">
          <div className="kyro-container">
            <div className="mx-auto max-w-3xl text-center">
              <Plane className="mx-auto mb-5 h-9 w-9" />
              <h2 className="mb-5 font-display text-3xl font-bold md:text-5xl">
                {page.ctaOne.title}
              </h2>
              <p className="mb-8 text-lg text-primary-foreground/80">
                {page.ctaOne.text}
              </p>
              <a
                href="#waitlist"
                className="inline-flex rounded-full bg-background px-6 py-3 font-semibold text-primary shadow-elevated transition hover:opacity-90"
              >
                {page.ctaOne.button}
              </a>
            </div>
          </div>
        </section>

        <section className="kyro-section">
          <div className="kyro-container">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 font-display text-3xl font-bold text-foreground md:text-5xl">
                Frequently asked questions
              </h2>
              <div className="space-y-6">
                {page.faqs.map((faq) => (
                  <div key={faq.question} className="border-b border-border pb-6">
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

        <section id="waitlist" className="kyro-section bg-secondary/40">
          <div className="kyro-container">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
                <Dumbbell className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">
                  Train Anywhere. Train Kyro.
                </span>
              </div>
              <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-5xl">
                {page.ctaTwo.title}
              </h2>
              <p className="mb-10 text-lg text-muted-foreground">
                {page.ctaTwo.text}
              </p>
              <div className="rounded-2xl bg-background p-6 shadow-elevated">
                <WaitlistForm variant="section" />
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                {page.quickLinks.map((link) => (
                  <a key={link.href} href={link.href} className="hover:text-primary">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export const GymDayPassesUk = () => <SeoContentPage page={pages.uk} />;

export const HowToFindAGymWhileTravelling = () => (
  <SeoContentPage page={pages.travel} />
);

export const CanTouristsUseGymsInLondon = () => (
  <SeoContentPage page={pages.touristsLondon} />
);
