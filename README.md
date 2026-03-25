# Paronoma

Paronoma is a modern, single-page company website built with React, TypeScript, Vite, and Tailwind CSS.
It showcases company services, featured work, careers, and contact information with animated UI sections and a responsive layout.

## Overview

This project includes:

- A fixed navigation bar with smooth section linking.
- Hero, About, Services, Portfolio, Careers, Contact, and Footer sections.
- Animated transitions powered by Motion.
- A careers application modal with client-side form validation and resume upload UI.
- A contact form with local state handling.

## Tech Stack

- React 19
- TypeScript
- Vite 6
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- Motion (`motion/react`) for animations
- Lucide React for icons

## Prerequisites

- Node.js 18+ (Node.js 20+ recommended)
- npm 9+

## Getting Started

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

3. Create a local environment file (optional unless you add AI features):

- Copy `.env.example` to `.env.local`.

4. Start the development server:

```bash
npm run dev
```

5. Open your browser at `http://localhost:3000`.

## Environment Variables

Variables listed in [.env.example](.env.example):

- `GEMINI_API_KEY`: Available for AI integrations.
- `APP_URL`: Host URL for deployment scenarios.

Note: The current frontend implementation does not actively consume these variables in components.

## Available Scripts

- `npm run dev`: Start Vite dev server on port 3000.
- `npm run build`: Build production assets into `dist/`.
- `npm run preview`: Preview production build locally.
- `npm run lint`: Run TypeScript type-check (`tsc --noEmit`).
- `npm run clean`: Remove the `dist/` folder (uses `rm -rf`, so run from a Unix-like shell or replace with a Windows-safe command).

## Project Structure

```text
Paronoma/
   src/
      App.tsx
      main.tsx
      index.css
      components/
         Navbar.tsx
         Hero.tsx
         About.tsx
         Services.tsx
         Portfolio.tsx
         Careers.tsx
         JobApplicationModal.tsx
         Contact.tsx
         Footer.tsx
      lib/
         utils.ts
   index.html
   vite.config.ts
   tsconfig.json
   metadata.json
```

## UI Notes

- Theme tokens and utility classes are defined in [src/index.css](src/index.css).
- The `glass`, `text-gradient`, and `bg-gradient-brand` helpers are reusable across sections.
- Global decorative background blobs are rendered in [src/App.tsx](src/App.tsx).

## Behavior and Limitations

- Contact form submissions are handled on the client only (`console.log` + alert).
- Career applications are simulated (mock delay with success state) and are not persisted.
- Portfolio action buttons are currently placeholder buttons.
- Some contact details differ between the Contact and Footer sections and may need unification.

## Build and Deployment

Create a production build:

```bash
npm run build
```

Preview build locally:

```bash
npm run preview
```

Deploy the generated `dist/` directory to any static hosting provider (for example: Vercel, Netlify, Cloudflare Pages, or GitHub Pages).

## Customization Guide

- Company messaging: Update copy inside component files under `src/components/`.
- Brand colors and fonts: Edit CSS variables in [src/index.css](src/index.css).
- Services, projects, and job listings: Update local arrays in:
   - [src/components/Services.tsx](src/components/Services.tsx)
   - [src/components/Portfolio.tsx](src/components/Portfolio.tsx)
   - [src/components/Careers.tsx](src/components/Careers.tsx)
- Contact details: Update both [src/components/Contact.tsx](src/components/Contact.tsx) and [src/components/Footer.tsx](src/components/Footer.tsx).

## Future Improvements

- Connect forms to a backend/API.
- Add real links for social media and portfolio actions.
- Add automated tests (unit/component/e2e).
- Add accessibility checks (keyboard focus, labels, contrast audit).

## License

No license file is currently included in this repository. Add a `LICENSE` file if you plan to distribute or open-source this project.
