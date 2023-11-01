import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://mkdir-s.github.io/astrawood-ecommerce/",
  build: {
    rollupOptions: {
        external: [
            "react", // ignore react stuff
            "react-dom",
            "react-icons"
        ],
    }
},
})
