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
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
    });
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
  subject: "You’re officially in! Welcome to the Kyro founding group 🚀",
  html: `
    <div style="font-family: Arial, Helvetica, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #111;">
      
      <h1 style="font-size: 24px; margin-bottom: 16px;">
        Welcome to Kyro 👋
      </h1>

      <p style="font-size: 16px; line-height: 1.6;">
        You’re officially on the <strong>Kyro founding waitlist</strong> and that actually means something.
      </p>

      <p style="font-size: 16px; line-height: 1.6;">
        Kyro is being built for people who train while travelling, working remotely, or living abroad
        and as an early member, you’ll help shape what we build next.
      </p>

      <hr style="margin: 24px 0;" />

      <h2 style="font-size: 20px; margin-bottom: 12px;">
        🎯 What you get as a founding member
      </h2>

      <ul style="font-size: 16px; line-height: 1.6; padding-left: 20px;">
        <li>Early access before public launch</li>
        <li>Direct feedback line to the founders</li>
        <li>Exclusive giveaways and perks (free passes, upgrades, partner rewards and more!)</li>
        <li>Influence on features and partner gyms</li>
      </ul>

      <hr style="margin: 24px 0;" />

      <h2 style="font-size: 20px; margin-bottom: 12px;">
        💬 Join the Kyro community
      </h2>

      <p style="font-size: 16px; line-height: 1.6;">
        We’ve set up a private community where founding members can:
      </p>

      <ul style="font-size: 16px; line-height: 1.6; padding-left: 20px;">
        <li>Get behind the scenes updates</li>
        <li>Help shape what Kyro becomes</li>
        <li>Enter exclusive giveaways</li>
        <li>Connect with other travellers & gym-goers</li>
      </ul>

      <div style="margin: 24px 0; text-align: center;">
        <a
          href="https://discord.gg/JBPKhxzAh2"
          style="
            display: inline-block;
            padding: 14px 24px;
            background-color: #111;
            color: #fff;
            text-decoration: none;
            font-size: 16px;
            border-radius: 6px;
          "
        >
          👉 Join the Kyro Discord
        </a>
      </div>

      <p style="font-size: 14px; line-height: 1.6; color: #555;">
        Not on Discord? No problem, we’ll also be sending occasional email updates with early access and important announcements.
      </p>

     <div style="margin-top: 24px; font-family: Arial, sans-serif; color: #333;">
  <p style="font-size: 16px; line-height: 1.6; margin: 0;">
    Thanks for backing Kyro early! We’re excited to build this with you.
  </p>

  <div style="margin-top: 24px; line-height: 1.4;">
    <p style="margin: 0; font-weight: bold; font-size: 16px;">Robert & Andrew</p>
    <p style="margin: 0; font-size: 14px; color: #555;">Founders of Kyro</p>
    <p style="margin: 0; font-size: 14px; color: #555; font-style: italic;">Train Anywhere. Train Kyro.</p>
  </div>
</div>
  `,
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
