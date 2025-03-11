import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // If you're using symlinks (like with yarn link or file: dependencies)
    preserveSymlinks: true,
  },
  // server: {
  //   proxy: {
  //     '/stream.StreamService': {
  //       target: 'http://localhost:8080',
  //       changeOrigin: true,
  //     }
  //   }
  // }
})
