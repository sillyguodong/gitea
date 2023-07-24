import {defineConfig} from 'vitest/config';
import vuePlugin from '@vitejs/plugin-vue';
import {stringPlugin} from 'vite-string-plugin';

export default defineConfig({
  test: {
    include: ['web_src/**/*.test.js'],
    setupFiles: ['./web_src/js/test/setup.js'],
    environment: 'jsdom',
    testTimeout: 20000,
    open: false,
    allowOnly: true,
    passWithNoTests: true,
    watch: false,
    alias: [
      {
        find: /^monaco-editor$/,
        replacement: __dirname + '/node_modules/monaco-editor/esm/vs/editor/editor.api',
      },
    ],
  },
  plugins: [
    stringPlugin(),
    vuePlugin(),
  ],
});
