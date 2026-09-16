# Pitchayut's portfolio

A static Astro portfolio built around a logarithmic time scale.

Run `npm ci` and `npm run dev` to develop at http://localhost:4321.
Run `npm run build` to generate static HTML and CSS in `dist/`.
Run `npm run preview` to preview the production build.
No server runtime is required by the production page.
The only client script controls the light and dark theme preference.
Fonts are loaded from Google Fonts.

Firebase Hosting serves `dist/`, with a predeploy build hook.
The existing auto-generated GitHub deployment workflows are preserved; their runners need dependencies installed before invoking Firebase.
The previous website is preserved in `archive/`.
`src/components/ProjectPipeline.astro` preserves the market-data architecture visual for a future project detail page.
