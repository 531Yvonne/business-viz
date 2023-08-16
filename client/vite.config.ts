import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// add below package for easier absolute path reference
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // add below package for easier absolute path reference
  resolve: {
    alias: [{find:"@", replacement:path.resolve(__dirname,"src")}]
  }
})
