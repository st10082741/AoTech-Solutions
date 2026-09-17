<!--
Language: Markdown
Purpose: Explains the AoTech Solutions website architecture, setup, maintenance and deployment.
-->

<div align="center">

# AoTech Solutions

### Procurement · Sourcing · Logistics Coordination

A modern bilingual corporate website connecting clients in Angola with suppliers and procurement opportunities in South Africa.

[Português](#português) · [English](#english) · [Installation](#local-installation) · [Deployment](#vercel-deployment)

</div>

---

## Project overview

The AoTech Solutions website presents the company’s procurement, supplier-sourcing and logistics-coordination services.

It allows prospective clients to:

- Learn about AoTech Solutions;
- Explore available procurement services;
- Understand the procurement process;
- Submit quotation requests through the website;
- Contact AoTech directly through WhatsApp;
- Download the company portfolio in Portuguese or English.

The website is intentionally database-free. Most content is managed through organised TypeScript configuration and content files.

---

## Main features

- Modern and responsive corporate design;
- Portuguese and English language support;
- Direct WhatsApp integration;
- Contact-form submission through Formspree;
- Portuguese and English portfolio downloads;
- Procurement-request form;
- Client-side navigation with React Router;
- Reusable React components;
- Centralised company configuration;
- Structured bilingual content;
- Accessible success and error messages;
- Mobile, tablet and desktop support;
- Vercel-ready production configuration;
- No custom backend or database required.

---

## Technologies

| Technology   | Purpose                                 |
| ------------ | --------------------------------------- |
| React        | User interface and reusable components  |
| TypeScript   | Type safety and maintainable code       |
| Vite         | Development server and production build |
| Tailwind CSS | Responsive styling and visual design    |
| React Router | Client-side page navigation             |
| Lucide React | Professional interface icons            |
| Formspree    | Secure contact-form processing          |
| Vercel       | Hosting and continuous deployment       |

---

## Project structure

```text
AoTech-Solutions/
├── client/
│   ├── public/
│   │   ├── documents/
│   │   │   ├── AoTech-Solutions-Portfolio-EN.pdf
│   │   │   └── AoTech-Solutions-Portfolio-PT.pdf
│   │   ├── images/
│   │   └── favicon.svg
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── forms/
│   │   │   │   └── ContactForm.tsx
│   │   │   ├── layout/
│   │   │   └── ui/
│   │   │
│   │   ├── config/
│   │   │   └── company.ts
│   │   │
│   │   ├── content/
│   │   │   └── site-content.ts
│   │   │
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── types/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── vite-env.d.ts
│   │
│   ├── .env.example
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   ├── vercel.json
│   └── vite.config.ts
│
└── README.md
```

### Folder responsibilities

| Location                | Responsibility                             |
| ----------------------- | ------------------------------------------ |
| `src/pages`             | Complete website pages                     |
| `src/components`        | Reusable interface components              |
| `src/components/forms`  | Contact and procurement forms              |
| `src/components/layout` | Header, footer and shared layouts          |
| `src/components/ui`     | Small reusable visual components           |
| `src/config`            | Company contact details and external links |
| `src/content`           | Portuguese and English website content     |
| `src/styles`            | Global styles and design rules             |
| `src/types`             | Shared TypeScript definitions              |
| `public/images`         | Website images and visual assets           |
| `public/documents`      | Downloadable company documents             |

---

## Local installation

### Requirements

Install the following before running the project:

- [Node.js](https://nodejs.org/)
- npm
- Git
- Visual Studio Code or another code editor

### 1. Open the frontend folder

```powershell
cd .\AoTech-Solutions\client
```

### 2. Install the dependencies

```powershell
npm install
```

### 3. Configure the environment variable

Create this file inside `client`:

```text
.env.local
```

Add the Formspree endpoint:

```env
# Formspree endpoint used by the AoTech contact form.
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

Do not add `.env.local` to Git. It is excluded by `.gitignore`.

### 4. Start the development server

```powershell
npm run dev
```

Open the address displayed in the terminal, normally:

```text
http://localhost:5173
```

---

## Available commands

| Command           | Description                                           |
| ----------------- | ----------------------------------------------------- |
| `npm run dev`     | Starts the local development server                   |
| `npm run build`   | Runs TypeScript checks and creates a production build |
| `npm run preview` | Previews the production build locally                 |
| `npm install`     | Installs project dependencies                         |

Before deploying, always run:

```powershell
npm run build
```

---

## Contact-form integration

The website offers two contact methods.

### WhatsApp

The WhatsApp button:

1. Reads the completed form fields;
2. Creates a structured procurement request;
3. Opens WhatsApp with the message already prepared.

The WhatsApp number is configured in:

```text
src/config/company.ts
```

### Email through Formspree

The email button:

1. Validates the required form fields;
2. Sends the enquiry directly to Formspree;
3. Forwards the submission to the verified AoTech email;
4. Displays a success or error message;
5. Clears the form only after a successful submission.

The Formspree endpoint is loaded from:

```text
VITE_FORMSPREE_ENDPOINT
```

This means visitors are not required to use Gmail or have an email application configured.

---

## Updating company information

Open:

```text
src/config/company.ts
```

This file contains central business information such as:

- Company name;
- Email address;
- WhatsApp number;
- Telephone numbers;
- Portfolio document paths;
- External contact links.

Update the values in this file instead of searching through multiple components.

---

## Updating website text

Open:

```text
src/content/site-content.ts
```

The file contains both language versions:

```ts
pt: {
  // Portuguese content
},

en: {
  // English content
},
```

When adding or changing website text, update both languages to keep the website consistent.

---

## Updating portfolio documents

Store the portfolio PDFs inside:

```text
client/public/documents/
```

Use these exact filenames:

```text
AoTech-Solutions-Portfolio-PT.pdf
AoTech-Solutions-Portfolio-EN.pdf
```

The public URLs are:

```text
/documents/AoTech-Solutions-Portfolio-PT.pdf
/documents/AoTech-Solutions-Portfolio-EN.pdf
```

Always open each PDF after replacing it to ensure that the document is valid and not corrupted.

---

## Updating images

Store website images inside:

```text
client/public/images/
```

Recommended formats:

- WebP for photographs;
- SVG for logos and icons;
- PNG when transparency is required;
- JPG only when WebP is unavailable.

Use descriptive filenames:

```text
industrial-procurement.webp
supplier-verification.webp
south-africa-angola-logistics.webp
```

Avoid spaces and accented characters in filenames.

---

## Vercel deployment

### 1. Upload the project to GitHub

Push the complete `AoTech-Solutions` project to a GitHub repository.

The following items must not be committed:

```text
node_modules/
dist/
.env.local
.vercel/
```

### 2. Import the repository into Vercel

In Vercel:

1. Select **Add New Project**;
2. Import the AoTech Solutions GitHub repository;
3. Set the root directory to:

```text
client
```

Vercel should detect Vite automatically.

### 3. Configure the environment variable

Open:

```text
Project Settings → Environment Variables
```

Create:

| Name                      | Value                   |
| ------------------------- | ----------------------- |
| `VITE_FORMSPREE_ENDPOINT` | Your Formspree endpoint |

Enable it for:

- Production;
- Preview;
- Development.

### 4. Deploy

The expected Vercel settings are:

| Setting          | Value           |
| ---------------- | --------------- |
| Framework        | Vite            |
| Root directory   | `client`        |
| Build command    | `npm run build` |
| Output directory | `dist`          |
| Install command  | `npm install`   |

After adding or changing an environment variable, redeploy the website.

---

## Deployment checklist

Before publishing a new version, verify:

- [ ] `npm run build` completes successfully;
- [ ] Portuguese pages display correctly;
- [ ] English pages display correctly;
- [ ] WhatsApp opens with the completed message;
- [ ] Formspree receives the contact request;
- [ ] The verified email receives the enquiry;
- [ ] Portuguese portfolio opens correctly;
- [ ] English portfolio opens correctly;
- [ ] Navigation works on mobile and desktop;
- [ ] Contact details are accurate;
- [ ] `.env.local` is not committed to GitHub.

---

## Security and privacy

- No custom database is used;
- No email-service secret key is stored in the frontend;
- Local environment files are excluded from version control;
- Form submissions are processed through Formspree;
- Submitted details are used to respond to procurement enquiries;
- External links use safe browser behaviour where applicable;
- The website should always be served through HTTPS in production.

The Formspree endpoint is a public form identifier, not a private API password. Formspree’s spam protection and domain restrictions should still be configured after deployment.

---

## Português

A AoTech Solutions facilita processos de procurement entre clientes em Angola e fornecedores na África do Sul.

O website permite:

- Consultar os serviços da empresa;
- Compreender o processo de procurement;
- Solicitar cotações;
- Contactar a AoTech através do WhatsApp;
- Enviar pedidos diretamente pelo formulário;
- Baixar o portfólio institucional em português ou inglês.

---

## English

AoTech Solutions facilitates procurement between clients in Angola and suppliers in South Africa.

The website allows visitors to:

- Explore the company’s services;
- Understand the procurement process;
- Request quotations;
- Contact AoTech through WhatsApp;
- Submit enquiries through the website;
- Download the corporate portfolio in Portuguese or English.

---

## Company contact

**AoTech Solutions**

- Email: `bachisumbo@gmail.com`
- WhatsApp: `+27 84 284 2365`
- Procurement corridor: South Africa — Angola

---

## Maintenance notes

When making future changes:

1. Update central configuration before editing components;
2. Keep Portuguese and English content aligned;
3. Add useful comments around non-obvious logic;
4. Avoid duplicating company information across files;
5. Run the production build before committing;
6. Test the contact form and downloads after deployment.

---

<div align="center">

Built for **AoTech Solutions**

Procurement with clarity, technical attention and commercial confidence.

</div>
