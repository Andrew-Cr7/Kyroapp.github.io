import WaitlistForm from "./WaitlistForm";
import { Check, Dumbbell, Globe2, MapPin, SlidersHorizontal, Users, Zap } from "lucide-react";

const GymCard = ({ name, price, distance }: { name: string; price: string; distance: string }) => (
  <div className="overflow-hidden rounded-lg border border-border bg-white">
    <div className="relative h-20 bg-gradient-to-br from-primary-container via-primary to-secondary">
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <Dumbbell className="h-10 w-10 text-white" />
      </div>
      <span className="absolute bottom-2 left-2 rounded bg-primary/90 px-2 py-1 text-[8px] text-white">★ 4.8 · {distance}</span>
    </div>
    <div className="p-2.5">
      <div className="flex items-start justify-between gap-2">
        <p className="font-display text-[11px] font-semibold leading-tight text-foreground">{name}</p>
        <p className="whitespace-nowrap text-[10px] font-bold text-foreground">{price}<span className="font-normal text-muted-foreground"> / day</span></p>
      </div>
      <div className="mt-2 flex gap-1">
        {["Pool", "Sauna", "Weights"].map((item) => <span key={item} className="rounded bg-secondary/15 px-1.5 py-1 text-[7px] text-secondary">{item}</span>)}
      </div>
    </div>
  </div>
);

const PhoneShell = ({ className = "", children }: { className?: string; children: React.ReactNode }) => (
  <div className={`rounded-[2.4rem] border-[7px] border-[#101512] bg-[#f7f9fb] p-2 shadow-[0_30px_70px_rgba(24,37,28,0.18)] ${className}`}>
    <div className="mx-auto mb-2 h-3 w-14 rounded-full bg-[#101512]" />
    {children}
  </div>
);

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background pt-24 md:pt-28">
      <div className="kyro-container relative z-10">
        <div className="grid min-h-[690px] items-center gap-14 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 lg:py-16">
          <div className="max-w-2xl">
            <div className="mb-7 inline-flex items-center rounded-full bg-secondary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
              Launching soon in London
            </div>

            <h1 className="font-display text-5xl font-extrabold leading-[1.04] tracking-tight text-primary md:text-6xl lg:text-7xl">
              Train anywhere.<br />Train Kyro.
            </h1>

            <p className="mt-7 max-w-xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
              Find gyms. Compare facilities. Buy flexible passes.<br className="hidden sm:block" /> No memberships. No calling around.
            </p>

            <div className="mt-9 max-w-xl">
              <WaitlistForm variant="hero" />
            </div>

            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
              {["London launching first", "Founding member perks", "No spam"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-secondary/40 bg-secondary/10"><Check className="h-3 w-3 text-secondary" /></span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto hidden h-[570px] w-full max-w-[700px] md:block" aria-label="Preview of the Kyro app using illustrative gyms">
            <PhoneShell className="absolute left-[2%] top-[90px] z-10 h-[430px] w-[210px] -rotate-2">
              <div className="flex items-center justify-between px-1 text-[8px] font-semibold text-primary"><span>KYRO</span><span>London, UK</span></div>
              <div className="mt-3 flex h-8 items-center gap-2 rounded-md border border-border bg-white px-2 text-[8px] text-muted-foreground">⌕ Search gyms, cities or amenities...</div>
              <div className="mt-2 flex gap-1 overflow-hidden">{["All", "Open Now", "Day Pass"].map((x,i)=><span key={x} className={`whitespace-nowrap rounded-full px-2 py-1 text-[7px] ${i===0?"bg-primary text-white":"border border-border bg-white"}`}>{x}</span>)}</div>
              <div className="mt-3 rounded-lg bg-primary-container p-3 text-white"><span className="rounded bg-secondary-fixed px-2 py-1 text-[7px] font-semibold text-primary">ACTIVE PASS</span><p className="mt-2 font-display text-xs font-semibold">Riverside Athletic Club</p><p className="mt-1 text-[7px] text-white/60">Expires in 4 hours</p></div>
              <p className="mb-2 mt-4 font-display text-sm font-bold text-primary">Top Gyms Nearby</p>
              <GymCard name="Riverside Athletic Club" price="£20" distance="0.8 mi" />
              <div className="mt-2"><GymCard name="Northbank Training Club" price="£18" distance="1.4 mi" /></div>
            </PhoneShell>

            <PhoneShell className="absolute left-[31%] top-[20px] z-30 h-[535px] w-[240px]">
              <div className="flex items-center justify-between px-1"><span className="font-display text-xs font-bold text-primary">KYRO</span><span className="font-display text-sm font-semibold">Discover</span><span className="text-[9px]">♢</span></div>
              <div className="mt-3 rounded-md bg-secondary/5 p-2 text-[8px] text-primary">● Discovering in London · 24 venues found</div>
              <div className="mt-3 rounded-lg bg-white p-3 shadow-sm">
                <div className="flex items-center justify-between"><p className="font-display text-sm font-bold">Filter Gyms</p><span className="rounded-full bg-secondary-fixed px-2 py-1 text-[7px] text-secondary">7 active</span></div>
                <div className="mt-3 flex items-center justify-between rounded-md bg-background p-2"><span className="flex items-center gap-2 text-[8px]"><span className="rounded bg-secondary-fixed p-1"><Zap className="h-3 w-3" /></span>Open now</span><span className="h-4 w-7 rounded-full bg-primary p-0.5"><span className="block h-3 w-3 translate-x-3 rounded-full bg-white" /></span></div>
                <p className="mb-2 mt-4 text-[8px] font-medium">Pass Type</p>
                <div className="grid grid-cols-4 gap-1">{["All Access","Day Pass","Week Pass","Month Pass"].map((x,i)=><span key={x} className={`rounded-md p-2 text-center text-[7px] leading-tight ${i===0?"bg-primary text-white":"bg-background"}`}>{x}</span>)}</div>
                <div className="mt-4 flex items-center justify-between text-[8px]"><span>Price Range</span><span className="text-secondary">£15 – £60 / day</span></div>
                <div className="mt-2 flex h-12 items-end gap-1">{[12,16,22,30,36,28,22,14].map((h,i)=><span key={i} className="flex-1 rounded-sm bg-secondary/60" style={{height:h}} />)}</div>
                <div className="mt-1 h-1 rounded-full bg-border"><div className="ml-[25%] h-1 w-[45%] rounded-full bg-primary" /></div>
                <div className="mt-5 space-y-2 border-t border-border pt-3"><p className="flex items-center gap-2 text-[9px] font-semibold"><SlidersHorizontal className="h-3 w-3" /> Facilities</p>{["Free weights","Cardio equipment","Functional training","Sauna","Showers"].map((x,i)=><div key={x} className="flex items-center justify-between text-[8px]"><span>{x}</span><span className={`h-3.5 w-6 rounded-full ${i===2?"bg-border":"bg-primary"}`} /></div>)}</div>
              </div>
              <button className="absolute bottom-4 left-4 right-4 rounded-md bg-primary py-2.5 text-[9px] font-semibold text-white">Show 24 Gyms</button>
            </PhoneShell>

            <PhoneShell className="absolute right-[0%] top-[95px] z-20 h-[430px] w-[215px] rotate-2">
              <div className="relative h-36 overflow-hidden rounded-lg bg-gradient-to-br from-primary-container via-secondary to-primary">
                <div className="absolute inset-0 flex items-center justify-center opacity-25"><Dumbbell className="h-16 w-16 text-white" /></div>
                <span className="absolute bottom-3 left-3 rounded bg-primary/90 px-2 py-1 text-[8px] text-white">0.8 mi · London</span>
              </div>
              <div className="p-2"><div className="flex items-center justify-between"><p className="font-display text-sm font-bold">Riverside Athletic Club</p><p className="text-xs font-bold">£20<span className="text-[7px] font-normal"> / day</span></p></div><p className="mt-2 text-[8px] leading-relaxed text-muted-foreground">Premium gym with extensive facilities and flexible access.</p><div className="mt-3 flex gap-1">{["Pool","Sauna","CrossFit"].map(x=><span key={x} className="rounded bg-secondary/10 px-2 py-1 text-[7px]">{x}</span>)}</div><button className="mt-4 w-full rounded-md bg-primary py-2.5 text-[9px] font-semibold text-white">Book Pass →</button><div className="mt-4 border-t border-border pt-3"><p className="text-[9px] font-semibold">About</p><p className="mt-2 text-[8px] leading-relaxed text-muted-foreground">A modern training facility with quality equipment, recovery amenities and a welcoming community.</p></div></div>
            </PhoneShell>
          </div>

          <div className="mx-auto w-full max-w-sm md:hidden">
            <PhoneShell className="mx-auto h-[500px] w-[245px]">
              <div className="flex items-center justify-between px-1"><span className="font-display text-xs font-bold text-primary">KYRO</span><span className="font-display text-sm font-semibold">Discover</span><MapPin className="h-3 w-3" /></div>
              <div className="mt-3 flex h-9 items-center gap-2 rounded-md border border-border bg-white px-3 text-[8px] text-muted-foreground">⌕ Search gyms, cities or amenities...</div>
              <div className="mt-3 rounded-lg bg-primary-container p-3 text-white"><span className="rounded bg-secondary-fixed px-2 py-1 text-[7px] font-semibold text-primary">ACTIVE PASS</span><p className="mt-2 font-display text-sm font-semibold">Riverside Athletic Club</p><p className="mt-1 text-[8px] text-white/60">Expires in 4 hours</p></div>
              <p className="mb-2 mt-4 font-display text-base font-bold text-primary">Top Gyms Nearby</p>
              <GymCard name="Riverside Athletic Club" price="£20" distance="0.8 mi" />
              <div className="mt-3"><GymCard name="Northbank Training Club" price="£18" distance="1.4 mi" /></div>
            </PhoneShell>
          </div>
        </div>

        <div className="grid gap-6 border-t border-border py-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { Icon: Globe2, title: "Built for travellers", text: "Train in new cities with ease" },
            { Icon: Zap, title: "Flexible access", text: "Day, week or month passes" },
            { Icon: MapPin, title: "London first", text: "More cities coming soon" },
            { Icon: Users, title: "A stronger you", text: "Wherever you go" },
          ].map(({ Icon, title, text }) => (
            <div key={title} className="flex items-center gap-4"><Icon className="h-8 w-8 shrink-0 text-primary/70" /><div><p className="text-xs font-semibold uppercase tracking-wide text-primary/80">{title}</p><p className="mt-1 text-sm text-muted-foreground">{text}</p></div></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
