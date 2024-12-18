import type { StorybookConfig } from "@storybook/react-vite";
import path from 'path';

const config: StorybookConfig = {
  stories: ["../components/**/*.mdx", "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite', // 使用 Vite 构建器
  },
  viteFinal: async (viteConfig) => {
    // 确保 resolve 存在
    viteConfig.resolve ||= {};

    // 添加路径别名
    viteConfig.resolve.alias = {
      ...viteConfig.resolve.alias,
      'component': path.resolve(__dirname, '../components'),
    };

    // 如果确实需要配置 CSS，可以使用类型断言
    (viteConfig as any).css = {
      preprocessorOptions: {
        css: {
          // 其他配置
        },
      },
    };

    return viteConfig;
  },
};
export default config;
