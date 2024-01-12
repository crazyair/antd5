import { defaultTheme } from '@ant-design/compatible';
import type { ThemeConfig } from 'antd';

export const theme: ThemeConfig = {
  ...defaultTheme,
  components: {
    ...defaultTheme.components,
  },
  token: {
    ...defaultTheme.token,
  },
};
