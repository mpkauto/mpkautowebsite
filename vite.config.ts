import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// This file should be in the client directory
// Moving it to client/vite.config.ts would be better

export default defineConfig({
  root: '.',
  base: '/',
  publicDir: 'public',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@shared': path.resolve(__dirname, 'src/shared'),
    },
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    open: true,
  },
  define: {
    'process.env': {},
  },
});
