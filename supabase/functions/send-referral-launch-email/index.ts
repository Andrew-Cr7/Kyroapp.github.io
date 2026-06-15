import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from "npm:@supabase/supabase-js@2";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

if (!RESEND_API_KEY) throw new Error("RESEND_API_KEY not set");
if (!SUPABASE_URL) throw new Error("SUPABASE_URL not set");
if (!SUPABASE_SERVICE_ROLE_KEY) throw new Error("SUPABASE_SERVICE_ROLE_KEY not set");

const resend = new Resend(RESEND_API_KEY);
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const REFERRAL_TARGET = 3;
const REFERRAL_REWARD_TEXT =
  "founding member rewards, launch perks, and early access benefits";

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
      headers: corsHeaders,
    });
  }

  try {
    const body = await req.json().catch(() => ({}));

    const dryRun = body.dryRun === true;
    const limit = body.limit || 10;
    const testEmail = body.email;

let query = supabase
  .from("waitlist")
  .select("id, email, referral_code, referral_email_sent");

if (testEmail) {
  query = query.eq("email", testEmail.toLowerCase().trim());
} else {
  query = query
    .or("referral_email_sent.is.null,referral_email_sent.eq.false")
    .not("email", "is", null)
    .limit(limit);
}

const { data: users, error } = await query;

    if (error) {
      console.error("Fetch users error:", error);
      return new Response(JSON.stringify({ error: "Could not fetch users" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!users || users.length === 0) {
      return new Response(
        JSON.stringify({
          success: true,
          message: "No users left to email",
          sent: 0,
        }),
        {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const results = [];

    for (const user of users) {
      const email = user.email?.toLowerCase().trim();

      if (!email) continue;

      let referralCode = user.referral_code;

      if (!referralCode) {
        referralCode = generateReferralCode(email);

        const { error: updateCodeError } = await supabase
          .from("waitlist")
          .update({ referral_code: referralCode })
          .eq("id", user.id);

        if (updateCodeError) {
          console.error("Could not save referral code:", updateCodeError);
          results.push({ email, status: "failed_to_save_referral_code" });
          continue;
        }
      }

      const referralLink = `https://kyroapp.co?ref=${referralCode}`;

      if (dryRun) {
        results.push({
          email,
          referralCode,
          referralLink,
          status: "dry_run_only",
        });
        continue;
      }

      const result = await resend.emails.send({
        from: "Kyro <info@kyroapp.co>",
        to: [email],
        subject: "Your Kyro referral link is ready 🚀",
        html: `
          <div style="font-family: Arial, Helvetica, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #111;">
            
            <h1 style="font-size: 24px; margin-bottom: 16px;">
              Your Kyro referral link is ready 👋
            </h1>

            <p style="font-size: 16px; line-height: 1.6;">
              You’re already on the <strong>Kyro founding waitlist</strong>, so we wanted to make sure you don’t miss out on the referral rewards we’re opening up before launch.
            </p>

            <p style="font-size: 16px; line-height: 1.6;">
              We’re building Kyro because finding a proper gym while travelling, working remotely, or living abroad is still far harder than it should be.
            </p>

            <p style="font-size: 16px; line-height: 1.6;">
              Now you can invite friends who train, travel, or want flexible gym access too.
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

      console.log("Resend result:", result);

      const { error: markSentError } = await supabase
        .from("waitlist")
        .update({ referral_email_sent: true })
        .eq("id", user.id);

      if (markSentError) {
        console.error("Could not mark referral email sent:", markSentError);
        results.push({ email, status: "sent_but_not_marked" });
      } else {
        results.push({ email, status: "sent" });
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        dryRun,
        processed: results.length,
        results,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (e) {
    console.error("Function error:", e);

    return new Response(JSON.stringify({ error: "Function failed" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});