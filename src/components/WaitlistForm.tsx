import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { toast } from "sonner";

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
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("You're on the list! We'll be in touch soon.");
    setEmail("");
    
    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

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
          Be first to know when we launch. No spam, ever.
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
