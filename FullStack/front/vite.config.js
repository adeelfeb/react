import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// export default defineConfig({
//   server: {
//     proxy: {
//       '/api': {
//         target: 'https://react-swpk--80--f565b097.local-credentialless.webcontainer.io',
//         changeOrigin: true,
//         secure: false,
//         rewrite: (path) => path.replace(/^\/api/, ''), // This will ensure that `/api` is stripped
//       },
//     },
//   },
//   plugins: [react()],
// })




// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        // target: 'https://react-swpk--80--f565b097.local-credentialless.webcontainer.io',
        target:'https://react-swpk--80--f565b097.local-credentialless.webcontainer.io',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react()],
})
