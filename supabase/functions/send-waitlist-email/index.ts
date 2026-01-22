// Setup type definitions for Supabase Edge Functions
import "jsr:@supabase/functions-js/edge-runtime.d.ts";

// Read your Resend API key from environment variables
const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
if (!RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY environment variable not set");
}

console.log("Edge function initialized");

Deno.serve(async (req) => {
  try {
    // Parse request JSON
    const { email, name } = await req.json();

    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Construct email payload
    const emailPayload = {
      from: "info@kyroapp.co", // Replace with your verified Resend sender
      to: email,
      subject: "Welcome to the Kyro Waitlist!",
      html: `
        <p>Hi ${name || "there"},</p>
        <p>Thanks for joining the Kyro waitlist! We're excited to have you on board.</p>
        <p>We'll notify you as soon as Kyro launches so you can start training anywhere!</p>
        <p>— The Kyro Team</p>
      `,
    };

    // Send email via Resend API
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
      return new Response(JSON.stringify({ error: "Failed to send email" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({ success: true, message: "Email sent!" }),
      { headers: { "Content-Type": "application/json" } }
    );

  } catch (err) {
    console.error("Edge function error:", err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
});
