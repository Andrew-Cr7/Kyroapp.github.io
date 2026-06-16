# Kyro Coding Rules

## Purpose

This document defines the coding standards and product rules for Kyro.

Codex and any developer working on Kyro should read this before making changes.

The goal is to keep the codebase clean, stable and aligned with the business priorities.

---

# Core Principles

## 1. Do Not Break Existing Functionality

Before making changes, check how the existing feature currently works.

Important flows must not be broken:

* Waitlist signup
* Referral code generation
* Email sending
* Analytics tracking
* SEO pages
* Mobile responsiveness

If a change affects one of these flows, explain the risk clearly.

---

## 2. Keep Changes Small

Prefer small, focused changes over large rewrites.

Do not rebuild major sections unless specifically asked.

Every change should have a clear purpose.

---

## 3. Follow Existing Patterns

Before adding new code, inspect existing:

* Components
* Styling
* File structure
* Naming conventions
* Utility functions
* Routing patterns

Use the current project style unless there is a strong reason not to.

---

# Technical Standards

## Language

Use:

* TypeScript
* React
* Vite

Avoid:

* Plain JavaScript unless already used in the file
* Unnecessary new libraries
* Overly complex architecture

---

## Components

Components should be:

* Reusable
* Easy to understand
* Small where possible
* Named clearly

Avoid:

* Huge components
* Repeated JSX
* Duplicated logic
* Hard-coded content where reusable data would be better

---

## Styling

Follow the existing styling system.

Use Kyro brand colours:

* Forest Green: #314A3D
* Cream: #ECE7D8
* Tan: #C8B08E

Do not introduce new brand colours unless specifically asked.

Maintain strong mobile responsiveness.

---

# SEO Rules

Every SEO page should include:

* Clear page title
* Meta description
* H1
* Internal links
* Relevant FAQ section
* Clear waitlist CTA
* Canonical URL where appropriate

When creating new SEO pages:

* Follow `/docs/seo-strategy.md`
* Use existing page layouts
* Update sitemap if needed
* Avoid duplicate copy across city pages
* Make content specific to the location

Do not create thin, generic SEO pages.

---

# Analytics Rules

Do not remove analytics tracking without permission.

Important tools:

* Google Analytics 4
* Microsoft Clarity

Important events may include:

* Waitlist signup started
* Waitlist signup completed
* CTA clicked
* Page viewed
* Referral link used

When adding important user actions, consider whether an analytics event should be added.

---

# Supabase Rules

Before changing Supabase-related code, check:

* Table names
* Column names
* Required fields
* Edge Functions
* Environment variables

Never expose secret keys in frontend code.

Frontend may use:

* Supabase anon key

Frontend must never use:

* Service role key
* Resend API key
* Private secrets

---

# Email Rules

Kyro uses email for:

* Waitlist confirmation
* Referral codes
* Future nurture emails

Important rule:

Never send emails to the full waitlist unless explicitly instructed.

When testing email logic:

* Test with a single specified email first
* Confirm the result
* Only then consider wider sending

Avoid accidental duplicate emails.

---

# Environment Variables

Do not hard-code secrets.

Use environment variables.

Maintain `.env.example` with placeholder values only.

Example:

SUPABASE_URL=
SUPABASE_ANON_KEY=
RESEND_API_KEY=

Never commit real credentials.

---

# Git Rules

Before changing code:

* Check current branch
* Understand recent changes

After changing code:

* Explain files changed
* Explain why they changed
* Mention any tests run
* Mention any risks

Commit messages should be clear.

Examples:

* Add Tokyo SEO landing page
* Fix waitlist referral email logic
* Update sitemap with city pages
* Improve landing page CTA tracking

---

# Testing Rules

Before finalising a change, check:

* App builds successfully
* No TypeScript errors
* Waitlist form still works
* Pages render correctly on mobile
* SEO metadata is present where relevant

Use:

npm run build

If tests do not exist, state that clearly.

---

# Product Rules

Kyro is not a fitness coaching app.

Do not build:

* Workout plans
* Nutrition tracking
* Social feeds
* Coaching tools
* Exercise libraries

Unless specifically requested.

Kyro focuses on:

* Gym discovery
* Flexible access
* Pass purchasing
* Partner onboarding
* User trust
* SEO growth
* Waitlist conversion

---

# Current Business Priorities

Prioritise work that supports:

1. London launch
2. Waitlist growth
3. SEO traffic
4. Gym partner acquisition
5. Conversion tracking
6. Pass purchase readiness

Avoid spending time on features that are not needed for launch.

---

# AI Agent Instructions

When Codex or any AI coding agent works on this repo, it should:

1. Read all files in `/docs`
2. Understand the task
3. Inspect existing code
4. Make the smallest effective change
5. Avoid unnecessary rewrites
6. Explain what changed
7. Explain risks
8. Suggest next steps only when relevant

Do not invent business logic that conflicts with `/docs`.

---

# Safety Rules

Ask before:

* Deleting files
* Changing database schema
* Changing payment logic
* Sending emails
* Removing analytics
* Replacing major components
* Adding large dependencies

---

# Final Standard

Good code for Kyro should be:

* Simple
* Reliable
* Easy to maintain
* Aligned with the business
* Fast enough for users
* Clear enough for future developers

The goal is not clever code.

The goal is a product that helps people train anywhere.
