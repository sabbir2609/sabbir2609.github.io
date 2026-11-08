# Sabbir Hasan Munna — Academic & Developer Portfolio

Personal portfolio and academic CV website for **Sabbir Hasan Munna**, a Physics Postgraduate Researcher specializing in Experimental Condensed Matter Physics & Computational Materials Science at KUET.

🌐 **Live Site:** [sabbir2609.github.io](https://sabbir2609.github.io)

---

## Features

- Academic CV — research profile, manuscripts, education, conferences, skills
- Developer portfolio — projects and technical experience
- MDX blog with math (KaTeX), syntax highlighting, and reading time
- Click-to-copy DOI for manuscripts
- Dark/light theme toggle via DaisyUI
- Fully static export — hosted on GitHub Pages

---

## Tech Stack

| Tool                  | Purpose                      |
| --------------------- | ---------------------------- |
| Next.js 16            | Framework (static export)    |
| TypeScript            | Type safety                  |
| Tailwind CSS v4       | Styling                      |
| DaisyUI v5            | UI components & theming      |
| MDX + next-mdx-remote | Blog content                 |
| KaTeX + rehype-katex  | Math rendering               |
| rehype-pretty-code    | Code syntax highlighting     |
| react-icons           | Icons (FA, SI)               |
| GitHub Actions        | CI/CD deploy to GitHub Pages |

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
app/                      # Next.js app router pages
├── blog/                 # Blog listing & post pages
├── dev/                  # Developer portfolio page
└── page.tsx              # Academic CV home page

components/
├── AcademicHero.tsx      # Hero section with stats & social links
├── AcademicSections.tsx  # All CV sections
├── utils/
│   ├── CopyDoi.tsx       # Click-to-copy DOI button
│   └── ThemeChange.tsx

lib/
├── cvData.ts             # All academic CV data
├── devData.ts            # Developer portfolio data
└── posts.ts              # MDX blog post utilities

content/
└── blog/                 # MDX blog posts
```

---

## Deployment

This site is deployed as a static export to **GitHub Pages** via GitHub Actions.

```bash
npm run build
```

The workflow in `.github/workflows/` handles automatic deployment on every push to `main`.

---

## Data

All CV content is managed in [`lib/cvData.ts`](lib/cvData.ts) — update manuscripts, education, conferences, skills, and references there without touching any component.

---

## License

MIT
