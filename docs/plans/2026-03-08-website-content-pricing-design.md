# Website Content & Pricing Updates Design

## Overview

Update DPU website with new email, service names, enhanced brand section, and new pricing packages.

## Changes

### 1. Email Updates

**Files**: `Footer.tsx`, `Contact.tsx`

- Change `info@dpunwired.com` → `info@digitalprofessionalsunwired.com`
- Contact form uses Web3Forms API - recipient email configured in Web3Forms dashboard

### 2. Services Section Updates

**File**: `ServicesSection.tsx`

| Current | New |
|---------|-----|
| Digital PR & Communications | Brand Marketing and Consulting |
| Digital Design & UX | Website Design, Development and UX |

### 3. Brand Names Section

**File**: `CredibilitySection.tsx`

**New order** (DBS Bank first):
1. DBS Bank
2. KTM
3. Husqvarna
4. Pril
5. ICICI Lombard
6. Bajaj Auto
7. Jyothy Labs
8. Autodesk
9. Straive

**Styling**: Bold text (font-bold/font-extrabold), larger size, increased contrast

### 4. New Pricing Section

**New file**: `PricingSection.tsx`

#### Growth Starter - £350 – £1,050/month
For early-stage brands needing structure, cleaner presence, and consistent output.

Monthly deliverables:
- 1× Strategy Call (60 mins) + action plan
- 1× Website Refresh (up to 3 pages)
- 8× Social Posts (or 2 carousels + 4 posts)
- 1× PR Outreach Sprint (10 targets + 1 press angle)
- 1× Competitor Snapshot (5 competitors)
- 1× Performance Review

#### Digital Acceleration - £1,350 – £3,350/month
For brands wanting measurable growth, content cadence, and effective campaigns.

Monthly deliverables:
- 2× Strategy Sessions (45 mins each)
- 16× Social Posts (mix of posts + carousels)
- 2× Short-Form Videos (15–30s)
- 1× Landing Page Build/Refresh
- 2× PR Outreach Sprints (25 targets total)
- 1× Paid/Performance Optimisation (up to £2k ad spend)
- 1× Monthly Insights Report

#### Market Leadership - £3,850 – £7,850+/month
For brands ready to operate like the leader with multi-channel, higher production.

Monthly deliverables:
- 4× Senior Strategy Touchpoints (weekly)
- 30× Social Assets with content calendar
- 4× Short-Form Videos (15–45s)
- 1× Hero Content Piece (Brand Film OR Thought Leadership Article OR Campaign Pack)
- Ongoing Reputation + Social Listening
- PR Program: 50 targets/month + thought-leadership placement
- Performance Marketing (up to £10k ad spend)
- Monthly Exec Dashboard

#### SEO Package - Custom from £500
Custom SEO services with pricing based on scope.

### 5. Integration

- Add `PricingSection` to `Index.tsx` after ServicesSection
- Each pricing card links to contact page

## Technical Notes

- Use existing Shadcn Card components for pricing cards
- Maintain existing design system (gradients, animations)
- Responsive grid: 1 col mobile, 2 col tablet, 4 col desktop
