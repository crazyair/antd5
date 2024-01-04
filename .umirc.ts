import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {
    configProvider: { prefixCls: 'test' },
    styleProvider: {
      hashPriority: 'high',
      legacyTransformer: true,
    },
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    { path: '/', redirect: '/home' },
    {
      name: '首页',
      path: '/app',
      component: '../layouts/BaseLayout',
      routes: [
        {
          path: 'demo',
          name: 'demo',
          component: './Home',
        },
      ],
    },
    {
      path: '/m',
      name: '移动端-首页',
      component: '../layouts/BaseLayout',
      routes: [
        {
          path: 'demo/:id?',
          name: 'demo2',
          component: './Access',
        },
      ],
    },
    { path: '*', redirect: '/app' },
  ],
  npmClient: 'pnpm',
});
