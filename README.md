Divinity — Pre‑Workout Landing Page

A fast, responsive, and accessible single‑page website for a pre‑workout supplement brand targeted at men ages 18–28. The page includes a bold hero, feature highlights, benefits, transparent ingredients, a call‑to‑action, and a simple footer.

### Overview
- Stack: Plain HTML, CSS, and vanilla JS (no build tools or dependencies)
- Files live in the project root: index.html, style.css, script.js
- Mobile‑first dark theme with a bright accent color
- Accessibility: semantic HTML, focus styles, and readable contrast

### Page sections
- Hero: Headline, short value prop, primary CTA, and trust bullets
- Features: Clean Energy, Laser Focus, Endurance, Strength Output
- Benefits: Quick, scannable value bullets
- Ingredients: Transparent callouts with example dosages (placeholders)
- CTA: Email waitlist form (front‑end only)
- Footer: Copyright year auto‑updated by JavaScript

### Run locally
You can open the site directly or serve it with a simple static server.

Option A — Open directly
1) Double‑click index.html (or open it in your browser)

Option B — Local HTTP server (recommended)
1) Open a terminal in this project folder
2) Run: python3 -m http.server 8000
3) Visit: http://localhost:8000

### Customize
Brand and copy
- Update brand name and text in index.html (hero headline, subcopy, bullets, footer, etc.)

Colors and theme
- Edit CSS variables in style.css under :root for brand colors and spacing:
  - --accent, --accent-600, --accent-700 (accent shades)
  - --bg-*, --text-* (background and text)
  - --radius, --radius-sm (rounded corners)
  - --maxw and .section padding for layout width/spacing

Imagery
- Replace the hero product placeholder (.product-shot) with your own image. You can swap the placeholder <div> for an <img> with appropriate alt text.

Ingredients
- The amounts in the Ingredients section are example placeholders. Replace with your final formula and ensure all claims meet regulatory guidance in your target markets.

Form / CTA
- The email form is front‑end only and not wired to a backend. Connect it to your email platform or API before launch.

### Deploy
Any static hosting works (GitHub Pages, Netlify, Vercel, Cloudflare Pages, S3, etc.)

- GitHub Pages (root)
  1) Push this repo to GitHub
  2) In the repository settings, enable Pages: Source = Deploy from a branch, Branch = your default branch (e.g., main), Folder = /root
- Netlify
  1) Drag‑and‑drop the project folder to app.netlify.com OR connect your repository
  2) No build command or framework preset needed
- Vercel
  1) Import the repository at vercel.com/new
  2) No build command required. Framework preset: Other (static)

### File structure
- index.html — Main HTML structure and content
- style.css — Styles for layout, components, and responsiveness
- script.js — Initializes JS on DOMContentLoaded (sets current year; ready for future hooks)

### Notes / disclaimers
- Replace all placeholder ingredient amounts with your finalized dosages before launch
- No third‑party dependencies are required
- Test on your target devices and browsers for final QA
