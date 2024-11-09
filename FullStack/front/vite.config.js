import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://react-swpk--80--f565b097.local-credentialless.webcontainer.io',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react()],
})
