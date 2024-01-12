import {
  StyleProvider,
  legacyLogicalPropertiesTransformer,
} from '@ant-design/cssinjs';
import { App, ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import React from 'react';

import { theme } from './theme';

const Index = (props: { children: React.ReactNode }) => {
  const { children } = props;

  return (
    <StyleProvider
      hashPriority="high"
      transformers={[legacyLogicalPropertiesTransformer]}
    >
      <ConfigProvider
        form={{ validateMessages: { types: { email: '邮箱格式不正确' } } }}
        locale={zhCN}
        theme={theme}
      >
        <App>{children}</App>
      </ConfigProvider>
    </StyleProvider>
  );
};

export default Index;
