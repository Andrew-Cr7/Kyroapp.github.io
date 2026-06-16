import { useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { trackEvent } from "@/lib/analytics";

type PartnerFormData = {
  gymName: string;
  contactName: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  website: string;
  message: string;
};

const initialFormData: PartnerFormData = {
  gymName: "",
  contactName: "",
  email: "",
  phone: "",
  city: "",
  country: "",
  website: "",
  message: "",
};

const requiredFields: Array<keyof PartnerFormData> = [
  "gymName",
  "contactName",
  "email",
  "city",
  "country",
  "website",
  "message",
];

const labelClassName = "text-sm font-medium leading-none";

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
      toast.error("Please complete all required fields.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email.trim())) {
      toast.error("Please enter a valid email address.");
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
        phone: formData.phone.trim(),
        city: formData.city.trim(),
        country: formData.country.trim(),
        website: formData.website.trim(),
        message: formData.message.trim(),
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
        country: payload.country,
      });

      toast.success("Thanks. We will be in touch soon.");
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
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <label className={labelClassName} htmlFor="gym-name">
            Gym name *
          </label>
          <Input
            id="gym-name"
            value={formData.gymName}
            onChange={(event) => updateField("gymName", event.target.value)}
            onFocus={handleStart}
            disabled={isSubmitting}
            required
          />
        </div>

        <div className="space-y-2">
          <label className={labelClassName} htmlFor="contact-name">
            Contact name *
          </label>
          <Input
            id="contact-name"
            value={formData.contactName}
            onChange={(event) =>
              updateField("contactName", event.target.value)
            }
            onFocus={handleStart}
            disabled={isSubmitting}
            required
          />
        </div>

        <div className="space-y-2">
          <label className={labelClassName} htmlFor="partner-email">
            Email *
          </label>
          <Input
            id="partner-email"
            type="email"
            value={formData.email}
            onChange={(event) => updateField("email", event.target.value)}
            onFocus={handleStart}
            disabled={isSubmitting}
            required
          />
        </div>

        <div className="space-y-2">
          <label className={labelClassName} htmlFor="partner-phone">
            Phone number
          </label>
          <Input
            id="partner-phone"
            type="tel"
            value={formData.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            onFocus={handleStart}
            disabled={isSubmitting}
          />
        </div>

        <div className="space-y-2">
          <label className={labelClassName} htmlFor="partner-city">
            City *
          </label>
          <Input
            id="partner-city"
            value={formData.city}
            onChange={(event) => updateField("city", event.target.value)}
            onFocus={handleStart}
            disabled={isSubmitting}
            required
          />
        </div>

        <div className="space-y-2">
          <label className={labelClassName} htmlFor="partner-country">
            Country *
          </label>
          <Input
            id="partner-country"
            value={formData.country}
            onChange={(event) => updateField("country", event.target.value)}
            onFocus={handleStart}
            disabled={isSubmitting}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className={labelClassName} htmlFor="partner-website">
          Website *
        </label>
        <Input
          id="partner-website"
          type="url"
          placeholder="https://"
          value={formData.website}
          onChange={(event) => updateField("website", event.target.value)}
          onFocus={handleStart}
          disabled={isSubmitting}
          required
        />
      </div>

      <div className="space-y-2">
        <label className={labelClassName} htmlFor="partner-message">
          Message *
        </label>
        <Textarea
          id="partner-message"
          value={formData.message}
          onChange={(event) => updateField("message", event.target.value)}
          onFocus={handleStart}
          disabled={isSubmitting}
          required
          className="min-h-32"
          placeholder="Tell us about your gym and what you would like to explore with Kyro."
        />
      </div>

      <Button
        type="submit"
        variant="hero"
        size="lg"
        className="w-full sm:w-auto"
        disabled={isSubmitting || isSubmitted}
      >
        {isSubmitting ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : isSubmitted ? (
          <>
            <Check className="h-5 w-5" />
            Sent
          </>
        ) : (
          <>
            Request a conversation
            <ArrowRight className="h-5 w-5" />
          </>
        )}
      </Button>
    </form>
  );
};

export default PartnerEnquiryForm;
