import { defineConfig } from '@umijs/max';

export default defineConfig({
  // antd: {
  //   configProvider: { prefixCls: 'test' },
  //   styleProvider: {
  //     hashPriority: 'high',
  //     legacyTransformer: true,
  //   },
  // },
  access: {},
  model: {},
  initialState: {},
  request: {},
  // layout: {
  //   title: '@umijs/max',
  // },
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
  ],
  npmClient: 'pnpm',
});
