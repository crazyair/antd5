import { Outlet, history, useLocation } from '@umijs/max';
import React, { useLayoutEffect } from 'react';

const BasicLayout: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;

  useLayoutEffect(() => {
    if (pathname === '/app' || pathname === '/m') {
      if (pathname === '/app') {
        history.push('/app/demo');
      }
      if (pathname === '/m') {
        history.push('/m/demo/1');
      }
      console.log('pathname', pathname);
    }
  }, [pathname]);

  return <Outlet />;
};

export default BasicLayout;
