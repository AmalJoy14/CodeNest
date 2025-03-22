import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Mark these dependencies as external so they're not bundled.
      // Make sure you load them externally (e.g., via CDN) in your index.html.
      external: [
        '@uiw/react-codemirror',
        '@codemirror/view',
        '@codemirror/lang-javascript',
        '@codemirror/lang-python',
        '@codemirror/lang-cpp',
        '@codemirror/lang-java',
        '@codemirror/lang-go',
        '@codemirror/lang-rust'
      ],
      output: {
        // Provide global variable names for the external modules.
        globals: {
          '@uiw/react-codemirror': 'ReactCodeMirror',
          '@codemirror/view': 'CodeMirrorView',
          '@codemirror/lang-javascript': 'CodeMirrorLangJavaScript',
          '@codemirror/lang-python': 'CodeMirrorLangPython',
          '@codemirror/lang-cpp': 'CodeMirrorLangCpp',
          '@codemirror/lang-java': 'CodeMirrorLangJava',
          '@codemirror/lang-go': 'CodeMirrorLangGo',
          '@codemirror/lang-rust': 'CodeMirrorLangRust'
        },
        // Use manualChunks to split remaining node_modules dependencies
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) {
              return 'react-vendor';
            }
            if (id.includes('codemirror')) {
              return 'codemirror-vendor';
            }
            return 'vendor';
          }
        }
      }
    }
  },
  server: {
    port: 5173,
  }
});
