import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import WaitlistCTA from "@/components/WaitlistCTA";
import Footer from "@/components/Footer";
import {
  MapPin,
  Dumbbell,
  Plane,
  Briefcase,
  Clock,
  CheckCircle,
} from "lucide-react";
import heroGym from "@/assets/hero-gym.jpg";

const LondonGymDayPasses = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>London Gym Day Passes | Flexible Gym Access with Kyro</title>
        <meta
          name="description"
          content="Find London gym day passes and flexible gym access without long-term memberships. Kyro helps travellers, digital nomads and visitors train while in London."
        />
        <link rel="canonical" href="https://kyroapp.co/london-gym-day-passes" />

        <meta
          property="og:title"
          content="London Gym Day Passes | Flexible Gym Access with Kyro"
        />
        <meta
          property="og:description"
          content="Find flexible gym day passes in London without long-term memberships. Join the Kyro waitlist for early access."
        />
        <meta
          property="og:url"
          content="https://kyroapp.co/london-gym-day-passes"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={heroGym} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="London Gym Day Passes | Flexible Gym Access with Kyro"
        />
        <meta
          name="twitter:description"
          content="Find flexible gym day passes in London without long-term memberships. Join the Kyro waitlist for early access."
        />
        <meta name="twitter:image" content={heroGym} />
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
                  London Launch Coming Soon
                </span>
              </div>

              <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-white md:text-6xl">
                London gym day passes without long-term memberships
              </h1>

              <p className="mb-6 text-lg text-white/85 md:text-xl">
                Kyro helps travellers, digital nomads and visitors find flexible
                gym access in London through day, week and month passes.
              </p>

              <p className="mb-8 max-w-2xl text-white/80">
                No annual contracts. No complicated sign-up process. Just a
                simpler way to train while you are in the city.
              </p>

              <a
                href="#waitlist"
                className="inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-elevated transition hover:opacity-90"
              >
                Join the London waitlist
              </a>
            </div>
          </div>
        </section>

        <section className="kyro-section bg-secondary/40">
          <div className="kyro-container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-5xl">
                Finding a gym in London should not take hours
              </h2>

              <p className="text-lg text-muted-foreground">
                London has plenty of gyms, but finding one that offers short-term
                access can still be frustrating. Many gyms focus on memberships,
                contracts or joining fees, which often makes no sense if you are
                only visiting for a few days or weeks.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-card p-6 shadow-soft">
                <Clock className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-3 font-display text-xl font-bold">
                  Save time searching
                </h3>
                <p className="text-muted-foreground">
                  Stop checking individual gym websites, calling reception desks
                  or trying to work out visitor rules manually.
                </p>
              </div>

              <div className="rounded-2xl bg-card p-6 shadow-soft">
                <Dumbbell className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-3 font-display text-xl font-bold">
                  Train without contracts
                </h3>
                <p className="text-muted-foreground">
                  Access gyms through flexible passes instead of committing to
                  long-term memberships you do not need.
                </p>
              </div>

              <div className="rounded-2xl bg-card p-6 shadow-soft">
                <MapPin className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-3 font-display text-xl font-bold">
                  Built for London visitors
                </h3>
                <p className="text-muted-foreground">
                  Designed for people travelling, working remotely, studying or
                  staying temporarily in London.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="kyro-section">
          <div className="kyro-container">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 font-display text-3xl font-bold text-foreground md:text-5xl">
                Who are London gym day passes for?
              </h2>

              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    icon: Plane,
                    title: "Travellers",
                    text: "For people visiting London who want to keep training without buying a full membership.",
                  },
                  {
                    icon: Briefcase,
                    title: "Business travellers",
                    text: "For professionals in London for meetings, projects or short work trips.",
                  },
                  {
                    icon: Clock,
                    title: "Digital nomads",
                    text: "For remote workers who want flexible gym access while living and working from different cities.",
                  },
                  {
                    icon: Dumbbell,
                    title: "Gym-goers who want flexibility",
                    text: "For anyone who wants access without being locked into one gym or one contract.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-card p-6 shadow-soft"
                  >
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

        <section className="kyro-section bg-secondary/40">
          <div className="kyro-container">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-5xl">
                Flexible gym passes instead of traditional memberships
              </h2>

              <p className="mb-6 text-lg text-muted-foreground">
                Traditional gym memberships are built for people staying in one
                place. Kyro is being built for people who move.
              </p>

              <div className="space-y-4">
                {[
                  "Day passes for one-off sessions",
                  "Week passes for short trips",
                  "Month passes for longer stays",
                  "No long-term commitment",
                  "A simpler way to train while travelling",
                ].map((benefit) => (
                  <div key={benefit} className="flex gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <p className="text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
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
                <div>
                  <h3 className="mb-2 font-display text-xl font-bold">
                    What is a gym day pass?
                  </h3>
                  <p className="text-muted-foreground">
                    A gym day pass gives temporary access to a gym for a single
                    day without requiring a long-term membership.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-display text-xl font-bold">
                    Is Kyro live in London yet?
                  </h3>
                  <p className="text-muted-foreground">
                    Kyro is preparing for launch and onboarding gyms. Join the
                    waitlist to be notified when London access becomes available.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-display text-xl font-bold">
                    Will Kyro only operate in London?
                  </h3>
                  <p className="text-muted-foreground">
                    No. London is one of the first launch markets, but Kyro is
                    being built for travellers who want gym access around the
                    world.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-display text-xl font-bold">
                    Who is Kyro for?
                  </h3>
                  <p className="text-muted-foreground">
                    Kyro is for travellers, digital nomads, remote workers,
                    business travellers, students and anyone who wants flexible
                    gym access without long-term contracts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WaitlistCTA />
      </main>

      <Footer />
    </div>
  );
};

export default LondonGymDayPasses;
