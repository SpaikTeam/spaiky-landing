# Spaiky Landing Page

## Project Overview
Waitlist landing page for Spaiky, a gamified AI learning app
("Duolingo for AI"). Target audience: 18-30 year olds, no tech background.
App store version not yet available — single goal: collect emails for
the early-access whitelist.

## Tech Stack
- Next.js 15 with App Router and TypeScript
- Tailwind CSS for styling
- Motion library for animations
- Deployed on Vercel

## Design System
- **Background:** #0B0A1A (deep dark navy)
- **Card:** #151429
- **Purple (primary):** #7C3AED
- **Purple Light:** #A78BFA
- **Green (accent):** #10B981
- **Green Light:** #34D399
- **Pink:** #EC4899
- **Gold:** #F59E0B
- **Text:** #E2E8F0
- **Text Muted:** #94A3B8
- **Fonts:** Fredoka (headings, bold/fun), DM Sans (body text)
- Dark theme throughout, no light mode

## Mascot Images
Located in /public/mascots/ — all transparent PNGs:
- hero.png (waving) → Hero section
- teaching.png (pointing) → Features section
- thinking.png (chin on hand) → How It Works section
- trophy.png (holding trophy) → Step 3 icon
- final-cta.png (celebrating) → Final CTA section

## Page Structure (top to bottom)
1. Sticky nav (logo + links + "Join Waitlist" button)
2. Hero (mascot + headline + subtitle + email signup form + mini stats)
3. Social proof strip (placeholder press logos)
4. Features (6 cards in 2 rows of 3)
5. How It Works (3 numbered steps)
6. Stats (animated counters)
7. Testimonials (3 cards)
8. Final CTA (mascot + headline + email signup form)
9. Footer
10. Sticky bottom CTA bar (mobile — "Join the Waitlist")

## Content Voice
Friendly, conversational, encouraging. No jargon. Contractions welcome.
Use the /humanizer skill on all generated copy before committing.

## Key Commands
- npm run dev — Start dev server
- npm run build — Production build
- npm run lint — Lint check

## Quality Standards
- Mobile-first responsive (375px → 768px → 1024px+)
- Lighthouse score > 90 on all metrics
- All images use next/image with WebP/AVIF
- Fonts loaded via next/font (zero CLS)
- Semantic HTML with proper heading hierarchy
