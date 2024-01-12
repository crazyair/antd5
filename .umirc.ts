import { defineConfig } from '@umijs/max';

import { convertLegacyToken, defaultTheme } from '@ant-design/compatible';
import { theme } from 'antd';

const { defaultAlgorithm, defaultSeed } = theme;

const v4Token = theme.getDesignToken(defaultTheme);
// v5 的 token 转 less
const mapToken = defaultAlgorithm(defaultSeed);
const v4Less = convertLegacyToken(v4Token);
console.log('1111', v4Less['border-radius-base']);

export default defineConfig({
  // antd: {},
  theme: { ...v4Less, 'primary-color': 'red' },
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
