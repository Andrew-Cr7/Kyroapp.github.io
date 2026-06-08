import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from "npm:@supabase/supabase-js@2";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

if (!RESEND_API_KEY) {
  console.error("RESEND_API_KEY not set");
  throw new Error("RESEND_API_KEY not set");
}

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error("Supabase environment variables not set");
  throw new Error("Supabase environment variables not set");
}

const resend = new Resend(RESEND_API_KEY);

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const REFERRAL_TARGET = 3;
const REFERRAL_REWARD_TEXT = "founding member rewards, launch perks, and early access benefits";

function generateReferralCode(email: string) {
  const emailPart = email
    .split("@")[0]
    .replace(/[^a-zA-Z0-9]/g, "")
    .slice(0, 4)
    .toUpperCase();

  const randomPart = crypto.randomUUID()
    .replace(/-/g, "")
    .slice(0, 8)
    .toUpperCase();

  return `${emailPart}${randomPart}`;
}

serve(async (req) => {
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

      return new Response(JSON.stringify({ error: "Invalid email" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const normalisedEmail = email.toLowerCase().trim();

    const { data: existingUser, error: fetchError } = await supabase
      .from("waitlist")
      .select("id, email, referral_code, referral_count")
      .eq("email", normalisedEmail)
      .single();

    if (fetchError || !existingUser) {
      console.error("Could not find waitlist user:", fetchError);

      return new Response(JSON.stringify({ error: "Waitlist user not found" }), {
        status: 404,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    let referralCode = existingUser.referral_code;

    if (!referralCode) {
      referralCode = generateReferralCode(normalisedEmail);

      const { error: updateError } = await supabase
        .from("waitlist")
        .update({ referral_code: referralCode })
        .eq("id", existingUser.id);

      if (updateError) {
        console.error("Could not save referral code:", updateError);

        return new Response(
          JSON.stringify({ error: "Could not save referral code" }),
          {
            status: 500,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
    }

    const referralLink = `https://kyroapp.co?ref=${referralCode}`;

    const result = await resend.emails.send({
      from: "Kyro <info@kyroapp.co>",
      to: [normalisedEmail],
      subject: "You’re in. Your Kyro referral link is inside 🚀",
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #111;">
          
          <h1 style="font-size: 24px; margin-bottom: 16px;">
            You’re in. Welcome to Kyro 👋
          </h1>

          <p style="font-size: 16px; line-height: 1.6;">
            You’re officially on the <strong>Kyro founding waitlist</strong>.
          </p>

          <p style="font-size: 16px; line-height: 1.6;">
            We’re building Kyro because finding a proper gym while travelling, working remotely, or living abroad is still far harder than it should be.
          </p>

          <p style="font-size: 16px; line-height: 1.6;">
            We’ve dealt with it ourselves: expensive day passes, confusing sign-up rules, gyms needing local phone numbers, and wasting time searching instead of just training.
          </p>

          <p style="font-size: 16px; line-height: 1.6;">
            Kyro is being built to fix that. One place to find gyms, buy flexible passes, and train wherever you are.
          </p>

          <div style="background-color: #F4EFE4; padding: 18px; border-radius: 8px; margin: 24px 0;">
            <h2 style="font-size: 20px; margin: 0 0 12px;">
              Unlock founding rewards
            </h2>

            <p style="font-size: 16px; line-height: 1.6; margin: 0 0 12px;">
              Refer <strong>${REFERRAL_TARGET} friends</strong> to the Kyro waitlist and you’ll unlock ${REFERRAL_REWARD_TEXT}.
            </p>

            <p style="font-size: 16px; line-height: 1.6; margin: 0;">
              Your personal referral link:
            </p>

            <p style="font-size: 16px; line-height: 1.6; word-break: break-all; margin: 8px 0 0;">
              <strong>${referralLink}</strong>
            </p>
          </div>

          <div style="margin: 24px 0; text-align: center;">
            <a
              href="${referralLink}"
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
              Share your Kyro link
            </a>
          </div>

          <p style="font-size: 14px; line-height: 1.6; color: #555;">
            Your friends just need to join the waitlist through your link. We’ll track referrals automatically.
          </p>

          <p style="font-size: 16px; line-height: 1.6;">
            Thanks for backing Kyro early. We’re building this for people who don’t want travel to interrupt their training.
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
      JSON.stringify({
        success: true,
        referral_code: referralCode,
        referral_link: referralLink,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (e) {
    console.error("Edge function error:", e);

    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
