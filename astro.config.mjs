// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://hansi-leading-page.com', // Replace with your actual domain

  // ✅ VITE CONFIGURATION - Ensure Vite is properly configured with React Refresh
  vite: {
    plugins: [tailwindcss()],
    // ✅ Optimize React Fast Refresh for development
    ssr: {
      // Ensure proper module handling for React components
      noExternal: ['framer-motion', 'aos']
    }
  },

  // ✅ INTEGRATIONS - React is configured for hydration
  integrations: [
    sitemap(), 
    // ✅ React integration with proper configuration
    // This enables client:* directives for hydrating React components
    react({
      // Experimental preactivation to ensure React Ready
      experimentalReactChildren: true
    })
  ]
});