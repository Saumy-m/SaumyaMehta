# Saumya Mehta — Portfolio

A modern, responsive developer portfolio built with **Next.js** and deployed via **GitHub Pages**.

---

## 🚀 Quick Start

```bash
npm install
npm run dev        # localhost:3000
npm run build      # production build → /out
```

---

## 📁 Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml        ← GitHub Actions auto-deploy
│
├── components/               ← UI components (one per section)
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── Education.jsx
│   ├── Certifications.jsx
│   └── Footer.jsx
│
├── data/                     ← ✏️  EDIT THESE to update content
│   ├── profile.json          ← name, tagline, social links, summary
│   ├── experience.json       ← work history
│   ├── projects.json         ← project cards
│   ├── skills.json           ← skill categories + chips
│   ├── education.json        ← degrees
│   ├── certifications.json   ← certs + status
│   └── activities.json       ← hackathons, clubs, etc.
│
├── pages/
│   ├── _app.jsx              ← global CSS imports
│   ├── _document.jsx         ← HTML shell
│   └── index.jsx             ← main page (assembles all sections)
│
├── styles/
│   ├── globals.css           ← design tokens, reset, layout
│   ├── nav.css               ← navbar styles
│   ├── hero.css              ← hero section
│   ├── experience.css        ← timeline + cards
│   ├── projects.css          ← project grid + cards
│   └── sections.css          ← skills, education, certs, footer
│
├── public/                   ← static assets (favicon, images)
├── next.config.js            ← static export config
└── package.json
```

---

## ✏️ Updating Your Content

All content lives in `data/`. You never need to touch components to update text.

### Add a new job (data/experience.json)

```json
{
  "id": 4,
  "title": "Software Engineer",
  "company": "Acme Corp",
  "location": "Ottawa, ON",
  "period": "Jan. 2026 – Present",
  "current": true,
  "bullets": ["What you did...", "What you achieved..."],
  "tags": ["React", "Node.js"]
}
```

### Add a new project (data/projects.json)

```json
{
  "id": 6,
  "name": "My Project",
  "period": "Jan. 2026 – Present",
  "status": "active",
  "description": "Short description...",
  "highlights": ["What makes it interesting..."],
  "stack": ["Python", "FastAPI"],
  "github": "https://github.com/Saumy-m/my-project",
  "featured": true
}
```

---

## 🌐 Deploying to GitHub Pages

1. Push this repo to GitHub.
2. Go to Settings → Pages → Source → select GitHub Actions.
3. Push to main — the workflow builds and deploys automatically.
4. If deploying to a subdirectory (e.g. github.com/Saumy-m/portfolio), uncomment these in next.config.js:

```js
basePath: '/portfolio',
assetPrefix: '/portfolio/',
```

---

## 🎨 Customising the Design

Design tokens live at the top of styles/globals.css. Change --accent to re-theme the entire site.

---

## 🔧 Tech Stack

- Framework: Next.js 15 (Pages Router, static export)
- Styling: Plain CSS (no Tailwind, no CSS-in-JS)
- Fonts: Space Grotesk + Inter + JetBrains Mono
- Hosting: GitHub Pages
- CI/CD: GitHub Actions
- Content: JSON data files
