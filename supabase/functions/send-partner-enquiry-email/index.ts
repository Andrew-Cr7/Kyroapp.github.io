import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

if (!RESEND_API_KEY) {
  console.error("RESEND_API_KEY not set");
  throw new Error("RESEND_API_KEY not set");
}

const resend = new Resend(RESEND_API_KEY);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

type PartnerEnquiryPayload = {
  gymName?: string;
  contactName?: string;
  email?: string;
  phone?: string;
  city?: string;
  country?: string;
  website?: string;
  message?: string;
  landingPage?: string;
};

const requiredFields: Array<keyof PartnerEnquiryPayload> = [
  "gymName",
  "contactName",
  "email",
  "city",
  "country",
  "website",
  "message",
];

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const normaliseField = (value: unknown) =>
  typeof value === "string" ? value.trim().slice(0, 1000) : "";

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const body = (await req.json().catch(() => ({}))) as PartnerEnquiryPayload;

    const enquiry = {
      gymName: normaliseField(body.gymName),
      contactName: normaliseField(body.contactName),
      email: normaliseField(body.email).toLowerCase(),
      phone: normaliseField(body.phone),
      city: normaliseField(body.city),
      country: normaliseField(body.country),
      website: normaliseField(body.website),
      message: normaliseField(body.message),
      landingPage: normaliseField(body.landingPage),
    };

    const missingField = requiredFields.find((field) => !enquiry[field]);

    if (missingField) {
      return new Response(
        JSON.stringify({ error: `Missing required field: ${missingField}` }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(enquiry.email)) {
      return new Response(JSON.stringify({ error: "Invalid email" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const submittedAt = new Date().toISOString();

    const result = await resend.emails.send({
      from: "Kyro <info@kyroapp.co>",
      to: ["sales@kyroapp.co"],
      reply_to: enquiry.email,
      subject: `New gym partner enquiry: ${enquiry.gymName}`,
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; max-width: 680px; margin: 0 auto; padding: 24px; color: #111;">
          <h1 style="font-size: 24px; margin-bottom: 16px;">New gym partner enquiry</h1>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tbody>
              ${[
                ["Gym name", enquiry.gymName],
                ["Contact name", enquiry.contactName],
                ["Email", enquiry.email],
                ["Phone", enquiry.phone || "Not provided"],
                ["City", enquiry.city],
                ["Country", enquiry.country],
                ["Website", enquiry.website],
                ["Landing page", enquiry.landingPage || "Not provided"],
                ["Submitted at", submittedAt],
              ]
                .map(
                  ([label, value]) => `
                    <tr>
                      <td style="border: 1px solid #E5E0D4; padding: 10px; font-weight: bold; background: #F4EFE4; width: 32%;">${escapeHtml(label)}</td>
                      <td style="border: 1px solid #E5E0D4; padding: 10px;">${escapeHtml(value)}</td>
                    </tr>
                  `,
                )
                .join("")}
            </tbody>
          </table>

          <h2 style="font-size: 18px; margin-bottom: 8px;">Message</h2>
          <p style="font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(enquiry.message)}</p>
        </div>
      `,
    });

    console.log("Partner enquiry email sent:", result);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Partner enquiry function error:", error);

    return new Response(JSON.stringify({ error: "Failed to send enquiry" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
