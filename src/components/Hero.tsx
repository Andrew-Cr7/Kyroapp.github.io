import type { CSSProperties, ReactNode } from "react";
import WaitlistForm from "./WaitlistForm";
import heroGym from "@/assets/hero-gym.jpg";
import {
  Bell,
  Bookmark,
  Check,
  ChevronDown,
  ChevronLeft,
  Clock3,
  Compass,
  Dumbbell,
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
  <span
    className={`relative inline-flex h-[18px] w-[34px] shrink-0 rounded-full border ${
      on ? "border-[#173426] bg-[#173426]" : "border-[#d7dcda] bg-[#edf0ef]"
    }`}
    aria-hidden="true"
  >
    <span
      className={`absolute top-[2px] h-3 w-3 rounded-full bg-white shadow-[0_1px_3px_rgba(0,0,0,0.28)] transition-transform ${
        on ? "translate-x-[17px]" : "translate-x-[2px]"
      }`}
    />
  </span>
);

const AmenityChip = ({ children }: { children: ReactNode }) => (
  <span className="rounded-md bg-[#edf4ef] px-2 py-1 text-[7px] font-medium text-[#47634f]">
    {children}
  </span>
);

const BottomNav = ({ active = "Discover" }: { active?: string }) => (
  <div className="mt-auto grid grid-cols-5 border-t border-[#e3e7e4] bg-white px-2 pb-2 pt-2.5 text-[#617269]">
    {[
      { Icon: Compass, label: "Discover" },
      { Icon: Map, label: "Map View" },
      { Icon: Ticket, label: "My Passes" },
      { Icon: Bookmark, label: "Saved" },
      { Icon: UserRound, label: "Profile" },
    ].map(({ Icon, label }) => (
      <div
        key={label}
        className={`flex flex-col items-center gap-1 ${label === active ? "text-[#173426]" : ""}`}
      >
        <Icon className="h-3.5 w-3.5" strokeWidth={1.8} />
        <span className="text-[5.5px] font-medium">{label}</span>
      </div>
    ))}
  </div>
);

type PhoneFrameProps = {
  children: ReactNode;
  className: string;
  style?: CSSProperties;
  side?: "left" | "right" | "none";
  ariaLabel: string;
};

const PhoneFrame = ({
  children,
  className,
  style,
  side = "none",
  ariaLabel,
}: PhoneFrameProps) => (
  <div
    className={`${className} select-none`}
    style={{ transformStyle: "preserve-3d", ...style }}
    aria-label={ariaLabel}
  >
    <div
      className="absolute inset-0 rounded-[3.15rem]"
      style={{
        background:
          "linear-gradient(135deg,#9aa19d 0%,#29302c 12%,#080b09 38%,#171c19 70%,#777f7a 88%,#171b19 100%)",
        boxShadow:
          "0 34px 68px rgba(20,36,27,.20),0 8px 18px rgba(20,36,27,.11),inset 0 0 0 1px rgba(255,255,255,.28)",
      }}
    />

    <div className="absolute inset-[3px] rounded-[3.02rem] border border-white/25 bg-[#0b0f0d]" />
    <div className="absolute inset-[7px] rounded-[2.82rem] bg-[#050806] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]" />

    <div
      className="absolute inset-[10px] overflow-hidden rounded-[2.58rem] bg-[#f7f9fb] ring-1 ring-black/10"
      style={{ transform: "translateZ(5px)" }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-40 h-10 bg-gradient-to-b from-white/40 to-transparent" />
      <div className="absolute left-1/2 top-[8px] z-50 h-[17px] w-[72px] -translate-x-1/2 rounded-full bg-[#050806] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
        <span className="absolute right-[7px] top-[5px] h-[5px] w-[5px] rounded-full bg-[#152b3f] ring-1 ring-black" />
      </div>
      <div className="h-full">{children}</div>
    </div>

    <div className="pointer-events-none absolute inset-[1px] rounded-[3.08rem] border border-white/30 opacity-70" />
    <div className="pointer-events-none absolute left-[9px] top-[13px] h-[62%] w-[2px] rounded-full bg-white/30 blur-[0.3px]" />

    <span className="absolute -left-[3px] top-[92px] h-[34px] w-[4px] rounded-l-md bg-gradient-to-b from-[#777e79] via-[#171c19] to-[#5d645f] shadow-sm" />
    <span className="absolute -left-[3px] top-[142px] h-[54px] w-[4px] rounded-l-md bg-gradient-to-b from-[#777e79] via-[#171c19] to-[#5d645f] shadow-sm" />
    <span className="absolute -left-[3px] top-[205px] h-[54px] w-[4px] rounded-l-md bg-gradient-to-b from-[#777e79] via-[#171c19] to-[#5d645f] shadow-sm" />
    <span className="absolute -right-[3px] top-[145px] h-[78px] w-[4px] rounded-r-md bg-gradient-to-b from-[#777e79] via-[#171c19] to-[#5d645f] shadow-sm" />

    {side !== "none" && (
      <div
        className={`pointer-events-none absolute top-[34px] h-[86%] w-[8px] rounded-full opacity-75 blur-[0.2px] ${
          side === "left" ? "-left-[6px]" : "-right-[6px]"
        }`}
        style={{
          background:
            "linear-gradient(180deg,rgba(255,255,255,.52),rgba(70,78,73,.2) 18%,rgba(5,8,6,.65) 58%,rgba(255,255,255,.22))",
          transform: "translateZ(-4px)",
        }}
      />
    )}
  </div>
);

const DiscoverScreen = () => (
  <div className="flex h-full flex-col bg-[#f7f9fb] pt-[31px] text-[#17211b]">
    <div className="flex items-center justify-between px-3 pb-2 pt-1">
      <div className="flex items-center gap-1.5">
        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#173426] font-display text-[10px] font-bold text-white">
          K
        </span>
        <div>
          <p className="text-[6px] font-semibold uppercase tracking-[0.12em] text-[#708078]">Current</p>
          <p className="text-[8px] font-semibold">London, UK</p>
        </div>
        <ChevronDown className="h-2.5 w-2.5" />
      </div>
      <Bell className="h-3.5 w-3.5" strokeWidth={1.7} />
    </div>

    <div className="px-3">
      <div className="flex h-9 items-center gap-2 rounded-lg border border-[#dce2de] bg-white px-2.5 shadow-[0_2px_8px_rgba(20,36,27,0.04)]">
        <Search className="h-3 w-3 text-[#64748b]" />
        <span className="flex-1 text-[7px] text-[#66736c]">Search gyms, cities, or amenities...</span>
        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#d9f1df] text-[#315f40]">
          <SlidersHorizontal className="h-3 w-3" />
        </span>
      </div>

      <div className="mt-2 flex gap-1.5 overflow-hidden">
        {[
          ["All", true],
          ["Open Now", false],
          ["Day Pass", false],
          ["Week Pass", false],
        ].map(([label, active]) => (
          <span
            key={String(label)}
            className={`whitespace-nowrap rounded-full border px-2.5 py-1.5 text-[6.5px] font-medium ${
              active
                ? "border-[#173426] bg-[#173426] text-white"
                : "border-[#d6ddd9] bg-white text-[#35443c]"
            }`}
          >
            {label}
          </span>
        ))}
      </div>

      <div className="mt-3 rounded-xl bg-[linear-gradient(135deg,#294438,#173426)] p-3 text-white shadow-[0_7px_16px_rgba(20,52,37,0.16)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="rounded-sm bg-[#c8eed2] px-1.5 py-1 text-[6px] font-bold uppercase tracking-wide text-[#173426]">
              Active Pass
            </span>
            <span className="text-[6px] text-white/65">Expires in 4 hours</span>
          </div>
          <button className="flex h-7 items-center gap-1 rounded-md bg-[#c8eed2] px-2 text-[6.5px] font-semibold text-[#173426]">
            Show Pass
            <span className="grid grid-cols-2 gap-[1px]">
              {[0, 1, 2, 3].map((n) => (
                <span key={n} className="h-[2px] w-[2px] bg-[#173426]" />
              ))}
            </span>
          </button>
        </div>
        <p className="mt-2 font-display text-[11px] font-semibold">Riverside Athletic Club</p>
        <p className="mt-1 text-[6.5px] text-white/70">Includes full club & spa access</p>
      </div>

      <div className="mb-2 mt-4 flex items-end justify-between">
        <p className="font-display text-[13px] font-semibold">Top Gyms Nearby</p>
        <span className="text-[6.5px] font-medium text-[#3e694d]">See All (24)</span>
      </div>

      <div className="overflow-hidden rounded-xl border border-[#dce1de] bg-white shadow-[0_3px_10px_rgba(20,36,27,0.05)]">
        <div className="relative h-[112px] overflow-hidden">
          <img src={heroGym} alt="Illustrative gym interior" className="h-full w-full object-cover" />
          <span className="absolute left-2 top-2 rounded bg-[#20372c]/90 px-2 py-1 text-[6px] font-medium text-white">★ 4.8 (124)</span>
          <span className="absolute bottom-2 left-2 rounded bg-[#20372c]/90 px-2 py-1 text-[6px] text-white">0.8 miles away · London</span>
          <button className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-lg bg-white/95 shadow-sm">
            <Heart className="h-3.5 w-3.5" strokeWidth={1.8} />
          </button>
        </div>
        <div className="p-2.5">
          <div className="flex items-start justify-between gap-2">
            <p className="font-display text-[10px] font-semibold">Riverside Athletic Club</p>
            <p className="whitespace-nowrap text-[9px] font-bold">£20 <span className="font-normal text-[#6f7f76]">/ day</span></p>
          </div>
          <p className="mt-1 text-[6.5px] leading-relaxed text-[#6b7b72]">Premium training with extensive facilities.</p>
          <div className="mt-2 flex gap-1.5">
            <AmenityChip>Pool</AmenityChip>
            <AmenityChip>Sauna</AmenityChip>
            <AmenityChip>CrossFit</AmenityChip>
          </div>
          <div className="mt-2.5 grid grid-cols-2 gap-1.5">
            <button className="rounded-md border border-[#cfd7d2] py-1.5 text-[6.5px] font-semibold">View Passes</button>
            <button className="rounded-md bg-[#173426] py-1.5 text-[6.5px] font-semibold text-white">Buy Now</button>
          </div>
        </div>
      </div>
    </div>

    <BottomNav />
  </div>
);

const FilterScreen = () => (
  <div className="flex h-full flex-col bg-[#f7f9fb] pt-[31px] text-[#18201b]">
    <div className="flex items-center justify-between px-3 pb-2 pt-1">
      <div className="flex items-center gap-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#173426] font-display text-[10px] font-bold text-white">K</span>
        <span className="font-display text-[9px] font-semibold">KYRO</span>
      </div>
      <span className="font-display text-[13px] font-semibold">Discover</span>
      <div className="flex items-center gap-2">
        <Bell className="h-3.5 w-3.5" strokeWidth={1.7} />
        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#173426] text-white"><UserRound className="h-3.5 w-3.5" /></span>
      </div>
    </div>

    <div className="mx-3 rounded-lg bg-[#f0f3f1] px-2.5 py-2 text-[6.5px] text-[#355244]">
      <span className="mr-1 text-[#2d7a4b]">●</span> Discovering in London, 24 venues found
    </div>

    <div className="mx-3 mt-2 flex-1 overflow-hidden rounded-xl border border-[#e2e6e3] bg-white shadow-[0_5px_18px_rgba(20,36,27,0.06)]">
      <div className="p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="font-display text-[14px] font-semibold">Filter Gyms</h3>
            <span className="rounded-full bg-[#d8f1de] px-2 py-1 text-[6.5px] font-medium text-[#356145]">7 active</span>
          </div>
          <span className="text-[6.5px] text-[#5b6b62]">↻ Reset</span>
        </div>

        <div className="mt-3 flex items-center justify-between rounded-lg bg-[#f7f9f8] p-2.5">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#d7f1de] text-[#356145]"><Clock3 className="h-3.5 w-3.5" /></span>
            <div>
              <p className="text-[7.5px] font-medium">Open now</p>
              <p className="mt-0.5 text-[5.8px] text-[#718078]">Venues welcoming guests right now</p>
            </div>
          </div>
          <Switch />
        </div>

        <div className="mt-3">
          <p className="text-[7px] font-medium">Pass Type</p>
          <div className="mt-2 grid grid-cols-4 gap-1.5">
            {[
              ["All", "Access"],
              ["Day", "Pass"],
              ["Week", "Pass"],
              ["Month", "Pass"],
            ].map(([first, second], index) => (
              <span
                key={first}
                className={`rounded-lg px-1 py-2 text-center text-[6.5px] leading-tight ${
                  index === 0 ? "bg-[#173426] font-medium text-white" : "bg-[#f4f6f5] text-[#3e4a43]"
                }`}
              >
                {first}<br />{second}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-3 border-b border-[#e2e6e3] pb-3">
          <div className="flex items-center justify-between text-[7px]">
            <span className="font-medium">Price Range</span>
            <span className="font-medium text-[#376148]">£15 - £60 / day</span>
          </div>
          <div className="mt-2 flex h-10 items-end gap-1">
            {[10, 12, 17, 25, 31, 27, 21, 15, 9].map((height, index) => (
              <span
                key={index}
                className={`flex-1 rounded-t-sm ${index >= 2 && index <= 6 ? "bg-[#5f856c]" : "bg-[#e7ebe8]"}`}
                style={{ height }}
              />
            ))}
          </div>
          <div className="relative mt-2 h-[3px] rounded-full bg-[#dfe4e1]">
            <div className="absolute left-[20%] top-0 h-[3px] w-[48%] rounded-full bg-[#173426]" />
            <span className="absolute left-[66%] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#173426] ring-2 ring-white" />
          </div>
          <div className="mt-2 flex justify-between text-[5.5px] text-[#7a877f]"><span>£10</span><span>Avg. £35</span><span>£120+</span></div>
        </div>

        <div className="mt-3">
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-3.5 w-3.5" />
              <span className="text-[8px] font-semibold">Facilities</span>
              <span className="rounded-full bg-[#ecefed] px-1.5 py-1 text-[5.5px] text-[#67746d]">3 active</span>
            </div>
            <ChevronDown className="h-3 w-3" />
          </div>
          <div className="space-y-2.5">
            {[
              ["Free weights", true],
              ["Cardio equipment", true],
              ["CrossFit", false],
              ["Boxing", false],
              ["Functional training area", true],
            ].map(([label, on]) => (
              <div key={String(label)} className="flex items-center justify-between text-[7px]">
                <span className="flex items-center gap-2 text-[#4b5a52]"><Dumbbell className="h-3 w-3 text-[#64746b]" />{label}</span>
                <Switch on={Boolean(on)} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="mx-3 mb-3 mt-2 flex h-10 items-center justify-between rounded-lg bg-[#173426] px-3 text-white shadow-[0_6px_16px_rgba(20,52,37,0.16)]">
      <span className="flex items-center gap-2 text-[7px] font-semibold"><SlidersHorizontal className="h-3 w-3" /> Show 24 Gyms</span>
      <span className="rounded-full bg-white/10 px-2 py-1 text-[6px]">7 active</span>
    </div>
  </div>
);

const GymDetailScreen = () => (
  <div className="flex h-full flex-col bg-white pt-[31px] text-[#18201b]">
    <div className="relative h-[205px] overflow-hidden">
      <img src={heroGym} alt="Illustrative Riverside Athletic Club interior" className="h-full w-full object-cover" />
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/30 to-transparent" />
      <button className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#16261f]/85 text-white backdrop-blur-sm">
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg bg-white/95 shadow-sm">
        <Heart className="h-4 w-4" strokeWidth={1.8} />
      </button>
      <span className="absolute bottom-3 left-3 rounded-md bg-[#173426]/90 px-2 py-1.5 text-[6.5px] text-white backdrop-blur-sm">0.8 mi · London</span>
    </div>

    <div className="flex-1 px-3 pb-3 pt-3">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-display text-[13px] font-semibold leading-tight">Riverside Athletic Club</h3>
        <p className="whitespace-nowrap text-[10px] font-bold">£20 <span className="text-[6.5px] font-normal text-[#66746c]">/ day</span></p>
      </div>
      <p className="mt-2 text-[6.8px] leading-relaxed text-[#64736b]">Premium gym with extensive facilities and flexible access.</p>

      <div className="mt-3 flex gap-1.5">
        <AmenityChip>Pool</AmenityChip>
        <AmenityChip>Sauna</AmenityChip>
        <AmenityChip>CrossFit</AmenityChip>
        <AmenityChip>Cafe</AmenityChip>
      </div>

      <button className="mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-[#173426] text-[8px] font-semibold text-white shadow-[0_5px_14px_rgba(20,52,37,0.15)]">
        Book Pass <span>→</span>
      </button>

      <div className="mt-4 border-t border-[#e3e7e4] pt-3">
        <p className="text-[8px] font-semibold">About</p>
        <p className="mt-2 text-[6.7px] leading-[1.55] text-[#64736b]">A modern training facility with world-class equipment, recovery amenities and a welcoming community.</p>
        <div className="mt-3 space-y-2 text-[6.5px] text-[#53635a]">
          <div className="flex items-center gap-2"><Clock3 className="h-3 w-3" /> Open 6am - 10pm</div>
          <div className="flex items-center gap-2"><MapPin className="h-3 w-3" /> 2.1 miles from your location</div>
          <div className="flex items-center gap-2"><Map className="h-3 w-3" /> Show on map <span className="ml-auto">›</span></div>
        </div>
      </div>
    </div>
  </div>
);

const MobilePreview = () => (
  <div className="relative mx-auto mt-10 h-[590px] w-[306px] md:hidden">
    <div className="absolute bottom-3 left-1/2 h-12 w-[250px] -translate-x-1/2 rounded-full bg-[#193225]/15 blur-2xl" />
    <PhoneFrame
      className="relative h-[574px] w-[286px]"
      style={{ transform: "perspective(1200px) rotateY(-2deg) rotateZ(0.5deg)" }}
      side="right"
      ariaLabel="Kyro app preview"
    >
      <DiscoverScreen />
    </PhoneFrame>
  </div>
);

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background pt-20 lg:pt-24">
      <div className="pointer-events-none absolute right-[5%] top-[18%] hidden h-[520px] w-[760px] rounded-full bg-[radial-gradient(circle,rgba(45,78,58,0.075),transparent_67%)] lg:block" />

      <div className="mx-auto max-w-[1480px] px-6 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 pb-8 pt-12 lg:min-h-[720px] lg:grid-cols-[0.82fr_1.18fr] lg:gap-6 lg:pb-4 lg:pt-8">
          <div className="relative z-10 max-w-[610px]">
            <div className="mb-8 inline-flex items-center rounded-full bg-[#eef1ef] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#173426]">
              Launching globally soon
            </div>

            <h1 className="font-display text-[54px] font-extrabold leading-[0.98] tracking-[-0.045em] text-[#173426] sm:text-[64px] lg:text-[74px] xl:text-[78px]">
              Train anywhere.
              <br />
              Train Kyro.
            </h1>

            <p className="mt-7 max-w-[590px] text-[20px] leading-[1.45] text-[#62776d] sm:text-[22px] lg:text-[23px]">
              Find gyms. Compare facilities. Buy flexible passes.
              <br className="hidden sm:block" />
              No memberships. No calling around.
            </p>

            <div className="mt-9 max-w-[565px]">
              <WaitlistForm variant="hero" />
            </div>

            <div className="mt-5 flex flex-wrap gap-x-9 gap-y-3 text-[13px] text-[#5f766a]">
              {["Global launch", "Founding member perks", "No spam"].map((item) => (
                <span key={item} className="flex items-center gap-2.5">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#6fc58a] bg-[#f4fbf6]">
                    <Check className="h-3.5 w-3.5 text-[#3e9b5a]" strokeWidth={2} />
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto hidden h-[650px] w-full max-w-[790px] md:block" aria-label="Kyro app preview using illustrative gyms">
            <div className="absolute bottom-[24px] left-[7%] h-16 w-[86%] rounded-full bg-[#173426]/14 blur-3xl" />
            <div className="absolute bottom-[42px] left-[14%] h-10 w-[72%] rounded-full bg-black/10 blur-2xl" />

            <PhoneFrame
              className="absolute left-[1%] top-[76px] z-10 h-[550px] w-[246px]"
              style={{ transform: "perspective(1450px) rotateY(10deg) rotateZ(-2.2deg)" }}
              side="left"
              ariaLabel="Kyro Discover screen with active pass"
            >
              <DiscoverScreen />
            </PhoneFrame>

            <PhoneFrame
              className="absolute left-1/2 top-[4px] z-30 h-[620px] w-[278px] -translate-x-1/2"
              style={{ transform: "perspective(1450px) rotateY(-1deg) translateZ(18px)" }}
              ariaLabel="Kyro gym filter screen"
            >
              <FilterScreen />
            </PhoneFrame>

            <PhoneFrame
              className="absolute right-[1%] top-[76px] z-20 h-[555px] w-[250px]"
              style={{ transform: "perspective(1450px) rotateY(-10deg) rotateZ(2.2deg)" }}
              side="right"
              ariaLabel="Kyro gym detail screen"
            >
              <GymDetailScreen />
            </PhoneFrame>
          </div>

          <MobilePreview />
        </div>

        <div className="grid gap-7 border-t border-[#dfe3e0] py-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:py-10">
          {[
            { Icon: Globe2, title: "Built for travellers", text: "Train in new cities with ease" },
            { Icon: Zap, title: "Flexible access", text: "Day, week or month passes" },
            { Icon: MapPin, title: "Global launch", text: "More cities coming soon" },
            { Icon: Users, title: "A stronger you", text: "Wherever you go" },
          ].map(({ Icon, title, text }) => (
            <div key={title} className="flex items-center gap-4">
              <Icon className="h-8 w-8 shrink-0 text-[#355646]" strokeWidth={1.65} />
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.07em] text-[#294c3b]">{title}</p>
                <p className="mt-1 text-[13px] text-[#677c71]">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
