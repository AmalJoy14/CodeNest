import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 900,
  },
  resolve: {
    alias: {
      "@canvasjs/react-charts": "/node_modules/@canvasjs/react-charts"
    }
  },
  server: {
    port: 5173,
  }
});
