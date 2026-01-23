// src/components/WaitlistForm.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client"; // Make sure this path is correct

interface WaitlistFormProps {
  variant?: "hero" | "section";
}

const WaitlistForm = ({ variant = "hero" }: WaitlistFormProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      // 1️⃣ Add to Supabase waitlist table
      const { error: insertError } = await supabase.from("waitlist").insert([{ email }]);

      if (insertError) {
        console.error("Supabase insert error:", insertError);
        toast.error("Failed to add to waitlist. Try again later.");
        setIsSubmitting(false);
        return;
      }

      // 2️⃣ Call Supabase Edge Function to send confirmation email via Resend
      const response = await fetch("/functions/v1/send-waitlist-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const text = await response.text();
        console.error("Edge Function error:", text);
        toast.error("Failed to send confirmation email.");
      } else {
        toast.success("You're on the waitlist! Check your email.");
      }

      // Success UI
      setIsSubmitted(true);
      setEmail("");

      // Reset form state after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "h-14 flex-1 text-base bg-card/90 backdrop-blur-sm";

  return (
    <form onSubmit={handleSubmit} className={variant === "hero" ? "w-full max-w-md" : "mx-auto w-full max-w-lg"}>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
          disabled={isSubmitting || isSubmitted}
        />
        <Button
          type="submit"
          variant="hero"
          size="lg"
          className="h-14 min-w-[160px] sm:min-w-[180px]"
          disabled={isSubmitting || isSubmitted}
        >
          {isSubmitting ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : isSubmitted ? (
            <>
              <Check className="h-5 w-5" />
              {variant === "hero" ? "Joined!" : "You're in!"}
            </>
          ) : (
            <>
              {variant === "hero" ? "Join Waitlist" : "Get Early Access"}
              <ArrowRight className="h-5 w-5" />
            </>
          )}
        </Button>
      </div>
      {variant === "hero" && (
        <p className="mt-3 text-sm text-muted-foreground">
          Join the founding waitlist. Early access, exclusive perks and a growing community.
        </p>
      )}
    </form>
  );
};

export default WaitlistForm;
