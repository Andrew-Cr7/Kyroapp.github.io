console.log("FUNCTION HIT");

<<<<<<< HEAD
Deno.serve(async (req) => {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "authorization, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };

  // ✅ Handle CORS preflight
=======
import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

Deno.serve(async (req) => {
>>>>>>> 341f3529366595d3d4f805829cbeedcfe683458c
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  try {
<<<<<<< HEAD
    // ← THIS IS WHERE YOU PARSE THE JSON BODY
    const data = await req.json();  // <-- parse JSON from frontend
    const email = data.email;       // <-- extract email
    if (!email) throw new Error("Email is required");

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) throw new Error("RESEND_API_KEY not set");

    // Send email via Resend
=======
    if (!RESEND_API_KEY) throw new Error("RESEND_API_KEY not set");

    const { email } = await req.json().catch(() => ({}));
    if (!email) throw new Error("Email is required");

>>>>>>> 341f3529366595d3d4f805829cbeedcfe683458c
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
<<<<<<< HEAD
        from: "Kyro <info@kyroapp.co>",
=======
        from: "Kyro <info@kyroapp.co>", // Verified sender
>>>>>>> 341f3529366595d3d4f805829cbeedcfe683458c
        to: email,
        subject: "Welcome to the Kyro Waitlist",
        html: `
          <p>Thanks for joining the Kyro waitlist!</p>
          <p>We’ll notify you as soon as we launch.</p>
<<<<<<< HEAD
=======
          <p>— Team Kyro</p>
>>>>>>> 341f3529366595d3d4f805829cbeedcfe683458c
        `,
      }),
    });

    if (!res.ok) {
<<<<<<< HEAD
      const errorText = await res.text();
      console.error("Resend error:", errorText);
      throw new Error("Failed to send email");
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
=======
      const text = await res.text();
      console.error("Resend API error:", text);
      throw new Error("Failed to send email");
    }

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (err) {
    console.error("Edge function error:", err);
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
>>>>>>> 341f3529366595d3d4f805829cbeedcfe683458c
  }
});
