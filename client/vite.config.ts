import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// List of all Radix UI packages
const radixPackages = [
  '@radix-ui/react-accordion',
  '@radix-ui/react-alert-dialog',
  '@radix-ui/react-aspect-ratio',
  '@radix-ui/react-avatar',
  '@radix-ui/react-checkbox',
  '@radix-ui/react-collapsible',
  '@radix-ui/react-context-menu',
  '@radix-ui/react-dialog',
  '@radix-ui/react-dropdown-menu',
  '@radix-ui/react-hover-card',
  '@radix-ui/react-label',
  '@radix-ui/react-menubar',
  '@radix-ui/react-navigation-menu',
  '@radix-ui/react-popover',
  '@radix-ui/react-progress',
  '@radix-ui/react-radio-group',
  '@radix-ui/react-scroll-area',
  '@radix-ui/react-select',
  '@radix-ui/react-separator',
  '@radix-ui/react-slot',
  '@radix-ui/react-switch',
  '@radix-ui/react-tabs',
  '@radix-ui/react-toast',
  '@radix-ui/react-toggle',
  '@radix-ui/react-toggle-group',
  '@radix-ui/react-tooltip',
];

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
      external: (id) => {
        // Externalize all Radix UI packages
        if (radixPackages.some(pkg => id === pkg || id.startsWith(`${pkg}/`))) {
          return true;
        }
        
        // Externalize common dependencies
        if (commonDeps.some(dep => id === dep || id.startsWith(`${dep}/`))) {
          return true;
        }
        
        // Externalize node built-ins
        if (id.startsWith('node:')) {
          return true;
        }
        
        return false;
      },
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            // Group Radix UI packages
            if (radixPackages.some(pkg => id.includes(pkg))) {
              return 'radix-ui';
            }
            
            // Group React related dependencies
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'react-vendor';
            }
            
            // Group date related dependencies
            if (id.includes('date-fns') || id.includes('react-day-picker')) {
              return 'date-vendor';
            }
            
            // Group UI related dependencies
            if (id.includes('@radix-ui') || 
                id.includes('framer-motion') || 
                id.includes('lucide-react') ||
                id.includes('tailwind')) {
              return 'ui-vendor';
            }
            
            // Default vendor chunk
            return 'vendor';
          }
        },
      },
    },
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true,
      esmExternals: true,
    },
  },
  optimizeDeps: {
    include: [
      ...commonDeps,
      ...radixPackages,
      'react-helmet-async',
      'react-hook-form',
      'react-hot-toast',
      'react-intersection-observer',
      'swiper',
      'wouter',
    ],
    exclude: ['@eslint/config-array', 'esbuild'],
  },
  ssr: {
    noExternal: ['@radix-ui/*'],
  },
  server: {
    port: 3000,
    open: true,
  },
  define: {
    'process.env': {},
  },
});
