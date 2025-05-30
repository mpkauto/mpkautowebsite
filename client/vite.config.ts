import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Common dependencies to optimize
const commonDeps = [
  'react',
  'react-dom',
  'react-router-dom',
  'react-day-picker',
  'date-fns',
  'lucide-react',
  'framer-motion',
  'zod',
  '@tanstack/react-query',
  'class-variance-authority',
  'tailwind-merge',
  'tailwindcss-animate',
  // Radix UI packages - explicitly list all used components
  '@radix-ui/react-select',
  '@radix-ui/react-dialog',
  '@radix-ui/react-popover',
  // Add other Radix UI packages as needed
];

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@shared': path.resolve(__dirname, 'src/shared'),
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      // Don't externalize any dependencies - bundle everything
      external: [],
      output: {
        manualChunks: {
          // Create a separate chunk for Radix UI
          'radix-ui': ['@radix-ui/react-select', '@radix-ui/react-dialog', '@radix-ui/react-popover'],
          // Create a separate chunk for React
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // Create a separate chunk for date libraries
          'date-vendor': ['date-fns', 'react-day-picker'],
          // Group other UI libraries
          'ui-vendor': ['framer-motion', 'lucide-react', 'tailwind-merge', 'tailwindcss-animate'],
          // Group other dependencies
          'vendor': ['zod', '@tanstack/react-query', 'class-variance-authority']
        },
      },
    },
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true,
      esmExternals: false,
    },
  },
  optimizeDeps: {
    include: commonDeps,
    exclude: ['@eslint/config-array', 'esbuild'],
  },
  ssr: {
    // Bundle all dependencies for SSR
    noExternal: true,
  },
  server: {
    port: 3000,
    open: true,
  },
  define: {
    'process.env': {},
  },
});
