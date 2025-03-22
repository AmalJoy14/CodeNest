import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('codemirror')) return 'codemirror-vendor';
            return 'vendor';
          }
        }
      }
    },
    chunkSizeWarningLimit: 700,
  },
  server: {
    port: 5173,
  }
});
