import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "component": path.resolve(__dirname, "./components"), // 保留别名配置
    },
  },
  css: {
    postcss: './postcss.config.js',
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'components/index.ts'),  // 指定组件库的入口文件
      name: 'AtomUI',  // 设置库的全局变量名
      fileName: (format) => `atom-ui.${format}.js`,  // 输出文件名
    },
    rollupOptions: {
      // 确保外部化依赖项，不将 React 和 React DOM 打包进库
      external: ['react', 'react-dom', 'tailwindcss'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})
