import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";
import {
  Briefcase,
  CheckCircle,
  Clock,
  Coffee,
  Dumbbell,
  MapPin,
  Plane,
  Search,
  ShieldCheck,
  Train,
} from "lucide-react";
import heroGym from "@/assets/hero-gym.jpg";

const faqs = [
  {
    question: "Can tourists use gyms in London?",
    answer:
      "Yes, some gyms in London offer visitor access or day passes, but the rules vary by gym. Travellers often need to check each gym's website, call ahead or confirm whether short-term access is available before arriving.",
  },
  {
    question: "Do London gyms offer day passes?",
    answer:
      "Many London gyms do offer day passes, trial passes or short-term access, although availability, price and sign-up steps are not always clear online. Kyro is being built to make those options easier to discover when it launches.",
  },
  {
    question: "Is Kyro live in London yet?",
    answer:
      "Kyro is currently pre-launch and preparing to launch in London first. Join the London waitlist to be notified when flexible gym access becomes available.",
  },
  {
    question: "Where should I look for gyms near central London?",
    answer:
      "For many visitors, useful areas include Soho, Covent Garden, Fitzrovia, King's Cross, Shoreditch, London Bridge, Canary Wharf and South Kensington. The best area depends on where you are staying, working and travelling through.",
  },
  {
    question: "Are there gyms near London train stations?",
    answer:
      "Yes, London has gyms near major transport areas such as King's Cross St Pancras, Liverpool Street, Paddington, London Bridge, Waterloo and Victoria. Always check visitor access, opening hours and peak-time rules before travelling there.",
  },
  {
    question: "Can business travellers find gyms in London without a membership?",
    answer:
      "Business travellers can often find short-term gym access in London, especially around commercial areas and transport hubs. The challenge is comparing options quickly when time is limited between meetings, hotels and travel.",
  },
  {
    question: "Is a London gym day pass better than a hotel gym?",
    answer:
      "It depends on your training needs. Hotel gyms can be convenient, but many are small or limited. A gym day pass can be useful if you want heavier weights, more equipment, classes, functional training space or a better training environment.",
  },
  {
    question: "What should I check before buying a gym day pass in London?",
    answer:
      "Check the gym's location, opening hours, visitor policy, equipment, changing facilities, towel rules, peak-time restrictions, payment requirements and whether you need ID or advance registration.",
  },
  {
    question: "Will Kyro only operate in London?",
    answer:
      "No. London is Kyro's first launch market, but Kyro is built for travellers worldwide. The long-term vision is flexible gym access in cities around the world.",
  },
  {
    question: "How do I get early access to Kyro in London?",
    answer:
      "Join the London waitlist with your email address. You will be among the first to hear when Kyro launches flexible gym passes in London.",
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

const breadcrumbSchema = {
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
      name: "Gym Day Passes in London",
      item: "https://kyroapp.co/london-gym-day-passes",
    },
  ],
};

const londonAreas = [
  {
    title: "King's Cross and St Pancras",
    text: "A strong choice if you are arriving by train, staying near the Eurostar or moving between north and central London. It is practical for quick sessions before check-in, after work or between onward travel.",
  },
  {
    title: "Soho, Fitzrovia and Covent Garden",
    text: "Useful for visitors staying in the West End, people working from central offices and travellers who want a gym close to hotels, shops, restaurants and theatres.",
  },
  {
    title: "Shoreditch and Liverpool Street",
    text: "Popular with remote workers, founders and business travellers. This area can work well if your day is split between coworking spaces, meetings and East London hotels.",
  },
  {
    title: "London Bridge and South Bank",
    text: "Good for people staying south of the river or moving between Borough, Waterloo, Blackfriars and the City. It is also convenient for training around sightseeing plans.",
  },
  {
    title: "Canary Wharf",
    text: "A practical area for finance, consulting and corporate travel. If you are in London for meetings, a nearby gym can make early morning or evening training much easier.",
  },
  {
    title: "Paddington, Victoria and Kensington",
    text: "Helpful for travellers near Heathrow rail links, coach routes, museums and west London hotels. These areas suit short stays where you do not want to cross the city just to train.",
  },
];

const checklist = [
  "Visitor access rules and whether a day pass is available",
  "Opening hours, weekend hours and bank holiday changes",
  "Distance from your hotel, office, station or coworking space",
  "Equipment that matches your training style",
  "Changing rooms, showers, lockers and towel requirements",
  "Peak-time restrictions or class booking rules",
  "Whether ID, a local phone number or advance registration is needed",
  "Clear pricing before you travel to the gym",
];

const LondonGymDayPasses = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Gym Day Passes in London | Flexible Gym Access | Kyro</title>

        <meta
          name="description"
          content="Looking for a gym day pass in London? Join Kyro for flexible gym access built for travellers, digital nomads and visitors. Train Anywhere. Train Kyro."
        />

        <link rel="canonical" href="https://kyroapp.co/london-gym-day-passes" />

        <meta
          property="og:title"
          content="Gym Day Passes in London | Flexible Gym Access | Kyro"
        />
        <meta
          property="og:description"
          content="Find flexible gym access in London without long-term memberships. Join the Kyro waitlist for early access when London launches."
        />
        <meta property="og:url" content="https://kyroapp.co/london-gym-day-passes" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://kyroapp.co/og-image.png" />
        <meta property="og:site_name" content="Kyro" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@KyroAppOfficial" />
        <meta
          name="twitter:title"
          content="Gym Day Passes in London | Flexible Gym Access | Kyro"
        />
        <meta
          name="twitter:description"
          content="Join the London waitlist for flexible gym passes built for travellers, digital nomads and business visitors."
        />
        <meta name="twitter:image" content="https://kyroapp.co/og-image.png" />

        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
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
                <MapPin className="h-4 w-4 text-white" />
                <span className="text-sm font-semibold text-white">
                  Launching in London first
                </span>
              </div>

              <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-white md:text-6xl">
                Gym Day Passes in London
              </h1>

              <p className="mb-6 text-lg text-white/85 md:text-xl">
                Flexible gym access for travellers, digital nomads, business
                travellers and visitors who want to train in London without a
                long-term membership.
              </p>

              <p className="mb-8 max-w-2xl text-white/80">
                Kyro is pre-launch and preparing to open in London first. Join
                the waitlist to be first to access flexible gym passes when Kyro
                launches.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#waitlist"
                  className="inline-flex justify-center rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-elevated transition hover:opacity-90"
                >
                  Join the London waitlist
                </a>
                <a
                  href="/"
                  className="inline-flex justify-center rounded-full border border-white/40 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  Explore Kyro
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="kyro-section bg-secondary/40">
          <div className="kyro-container">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-5xl">
                  Gym day passes in London should be simple
                </h2>

                <div className="space-y-5 text-lg text-muted-foreground">
                  <p>
                    London is one of the world's busiest travel cities. People
                    arrive for weekend trips, work projects, conferences, study
                    periods, concerts, football matches, exhibitions and longer
                    remote-work stays. For anyone who trains regularly, the
                    question comes up quickly: where can I find a good gym in
                    London without signing a contract?
                  </p>
                  <p>
                    A gym day pass is useful because it matches how travellers
                    actually move through the city. You may only need one
                    session near your hotel in Shoreditch, a proper weights room
                    near King's Cross before catching a train, or a facility
                    close to Canary Wharf after a day of meetings. You should
                    not have to commit to a full membership just to keep your
                    routine alive for a short stay.
                  </p>
                  <p>
                    Kyro is being built around that problem. London is the first
                    launch market, and the goal is to make it easier to discover
                    flexible gym access before the friction makes you skip the
                    workout altogether.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-card p-6 shadow-soft">
                <h3 className="mb-4 font-display text-2xl font-bold">
                  On this London guide
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <a href="#why-travellers-struggle" className="block hover:text-primary">
                    Why travellers struggle to find gyms in London
                  </a>
                  <a href="#best-areas" className="block hover:text-primary">
                    Best London areas for gym access
                  </a>
                  <a href="#travel-hubs" className="block hover:text-primary">
                    Gyms near major travel hubs
                  </a>
                  <a href="#business-travel" className="block hover:text-primary">
                    Business travellers training in London
                  </a>
                  <a href="#digital-nomads" className="block hover:text-primary">
                    Digital nomads staying in London
                  </a>
                  <a href="#checklist" className="block hover:text-primary">
                    What to check before buying a day pass
                  </a>
                  <a href="/gym-day-passes-uk" className="block hover:text-primary">
                    UK gym day passes guide
                  </a>
                  <a
                    href="/can-tourists-use-gyms-in-london"
                    className="block hover:text-primary"
                  >
                    Tourist gym access in London
                  </a>
                  <a
                    href="/how-to-find-a-gym-while-travelling"
                    className="block hover:text-primary"
                  >
                    How to find a gym while travelling
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="why-travellers-struggle" className="kyro-section">
          <div className="kyro-container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-5xl">
                Why travellers struggle to find gyms in London
              </h2>
              <p className="text-lg text-muted-foreground">
                London has no shortage of gyms. The challenge is knowing which
                ones are realistic for a visitor, which ones offer short-term
                access and which ones are close enough to fit around your day.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: Search,
                  title: "Too much manual research",
                  text: "Travellers often end up searching Google Maps, checking individual websites, reading old forum posts and calling reception desks just to confirm whether a day pass exists.",
                },
                {
                  icon: Clock,
                  title: "London time pressure",
                  text: "A short trip leaves little room for trial and error. If the gym is too far away, too busy or closed at the wrong time, the session disappears from the day.",
                },
                {
                  icon: ShieldCheck,
                  title: "Unclear visitor policies",
                  text: "Some gyms welcome visitors, some require sign-up steps, and others focus mainly on members. Pricing, ID rules and access limits can be hard to compare from outside the city.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl bg-card p-6 shadow-soft">
                  <item.icon className="mb-4 h-8 w-8 text-primary" />
                  <h3 className="mb-3 font-display text-xl font-bold">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="best-areas" className="kyro-section bg-secondary/40">
          <div className="kyro-container">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-5xl">
                Best London areas for gym access
              </h2>
              <p className="mb-10 text-lg text-muted-foreground">
                The best place to train in London is rarely just the nearest gym
                on a map. It is the gym that sits naturally inside your route:
                near your hotel, close to your office, next to your coworking
                space or on the way to a station. These areas are often useful
                starting points for visitors looking for flexible gym access.
              </p>

              <div className="grid gap-5 md:grid-cols-2">
                {londonAreas.map((area) => (
                  <div key={area.title} className="rounded-2xl bg-card p-6 shadow-soft">
                    <h3 className="mb-3 font-display text-xl font-bold">
                      {area.title}
                    </h3>
                    <p className="text-muted-foreground">{area.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="travel-hubs" className="kyro-section">
          <div className="kyro-container">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-start">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
                  <Train className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">
                    London travel hubs
                  </span>
                </div>
                <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-5xl">
                  Gyms near major London stations and travel routes
                </h2>
                <p className="text-lg text-muted-foreground">
                  London travel plans often revolve around stations, airports
                  and underground lines. If you are training on a travel day,
                  convenience matters as much as equipment. A gym that is ten
                  minutes from your route can be more useful than a better-known
                  gym across the city.
                </p>
              </div>

              <div className="space-y-5 text-muted-foreground">
                <p>
                  King's Cross St Pancras is useful for Eurostar arrivals,
                  domestic rail links and visitors staying around Bloomsbury,
                  Camden or Angel. Paddington matters for many Heathrow journeys.
                  Victoria works for coach routes, Gatwick links and west London
                  hotels. Liverpool Street connects the City, Shoreditch and
                  Stansted routes. London Bridge and Waterloo help visitors
                  moving between the South Bank, the City and south London.
                </p>
                <p>
                  When choosing a gym near a hub, check the details before you
                  travel there. Does the gym allow visitors at the time you want
                  to train? Are showers and lockers available? Can you bring a
                  suitcase, or will luggage be an issue? Do you need to register
                  before arrival? These details can decide whether a session
                  fits smoothly into the day or becomes another piece of travel
                  admin.
                </p>
                <p>
                  Kyro's long-term aim is to make this easier by helping users
                  compare flexible gym access around the places they already
                  move through, starting with London.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="kyro-section bg-secondary/40">
          <div className="kyro-container">
            <div className="grid gap-6 md:grid-cols-3">
              <div id="business-travel" className="rounded-2xl bg-card p-6 shadow-soft">
                <Briefcase className="mb-4 h-8 w-8 text-primary" />
                <h2 className="mb-4 font-display text-2xl font-bold">
                  Business travellers training in London
                </h2>
                <p className="text-muted-foreground">
                  Work trips are often packed with meetings, dinners and travel
                  between offices. Hotel gyms can help, but they are not always
                  enough for strength training, longer sessions or specific
                  equipment needs. A good London gym day pass can make training
                  possible before the first meeting, between commitments or
                  after the workday ends. Areas such as Canary Wharf, the City,
                  London Bridge, King's Cross and Victoria are especially useful
                  because they sit close to common business routes.
                </p>
              </div>

              <div id="digital-nomads" className="rounded-2xl bg-card p-6 shadow-soft">
                <Coffee className="mb-4 h-8 w-8 text-primary" />
                <h2 className="mb-4 font-display text-2xl font-bold">
                  Digital nomads staying in London
                </h2>
                <p className="text-muted-foreground">
                  Remote workers often stay in London for several weeks rather
                  than a single weekend. The problem is consistency. You may
                  work from a coworking space in Shoreditch one day, a cafe in
                  Fitzrovia the next and a short-term apartment in South London
                  at night. Flexible gym access helps you build a routine around
                  where you actually spend time, without forcing a long contract
                  before you know the city.
                </p>
              </div>

              <div className="rounded-2xl bg-card p-6 shadow-soft">
                <Plane className="mb-4 h-8 w-8 text-primary" />
                <h2 className="mb-4 font-display text-2xl font-bold">
                  Visitors and short-stay travellers
                </h2>
                <p className="text-muted-foreground">
                  London weekends can fill quickly: museums, shows, restaurants,
                  shopping, football, family visits and late trains home. For
                  short stays, the best gym is usually the one that removes
                  friction. A day pass near your hotel or station can help you
                  keep your routine without turning training into the main event
                  of the trip.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="checklist" className="kyro-section">
          <div className="kyro-container">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
              <div>
                <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-5xl">
                  What to check before buying a London gym day pass
                </h2>
                <div className="space-y-5 text-lg text-muted-foreground">
                  <p>
                    A gym day pass should save time, not create another problem.
                    Before you commit to a session, make sure the gym matches
                    the way you actually train. A powerlifter, a runner needing
                    a treadmill, a traveller wanting a quick shower and a remote
                    worker looking for an evening class may all need different
                    facilities.
                  </p>
                  <p>
                    London also rewards planning. Distances can look small on a
                    map but take longer than expected once you include walking,
                    tube changes, luggage and peak-time crowds. If you are only
                    in the city for a day or two, choose convenience first.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-card p-6 shadow-soft">
                <h3 className="mb-5 font-display text-2xl font-bold">
                  Day pass checklist
                </h3>
                <div className="space-y-4">
                  {checklist.map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <p className="text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="kyro-section bg-secondary/40">
          <div className="kyro-container">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-5xl">
                How Kyro will help London travellers train consistently
              </h2>
              <p className="mb-10 text-lg text-muted-foreground">
                Kyro is a pre-launch marketplace for flexible gym access. The
                first focus is London, with a wider vision to help travellers
                worldwide find places to train without long-term commitments.
                The goal is simple: less searching, more training.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: MapPin,
                  title: "Discover gyms around your trip",
                  text: "Find gym options around the areas that matter to your stay: hotels, offices, stations, coworking spaces and neighbourhoods you are already visiting.",
                },
                {
                  icon: Dumbbell,
                  title: "Compare useful training details",
                  text: "Kyro is being built to make it easier to understand facilities, access options and location details before you spend time travelling to a gym.",
                },
                {
                  icon: Clock,
                  title: "Join before London launches",
                  text: "Join the waitlist now and be first to access flexible gym passes when Kyro launches in London.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl bg-card p-6 shadow-soft">
                  <item.icon className="mb-4 h-8 w-8 text-primary" />
                  <h3 className="mb-3 font-display text-xl font-bold">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href="#waitlist"
                className="inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-elevated transition hover:opacity-90"
              >
                Get early access
              </a>
            </div>
          </div>
        </section>

        <section className="kyro-section">
          <div className="kyro-container">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 font-display text-3xl font-bold text-foreground md:text-5xl">
                Frequently asked questions
              </h2>

              <div className="space-y-6">
                {faqs.map((faq) => (
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

        <section id="waitlist" className="kyro-section bg-primary text-primary-foreground">
          <div className="kyro-container">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                <Dumbbell className="h-4 w-4 text-primary-foreground" />
                <span className="text-sm font-semibold">
                  Train Anywhere. Train Kyro.
                </span>
              </div>
              <h2 className="mb-6 font-display text-3xl font-bold md:text-5xl">
                Be first to access flexible gym passes when Kyro launches in London
              </h2>
              <p className="mb-10 text-lg text-primary-foreground/80">
                Join the London waitlist for early access updates, launch news
                and practical travel fitness guidance as Kyro prepares to go
                live.
              </p>
              <div className="rounded-2xl bg-background p-6 shadow-elevated">
                <WaitlistForm variant="section" />
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/75">
                <a href="/" className="hover:text-primary-foreground">
                  Kyro homepage
                </a>
                <a
                  href="/gym-day-passes-uk"
                  className="hover:text-primary-foreground"
                >
                  UK gym day passes
                </a>
                <a
                  href="/can-tourists-use-gyms-in-london"
                  className="hover:text-primary-foreground"
                >
                  Tourist gyms in London
                </a>
                <a
                  href="/how-to-find-a-gym-while-travelling"
                  className="hover:text-primary-foreground"
                >
                  Find gyms while travelling
                </a>
                <a href="/for-gyms" className="hover:text-primary-foreground">
                  For London gyms
                </a>
                <span>Built for travellers worldwide</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LondonGymDayPasses;
