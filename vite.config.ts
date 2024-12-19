import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts'
import cssInjectedByJs from 'vite-plugin-css-injected-by-js'

export default defineConfig({
  plugins: [
    react(),
    dts({
      outDir: 'dist/types', // 类型文件输出到 dist/types 目录
    }),
    cssInjectedByJs(), // 使用插件将 CSS 内联到 JS 文件
  ],
  resolve: {
    alias: {
      "@/components": path.resolve(__dirname, "./components"), // 保留别名配置
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'components/index.ts'),  // 指定组件库的入口文件
      name: 'AtomUI',  // 设置库的全局变量名
      fileName: (format) => `index.${format}.js`,  // 输出文件名
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
    cssCodeSplit: false, // 防止拆分 CSS
  },
})
