# Kyro Tech Stack

## Purpose

This document explains the current and intended technical setup for Kyro.

Codex and any developer should read this before making changes to the website, database, analytics, email flows, hosting, SEO pages or future app functionality.

---

# Current Product Stage

Kyro is currently pre-launch.

The current technical focus is:

1. Stable website
2. Waitlist growth
3. Referral system
4. SEO pages
5. Analytics tracking
6. Email automation
7. Gym partner onboarding preparation

The product should not be overbuilt before launch.

---

# Frontend

## Framework

Kyro currently uses:

* React
* TypeScript
* Vite

The frontend is used for:

* Marketing website
* SEO landing pages
* Waitlist signup
* Referral capture
* Future gym discovery pages

---

## Frontend Rules

Use TypeScript.

Follow existing component patterns.

Keep components reusable.

Avoid unnecessary new libraries.

Maintain mobile responsiveness.

Prioritise speed, clarity and conversion.

---

# Styling

The website should follow Kyro brand guidelines.

Brand colours:

* Forest Green: #314A3D
* Cream: #ECE7D8
* Tan: #C8B08E

Primary font:

* Outfit

Styling should remain consistent across:

* Homepage
* SEO landing pages
* Forms
* CTAs
* Future app pages

Do not introduce new visual systems unless explicitly asked.

---

# Hosting

Kyro website is hosted on:

* Netlify

Important hosting considerations:

* Netlify deploys from GitHub
* SPA routing may require `_redirects`
* Sitemap and robots.txt should remain accessible
* SEO pages must be deployable and indexable

---

# Repository

Kyro code is stored in GitHub.

Repository:

```text
Andrew-Cr7/Kyroapp.github.io
```

Use Git carefully.

Avoid committing secrets.

Explain all files changed before finalising work.

---

# Backend

Kyro currently uses:

* Supabase
* PostgreSQL
* Supabase Edge Functions

Supabase is used for:

* Waitlist storage
* Referral tracking
* Email-triggering logic
* Future user, gym and purchase data

---

# Database

Primary confirmed table:

```text
waitlist
```

Key waitlist fields:

```text
id
email
created_at
referral_code
referred_by
referral_count
```

Before making database-related changes, check:

```text
/docs/database-schema.md
```

Do not assume table names or column names without verifying the code and database schema.

---

# Email

Kyro currently uses:

* Resend
* Supabase Edge Functions

Email is used for:

* Waitlist confirmation
* Referral code emails
* Future nurture emails
* Launch announcements

Important rule:

Never send emails to the full waitlist unless explicitly instructed.

Always test with a single specified email first.

---

# Analytics

Kyro currently uses:

* Google Analytics 4
* Microsoft Clarity

Analytics should help track:

* Website visits
* CTA clicks
* Waitlist signup starts
* Waitlist signup completions
* Referral signups
* SEO page performance

Do not remove analytics tracking without permission.

When adding important user actions, consider adding analytics events.

---

# SEO

SEO is a major growth channel for Kyro.

Important files:

```text
/docs/seo-strategy.md
/docs/seo-page-template.md
```

SEO pages should include:

* Unique page title
* Unique meta description
* H1
* FAQ section
* Internal links
* Waitlist CTA
* Structured data where appropriate

SEO work should support waitlist growth and future bookings.

---

# CRM

Kyro currently uses:

* HubSpot Free

HubSpot is used for:

* Gym partner pipeline
* Outreach tracking
* Deal stages
* Follow-ups
* Notes

HubSpot is not currently the source of truth for waitlist users.

Waitlist users are stored in Supabase.

---

# Payments

Kyro has not fully launched payments yet.

Future likely payment provider:

* Stripe
* Stripe Connect

Payments may be used for:

* Day passes
* Weekly passes
* Monthly passes
* Revenue share with gyms

Do not implement payment logic without explicit instruction.

Payment logic should be handled carefully and securely.

Never store card details directly in Kyro's database.

---

# Authentication

Future likely authentication provider:

* Supabase Auth

Potential uses:

* User accounts
* Partner accounts
* Admin access

Authentication is not the current top priority unless required for launch functionality.

---

# Future Product Features

Potential future product areas:

* Gym listings
* Pass purchasing
* QR check-in
* Partner dashboard
* User accounts
* Reviews
* Gym analytics

These should be built only when they support launch or revenue.

---

# Features Not Currently Prioritised

Do not prioritise:

* Workout tracking
* Nutrition tracking
* Coaching tools
* Social feeds
* Community forums
* Leaderboards
* Wearable integrations

Kyro is focused on gym access, not fitness coaching.

---

# Environment Variables

Expected environment variables may include:

```text
SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
RESEND_API_KEY=
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

Rules:

* Frontend can use public anon keys only
* Never expose service role keys
* Never expose Resend keys
* Never commit real secrets
* Keep `.env.example` updated with placeholders only

---

# Development Commands

Common commands may include:

```bash
npm install
npm run dev
npm run build
```

Before finalising code changes, run:

```bash
npm run build
```

If the build fails, explain the error and do not pretend the change is complete.

---

# Deployment

Deployment is handled through Netlify.

After pushing to GitHub:

1. Netlify should build automatically
2. Check the live site
3. Confirm important pages load
4. Confirm waitlist form still works
5. Confirm SEO pages are accessible

---

# AI Agent Instructions

Before making technical changes, Codex should:

1. Read all files in `/docs`
2. Inspect the existing codebase
3. Understand the task
4. Make the smallest effective change
5. Avoid unnecessary rewrites
6. Run or recommend appropriate checks
7. Explain what changed
8. Highlight any risks

---

# Final Principle

The tech stack should support Kyro's current business goals.

The goal is not to build the most complex system.

The goal is to build a reliable platform that helps users find gyms, helps gyms generate revenue and helps Kyro launch successfully.

Train Anywhere. Train Kyro.
