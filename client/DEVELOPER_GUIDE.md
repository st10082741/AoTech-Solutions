<!-- Language: Markdown | Purpose: Practical guide for running, editing and deploying the AoTech website. -->

# AoTech Solutions — Developer Guide

AoTech Solutions is a bilingual corporate procurement website built with React, TypeScript, Vite and Tailwind CSS. Portuguese is the default language; visitors can switch to English without loading duplicate pages.

## Run locally

From the `client` directory:

```bash
npm install
npm run dev
```

Open the address printed in the terminal, normally `http://localhost:5173`.

## Production checks

Run these commands before every GitHub push:

```bash
npm run check
npm run build
npm run preview
```

The build output is generated in `dist/`. That directory is ignored by Git and should not be uploaded manually.

## Project structure

```text
client/
├── public/
│   ├── documents/         # Portuguese and English portfolio PDFs
│   └── images/            # Operational website photography
├── src/
│   ├── pages/             # Home, About, Services, Procurement and Contact
│   ├── components/
│   │   ├── layout/        # Header, footer and WhatsApp shortcut
│   │   ├── forms/         # Formspree and WhatsApp contact form
│   │   └── ui/            # Logo and reusable heading components
│   ├── content/           # Portuguese and English website wording
│   ├── config/            # Company contacts and document paths
│   ├── styles/            # Design tokens and responsive layout rules
│   ├── types/             # Shared TypeScript definitions
│   ├── App.tsx            # Routes and language state
│   └── main.tsx           # React entry point
├── .env.example           # Safe example of required environment variables
├── index.html
├── package.json
├── vite.config.ts
└── vercel.json
```

## Where to make common changes

| Change | File or folder |
| --- | --- |
| Edit Portuguese or English copy | `src/content/site-content.ts` |
| Change email or telephone numbers | `src/config/company.ts` |
| Change colours, typography or spacing | `src/styles/globals.css` |
| Change the homepage composition | `src/pages/HomePage.tsx` |
| Change navigation or footer | `src/components/layout/` |
| Change the request form | `src/components/forms/ContactForm.tsx` |
| Replace operational photographs | `public/images/` |
| Replace portfolio PDFs | `public/documents/` |

## 2026 corporate visual redesign

The visual system was refined to make the company feel established, practical and human-designed rather than like a generic technology template.

### What changed

- The oversized full-screen hero became an editorial split layout with a controlled heading scale.
- The cyan headline treatment was removed; navy, white and yellow now carry the identity more consistently.
- The secondary hero action became a simple text link, creating a clearer action hierarchy.
- Repeated pill buttons, large corner radiuses, glass effects and heavy shadows were reduced.
- The six identical homepage service cards became a numbered service ledger.
- The eight-step process became a compact operational register instead of another card grid.
- The South Africa–Angola section now uses a clean image-and-information layout with numbered points.
- Material categories and portfolio downloads use structured lists and dividers.
- The floating WhatsApp shortcut became a smaller circular action.
- Internal page headings and reusable cards were reduced to a more restrained corporate scale.

### Design principles

1. **Operational clarity:** information is presented in the order a procurement client needs it.
2. **Controlled branding:** yellow is an accent, not a decoration applied everywhere.
3. **Editorial variety:** sections do not repeat the same card composition.
4. **Corporate restraint:** borders and spacing replace excessive shadows, gradients and animation.
5. **Factual communication:** wording should describe real capabilities and avoid invented claims or statistics.

The main redesign logic is commented directly in `HomePage.tsx` and `globals.css`. Keep future additions aligned with these principles so the website remains coherent.

## Language system

`App.tsx` stores a `locale` value of `pt` or `en`. Every page reads its matching copy from `src/content/site-content.ts`, and the chosen language is remembered in the visitor's browser.

When adding content, update both language objects and preserve the same property structure. TypeScript will report missing fields during the build.

## Contact form and Formspree

The contact form supports two independent channels:

- WhatsApp opens a prepared procurement request using the company number in `src/config/company.ts`.
- Email submits the form directly to Formspree without requiring the visitor to use Gmail or another local email application.

Create a private `.env.local` file inside `client`:

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

Do not commit `.env.local`. The `.gitignore` excludes it. The same variable must be configured in Vercel under **Project Settings → Environment Variables** for Production and Preview.

## Portfolio documents

Document URLs are configured in `src/config/company.ts`. PDF filenames are case-sensitive after deployment. If a PDF is replaced, keep the existing filename or update the configuration to match it exactly.

## Deploy on Vercel

The GitHub repository contains the application inside `client`, so Vercel must use:

```text
Root Directory: client
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
```

After the GitHub repository is connected, every push to `main` triggers a new deployment while preserving the existing project URL.

## Code comments

Hand-written source files begin with a language and purpose comment. Additional comments explain decisions that are not obvious from the code, particularly form submission behaviour and the editorial homepage layout. Comments should explain intent rather than repeat individual syntax.

