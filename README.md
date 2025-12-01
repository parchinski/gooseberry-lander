# Gooseberry Consulting Website

A high-performance landing page for Gooseberry Consulting, built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), ready for deployment on [Cloudflare Pages](https://pages.cloudflare.com).

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/             # Static assets (favicon, images)
├── src/
│   ├── components/     # Reusable UI components
│   ├── layouts/        # Layout wrappers (HTML shell)
│   ├── pages/          # Route definitions
│   └── styles/         # Global styles (Tailwind configuration)
├── astro.config.mjs    # Astro configuration
├── tailwind.config.mjs # Tailwind configuration (mapped in global.css for v4)
└── package.json        # Project dependencies
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun dev`                 | Starts local dev server at `localhost:4321`      |
| `bun run build`           | Build your production site to `./dist/`          |
| `bun run preview`         | Preview your build locally, before deploying     |

## ☁️ Deployment (Cloudflare Pages)

This project is configured for Cloudflare Pages.

1.  **Push to GitHub/GitLab**: Ensure this repository is connected to your Git provider.
2.  **Connect to Cloudflare Pages**:
    *   Go to the Cloudflare Dashboard > Pages.
    *   Select "Connect to Git".
    *   Select this repository.
3.  **Build Settings**:
    *   **Framework Preset**: Astro
    *   **Build Command**: `bun run build` (or `npm run build` if using npm)
    *   **Build Output Directory**: `dist`
    *   **Environment Variables**: Add any necessary variables (none required by default).
    *   **Node.js Version**: Ensure you are using a compatible version (e.g., 18+ or 20+).

The included `wrangler.jsonc` allows for advanced configuration if using `wrangler pages deploy` directly.

## 🛠️ Tech Stack

*   **Framework**: Astro
*   **Styling**: Tailwind CSS (v4)
*   **Font**: Inter (Self-hosted via `@fontsource/inter`)
*   **Icons**: Heroicons (SVG)
*   **Animation**: Custom CSS keyframes (Tailwind utility classes)
