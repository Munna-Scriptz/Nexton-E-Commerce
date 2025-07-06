import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import Slider from 'react-slick'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
