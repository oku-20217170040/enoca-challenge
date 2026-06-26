import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Chunk boyutu uyarı eşiği (KB) — Lighthouse büyük JS'i penalize eder
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        // Manuel kod bölme: React'i ayrı vendor chunk'a al
        manualChunks: (id: string) => {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor';
          }
        },
      },
    },
  },
})
