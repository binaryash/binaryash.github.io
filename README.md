# Minimalist Portfolio | Binary Ash

A high-performance, monochromatic portfolio designed for a multi-disciplinary engineer specializing in **Full-Stack Development**, **AI/ML**, and **Embedded Systems**. This project focuses on minimalism, typography, and a seamless developer experience by separating metadata from long-form content using Markdown.

## 🚀 Overview

This portfolio is built with a modern frontend stack and features a modular content system. It architecturally separates the site structure from the actual content, allowing for easy updates without modifying the source code.

- **Live Site**: [binaryash.github.io](https://binaryash.github.io)
- **Tech Stack**: React 19, TypeScript, Vite, Tailwind CSS
- **Icons**: Lucide React
- **Content Management**: External Markdown files for Bio, Projects, and Blog Posts

## ✨ Key Features

- **Monochromatic Aesthetic**: A clean, "blended" design with a soft monochromatic palette and smooth transitions.
- **Dynamic Content Loading**: Content is fetched dynamically from `.md` files, keeping the main application lightweight.
- **Responsive Layout**: Optimized for all devices, from high-resolution desktops to mobile screens.
- **Dark Mode Support**: Built-in theme toggling with system preference detection.
- **Automated Deployment**: Fully configured GitHub Actions pipeline for seamless deployment to GitHub Pages.
- **Recruiter Optimized**: Ergonomic header-placed Resume button and clear technical project summaries.

## 🛠️ Technical Stack

- **Framework**: [React 19](https://react.dev/) (TypeScript)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Rendering**: [React Markdown](https://github.com/remarkjs/react-markdown) for content parsing.
- **Icons**: [Lucide React](https://lucide.dev/) for minimalist iconography.

## 📂 Project Structure

```text
├── .github/workflows/  # CI/CD Deployment pipeline
├── public/
│   ├── content/        # Markdown files for projects, blog, and bio
│   ├── favicon/        # Site favicons and manifests
│   └── ash-resume.pdf  # Downloadable assets
├── src/
│   ├── components/     # Reusable UI components
│   ├── views/          # Page-level view components
│   ├── config.ts       # Site metadata and structure
│   └── types.ts        # TypeScript definitions
├── docs/               # Build output directory (Target for GitHub Pages)
└── vite.config.ts      # Vite & Build configuration
```

## 📝 Content Management

The site is designed to be "Content-Separated." To update your portfolio:

1.  **Metadata**: Update `config.ts` to add new projects, blog posts, or modify your skills list.
2.  **Long-form Content**: Add or edit `.md` files in `public/content/projects/` or `public/content/blog/`. The application will automatically fetch and render these files based on the paths provided in `config.ts`.

## 🛠️ Development

### Prerequisites
- Node.js (v20 or higher)
- npm

### Local Setup
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

### Building for Production
To generate the static site in the `docs/` folder:
```bash
npm run build
```

## 🚢 Deployment

This project is configured for **GitHub Pages** using **GitHub Actions**.

1.  Push your changes to the `main` branch.
2.  The workflow in `.github/workflows/deploy.yml` will automatically build the project and deploy the `docs/` folder.
3.  Ensure your GitHub repository settings are set to **Source: GitHub Actions** under the **Pages** menu.

### GitHub Pages Base Path Behavior

- If the repository name is `username.github.io`, Astro builds with `base: /`.
- If the repository name is anything else (project page), Astro builds with `base: /<repo-name>/`.
- `site` defaults to `https://binaryash.github.io` and can be overridden with `SITE_URL` in CI.

---
Built by [Binary Ash](https://github.com/binaryash).
