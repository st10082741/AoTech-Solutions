<!-- Language: Markdown | Purpose: Simple developer guide for running and editing the website. -->

# AoTech Solutions Website

A database-free bilingual website built with React, TypeScript, Vite and Tailwind CSS. Portuguese is shown first and visitors can switch to English.

## Run locally

```bash
npm install
npm run dev
```

Open the address printed in your terminal, normally `http://localhost:5173`.

## Simple folder structure

```text
client/
├── public/                 # Images, logo icon and portfolio PDFs
├── src/
│   ├── pages/              # One clear file for every website page
│   ├── components/
│   │   ├── layout/         # Header, footer and floating WhatsApp button
│   │   ├── forms/          # Contact/request form
│   │   └── ui/             # Logo, icons and reusable headings
│   ├── content/            # All Portuguese and English text
│   ├── config/             # Phone numbers, email and document links
│   ├── styles/             # Global CSS and visual design system
│   ├── types/              # Shared TypeScript definitions
│   ├── App.tsx             # Routes and language switch
│   └── main.tsx            # Starts React
├── index.html              # Browser document and search metadata
├── package.json            # Packages and development commands
├── vite.config.ts          # Vite configuration
└── vercel.json             # Vercel routing and security headers
```

## Where to make changes

| Change                               | File or folder                         |
| ------------------------------------ | -------------------------------------- |
| Add or edit a page                   | `src/pages/`                           |
| Edit Portuguese or English wording   | `src/content/site-content.ts`          |
| Change telephone numbers or email    | `src/config/company.ts`                |
| Change colours, spacing or animation | `src/styles/globals.css`               |
| Change navigation or footer          | `src/components/layout/`               |
| Change the request form              | `src/components/forms/ContactForm.tsx` |
| Replace website photographs          | `public/images/`                       |
| Replace portfolio PDFs               | `public/documents/`                    |

## Language system

`App.tsx` holds one simple `locale` value: `pt` or `en`. Clicking the language button changes that value, and every page reads the matching text from `site-content.ts`. The selected language is remembered in the browser. There are no `[locale]` folders and no duplicated Portuguese/English pages.

## WhatsApp and email

WhatsApp uses a `wa.me` link with a prepared enquiry. Email uses `mailto:` and opens the visitor's configured email application. The form does not store or send data to a database.

## Check and build

```bash
npm run check
npm run build
npm run preview
```

## Deploy on Vercel

Import the project and set **Root Directory** to `client`. Vercel detects Vite and uses the included configuration. Add `VITE_FORMSPREE_ENDPOINT` to the Vercel environment variables before deployment. The Formspree endpoint is configuration data rather than a private credential.

## Comment convention

Every hand-written code file starts with its language and purpose. Important logic is explained near the code. JSON files cannot legally contain comments, so `package.json` and `vercel.json` are documented in this README instead.
