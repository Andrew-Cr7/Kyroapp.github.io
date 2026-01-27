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
 
serve(async (req) => {
  // ✅ Preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  console.log("send-waitlist-email invoked");

  try {
    const body = await req.json();
    console.log("Incoming payload:", body);

    const { email } = body;

    if (!email || typeof email !== "string" || email.length > 255) {
      console.warn("Invalid email:", email);
      return new Response(
        JSON.stringify({ error: "Invalid email" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const result = await resend.emails.send({
      from: "Kyro <info@kyroapp.co>", // must be verified in Resend
      to: [email],
      subject: "Welcome to the Kyro waitlist",
      html: `<p>You're on the list — we'll be in touch soon.</p>`,
    });

    console.log("Resend response:", result);

    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (e) {
    console.error("Edge function error:", e);

    return new Response(
      JSON.stringify({ error: "Failed to send email" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
