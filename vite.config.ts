import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      $assets: path.resolve('./src/assets/*'),
      $base: path.resolve('./src/components/base/*'),
      $lib: path.resolve('./src/lib/*'),
      $model: path.resolve('./src/models/*'),
      $service: path.resolve('./src/services'),
      $shared: path.resolve('./src/components/shared/*'),
      $style: path.resolve('./src/style/*'),
    }
  }
})
