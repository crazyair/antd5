import { defineConfig } from '@umijs/max';

import { convertLegacyToken } from '@ant-design/compatible';
import { theme as AntdTheme } from 'antd';
import { theme } from './src/theme';

// const { defaultAlgorithm, defaultSeed } = AntdTheme;

const v4Token = AntdTheme.getDesignToken(theme);
// v5 的 token 转 less
// const mapToken = defaultAlgorithm(defaultSeed);
const v4Vars = convertLegacyToken(v4Token);

export default defineConfig({
  // antd: {},
  theme: { ...v4Vars },
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
  ],
  npmClient: 'pnpm',
});
