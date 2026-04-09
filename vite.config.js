import { defineConfig, transformWithOxc } from 'vite';
import react from '@vitejs/plugin-react';

// Custom plugin to force JSX parsing in .js files
const transformJsxInJs = () => ({
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
});
