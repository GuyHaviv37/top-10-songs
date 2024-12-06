import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/top-10-songs/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
