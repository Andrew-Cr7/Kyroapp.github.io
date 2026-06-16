# Kyro Database Schema

## Purpose

This document explains the current and intended database structure for Kyro.

Codex and any developer should read this before changing Supabase logic, waitlist flows, referral logic, user data, email automation or partner data.

Do not assume table names, column names or relationships without checking the actual Supabase project.

---

# Database Platform

Kyro currently uses:

* Supabase
* PostgreSQL

Supabase is used for:

* Waitlist data
* Referral codes
* Email logic
* Future user and partner data

---

# Current Confirmed Tables

## waitlist

Purpose:

Stores users who have joined the Kyro waitlist.

This table is critical.

Do not modify this table without checking the live Supabase schema first.

---

## waitlist Columns

| Column         | Purpose                                               |
| -------------- | ----------------------------------------------------- |
| id             | Unique row identifier                                 |
| email          | User email address                                    |
| created_at     | Timestamp when the user joined                        |
| referral_code  | Unique referral code for the user                     |
| referred_by    | Referral code used when signing up                    |
| referral_count | Number of successful referrals attributed to the user |

---

# Waitlist Rules

## Email

Each email should be treated as unique.

A user should not be added multiple times with the same email.

---

## Referral Code

Each user should receive a unique referral code.

Referral codes should be:

* Unique
* Short enough to share
* Stable once created
* Linked to one email only

Do not regenerate referral codes for existing users unless explicitly required.

---

## Referred By

`referred_by` should store the referral code that brought the user to Kyro.

It should not store the referring user's email.

This keeps referral tracking cleaner and easier to manage.

---

## Referral Count

`referral_count` should increase when a new user signs up using an existing valid referral code.

Do not increment referral counts for:

* Duplicate emails
* Invalid referral codes
* Self-referrals
* Test signups unless specifically intended

---

# Email Sending Relationship

The waitlist table connects to email logic.

Emails may include:

* Welcome email
* Referral code email
* Nurture emails
* Launch announcement

Important rule:

Never run a full-list email send without explicitly confirming:

* Target audience
* Email content
* Whether duplicate emails are prevented
* Whether a single test email has succeeded

---

# Current Email Logic

Kyro has used:

* Supabase Edge Functions
* Resend

Important:

Frontend should never expose private email API keys.

Email sending should happen server-side through Supabase Edge Functions.

---

# Environment Variables

Expected environment variables may include:

```text
SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
RESEND_API_KEY=
```

Rules:

* `SUPABASE_ANON_KEY` can be used in frontend code
* `SUPABASE_SERVICE_ROLE_KEY` must never be exposed in frontend code
* `RESEND_API_KEY` must never be exposed in frontend code
* Real secrets must never be committed to GitHub

---

# Future Tables

The following tables may be needed as Kyro develops.

These are proposed structures, not confirmed live schema.

Codex should not create or migrate these without explicit instruction.

---

# users

Purpose:

Stores app users after launch.

Potential columns:

| Column        | Purpose                |
| ------------- | ---------------------- |
| id            | Unique user identifier |
| email         | User email             |
| full_name     | User name              |
| home_country  | User home country      |
| created_at    | Account creation date  |
| last_login_at | Last login timestamp   |

---

# gyms

Purpose:

Stores gym partner profiles.

Potential columns:

| Column        | Purpose               |
| ------------- | --------------------- |
| id            | Unique gym identifier |
| name          | Gym name              |
| description   | Gym description       |
| address       | Full address          |
| city          | City                  |
| country       | Country               |
| postcode      | Postcode              |
| latitude      | Latitude              |
| longitude     | Longitude             |
| website_url   | Gym website           |
| phone         | Gym phone number      |
| email         | Gym contact email     |
| logo_url      | Gym logo              |
| image_urls    | Gym images            |
| opening_hours | Opening hours         |
| facilities    | List of facilities    |
| status        | Partner status        |
| created_at    | Date added            |

---

# gym_passes

Purpose:

Stores available pass types for each gym.

Potential columns:

| Column             | Purpose                            |
| ------------------ | ---------------------------------- |
| id                 | Unique pass identifier             |
| gym_id             | Related gym                        |
| pass_type          | Day, weekly or monthly             |
| price              | User-facing price                  |
| currency           | Currency                           |
| gym_revenue_share  | Amount or percentage going to gym  |
| kyro_revenue_share | Amount or percentage going to Kyro |
| is_active          | Whether pass is live               |
| created_at         | Date created                       |

---

# purchases

Purpose:

Stores user purchases.

Potential columns:

| Column            | Purpose                    |
| ----------------- | -------------------------- |
| id                | Unique purchase identifier |
| user_id           | User who purchased         |
| gym_id            | Gym purchased from         |
| pass_id           | Pass purchased             |
| amount_paid       | Total paid by user         |
| currency          | Currency                   |
| payment_status    | Payment status             |
| stripe_payment_id | Stripe payment reference   |
| created_at        | Purchase timestamp         |

---

# check_ins

Purpose:

Stores gym check-ins.

Potential columns:

| Column          | Purpose                               |
| --------------- | ------------------------------------- |
| id              | Unique check-in identifier            |
| purchase_id     | Related purchase                      |
| user_id         | User checking in                      |
| gym_id          | Gym visited                           |
| checked_in_at   | Check-in timestamp                    |
| check_in_method | QR code, manual or staff confirmation |
| status          | Valid, rejected or expired            |

---

# partner_contacts

Purpose:

Stores contacts at partner gyms.

Potential columns:

| Column     | Purpose                   |
| ---------- | ------------------------- |
| id         | Unique contact identifier |
| gym_id     | Related gym               |
| name       | Contact name              |
| role       | Job title                 |
| email      | Contact email             |
| phone      | Contact phone             |
| notes      | Relationship notes        |
| created_at | Date added                |

---

# partner_deals

Purpose:

Stores gym acquisition pipeline data if Kyro manages partner pipeline in-app in future.

Currently HubSpot is used for CRM, so this may not be needed immediately.

Potential columns:

| Column            | Purpose                       |
| ----------------- | ----------------------------- |
| id                | Unique deal identifier        |
| gym_name          | Gym name                      |
| contact_name      | Main contact                  |
| email             | Contact email                 |
| stage             | Pipeline stage                |
| probability       | Estimated close probability   |
| next_action       | Next required step            |
| follow_up_date    | Follow-up date                |
| existing_provider | Existing provider if any      |
| contract_end_date | Contract end date if relevant |
| notes             | Deal notes                    |
| created_at        | Date created                  |
| updated_at        | Last updated                  |

---

# reviews

Purpose:

Stores user reviews for gyms.

Potential columns:

| Column      | Purpose                  |
| ----------- | ------------------------ |
| id          | Unique review identifier |
| user_id     | Reviewing user           |
| gym_id      | Reviewed gym             |
| rating      | Numeric rating           |
| review_text | Written review           |
| created_at  | Date submitted           |

---

# analytics_events

Purpose:

Stores key product events if Kyro chooses to track important activity directly in the database.

Potential columns:

| Column           | Purpose                 |
| ---------------- | ----------------------- |
| id               | Unique event identifier |
| user_id          | User if known           |
| event_name       | Name of event           |
| event_properties | JSON event data         |
| created_at       | Event timestamp         |

---

# Database Design Principles

## 1. Keep Launch Schema Simple

Do not overbuild the database before launch.

The first priority is:

* Waitlist
* Gym profiles
* Passes
* Purchases
* Check-ins

Avoid adding complex tables that do not support launch.

---

## 2. Protect User Data

Only store data that Kyro needs.

Avoid collecting unnecessary personal information.

---

## 3. Keep Financial Data Clean

Purchases, payments and revenue share data must be accurate.

Payment data should link clearly to Stripe or the payment provider.

Do not store sensitive card details in Kyro's database.

---

## 4. Avoid Duplicate Records

Important entities such as users, gyms, emails and purchases should avoid unnecessary duplication.

---

## 5. Use Clear Status Fields

Important records should have clear statuses.

Examples:

Gym status:

* draft
* pending
* live
* paused
* archived

Purchase status:

* pending
* paid
* refunded
* failed

Check-in status:

* valid
* rejected
* expired

---

# Security Rules

Use Row Level Security where appropriate.

Never expose:

* Service role keys
* Resend API keys
* Stripe secret keys
* Private admin credentials

Sensitive operations should happen server-side.

---

# Codex Instructions

Before making database changes, Codex should:

1. Read this document
2. Inspect the current Supabase-related code
3. Confirm the existing table and column names
4. Avoid making assumptions
5. Explain any proposed schema changes
6. Warn if a migration could affect existing data

Codex should not create migrations or modify schema unless explicitly asked.

---

# Final Rule

The database should support the business, not become the business.

Keep the schema simple, reliable and focused on launching Kyro.
