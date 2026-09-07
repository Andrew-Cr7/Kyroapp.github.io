import WaitlistForm from "./WaitlistForm";
import heroGym from "@/assets/hero-gym.jpg";
import { Check, Globe2, MapPin, SlidersHorizontal, Users, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background pt-24 md:pt-28">
      <div className="kyro-container">
        <div className="grid items-center gap-10 py-12 lg:min-h-[680px] lg:grid-cols-[0.92fr_1.08fr] lg:gap-8 lg:py-14">
          <div className="max-w-[620px]">
            <div className="mb-7 inline-flex items-center rounded-full bg-secondary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Launching soon in London
            </div>

            <h1 className="font-display text-[52px] font-extrabold leading-[0.98] tracking-[-0.035em] text-primary sm:text-[64px] lg:text-[72px]">
              Train anywhere.
              <br />
              Train Kyro.
            </h1>

            <p className="mt-7 max-w-[600px] text-[20px] leading-[1.45] text-muted-foreground sm:text-[22px]">
              Find gyms. Compare facilities. Buy flexible passes.
              <br className="hidden sm:block" />
              No memberships. No calling around.
            </p>

            <div className="mt-9 max-w-[590px]">
              <WaitlistForm variant="hero" />
            </div>

            <div className="mt-5 flex flex-wrap gap-x-7 gap-y-3 text-sm text-muted-foreground">
              {["London launching first", "Founding member perks", "No spam"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-secondary/30 bg-secondary/10">
                    <Check className="h-3 w-3 text-secondary" />
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div
            className="relative mx-auto hidden h-[560px] w-full max-w-[670px] md:block"
            aria-label="Preview of the Kyro app using illustrative gyms"
          >
            <div className="absolute left-[1%] top-[74px] z-10 h-[445px] w-[220px] -rotate-[2deg] overflow-hidden rounded-[2.5rem] border-[7px] border-[#111815] bg-[#f7f9fb] shadow-[0_28px_65px_rgba(24,37,28,0.14)]">
              <div className="mx-auto mt-3 h-3 w-14 rounded-full bg-[#111815]" />
              <div className="p-3">
                <div className="flex items-center justify-between text-[8px] font-semibold text-primary">
                  <span>KYRO</span>
                  <span>London, UK</span>
                </div>
                <div className="mt-3 rounded-md border border-border bg-white px-2 py-2 text-[7px] text-muted-foreground">
                  Search gyms, cities or amenities...
                </div>
                <div className="mt-2 flex gap-1">
                  <span className="rounded-full bg-primary px-2 py-1 text-[7px] text-white">All</span>
                  <span className="rounded-full border border-border bg-white px-2 py-1 text-[7px]">Open Now</span>
                  <span className="rounded-full border border-border bg-white px-2 py-1 text-[7px]">Day Pass</span>
                </div>
                <div className="mt-3 rounded-lg bg-primary-container p-3 text-white">
                  <span className="rounded bg-secondary-fixed px-2 py-1 text-[7px] font-semibold text-primary">ACTIVE PASS</span>
                  <p className="mt-2 font-display text-[11px] font-semibold">Riverside Athletic Club</p>
                  <p className="mt-1 text-[7px] text-white/60">Full Club & Spa Access</p>
                </div>
                <div className="mb-2 mt-4 flex items-center justify-between">
                  <p className="font-display text-[13px] font-bold text-primary">Top Gyms Nearby</p>
                  <span className="text-[7px] text-secondary">See All</span>
                </div>
                <div className="overflow-hidden rounded-lg border border-border bg-white">
                  <div className="relative h-[104px] overflow-hidden">
                    <img src={heroGym} alt="Illustrative gym interior" className="h-full w-full object-cover" />
                    <span className="absolute bottom-2 left-2 rounded bg-primary/90 px-2 py-1 text-[7px] text-white">★ 4.8 · 0.8 mi</span>
                  </div>
                  <div className="p-2.5">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-display text-[10px] font-semibold leading-tight">Riverside Athletic Club</p>
                      <p className="whitespace-nowrap text-[9px] font-bold">£20 <span className="font-normal text-muted-foreground">/ day</span></p>
                    </div>
                    <p className="mt-1 text-[7px] text-muted-foreground">Premium gym with flexible access</p>
                    <div className="mt-2 flex gap-1">
                      {["Pool", "Sauna", "CrossFit"].map((tag) => (
                        <span key={tag} className="rounded bg-secondary/10 px-1.5 py-1 text-[6px] text-secondary">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute left-1/2 top-0 z-30 h-[535px] w-[250px] -translate-x-1/2 overflow-hidden rounded-[2.7rem] border-[7px] border-[#111815] bg-[#f7f9fb] shadow-[0_30px_70px_rgba(24,37,28,0.18)]">
              <div className="mx-auto mt-3 h-3 w-14 rounded-full bg-[#111815]" />
              <div className="p-3">
                <div className="flex items-center justify-between">
                  <span className="font-display text-[10px] font-bold text-primary">KYRO</span>
                  <span className="font-display text-[14px] font-semibold">Discover</span>
                  <span className="text-[9px]">♢</span>
                </div>
                <div className="mt-3 rounded-md bg-secondary/5 px-2 py-2 text-[7px] text-primary">● Discovering in London · 24 venues found</div>
                <div className="mt-3 rounded-xl bg-white p-3 shadow-sm">
                  <div className="flex items-center justify-between">
                    <p className="font-display text-[14px] font-bold">Filter Gyms</p>
                    <span className="rounded-full bg-secondary-fixed px-2 py-1 text-[7px] text-secondary">7 active</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between rounded-lg bg-background p-2.5">
                    <span className="flex items-center gap-2 text-[8px]"><Zap className="h-3.5 w-3.5" /> Open now</span>
                    <span className="h-4 w-8 rounded-full bg-primary p-0.5"><span className="block h-3 w-3 translate-x-4 rounded-full bg-white" /></span>
                  </div>
                  <p className="mb-2 mt-4 text-[8px] font-medium">Pass Type</p>
                  <div className="grid grid-cols-4 gap-1">
                    {["All Access", "Day Pass", "Week Pass", "Month Pass"].map((item, index) => (
                      <span key={item} className={`rounded-md px-1 py-2 text-center text-[7px] leading-tight ${index === 0 ? "bg-primary text-white" : "bg-background"}`}>
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between text-[8px]"><span>Price Range</span><span className="text-secondary">£15 – £60 / day</span></div>
                  <div className="mt-2 flex h-12 items-end gap-1">
                    {[12, 16, 22, 30, 36, 28, 22, 14].map((height, index) => (
                      <span key={index} className="flex-1 rounded-sm bg-secondary/55" style={{ height }} />
                    ))}
                  </div>
                  <div className="mt-1 h-1 rounded-full bg-border"><div className="ml-[25%] h-1 w-[45%] rounded-full bg-primary" /></div>
                  <div className="mt-5 space-y-2 border-t border-border pt-3">
                    <p className="flex items-center gap-2 text-[9px] font-semibold"><SlidersHorizontal className="h-3 w-3" /> Facilities</p>
                    {["Free weights", "Cardio equipment", "Functional training", "Sauna"].map((item, index) => (
                      <div key={item} className="flex items-center justify-between text-[8px]">
                        <span>{item}</span>
                        <span className={`h-3.5 w-6 rounded-full ${index === 2 ? "bg-border" : "bg-primary"}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-3 left-3 right-3 rounded-md bg-primary py-2.5 text-center text-[9px] font-semibold text-white">Show 24 Gyms</div>
            </div>

            <div className="absolute right-[1%] top-[78px] z-20 h-[440px] w-[220px] rotate-[2deg] overflow-hidden rounded-[2.5rem] border-[7px] border-[#111815] bg-[#f7f9fb] shadow-[0_28px_65px_rgba(24,37,28,0.14)]">
              <div className="mx-auto mt-3 h-3 w-14 rounded-full bg-[#111815]" />
              <div className="p-3">
                <div className="relative h-[155px] overflow-hidden rounded-lg">
                  <img src={heroGym} alt="Illustrative gym interior" className="h-full w-full object-cover" />
                  <span className="absolute bottom-3 left-3 rounded bg-primary/90 px-2 py-1 text-[7px] text-white">0.8 mi · London</span>
                </div>
                <div className="pt-3">
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-display text-[12px] font-bold leading-tight">Riverside Athletic Club</p>
                    <p className="whitespace-nowrap text-[10px] font-bold">£20 <span className="text-[7px] font-normal">/ day</span></p>
                  </div>
                  <p className="mt-2 text-[7px] leading-relaxed text-muted-foreground">Premium gym with extensive facilities and flexible access.</p>
                  <div className="mt-3 flex gap-1">
                    {["Pool", "Sauna", "CrossFit"].map((tag) => (
                      <span key={tag} className="rounded bg-secondary/10 px-2 py-1 text-[6px]">{tag}</span>
                    ))}
                  </div>
                  <button className="mt-4 w-full rounded-md bg-primary py-2.5 text-[8px] font-semibold text-white">Book Pass →</button>
                  <div className="mt-4 border-t border-border pt-3">
                    <p className="text-[8px] font-semibold">About</p>
                    <p className="mt-2 text-[7px] leading-relaxed text-muted-foreground">A modern training facility with quality equipment, recovery amenities and a welcoming community.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm md:hidden">
            <div className="overflow-hidden rounded-[2.4rem] border-[7px] border-[#111815] bg-[#f7f9fb] shadow-[0_24px_55px_rgba(24,37,28,0.15)]">
              <div className="mx-auto mt-3 h-3 w-14 rounded-full bg-[#111815]" />
              <div className="p-4">
                <div className="flex items-center justify-between"><span className="font-display text-xs font-bold text-primary">KYRO</span><span className="font-display text-sm font-semibold">Discover</span><MapPin className="h-3 w-3" /></div>
                <div className="mt-4 overflow-hidden rounded-xl border border-border bg-white">
                  <img src={heroGym} alt="Illustrative gym interior" className="h-44 w-full object-cover" />
                  <div className="p-4"><p className="font-display text-lg font-bold">Riverside Athletic Club</p><p className="mt-1 text-sm text-muted-foreground">Flexible day passes in London</p><button className="mt-4 w-full rounded-lg bg-primary py-3 text-sm font-semibold text-white">View Passes</button></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 border-t border-border py-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { Icon: Globe2, title: "Built for travellers", text: "Train in new cities with ease" },
            { Icon: Zap, title: "Flexible access", text: "Day, week or month passes" },
            { Icon: MapPin, title: "London first", text: "More cities coming soon" },
            { Icon: Users, title: "A stronger you", text: "Wherever you go" },
          ].map(({ Icon, title, text }) => (
            <div key={title} className="flex items-center gap-4">
              <Icon className="h-8 w-8 shrink-0 text-primary/65" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">{title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
