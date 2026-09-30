# Frontend Developer Internship Project

## Overview

A responsive, production-ready developer portfolio site built to satisfy all
7 deliverable tasks of the Just Internship "Frontend Developer Internship"
program: project setup, layout/navigation, hero section, content sections,
an interactive filterable portfolio, a validated contact form, and a
production-optimized, deployment-ready build.

## Tasks Completed

- Task 1 — Project Initialization and Configuration
- Task 2 — Typography and Core Layout (Navbar and Footer)
- Task 3 — Hero and Intro Sections
- Task 4 — Content Sections (About and Experience)
- Task 5 — Interactive Portfolio Showcase
- Task 6 — Form Design and Input Validation
- Task 7 — Production Optimization and Live Deployment

## Technologies Used

- React 18
- TypeScript (strict mode)
- Vite
- Tailwind CSS
- ESLint

## Features

- Sticky, scroll-aware navbar with active-section highlighting and a
  collapsible mobile menu
- Semantic, responsive footer with site and social links
- Hero section with animated call-to-action and profile card
- About section with a written bio and animated skill bars
- Experience section rendered as a responsive vertical timeline
- Interactive portfolio grid with category filtering (`All`, `Frontend`,
  `Fullstack`, `Mobile`) and hover micro-interactions
- Contact form with controlled inputs, regex-based email validation,
  inline error messages, disabled submit state, and an accessible success
  message
- Fully responsive from 360px mobile widths up through desktop
- No unused imports/variables (enforced via `noUnusedLocals` /
  `noUnusedParameters` in `tsconfig.app.json` and ESLint)

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Starts the Vite development server (default: http://localhost:5173).

## Production Build

```bash
npm run build
npm run preview
```

`npm run build` type-checks the project and outputs an optimized build to
`dist/`. `npm run preview` serves that build locally for a final check.

## Deployment

**Vercel**

1. Push this repository to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Framework preset: Vite. Build command: `npm run build`. Output
   directory: `dist`.
4. Deploy — Vercel will give you a live URL.

**Netlify**

1. Push this repository to GitHub.
2. Import the repo at [app.netlify.com](https://app.netlify.com).
3. Build command: `npm run build`. Publish directory: `dist`.
4. Deploy — Netlify will give you a live URL.

## Author

Priyajit Paul
