import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import generouted from '@generouted/react-router/plugin'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), generouted(), tailwindcss()],
  assetsInclude: ['**/*.lottie'],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  },
  server: {
    host: true,
    port: 5177
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    cssMinify: 'lightningcss',
    cssCodeSplit: true,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
            return 'assets/images/[name]-[hash][extname]';
          }
          if (/\.css$/.test(name ?? '')) {
            return 'assets/css/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    },
    commonjsOptions: {
      transformMixedEsModules: true
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', '@tanstack/react-query', 'lucide-react'],
    exclude: []
  }
})
