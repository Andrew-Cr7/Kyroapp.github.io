import type { ReactNode } from "react";
import WaitlistForm from "./WaitlistForm";
import heroGym from "@/assets/hero-gym.jpg";
import {
  Bell,
  Bookmark,
  Check,
  ChevronDown,
  Compass,
  Heart,
  Map,
  MapPin,
  Search,
  SlidersHorizontal,
  Ticket,
  UserRound,
  Users,
  Zap,
} from "lucide-react";

const Switch = ({ on = true }: { on?: boolean }) => (
  <span className={`relative inline-flex h-[18px] w-[34px] shrink-0 rounded-full border ${on ? "border-[#173426] bg-[#173426]" : "border-[#d7dcda] bg-[#edf0ef]"}`}>
    <span className={`absolute top-[2px] h-3 w-3 rounded-full bg-white shadow-[0_1px_3px_rgba(0,0,0,.25)] ${on ? "translate-x-[17px]" : "translate-x-[2px]"}`} />
  </span>
);

const Phone = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`absolute ${className}`} style={{ transformStyle: "preserve-3d" }}>
    <div className="absolute -inset-[9px] rounded-[3.25rem] bg-[linear-gradient(135deg,#b7bbb8_0%,#3a413d_14%,#080b09_34%,#121713_65%,#8d948f_86%,#171c19_100%)] shadow-[0_46px_75px_rgba(20,36,27,.24),0_14px_28px_rgba(20,36,27,.16),inset_0_0_0_1px_rgba(255,255,255,.35)]" style={{ transform: "translateZ(-10px)" }} />
    <div className="absolute -inset-[5px] rounded-[3.05rem] bg-[#080b09] ring-1 ring-white/20" />
    <div className="relative h-full w-full overflow-hidden rounded-[2.75rem] bg-[#f7f9fb] ring-[3px] ring-[#101512] shadow-[inset_0_0_0_1px_rgba(255,255,255,.12)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-40 h-14 bg-gradient-to-b from-white/55 via-white/10 to-transparent" />
      <div className="absolute left-1/2 top-[9px] z-50 h-[17px] w-[72px] -translate-x-1/2 rounded-full bg-[#050806] shadow-[inset_0_1px_1px_rgba(255,255,255,.08)]">
        <span className="absolute right-[7px] top-[5px] h-[5px] w-[5px] rounded-full bg-[#173047] ring-1 ring-black" />
      </div>
      {children}
    </div>
    <span className="absolute -left-[12px] top-[104px] h-[36px] w-[5px] rounded-l bg-gradient-to-b from-[#8c938f] via-[#202622] to-[#666d68]" />
    <span className="absolute -left-[12px] top-[157px] h-[58px] w-[5px] rounded-l bg-gradient-to-b from-[#8c938f] via-[#202622] to-[#666d68]" />
    <span className="absolute -left-[12px] top-[225px] h-[58px] w-[5px] rounded-l bg-gradient-to-b from-[#8c938f] via-[#202622] to-[#666d68]" />
    <span className="absolute -right-[12px] top-[162px] h-[82px] w-[5px] rounded-r bg-gradient-to-b from-[#8c938f] via-[#202622] to-[#666d68]" />
    <span className="pointer-events-none absolute left-[-5px] top-[22px] h-[78%] w-[2px] rounded-full bg-white/35 blur-[.3px]" />
  </div>
);

const BottomNav = () => (
  <div className="mt-auto grid grid-cols-5 border-t border-[#e2e6e3] bg-white px-2 pb-2 pt-2 text-[#64756c]">
    {[
      { Icon: Compass, label: "Discover" },
      { Icon: Map, label: "Map View" },
      { Icon: Ticket, label: "My Passes" },
      { Icon: Bookmark, label: "Saved" },
      { Icon: UserRound, label: "Profile" },
    ].map(({ Icon, label }, i) => (
      <div key={label} className={`flex flex-col items-center gap-1 ${i === 0 ? "text-[#173426]" : ""}`}>
        <Icon className="h-3.5 w-3.5" strokeWidth={1.8} />
        <span className="text-[5.5px] font-medium">{label}</span>
      </div>
    ))}
  </div>
);

const DiscoverPhone = () => (
  <div className="flex h-full flex-col bg-[#f7f9fb] pt-8 text-[#17211b]">
    <div className="flex items-center justify-between px-3 pb-2">
      <div className="flex items-center gap-1.5">
        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#173426] font-display text-[10px] font-bold text-white">K</span>
        <div><p className="text-[6px] font-semibold uppercase tracking-[.12em] text-[#718078]">Current</p><p className="text-[8px] font-semibold">London, UK</p></div>
        <ChevronDown className="h-2.5 w-2.5" />
      </div>
      <Bell className="h-3.5 w-3.5" strokeWidth={1.7} />
    </div>
    <div className="px-3">
      <div className="flex h-9 items-center gap-2 rounded-lg border border-[#dce2de] bg-white px-2.5 shadow-[0_2px_8px_rgba(20,36,27,.04)]">
        <Search className="h-3 w-3 text-[#64748b]" /><span className="flex-1 text-[7px] text-[#66736c]">Search gyms, cities, or amenities...</span><span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#d9f1df] text-[#315f40]"><SlidersHorizontal className="h-3 w-3" /></span>
      </div>
      <div className="mt-2 flex gap-1.5">{["All","Open Now","Day Pass","Week Pass"].map((x,i)=><span key={x} className={`whitespace-nowrap rounded-full border px-2 py-1 text-[6px] font-medium ${i===0?"border-[#173426] bg-[#173426] text-white":"border-[#d7ddd9] bg-white"}`}>{x}</span>)}</div>
      <div className="mt-3 rounded-xl bg-[linear-gradient(135deg,#2d493c,#173426)] p-3 text-white shadow-[0_8px_18px_rgba(20,52,37,.18)]">
        <div className="flex items-center justify-between"><div className="flex items-center gap-1.5"><span className="rounded-sm bg-[#c8eed2] px-1.5 py-1 text-[6px] font-bold uppercase text-[#173426]">Active Pass</span><span className="text-[6px] text-white/65">Expires in 4 hours</span></div><button className="rounded-md bg-[#c8eed2] px-2 py-1.5 text-[6px] font-semibold text-[#173426]">Show Pass ⌘</button></div>
        <p className="mt-2 font-display text-[11px] font-semibold">Riverside Athletic Club</p><p className="mt-1 text-[6.5px] text-white/70">Includes Full Club & Spa Access</p>
      </div>
      <div className="mb-2 mt-4 flex items-end justify-between"><p className="font-display text-[13px] font-semibold">Top Gyms Nearby</p><span className="text-[6.5px] font-medium text-[#3e694d]">See All (24)</span></div>
      <div className="overflow-hidden rounded-xl border border-[#dce1de] bg-white shadow-[0_3px_10px_rgba(20,36,27,.05)]">
        <div className="relative h-[110px] overflow-hidden"><img src={heroGym} alt="Illustrative gym interior" className="h-full w-full object-cover" /><span className="absolute left-2 top-2 rounded bg-[#20372c]/90 px-2 py-1 text-[6px] text-white">★ 4.8 (124)</span><span className="absolute bottom-2 left-2 rounded bg-[#20372c]/90 px-2 py-1 text-[6px] text-white">0.8 miles away · London</span><button className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-lg bg-white/95"><Heart className="h-3.5 w-3.5" /></button></div>
        <div className="p-2.5"><div className="flex justify-between gap-2"><p className="font-display text-[10px] font-semibold">Riverside Athletic Club</p><p className="text-[9px] font-bold">£20 <span className="font-normal text-[#6f7f76]">/ day</span></p></div><p className="mt-1 text-[6.5px] text-[#6b7b72]">Premium gym with extensive facilities.</p><div className="mt-2 flex gap-1">{["Pool","Sauna","CrossFit","Cafe"].map(x=><span key={x} className="rounded bg-[#edf4ef] px-1.5 py-1 text-[6px] text-[#47634f]">{x}</span>)}</div><div className="mt-2.5 grid grid-cols-2 gap-1.5"><button className="rounded-md border border-[#cfd7d2] py-1.5 text-[6.5px] font-semibold">View Passes</button><button className="rounded-md bg-[#173426] py-1.5 text-[6.5px] font-semibold text-white">Buy Now</button></div></div>
      </div>
    </div>
    <BottomNav />
  </div>
);

const FilterPhone = () => (
  <div className="flex h-full flex-col bg-[#f7f9fb] pt-8 text-[#18201b]">
    <div className="flex items-center justify-between px-3 pb-2"><div className="flex items-center gap-2"><span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#173426] text-[10px] font-bold text-white">K</span><span className="font-display text-[9px] font-semibold">KYRO</span></div><span className="font-display text-[13px] font-semibold">Discover</span><div className="flex gap-2"><Bell className="h-3.5 w-3.5"/><span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#173426] text-white"><UserRound className="h-3.5 w-3.5"/></span></div></div>
    <div className="mx-3 rounded-lg bg-[#f0f3f1] px-2.5 py-2 text-[6.5px] text-[#355244]"><span className="mr-1 text-[#2d7a4b]">●</span> Discovering in London, 24 venues found</div>
    <div className="mx-3 mt-2 flex-1 overflow-hidden rounded-xl border border-[#e2e6e3] bg-white shadow-[0_5px_18px_rgba(20,36,27,.06)]"><div className="p-3">
      <div className="flex items-center justify-between"><div className="flex items-center gap-2"><h3 className="font-display text-[14px] font-semibold">Filter Gyms</h3><span className="rounded-full bg-[#d8f1de] px-2 py-1 text-[6.5px] text-[#356145]">7 active</span></div><span className="text-[6.5px] text-[#5b6b62]">↻ Reset</span></div>
      <div className="mt-3 flex items-center justify-between rounded-lg bg-[#f7f9f8] p-2.5"><div className="flex gap-2"><span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#d8f1de] text-[#2d6a43]">◷</span><div><p className="text-[7.5px] font-medium">Open now</p><p className="text-[6px] text-[#718078]">Venues welcoming guests right now</p></div></div><Switch /></div>
      <p className="mb-2 mt-4 text-[7px] font-medium">Pass Type</p><div className="grid grid-cols-4 gap-1.5">{["All\nAccess","Day\nPass","Week\nPass","Month\nPass"].map((x,i)=><span key={x} className={`whitespace-pre-line rounded-md px-1 py-2 text-center text-[6.5px] leading-tight ${i===0?"bg-[#173426] text-white":"bg-[#f4f6f5]"}`}>{x}</span>)}</div>
      <div className="mt-4 flex justify-between text-[7px]"><span>Price Range</span><span className="text-[#356145]">£15 - £60 / day</span></div><div className="mt-2 flex h-12 items-end gap-1">{[9,12,18,27,34,30,23,15].map((h,i)=><span key={i} className={`flex-1 rounded-t-sm ${i>1&&i<7?"bg-[#49745a]":"bg-[#e5e9e6]"}`} style={{height:h}} />)}</div><div className="relative mt-1 h-1 rounded-full bg-[#dce2de]"><span className="absolute left-[20%] top-0 h-1 w-[48%] rounded-full bg-[#173426]"/><span className="absolute left-[67%] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#173426]"/></div>
      <div className="mt-4 border-t border-[#e5e8e6] pt-3"><div className="mb-2 flex items-center gap-2"><SlidersHorizontal className="h-3 w-3"/><span className="text-[8px] font-semibold">Facilities</span><span className="rounded-full bg-[#edf0ef] px-1.5 py-0.5 text-[5.5px]">3 active</span></div>{[["Free weights",true],["Cardio equipment",true],["CrossFit",false],["Boxing",false],["Functional training area",true]].map(([x,on])=><div key={String(x)} className="flex items-center justify-between py-1.5 text-[7px]"><span>{String(x)}</span><Switch on={Boolean(on)}/></div>)}</div>
    </div></div>
    <div className="mx-3 mb-3 mt-2 flex items-center justify-between rounded-lg bg-[#173426] px-3 py-2.5 text-white"><span className="text-[8px] font-semibold">☷ Show 24 Gyms</span><span className="rounded-full bg-white/10 px-2 py-1 text-[6px]">7 active</span></div>
  </div>
);

const DetailPhone = () => (
  <div className="flex h-full flex-col bg-[#f7f9fb] pt-8 text-[#17211b]">
    <div className="relative h-[205px] overflow-hidden"><img src={heroGym} alt="Illustrative gym interior" className="h-full w-full object-cover"/><button className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#173426]/85 text-white">‹</button><button className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg bg-white/95"><Heart className="h-4 w-4"/></button><span className="absolute bottom-3 left-3 rounded bg-[#173426]/90 px-2 py-1 text-[7px] text-white">0.8 mi · London</span></div>
    <div className="flex-1 bg-white p-3"><div className="flex justify-between gap-2"><h3 className="font-display text-[13px] font-semibold">Riverside Athletic Club</h3><p className="text-[10px] font-bold">£20 <span className="font-normal text-[#6d7b73]">/ day</span></p></div><p className="mt-2 text-[7px] leading-relaxed text-[#6d7b73]">Premium gym with extensive facilities.</p><div className="mt-3 flex gap-1.5">{["Pool","Sauna","CrossFit","Cafe"].map(x=><span key={x} className="rounded bg-[#edf4ef] px-2 py-1 text-[6px] text-[#47634f]">{x}</span>)}</div><button className="mt-4 w-full rounded-lg bg-[#173426] py-3 text-[8px] font-semibold text-white">Book Pass &nbsp; →</button><div className="mt-4 border-t border-[#e2e6e3] pt-3"><p className="text-[8px] font-semibold">About</p><p className="mt-2 text-[7px] leading-relaxed text-[#6d7b73]">A modern training facility with world-class equipment, recovery amenities and a welcoming community.</p><div className="mt-3 space-y-2 text-[7px] text-[#52645a]"><p>◷ &nbsp; Open 6am - 10pm</p><p>⌖ &nbsp; 2.1 miles from your location</p><p>◫ &nbsp; Show on map</p></div></div></div>
  </div>
);

const HeroPremium = () => (
  <section className="overflow-hidden bg-[#fcfbf8] pt-24 lg:pt-28">
    <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12">
      <div className="grid items-center gap-10 pb-12 pt-12 lg:min-h-[690px] lg:grid-cols-[.84fr_1.16fr] lg:gap-4 lg:pb-10 lg:pt-8">
        <div className="relative z-20 max-w-[575px]">
          <div className="mb-8 inline-flex rounded-full bg-[#eef1ef] px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[.16em] text-[#173426]">Launching globally soon</div>
          <h1 className="font-display text-[52px] font-extrabold leading-[.98] tracking-[-.045em] text-[#173426] sm:text-[66px] lg:text-[78px]">Train anywhere.<br/>Train Kyro.</h1>
          <p className="mt-8 max-w-[565px] text-[19px] leading-[1.5] text-[#687c73] sm:text-[21px]">Find gyms. Compare facilities. Buy flexible passes.<br className="hidden sm:block"/> No memberships. No calling around.</p>
          <div className="mt-9 w-full max-w-[565px]"><WaitlistForm variant="hero" /></div>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-[14px] text-[#667b71]">{["Global launch","Founding member perks","No spam"].map(x=><span key={x} className="flex items-center gap-2"><span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#66b67d] text-[#3d9f5c]"><Check className="h-3.5 w-3.5" strokeWidth={2}/></span>{x}</span>)}</div>
        </div>

        <div className="relative hidden h-[620px] min-w-0 lg:block" style={{ perspective: "1500px" }}>
          <div className="absolute inset-x-[4%] bottom-[8px] h-[82px] rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(20,36,27,.20),rgba(20,36,27,.08)_42%,transparent_72%)] blur-xl" />
          <Phone className="left-[1%] top-[95px] z-10 h-[520px] w-[270px]" aria-label="Kyro discover screen" >
            <div style={{ transform: "rotateY(10deg) rotateZ(-1.8deg)", transformOrigin: "50% 80%" }} className="h-full"><DiscoverPhone /></div>
          </Phone>
          <Phone className="left-1/2 top-[34px] z-30 h-[590px] w-[300px] -translate-x-1/2" aria-label="Kyro filter screen">
            <FilterPhone />
          </Phone>
          <Phone className="right-[1%] top-[92px] z-20 h-[520px] w-[270px]" aria-label="Kyro gym detail screen">
            <div style={{ transform: "rotateY(-10deg) rotateZ(1.8deg)", transformOrigin: "50% 80%" }} className="h-full"><DetailPhone /></div>
          </Phone>
        </div>

        <div className="mx-auto block w-full max-w-[360px] lg:hidden">
          <div className="relative mx-auto h-[540px] w-[276px]"><Phone className="inset-0 h-full w-full" aria-label="Kyro mobile app preview"><DiscoverPhone /></Phone></div>
        </div>
      </div>

      <div className="grid gap-7 border-t border-[#e3e4df] py-8 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { Icon: MapPin, title: "Built for travellers", text: "Train in new cities with ease" },
          { Icon: Zap, title: "Flexible access", text: "Day, week or month passes" },
          { Icon: Compass, title: "Global launch", text: "Multiple countries from day one" },
          { Icon: Users, title: "A stronger you", text: "Wherever you go" },
        ].map(({Icon,title,text})=><div key={title} className="flex items-center gap-4"><Icon className="h-9 w-9 shrink-0 text-[#365c49]" strokeWidth={1.6}/><div><p className="text-[12px] font-semibold uppercase tracking-[.05em] text-[#294a3a]">{title}</p><p className="mt-1 text-[14px] text-[#687c73]">{text}</p></div></div>)}
      </div>
    </div>
  </section>
);

export default HeroPremium;
