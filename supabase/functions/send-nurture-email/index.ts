import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")!;

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

const fromEmail = "The Kyro Team <info@kyroapp.co>";

const emails = {
0: {
  daysAfterSignup: 7,
  nextStage: 1,
  subject: "The reason we're building Kyro",
  html: `
    <p>Hey,</p>

    <p>We wanted to share why we started building Kyro.</p>

    <p>The idea didn't come from a business plan. It came from frustration.</p>

    <p>Both of us love training and have spent a lot of time travelling, but we kept running into the same problem over and over again.</p>

    <p>While travelling in Japan, Andrew found himself spending hours trying to work out where he could train. Some gyms required local phone numbers, others required memberships, and many simply weren't set up for travellers.</p>

    <p>At the same time, Rob was having similar problems while travelling through South America. Even when there were good gyms nearby, finding accurate information, understanding pricing, and figuring out whether short term access was available often became a challenge in itself.</p>

    <p>The more we travelled, the more we realised this wasn't a problem unique to one city or one country.</p>

    <p>If you can book flights, accommodation, transport and food from your phone in a matter of minutes, why is finding a gym while travelling still so complicated?</p>

    <p>Most people end up wasting time searching Google Maps, checking websites, messaging gyms, comparing prices and trying to understand access policies before they can even start their workout.</p>

    <p>We felt there had to be a better way.</p>

    <p>That's why we're building Kyro.</p>

    <p>Our goal is simple:</p>

    <p>Make it easier to discover, access and train at gyms around the world without the hassle of long term memberships, confusing sign up processes or endless searching.</p>

    <p>We're starting with London and building from there.</p>

    <p>Thank you for joining us this early. It genuinely means a lot.</p>

    <p>We'll keep you updated as we get closer to launch.</p>

    <p>Andrew & Rob<br/>Kyro</p>
  `,
},
  1: {
    daysAfterSignup: 14,
    nextStage: 2,
    subject: "A quick update on Kyro",
    html: `
      <p>Hey,</p>
      <p>Quick update on where we are with Kyro.</p>
      <p>We are currently speaking with gyms, refining the product, and preparing for the first launch.</p>
      <p>The goal is simple: make it easier to find and access gyms without long-term memberships.</p>
      <p>That means flexible day, week and month passes, clear gym information before you go, simple booking, less time searching, and fewer awkward sign-up processes.</p>
      <p>We are starting with London because it has the right mix of travellers, remote workers, business visitors, students and serious gym-goers.</p>
      <p>There is still a lot to build, but the early response has been really encouraging.</p>
      <p>I’ll keep you updated as we get closer to launch.</p>
      <p>Andrew & Rob<br/>Kyro</p>
    `,
  },
  2: {
    daysAfterSignup: 28,
    nextStage: 3,
    subject: "Can I ask you something?",
    html: `
      <p>Hey,</p>
      <p>Quick question.</p>
      <p>Where would you most want to use Kyro?</p>
      <p>For example: London, Bali, Dubai, Tokyo, Lisbon, Sydney, New York, or somewhere else.</p>
      <p>Just hit reply with the city or country.</p>
      <p>It genuinely helps us decide where to focus next.</p>
      <p>We are building Kyro for people who want to keep training while travelling, so the more we understand where people actually need it, the better we can build it.</p>
      <p>Appreciate it.</p>
      <p>Andrew & Rob<br/>Kyro</p>
    `,
  },
  3: {
    daysAfterSignup: 42,
    nextStage: 4,
    subject: "The first gyms are joining",
    html: `
      <p>Hey,</p>
      <p>Another quick Kyro update.</p>
      <p>We have started speaking with gyms about becoming launch partners, and the response has confirmed something important:</p>
      <p>Gyms already know people want more flexible access.</p>
      <p>A lot of gyms get visitors, travellers, people working nearby, or people who do not want a full membership but would still happily pay to train.</p>
      <p>Kyro sits in that gap.</p>
      <p>For users, it means easier access to gyms. For gyms, it means extra revenue from people who may never have found them otherwise.</p>
      <p>That is the marketplace we are building.</p>
      <p>We are still early, but every conversation is helping shape the launch.</p>
      <p>Thanks again for being on the waitlist.</p>
      <p>Andrew & Rob<br/>Kyro</p>
    `,
  },
};

Deno.serve(async () => {
  try {
    let totalSent = 0;

    for (const [stageKey, emailData] of Object.entries(emails)) {
      const stage = Number(stageKey);

      const cutoffDate = new Date();
      cutoffDate.setDate(cutoffDate.getDate() - emailData.daysAfterSignup);

      const { data: users, error } = await supabase
        .from("waitlist")
        .select("id, email, created_at, email_sequence_stage")
        .eq("email_sequence_stage", stage)
        .lte("created_at", cutoffDate.toISOString())
        .limit(25);

      if (error) throw error;

      for (const user of users || []) {
        const resendResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: fromEmail,
            to: user.email,
            subject: emailData.subject,
            html: emailData.html,
          }),
        });

        if (!resendResponse.ok) {
          const errorText = await resendResponse.text();
          console.error(`Failed to send to ${user.email}:`, errorText);
          continue;
        }

        const { error: updateError } = await supabase
          .from("waitlist")
          .update({
            email_sequence_stage: emailData.nextStage,
            last_nurture_email_sent_at: new Date().toISOString(),
          })
          .eq("id", user.id);

        if (updateError) {
          console.error(`Failed to update ${user.email}:`, updateError);
          continue;
        }

        totalSent++;
      }
    }

    return new Response(
      JSON.stringify({ success: true, totalSent }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Nurture email function error:", error);

    return new Response(
      JSON.stringify({ success: false, error: String(error) }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
});
