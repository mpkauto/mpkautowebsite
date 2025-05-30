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
  // Radix UI packages
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
        // Externalize node built-ins
        if (id.startsWith('node:')) {
          return true;
        }
        
        // Don't externalize any other dependencies - bundle them
        return false;
      },
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            // Group React related dependencies
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'react-vendor';
            }
            
            // Group Radix UI packages
            if (id.includes('@radix-ui')) {
              return 'radix-ui';
            }
            
            // Group date related dependencies
            if (id.includes('date-fns') || id.includes('react-day-picker')) {
              return 'date-vendor';
            }
            
            // Group UI related dependencies
            if (id.includes('framer-motion') || id.includes('lucide-react') || id.includes('tailwind')) {
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
      esmExternals: false, // Disable ESM externals to ensure proper bundling
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
