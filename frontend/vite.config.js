import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import commonjs from '@rollup/plugin-commonjs';


export default defineConfig({
  plugins: [react() , commonjs()],
  build: {
    chunkSizeWarningLimit: 900,
  },
  server: {
    port: 5173,
  }
});
