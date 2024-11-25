import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import viteEslint from 'vite-plugin-eslint';

// https://vite.dev/config/
export default defineConfig({
  base: '/hex-final-sample',
  plugins: [vue(), vueDevTools(), viteEslint()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
