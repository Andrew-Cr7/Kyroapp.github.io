import { useState } from "react";
import { ArrowRight, Check, Loader2, LockKeyhole } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { trackEvent } from "@/lib/analytics";

type PartnerFormData = {
  gymName: string;
  contactName: string;
  email: string;
  city: string;
};

const initialFormData: PartnerFormData = {
  gymName: "",
  contactName: "",
  email: "",
  city: "",
};

const requiredFields: Array<keyof PartnerFormData> = [
  "gymName",
  "contactName",
  "email",
  "city",
];

const labelClassName = "text-sm font-semibold text-foreground";

const PartnerEnquiryForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const handleStart = () => {
    if (!hasStarted) {
      trackEvent("partner_form_start");
      setHasStarted(true);
    }
  };

  const updateField = (field: keyof PartnerFormData, value: string) => {
    handleStart();
    setFormData((currentData) => ({ ...currentData, [field]: value }));
  };

  const validateForm = () => {
    const missingField = requiredFields.find(
      (field) => !formData[field].trim(),
    );

    if (missingField) {
      toast.error("Please complete all four fields.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email.trim())) {
      toast.error("Please enter a valid work email address.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const payload = {
        gymName: formData.gymName.trim(),
        contactName: formData.contactName.trim(),
        email: formData.email.toLowerCase().trim(),
        city: formData.city.trim(),
        phone: "",
        country: "",
        website: "",
        message: "Founding Gym application submitted through the simplified Kyro partner form.",
        landingPage: window.location.pathname,
      };

      const response = await fetch(
        "https://cnufqucnqdbscnskwgno.supabase.co/functions/v1/send-partner-enquiry-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify(payload),
        },
      );

      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        console.error("Partner enquiry failed:", response.status, error);
        toast.error("Something went wrong. Please email sales@kyroapp.co.");
        return;
      }

      trackEvent("partner_form_submit", {
        city: payload.city,
        form_version: "simplified_v2",
      });

      toast.success("Application sent. We will be in touch soon.");
      setIsSubmitted(true);
      setFormData(initialFormData);
      setHasStarted(false);
    } catch (error) {
      console.error("Partner enquiry submit error:", error);
      toast.error("Something went wrong. Please email sales@kyroapp.co.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <label className={labelClassName} htmlFor="gym-name">
          Gym name
        </label>
        <Input
          id="gym-name"
          value={formData.gymName}
          onChange={(event) => updateField("gymName", event.target.value)}
          onFocus={handleStart}
          disabled={isSubmitting || isSubmitted}
          required
          placeholder="Your gym"
          className="h-12 rounded-xl bg-background px-4"
        />
      </div>

      <div className="space-y-2">
        <label className={labelClassName} htmlFor="contact-name">
          Your name
        </label>
        <Input
          id="contact-name"
          value={formData.contactName}
          onChange={(event) => updateField("contactName", event.target.value)}
          onFocus={handleStart}
          disabled={isSubmitting || isSubmitted}
          required
          placeholder="First and last name"
          className="h-12 rounded-xl bg-background px-4"
        />
      </div>

      <div className="space-y-2">
        <label className={labelClassName} htmlFor="partner-email">
          Work email
        </label>
        <Input
          id="partner-email"
          type="email"
          value={formData.email}
          onChange={(event) => updateField("email", event.target.value)}
          onFocus={handleStart}
          disabled={isSubmitting || isSubmitted}
          required
          placeholder="you@yourgym.com"
          className="h-12 rounded-xl bg-background px-4"
        />
      </div>

      <div className="space-y-2">
        <label className={labelClassName} htmlFor="partner-city">
          City
        </label>
        <Input
          id="partner-city"
          value={formData.city}
          onChange={(event) => updateField("city", event.target.value)}
          onFocus={handleStart}
          disabled={isSubmitting || isSubmitted}
          required
          placeholder="Your city"
          className="h-12 rounded-xl bg-background px-4"
        />
      </div>

      <Button
        type="submit"
        variant="hero"
        size="lg"
        className="h-14 w-full rounded-xl text-base font-semibold"
        disabled={isSubmitting || isSubmitted}
      >
        {isSubmitting ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : isSubmitted ? (
          <>
            <Check className="h-5 w-5" />
            Application sent
          </>
        ) : (
          <>
            Apply to join Kyro
            <ArrowRight className="h-5 w-5" />
          </>
        )}
      </Button>

      <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
        <LockKeyhole className="h-3.5 w-3.5" />
        No setup fees. No commitment to apply.
      </div>
    </form>
  );
};

export default PartnerEnquiryForm;
