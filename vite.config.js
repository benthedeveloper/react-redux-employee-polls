/// <reference types="vitest/config" />
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { playwright } from '@vitest/browser-playwright';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base: env.VITE_BASE_PATH,
    plugins: [react()],
    optimizeDeps: {
      include: ['react, react-redux'],
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
            include: [
              'src/tests/browser/**/*.{test,spec}.jsx',
              'src/tests/**/*.browser.{test,spec}.jsx',
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
  };
});
