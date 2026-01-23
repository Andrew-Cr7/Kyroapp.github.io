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
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      // 1️⃣ Insert into Supabase table
      const { error } = await supabase
  .from("waitlist")
  .upsert(
    { email },
    { onConflict: "email", ignoreDuplicates: true }
  );
      if (error) {
        console.error("Supabase insert error:", error);
        toast.error("Failed to join waitlist. Try again later.");
        setIsSubmitting(false);
        return;
      }

    // 2️⃣ Call Edge Function (CORS-safe)
const { error: functionError } = await supabase.functions.invoke(
  "send-waitlist-email",
  {
    body: { email },
  }
);

if (functionError) {
  console.error("Edge Function error:", functionError);
  toast.success(
    "You're on the waitlist! Email could not be sent, but we'll notify you soon."
  );
} else {
  toast.success("You're on the waitlist! Check your email.");
}

      // Reset UI
      setEmail("");
      setIsSubmitted(true);
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
    <form
      onSubmit={handleSubmit}
      className={variant === "hero" ? "w-full max-w-md" : "mx-auto w-full max-w-lg"}
    >
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
