import WaitlistForm from "./WaitlistForm";
import heroGym from "@/assets/hero-gym.jpg";
import {
  Bell,
  Bookmark,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Compass,
  Dumbbell,
  Globe2,
  Heart,
  Map,
  MapPin,
  RotateCcw,
  Search,
  SlidersHorizontal,
  Ticket,
  UserRound,
  Users,
  Zap,
} from "lucide-react";

const Toggle = ({ on = true }: { on?: boolean }) => (
  <span
    className={`relative inline-flex h-[18px] w-[34px] shrink-0 rounded-full border transition-colors ${
      on ? "border-primary bg-primary" : "border-[#d7dcda] bg-[#edf0ef]"
    }`}
    aria-hidden="true"
  >
    <span
      className={`absolute top-[2px] h-3 w-3 rounded-full bg-white shadow-sm transition-transform ${
        on ? "translate-x-[17px]" : "translate-x-[2px]"
      }`}
    />
  </span>
);

const AmenityChip = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-md bg-[#edf4ef] px-2 py-1 text-[7px] font-medium text-[#486250]">
    {children}
  </span>
);

const MiniNav = () => (
  <div className="mt-auto grid grid-cols-5 border-t border-[#e1e5e2] bg-white px-2 py-2 text-[#50625a]">
    {[
      { Icon: Compass, label: "Discover" },
      { Icon: Map, label: "Map View" },
      { Icon: Ticket, label: "My Passes" },
      { Icon: Bookmark, label: "Saved" },
      { Icon: UserRound, label: "Profile" },
    ].map(({ Icon, label }, index) => (
      <div key={label} className={`flex flex-col items-center gap-1 ${index === 0 ? "text-primary" : ""}`}>
        <Icon className="h-3.5 w-3.5" strokeWidth={1.8} />
        <span className="text-[5.5px] font-medium">{label}</span>
      </div>
    ))}
  </div>
);

const PhoneFrame = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`relative overflow-hidden rounded-[38px] border-[7px] border-[#111714] bg-[#f8faf9] shadow-[0_28px_65px_rgba(24,37,28,0.18)] ${className}`}
  >
    <div className="pointer-events-none absolute left-1/2 top-[8px] z-50 h-[12px] w-[58px] -translate-x-1/2 rounded-full bg-[#111714]" />
    {children}
  </div>
);

const DiscoverPhone = () => (
  <PhoneFrame className="flex h-[560px] w-[252px] flex-col">
    <div className="flex-1 overflow-hidden px-3 pb-2 pt-7">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-primary font-display text-[11px] font-bold text-white">
            K
          </span>
          <div>
            <p className="text-[6px] text-[#66756e]">Current Location</p>
            <p className="flex items-center gap-1 text-[8px] font-semibold text-[#17251d]">
              London, UK <ChevronDown className="h-2.5 w-2.5" />
            </p>
          </div>
        </div>
        <Bell className="h-4 w-4 text-[#26352d]" strokeWidth={1.8} />
      </div>

      <div className="mt-3 flex items-center gap-2 rounded-lg border border-[#dfe4e1] bg-white px-2.5 py-2">
        <Search className="h-3.5 w-3.5 text-[#60736a]" strokeWidth={2} />
        <span className="flex-1 text-[6.5px] text-[#78867f]">Search gyms, cities or amenities...</span>
        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#dff3e4] text-primary">
          <SlidersHorizontal className="h-3 w-3" />
        </span>
      </div>

      <div className="mt-2 flex gap-1.5 overflow-hidden whitespace-nowrap">
        <span className="rounded-full bg-primary px-2.5 py-1.5 text-[6px] font-semibold text-white">All</span>
        <span className="rounded-full border border-[#d8dfdb] bg-white px-2.5 py-1.5 text-[6px]">Open Now</span>
        <span className="rounded-full border border-[#d8dfdb] bg-white px-2.5 py-1.5 text-[6px]">Day Pass</span>
        <span className="rounded-full border border-[#d8dfdb] bg-white px-2.5 py-1.5 text-[6px]">Week Pass</span>
      </div>

      <div className="mt-3 rounded-lg bg-[#173429] p-3 text-white shadow-sm">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <span className="rounded bg-[#cbeed3] px-2 py-1 text-[5.5px] font-bold uppercase tracking-wide text-[#183528]">
              Active Pass
            </span>
            <span className="text-[5.5px] text-white/65">Expires in 4 hours</span>
          </div>
          <button className="rounded-md bg-[#d4f3dc] px-2 py-1.5 text-[5.5px] font-semibold text-[#173429]">
            Show Pass
          </button>
        </div>
        <p className="mt-2 font-display text-[10px] font-semibold">Riverside Athletic Club</p>
        <p className="mt-1 text-[6px] text-white/65">Full Club, Tier X & Spa Access</p>
      </div>

      <div className="mb-2 mt-4 flex items-end justify-between">
        <h3 className="font-display text-[13px] font-bold text-[#17251d]">Top Gyms Nearby</h3>
        <span className="text-[6px] font-medium text-[#44664f]">See All (24)</span>
      </div>

      <div className="overflow-hidden rounded-xl border border-[#d8dfdb] bg-white">
        <div className="relative h-[112px] overflow-hidden">
          <img src={heroGym} alt="Illustrative Riverside Athletic Club interior" className="h-full w-full object-cover" />
          <span className="absolute left-2 top-2 rounded-full bg-[#173429]/95 px-2 py-1 text-[6px] font-medium text-white">★ 4.8 (124)</span>
          <span className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-lg bg-white text-primary shadow-sm">
            <Heart className="h-3.5 w-3.5" />
          </span>
          <span className="absolute bottom-2 left-2 rounded bg-[#173429]/95 px-2 py-1 text-[6px] text-white">0.8 miles away · London</span>
        </div>
        <div className="p-2.5">
          <div className="flex items-start justify-between gap-2">
            <p className="font-display text-[10px] font-semibold text-[#17251d]">Riverside Athletic Club</p>
            <p className="whitespace-nowrap text-[9px] font-bold text-[#17251d]">£20 <span className="text-[6px] font-normal text-[#65756d]">/ day</span></p>
          </div>
          <p className="mt-1 text-[6.5px] leading-relaxed text-[#64748b]">Premium gym with extensive facilities.</p>
          <div className="mt-2 flex gap-1"><AmenityChip>Pool</AmenityChip><AmenityChip>Sauna</AmenityChip><AmenityChip>CrossFit</AmenityChip><AmenityChip>Cafe</AmenityChip></div>
          <div className="mt-2.5 grid grid-cols-2 gap-1.5">
            <button className="rounded-md border border-[#ced6d1] py-2 text-[6px] font-semibold text-[#26352d]">View Passes</button>
            <button className="rounded-md bg-primary py-2 text-[6px] font-semibold text-white">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
    <MiniNav />
  </PhoneFrame>
);

const FilterPhone = () => {
  const facilities = [
    { label: "Free weights", on: true },
    { label: "Cardio equipment", on: true },
    { label: "CrossFit", on: false },
    { label: "Boxing", on: false },
    { label: "Functional training area", on: true },
  ];

  return (
    <PhoneFrame className="flex h-[635px] w-[300px] flex-col">
      <div className="flex-1 overflow-hidden px-3 pb-3 pt-7">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-primary font-display text-[11px] font-bold text-white">K</span>
            <span className="font-display text-[10px] font-bold text-[#17251d]">KYRO</span>
          </div>
          <span className="font-display text-[13px] font-semibold text-[#17251d]">Discover</span>
          <div className="flex items-center gap-2"><Bell className="h-3.5 w-3.5" /><span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white"><UserRound className="h-3 w-3" /></span></div>
        </div>

        <div className="mt-3 flex items-center gap-2 rounded-md bg-[#f0f3f1] px-2.5 py-2 text-[6.5px] text-[#33463c]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#3f8c5b]" />
          Discovering in London, 24 venues found
        </div>

        <div className="mt-3 rounded-xl border border-[#edf0ee] bg-white p-3 shadow-[0_3px_12px_rgba(20,40,30,0.05)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h3 className="font-display text-[15px] font-bold text-[#17251d]">Filter Gyms</h3>
              <span className="rounded-full bg-[#d5f0dc] px-2 py-1 text-[6px] font-medium text-[#2f6b46]">7 active</span>
            </div>
            <button className="flex items-center gap-1 text-[6px] text-[#33463c]"><RotateCcw className="h-2.5 w-2.5" /> Reset</button>
          </div>

          <div className="mt-3 flex items-center justify-between rounded-lg bg-[#f6f8f7] p-2.5">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#d5f0dc] text-[#2f6b46]"><Clock3 className="h-3.5 w-3.5" /></span>
              <div><p className="text-[8px] font-medium text-[#17251d]">Open now</p><p className="mt-0.5 max-w-[120px] text-[5.5px] leading-tight text-[#728078]">Venues welcoming guests right now</p></div>
            </div>
            <Toggle on />
          </div>

          <p className="mb-2 mt-4 text-[7px] font-medium text-[#25372e]">Pass Type</p>
          <div className="grid grid-cols-4 gap-1.5">
            {["All Access", "Day Pass", "Week Pass", "Month Pass"].map((item, index) => (
              <span key={item} className={`flex min-h-[40px] items-center justify-center rounded-lg px-1 text-center text-[6px] leading-tight ${index === 0 ? "bg-primary font-semibold text-white" : "bg-[#f4f6f5] text-[#25372e]"}`}>
                {item}
              </span>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between text-[7px]"><span className="font-medium text-[#25372e]">Price Range</span><span className="font-medium text-[#2f6b46]">£15 – £60 / day</span></div>
          <div className="mt-2 flex h-11 items-end gap-1">
            {[10, 13, 20, 29, 34, 30, 25, 18, 11].map((height, index) => (
              <span key={index} className={`flex-1 rounded-t-[2px] ${index >= 2 && index <= 6 ? "bg-[#527864]" : "bg-[#e8ece9]"}`} style={{ height }} />
            ))}
          </div>
          <div className="relative mt-2 h-[3px] rounded-full bg-[#dde3df]">
            <div className="absolute left-0 top-0 h-[3px] w-[48%] rounded-full bg-primary" />
            <div className="absolute left-[47%] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-primary" />
          </div>
          <div className="mt-2 flex justify-between text-[5.5px] text-[#7d8a83]"><span>£10</span><span>Avg. £35</span><span>£120+</span></div>

          <div className="mt-4 border-t border-[#e4e9e6] pt-3">
            <div className="mb-2.5 flex items-center justify-between">
              <div className="flex items-center gap-2"><SlidersHorizontal className="h-3 w-3" /><span className="text-[8px] font-semibold text-[#17251d]">Facilities</span><span className="rounded-full bg-[#edf0ef] px-1.5 py-0.5 text-[5.5px] text-[#65756d]">3 active</span></div>
              <ChevronDown className="h-3 w-3 text-[#53675d]" />
            </div>
            <div className="space-y-2.5">
              {facilities.map(({ label, on }) => (
                <div key={label} className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-[6.5px] text-[#4b5e54]"><Dumbbell className="h-2.5 w-2.5" strokeWidth={1.7} />{label}</span>
                  <Toggle on={on} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="px-3 pb-3">
        <button className="flex w-full items-center justify-between rounded-lg bg-primary px-3 py-2.5 text-white shadow-sm">
          <span className="flex items-center gap-2 text-[7px] font-semibold"><SlidersHorizontal className="h-3 w-3" /> Show 24 Gyms</span>
          <span className="rounded-full bg-white/10 px-2 py-1 text-[5.5px]">7 active</span>
        </button>
      </div>
    </PhoneFrame>
  );
};

const DetailPhone = () => (
  <PhoneFrame className="flex h-[570px] w-[260px] flex-col">
    <div className="flex-1 overflow-hidden pt-5">
      <div className="relative h-[190px] overflow-hidden">
        <img src={heroGym} alt="Illustrative Riverside Athletic Club interior" className="h-full w-full object-cover" />
        <span className="absolute left-3 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-[#173429]/90 text-white"><ChevronLeft className="h-4 w-4" /></span>
        <span className="absolute right-3 top-4 flex h-8 w-8 items-center justify-center rounded-lg bg-white text-primary shadow-sm"><Heart className="h-4 w-4" /></span>
        <span className="absolute bottom-3 left-3 rounded bg-[#173429]/95 px-2 py-1 text-[6.5px] text-white">0.8 mi · London</span>
      </div>

      <div className="bg-white px-3 pb-4 pt-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="max-w-[150px] font-display text-[13px] font-bold leading-tight text-[#17251d]">Riverside Athletic Club</h3>
          <p className="whitespace-nowrap text-[10px] font-bold text-[#17251d]">£20 <span className="text-[6px] font-normal text-[#66756e]">/ day</span></p>
        </div>
        <p className="mt-2 text-[6.5px] leading-relaxed text-[#64748b]">Premium gym with extensive facilities.</p>
        <div className="mt-3 flex gap-1"><AmenityChip>Pool</AmenityChip><AmenityChip>Sauna</AmenityChip><AmenityChip>CrossFit</AmenityChip><AmenityChip>Cafe</AmenityChip></div>
        <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-[7px] font-semibold text-white">Book Pass <ChevronRight className="h-3 w-3" /></button>

        <div className="mt-4 border-t border-[#e5e9e6] pt-3">
          <h4 className="text-[8px] font-semibold text-[#17251d]">About</h4>
          <p className="mt-2 text-[6px] leading-relaxed text-[#66756e]">A modern training facility with world-class equipment, recovery amenities and a welcoming community.</p>
          <div className="mt-3 space-y-2 text-[6px] text-[#53675d]">
            <div className="flex items-center gap-2"><Clock3 className="h-3 w-3" /> Open 6am - 10pm</div>
            <div className="flex items-center gap-2"><MapPin className="h-3 w-3" /> 2.1 miles from your location</div>
            <div className="flex items-center justify-between"><span className="flex items-center gap-2"><Map className="h-3 w-3" /> Show on map</span><ChevronRight className="h-3 w-3" /></div>
          </div>
        </div>
      </div>
    </div>
  </PhoneFrame>
);

const MobileProductPreview = () => (
  <PhoneFrame className="mx-auto flex h-[560px] w-[280px] flex-col">
    <div className="flex-1 overflow-hidden px-3 pb-2 pt-7">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2"><span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary font-display text-xs font-bold text-white">K</span><span className="font-display text-xs font-bold">KYRO</span></div>
        <span className="font-display text-sm font-semibold">Discover</span>
        <Bell className="h-4 w-4" />
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-lg border border-[#dfe4e1] bg-white px-3 py-2.5"><Search className="h-4 w-4 text-[#60736a]" /><span className="text-[8px] text-[#78867f]">Search gyms, cities or amenities...</span></div>
      <div className="mt-3 rounded-lg bg-[#173429] p-3 text-white">
        <div className="flex items-center justify-between"><span className="rounded bg-[#cbeed3] px-2 py-1 text-[6px] font-bold uppercase tracking-wide text-[#183528]">Active Pass</span><span className="text-[6px] text-white/65">Expires in 4 hours</span></div>
        <div className="mt-2 flex items-center justify-between"><div><p className="font-display text-[11px] font-semibold">Riverside Athletic Club</p><p className="mt-1 text-[6px] text-white/65">Full Club, Tier X & Spa Access</p></div><button className="rounded-md bg-[#d4f3dc] px-2 py-2 text-[6px] font-semibold text-[#173429]">Show Pass</button></div>
      </div>
      <h3 className="mb-2 mt-4 font-display text-base font-bold">Top Gyms Nearby</h3>
      <div className="overflow-hidden rounded-xl border border-[#d8dfdb] bg-white"><img src={heroGym} alt="Illustrative Riverside Athletic Club interior" className="h-40 w-full object-cover" /><div className="p-3"><div className="flex justify-between"><p className="font-display text-sm font-semibold">Riverside Athletic Club</p><p className="text-xs font-bold">£20 <span className="text-[8px] font-normal">/ day</span></p></div><div className="mt-2 flex gap-1"><AmenityChip>Pool</AmenityChip><AmenityChip>Sauna</AmenityChip><AmenityChip>CrossFit</AmenityChip></div><button className="mt-3 w-full rounded-lg bg-primary py-2.5 text-[8px] font-semibold text-white">View Passes</button></div></div>
    </div>
    <MiniNav />
  </PhoneFrame>
);

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background pt-20 lg:pt-24">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 pb-12 pt-14 lg:min-h-[735px] lg:grid-cols-[0.82fr_1.18fr] lg:gap-5 lg:pb-10 lg:pt-8">
          <div className="max-w-[580px] lg:self-center">
            <div className="inline-flex items-center rounded-full bg-[#eef1ef] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
              Launching globally soon
            </div>

            <h1 className="mt-9 font-display text-[54px] font-extrabold leading-[1.02] tracking-[-0.04em] text-primary sm:text-[66px] xl:text-[78px]">
              Train anywhere.
              <br />
              Train Kyro.
            </h1>

            <p className="mt-7 max-w-[570px] text-[19px] leading-[1.55] text-[#5f746b] sm:text-[21px] xl:text-[22px]">
              Find gyms. Compare facilities. Buy flexible passes.
              <br className="hidden sm:block" />
              No memberships. No calling around.
            </p>

            <div className="mt-9 w-full max-w-[570px]">
              <WaitlistForm variant="hero" />
            </div>

            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-[13px] text-[#60756b]">
              {["Global launch", "Founding member perks", "No spam"].map((item) => (
                <span key={item} className="flex items-center gap-2.5">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#61b57a] text-[#3b9b5c]">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.2} />
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative hidden h-[650px] w-full min-w-0 lg:block" aria-label="Kyro app product preview using fictional gyms">
            <div className="absolute left-[1%] top-[60px] z-10 -rotate-[1.5deg]"><DiscoverPhone /></div>
            <div className="absolute left-1/2 top-0 z-30 -translate-x-1/2"><FilterPhone /></div>
            <div className="absolute right-[0%] top-[62px] z-20 rotate-[1.5deg]"><DetailPhone /></div>
          </div>

          <div className="lg:hidden">
            <MobileProductPreview />
          </div>
        </div>

        <div className="grid gap-7 border-t border-border py-9 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {[
            { Icon: Globe2, title: "Built for travellers", text: "Train in new cities with ease" },
            { Icon: Zap, title: "Flexible access", text: "Day, week or month passes" },
            { Icon: MapPin, title: "Global launch", text: "More cities coming soon" },
            { Icon: Users, title: "A stronger you", text: "Wherever you go" },
          ].map(({ Icon, title, text }) => (
            <div key={title} className="flex items-center gap-4">
              <Icon className="h-9 w-9 shrink-0 text-primary/70" strokeWidth={1.7} />
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.05em] text-primary/80">{title}</p>
                <p className="mt-1 text-[13px] text-[#60756b]">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
