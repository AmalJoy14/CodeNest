import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  plugins: [react() , commonjs()],
  build: {
    chunkSizeWarningLimit: 900,
  },
  server: {
    port: 5173,
  }
});
