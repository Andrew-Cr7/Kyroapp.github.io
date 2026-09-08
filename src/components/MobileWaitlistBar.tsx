import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const MobileWaitlistBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      if (window.innerWidth >= 768) {
        setIsVisible(false);
        return;
      }

      const waitlistSection = document.getElementById("waitlist");
      const hasPassedHero = window.scrollY > Math.max(window.innerHeight * 0.72, 520);

      if (!waitlistSection) {
        setIsVisible(hasPassedHero);
        return;
      }

      const waitlistRect = waitlistSection.getBoundingClientRect();
      const waitlistIsNearOrVisible =
        waitlistRect.top < window.innerHeight * 0.9 && waitlistRect.bottom > 0;

      setIsVisible(hasPassedHero && !waitlistIsNearOrVisible);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  const handleClick = () => {
    trackEvent("sticky_waitlist_click", { location: "mobile_sticky_bar" });
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] transition-all duration-300 md:hidden ${
        isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
      aria-hidden={!isVisible}
    >
      <div className="mx-auto flex max-w-md items-center gap-3 rounded-2xl border border-border/80 bg-background/95 p-3 shadow-[0_-8px_30px_rgba(24,37,28,0.12)] backdrop-blur-xl">
        <div className="min-w-0 flex-1 pl-1">
          <p className="font-display text-sm font-semibold leading-tight text-foreground">
            Train anywhere.
          </p>
          <p className="mt-0.5 truncate text-xs text-muted-foreground">
            Join the Kyro founding waitlist
          </p>
        </div>

        <button
          type="button"
          onClick={handleClick}
          className="inline-flex h-11 shrink-0 items-center justify-center gap-1.5 rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Join Waitlist
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default MobileWaitlistBar;
