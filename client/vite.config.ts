import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Common dependencies to pre-bundle
const commonDeps = [
  'react',
  'react-dom',
  'react-router-dom',
  'react-day-picker',
  'react-countup',
  'date-fns',
  'lucide-react',
  'framer-motion',
  'zod',
  '@tanstack/react-query',
  'class-variance-authority',
  'tailwind-merge',
  'tailwindcss-animate',
  'wouter',
  '@radix-ui/react-select',
  '@radix-ui/react-dialog',
  '@radix-ui/react-popover',
  '@radix-ui/react-accordion',
];

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-countup': 'react-countup/build/index.js',
      '@': path.resolve(__dirname, 'src'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@lib': path.resolve(__dirname, 'src/lib'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@types': path.resolve(__dirname, 'src/types'),
      '@utils': path.resolve(__dirname, 'src/utils')
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      external: ['drizzle-orm/pg-core', 'drizzle-orm'],
      output: {
        manualChunks: {
          'radix-ui': [
            '@radix-ui/react-select',
            '@radix-ui/react-dialog',
            '@radix-ui/react-popover',
            '@radix-ui/react-accordion'
          ],
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'date-vendor': ['date-fns', 'react-day-picker'],
          'ui-vendor': [
            'framer-motion',
            'lucide-react',
            'tailwind-merge',
            'tailwindcss-animate',
            'react-countup',
            'wouter'
          ],
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
