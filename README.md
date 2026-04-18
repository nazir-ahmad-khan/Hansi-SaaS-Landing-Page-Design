# Hansi Leading Page

A modern, responsive landing page built with Astro, Tailwind CSS, Preline UI, and AOS animations.

## Tech Stack

- **Astro** - Static site generator
- **Tailwind CSS** - Utility-first CSS framework
- **Preline UI** - Component library for Tailwind
- **AOS** - Animate On Scroll library
- **@astrojs/sitemap** - Automatic sitemap generation

## Features

- Single-page landing layout with smooth scrolling navigation
- Responsive design (mobile, tablet, desktop)
- Modern UI with animations
- SEO optimized with sitemap
- Clean, maintainable code structure

## Sections

1. Hero Section
2. Features Section
3. Benefits Section
4. Integrations Section
5. Pricing Section
6. Blog Section
7. Contact Section

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Build

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Features.astro
│   │   ├── Benefits.astro
│   │   ├── Integrations.astro
│   │   ├── Pricing.astro
│   │   ├── Blog.astro
│   │   └── Contact.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Customization

- Update the site URL in `astro.config.mjs`
- Replace placeholder images in the `public/` folder
- Modify content in the component files
- Adjust styling in the Tailwind classes

## Deployment

This project can be deployed to any static hosting service like Vercel, Netlify, or GitHub Pages.

## License

This project is open source and available under the [MIT License](LICENSE).

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
