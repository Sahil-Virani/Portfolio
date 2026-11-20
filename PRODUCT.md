# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Recruiters** (primary skim): technical recruiters at software, AI and product companies of any industry. They spend about 30 seconds on the site and need to leave knowing who Sahil is, what he builds, his standout wins, and where the resume is.
- **Hiring managers / engineers** (primary depth): they arrive from a recruiter link or a resume and judge depth by looking at architecture, technical decisions, scale numbers, tests, and links to code or demos.

## Product Purpose

A personal portfolio for Sahil Virani that turns visits into interviews for **AI engineering and full-stack engineering roles**, without limiting the search to any one industry. It succeeds when a recruiter can place him in seconds and an engineer finds enough concrete evidence to want a conversation.

## Positioning

**AI engineer and full-stack builder.** He ships production AI systems end to end, from backend to database to the LLM/agent layer to the frontend.

- Lead with the CS and engineering side.
- His mathematical depth sets him apart from a typical full-stack candidate. It comes from the M.S. in Financial Engineering and the B.S. in CS with a Quantitative Finance minor, and covers stochastic calculus, statistics, machine learning, computational methods, and optimization/portfolio theory. Present this as **quantitative and mathematical rigor**, not as a finance-domain identity.
- Do **not** brand him as "finance domain", fintech-only, or quant-only. Finance can appear as the source of the coursework and as project subject matter (e.g. MarketMind AI), not as the headline.

## Operating Context

- Static single-page site on GitHub Pages at `https://sahil-virani.github.io/Portfolio/` (Vite `base: '/Portfolio/'`).
- Visitors arrive from LinkedIn, resume links, GitHub, and recruiter outreach, on both desktop and phone.
- The resume PDF is served from `public/` and must stay one click away.

## Capabilities and Constraints

- Stack: React 18, Vite 5, Tailwind CSS 3, Framer Motion, lucide-react. Deployed with `npm run deploy` (gh-pages).
- All copy lives in `src/data/portfolioData.js`. The redesign may regroup and re-order this content and change how it's presented. Any new factual claim must be supported by `candidate-profile.md` (gitignored, private) or the resume.
- Content scope (assumed; the user didn't answer this question): keep all current sections (hero, about with certs and awards, projects, experience, skills, contact). Leadership data exists but is not currently rendered; whether to show it is undecided.

## Brand Commitments

- Name: Sahil Virani. Existing mark: `public/SV_Logo.png`.
- Voice: confident, concrete, numbers-forward (endpoints shipped, languages covered, tests written, placements won). No buzzword stacking.

## Evidence on Hand

- Projects with real metrics in `portfolioData.js`: MarketMind AI (9-stage research agent, critic loop), FitCheck AI (1st place out of 15+ teams at the GDG × Vonage hackathon, 17 unit and 3 Playwright tests), CenterPlate (43 endpoints, 25+ users, YouTube demo), and more.
- Experience: Sentari AI SWE intern (15+ production endpoints, 170+ languages), Stevens AI Research Assistant (60+ participants, 100+ transcripts), Stevens IT Assistant.
- Education: B.S. CS with a QF minor (Stevens, May 2026, GPA 3.4); M.S. Financial Engineering (September 2026 – Fall 2027).
- Math/quant coursework: Stochastic Calculus for Financial Engineers, Computational Methods in Finance, Portfolio Theory & Applications, Derivatives Pricing & Hedging, Options, Machine Learning. The user also stated a statistics background.
- Certifications: AWS AI Practitioner, AWS Cloud Practitioner, Claude 101, Claude Code 101, Claude Developer Platform. Awards: Edwin A. Stevens Scholarship, Charles Suffel Scholarship, Rising Star in IT 2025, Dean's List.
- **Absent, do not fabricate:** testimonials, employer logos used as endorsements, live product URLs beyond those in the data file, user counts or benchmarks not listed above.

## Product Principles

1. Within five seconds, a recruiter should know Sahil is an AI engineer and full-stack builder.
2. Every claim shows its evidence: a number, a link, a demo, or a test count.
3. Math depth is a differentiator layered onto engineering, never the headline identity.
4. Fast, accessible, and solid on a phone, because recruiters often open links on mobile.
