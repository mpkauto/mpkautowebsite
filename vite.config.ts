import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  root: './client', // Set root to client directory
  publicDir: './client/public',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'client/src'),
      '@components': path.resolve(__dirname, 'client/src/components'),
      '@assets': path.resolve(__dirname, 'client/src/assets'),
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'radix-ui': [
            '@radix-ui/react-select',
            '@radix-ui/react-dialog',
            '@radix-ui/react-popover',
            '@radix-ui/react-toast',
            '@radix-ui/react-slot',
            '@radix-ui/react-label'
          ],
          'vendor': [
            'zod',
            'framer-motion',
            'lucide-react',
            'tailwind-merge',
            'tailwindcss-animate',
            'class-variance-authority',
            '@tanstack/react-query',
            'react-day-picker',
            'date-fns',
            'react-hot-toast'
          ]
        },
      },
    },
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true,
    },
  },
  optimizeDeps: {
    include: [
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
      '@radix-ui/react-select',
      '@radix-ui/react-dialog',
      '@radix-ui/react-popover',
      '@radix-ui/react-toast',
      '@radix-ui/react-slot',
      '@radix-ui/react-label'
    ],
  },
  define: {
    'process.env': {},
  },
});
