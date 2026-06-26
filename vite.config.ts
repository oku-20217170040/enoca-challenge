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
        // Böylece uygulama kodu değişince React cache'den gelir
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
})
