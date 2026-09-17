<!--
Language: Markdown
Purpose: Main documentation for the AoTech Solutions corporate website.
-->

<div align="center">

# AoTech Solutions

### Procurement · Sourcing · Logistics Coordination

A modern bilingual website connecting clients in Angola with suppliers and procurement opportunities in South Africa.

</div>

---

## Overview

The AoTech Solutions website presents the company’s procurement, supplier-sourcing and logistics-coordination services.

Visitors can:

- Explore the company’s services;
- Understand the procurement process;
- Submit quotation requests;
- Contact AoTech through WhatsApp;
- Send enquiries directly through the website;
- Download the company portfolio in Portuguese or English.

The website is database-free and designed for fast deployment on Vercel.

## Features

- Portuguese and English language support;
- Responsive mobile and desktop design;
- Direct WhatsApp integration;
- Contact-form submission through Formspree;
- Portuguese and English portfolio downloads;
- Client-side navigation;
- Reusable React components;
- Centralised business configuration;
- Accessible success and error feedback;
- No custom backend or database required.

## Technologies

| Technology | Purpose |
| --- | --- |
| React | User interface and reusable components |
| TypeScript | Type safety and maintainable code |
| Vite | Development server and production builds |
| Tailwind CSS | Responsive styling |
| React Router | Client-side navigation |
| Lucide React | Interface icons |
| Formspree | Contact-form processing |
| Vercel | Hosting and deployment |

## Project structure

```text
AoTech-Solutions/
├── client/
│   ├── public/
│   │   ├── documents/       # Portuguese and English portfolios
│   │   ├── images/          # Website images
│   │   └── favicon.svg
│   ├── src/
│   │   ├── components/
│   │   │   ├── forms/       # Contact and procurement forms
│   │   │   ├── layout/      # Header, footer and navigation
│   │   │   └── ui/          # Reusable interface elements
│   │   ├── config/          # Company details and external links
│   │   ├── content/         # Portuguese and English content
│   │   ├── pages/           # Website pages
│   │   ├── styles/          # Global styles
│   │   ├── types/           # TypeScript definitions
│   │   ├── App.tsx          # Routes and language state
│   │   ├── main.tsx         # React entry point
│   │   └── vite-env.d.ts    # Environment-variable types
│   ├── .env.example
│   ├── DEVELOPER_GUIDE.md   # Website-management instructions
│   ├── index.html
│   ├── package.json
│   ├── vercel.json
│   └── vite.config.ts
├── .gitattributes
└── README.md
```

## Local installation

### Requirements

- Node.js;
- npm;
- Git.

### Install and run

Enter the frontend folder:

```powershell
cd .\client
```

Install dependencies:

```powershell
npm install
```

Create `client/.env.local` and add:

```env
# Formspree endpoint used by the AoTech contact form.
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

Start the development server:

```powershell
npm run dev
```

Open the address displayed in the terminal, normally `http://localhost:5173`.

## Available commands

| Command | Description |
| --- | --- |
| `npm install` | Installs project dependencies |
| `npm run dev` | Starts the development server |
| `npm run build` | Runs TypeScript checks and builds the website |
| `npm run preview` | Previews the production build |

Always run `npm run build` before deployment.

## Contact integrations

### WhatsApp

The WhatsApp button converts the completed form into a structured procurement message and opens WhatsApp with the message already prepared. The contact number is configured in `client/src/config/company.ts`.

### Formspree

The email button sends the enquiry directly through Formspree. Visitors do not need Gmail or a locally configured email application. The endpoint is loaded from `VITE_FORMSPREE_ENDPOINT`.

## Updating the website

| Change | Location |
| --- | --- |
| Company contacts | `client/src/config/company.ts` |
| Portuguese and English content | `client/src/content/site-content.ts` |
| Website pages | `client/src/pages/` |
| Contact form | `client/src/components/forms/ContactForm.tsx` |
| Navigation and footer | `client/src/components/layout/` |
| Colours, spacing and typography | `client/src/styles/globals.css` |
| Website images | `client/public/images/` |
| Portfolio PDFs | `client/public/documents/` |

Detailed maintenance instructions are available in `client/DEVELOPER_GUIDE.md`.

## Portfolio documents

The portfolio files use these exact paths:

```text
client/public/documents/AoTech-Solutions-Portfolio-PT.pdf
client/public/documents/AoTech-Solutions-Portfolio-EN.pdf
```

Both documents should be tested after replacement to ensure the PDFs are valid.

## Vercel deployment

Import this repository into Vercel and use:

| Setting | Value |
| --- | --- |
| Root Directory | `client` |
| Framework Preset | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

Add `VITE_FORMSPREE_ENDPOINT` under Vercel Environment Variables and enable it for Production, Preview and Development.

## Security and privacy

- No custom database is used;
- `.env.local` is excluded from Git;
- No private email-service key is exposed;
- Form submissions are processed through Formspree;
- Submitted information is used only to answer enquiries;
- Production deployment uses HTTPS.

## Deployment checklist

- [ ] Production build passes;
- [ ] Portuguese and English pages display correctly;
- [ ] WhatsApp opens with the prepared request;
- [ ] Formspree receives submissions;
- [ ] Email notifications arrive successfully;
- [ ] Both portfolio PDFs open correctly;
- [ ] Navigation works on mobile and desktop;
- [ ] `.env.local` is not committed.

## Contact

**AoTech Solutions**

- Email: `bachisumbo@gmail.com`
- WhatsApp: `+27 84 284 2365`
- Procurement corridor: South Africa — Angola

---

<div align="center">

Built for **AoTech Solutions**

Procurement with clarity, technical attention and commercial confidence.

</div>
