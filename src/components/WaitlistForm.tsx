import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface WaitlistFormProps {
  variant?: "hero" | "section";
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    clarity?: (...args: any[]) => void;
  }
}

const trackEvent = (eventName: string, eventParams = {}) => {
  if (typeof window === "undefined") return;

  window.gtag?.("event", eventName, {
    page_path: window.location.pathname,
    page_location: window.location.href,
    ...eventParams,
  });

  window.clarity?.("event", eventName);
};

const WaitlistForm = ({ variant = "hero" }: WaitlistFormProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const handleStart = () => {
    if (!hasStarted) {
      trackEvent("waitlist_start", { form_variant: variant });
      setHasStarted(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    trackEvent("waitlist_submit_attempt", { form_variant: variant });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      trackEvent("waitlist_invalid_email", { form_variant: variant });
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
const emailToSend = email.toLowerCase().trim();

const urlParams = new URLSearchParams(window.location.search);

const getStoredOrCurrentParam = (key: string) => {
  const currentValue = urlParams.get(key);

  if (currentValue) {
    localStorage.setItem(key, currentValue);
    return currentValue;
  }

  return localStorage.getItem(key);
};

const attributionData = {
  email: emailToSend,
  utm_source: getStoredOrCurrentParam("utm_source"),
  utm_medium: getStoredOrCurrentParam("utm_medium"),
  utm_campaign: getStoredOrCurrentParam("utm_campaign"),
  landing_page: window.location.pathname,
  referrer: document.referrer || null,
};

const { error } = await supabase
  .from("waitlist")
  .insert(attributionData);

      if (error) {
        if (error.code === "23505") {
          trackEvent("waitlist_duplicate", { form_variant: variant });
          toast.info("You're already on the waitlist!");
        } else {
          trackEvent("waitlist_error", {
            form_variant: variant,
            error_code: error.code,
          });
          console.error("Waitlist insert error:", error);
          toast.error("Something went wrong. Please try again.");
          return;
        }
      } else {
        trackEvent("waitlist_success", { form_variant: variant });
      }

      const res = await fetch(
        "https://cnufqucnqdbscnskwgno.supabase.co/functions/v1/send-waitlist-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({
            email: emailToSend,
          }),
        }
      );

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        console.error("Edge Function failed:", res.status, err);

        trackEvent("waitlist_email_failed", {
          form_variant: variant,
          status: res.status,
        });

        toast.success("You're on the waitlist! We'll be in touch soon.");
      } else {
        trackEvent("waitlist_email_sent", { form_variant: variant });
        toast.success("You're on the waitlist! Check your email 📩");
      }

      setIsSubmitted(true);
      setEmail("");
      setHasStarted(false);
    } catch (err) {
      trackEvent("waitlist_submit_crash", { form_variant: variant });
      console.error("Submit error:", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  if (variant === "hero") {
    return (
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="flex flex-col gap-3 sm:flex-row">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onFocus={handleStart}
            onChange={(e) => setEmail(e.target.value)}
            className="h-14 flex-1 bg-card/90 backdrop-blur-sm text-base"
            disabled={isSubmitting || isSubmitted}
          />
          <Button
            type="submit"
            variant="hero"
            size="lg"
            className="h-14 min-w-[160px]"
            disabled={isSubmitting || isSubmitted}
          >
            {isSubmitting ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : isSubmitted ? (
              <>
                <Check className="h-5 w-5" />
                Joined!
              </>
            ) : (
              <>
                Join Waitlist
                <ArrowRight className="h-5 w-5" />
              </>
            )}
          </Button>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          Join the founding waitlist. Early access, exclusive perks and a growing
          community.
        </p>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-lg">
      <div className="flex flex-col gap-3 sm:flex-row">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onFocus={handleStart}
          onChange={(e) => setEmail(e.target.value)}
          className="h-14 flex-1 text-base"
          disabled={isSubmitting || isSubmitted}
        />
        <Button
          type="submit"
          variant="hero"
          size="lg"
          className="h-14 min-w-[180px]"
          disabled={isSubmitting || isSubmitted}
        >
          {isSubmitting ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : isSubmitted ? (
            <>
              <Check className="h-5 w-5" />
              You're in!
            </>
          ) : (
            <>
              Get Early Access
              <ArrowRight className="h-5 w-5" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
};

export default WaitlistForm;
