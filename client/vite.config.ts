import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

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
        
        // Check if the ID is a Radix UI package or starts with it
        return radixPackages.some(pkg => id === pkg || id.startsWith(`${pkg}/`));
      },
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('@radix-ui')) {
              return 'radix-ui';
            }
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'react-vendor';
            }
            if (id.includes('date-fns') || id.includes('react-day-picker')) {
              return 'date-vendor';
            }
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
      'react',
      'react-dom',
      'react-day-picker',
      'date-fns',
      '@radix-ui/react-select',
      '@radix-ui/react-dialog',
      // Add other Radix UI packages as needed
    ],
  },
  server: {
    port: 3000,
    open: true,
  },
  define: {
    'process.env': {},
  },
});
