import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import htmlInject from 'vite-plugin-html-inject'
import { resolve } from 'path'

export default defineConfig({
  plugins: [tailwindcss(), htmlInject()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        product: resolve(__dirname, 'src/html/product.html'),
      },
    },
  },
})