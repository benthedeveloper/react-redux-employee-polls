/// <reference types="vitest/config" />
import { defineConfig, transformWithOxc } from 'vite';
import react from '@vitejs/plugin-react';
import { playwright } from '@vitest/browser-playwright';

// Custom plugin to force JSX parsing in .js files
export const transformJsxInJs = () => ({
  name: 'transform-jsx-in-js',
  enforce: 'pre',
  async transform(code, id) {
    // Only target .js files in your src directory
    if (!id.match(/src\/.*\.js$/)) return null;

    return await transformWithOxc(code, id, {
      lang: 'jsx',
    });
  },
});

export default defineConfig({
  plugins: [react(), transformJsxInJs()],
  optimizeDeps: {
    rolldownOptions: {
      moduleTypes: {
        '.js': 'jsx',
      },
    },
  },
  test: {
    projects: [
      {
        test: {
          include: [
            'src/tests/unit/**/*.{test,spec}.js',
            'src/tests/**/*.unit.{test,spec}.js',
          ],
          name: 'unit',
          environment: 'node',
        },
      },
      {
        test: {
          plugins: [react(), transformJsxInJs()],
          optimizeDeps: {
            rolldownOptions: {
              moduleTypes: {
                '.js': 'jsx',
              },
            },
          },
          include: [
            'src/tests/browser/**/*.{test,spec}.js',
            'src/tests/**/*.browser.{test,spec}.js',
          ],
          name: 'browser',
          browser: {
            enabled: true,
            provider: playwright(),
            instances: [{ browser: 'chromium' }],
          },
        },
      },
    ],
  },
});
