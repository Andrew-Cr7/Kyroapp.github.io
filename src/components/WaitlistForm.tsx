import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface WaitlistFormProps {
  variant?: "hero" | "section";
}

const WaitlistForm = ({ variant = "hero" }: WaitlistFormProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      // 1️⃣ Insert into waitlist
      const { error } = await supabase
        .from("waitlist")
        .insert({ email: email.toLowerCase().trim() });

      if (error) {
        if (error.code === "23505") {
          toast.info("You're already on the waitlist!");
        } else {
          console.error("Waitlist insert error:", error);
          toast.error("Something went wrong. Please try again.");
          return;
        }
      }

      // 2️⃣ Call Edge Function (send email)
      const { error: functionError } = await supabase.functions.invoke(
        "send-waitlist-email",
        {
          body: { email: email.toLowerCase().trim() },
        }
      );

      if (functionError) {
        console.error("Edge function error:", functionError);
        toast.success(
          "You're on the waitlist! Email couldn't be sent, but we'll be in touch."
        );
      } else {
        toast.success("You're on the waitlist! Check your email 📩");
      }

      setIsSubmitted(true);
      setEmail("");

      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (err) {
      console.error("Waitlist submission error:", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ---------------- HERO VARIANT ---------------- */

  if (variant === "hero") {
    return (
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="flex flex-col gap-3 sm:flex-row">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
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
          Join the founding waitlist. Early access, exclusive perks and a growing community.
        </p>
      </form>
    );
  }

  /* ---------------- SECTION VARIANT ---------------- */

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-lg">
      <div className="flex flex-col gap-3 sm:flex-row">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
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
