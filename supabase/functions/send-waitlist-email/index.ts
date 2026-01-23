// src/functions/send-waitlist-email/index.ts

// Setup type definitions for Supabase Edge Functions
import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
if (!RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY environment variable not set");
}

// Replace this with your frontend domain
const FRONTEND_URL = "https://kyroapp.co";

console.log("Edge function initialized");

Deno.serve(async (req) => {
  // --- 1️⃣ Handle CORS preflight requests ---
  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": FRONTEND_URL,
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  }

  try {
    // --- 2️⃣ Parse the request body ---
    const { email, name } = await req.json();

    if (!email) {
      return new Response(
        JSON.stringify({ error: "Email is required" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": FRONTEND_URL,
          },
        }
      );
    }

    // --- 3️⃣ Prepare email payload for Resend ---
    const emailPayload = {
      from: "info@kyroapp.co", // must be verified in Resend
      to: email,
      subject: "Welcome to the Kyro Waitlist!",
      html: `
        <p>Hi ${name || "there"},</p>
        <p>Thanks for joining the Kyro waitlist! We're excited to have you on board.</p>
        <p>We'll notify you as soon as Kyro launches so you can start training anywhere!</p>
        <p>— The Kyro Team</p>
      `,
    };

    // --- 4️⃣ Send email via Resend ---
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailPayload),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Resend API error:", text);
      return new Response(
        JSON.stringify({ error: "Failed to send email", detail: text }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": FRONTEND_URL,
          },
        }
      );
    }

    // --- 5️⃣ Success response ---
    return new Response(
      JSON.stringify({ success: true, message: "Email sent!" }),
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": FRONTEND_URL,
        },
      }
    );
  } catch (err) {
    console.error("Edge function error:", err);
    return new Response(
      JSON.stringify({ error: err.message }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": FRONTEND_URL,
        },
      }
    );
  }
});
