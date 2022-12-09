import { Outlet } from 'react-router-dom';

import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';

import { Wrapper } from './Layout.Styled';

export const Layout = () => {
  return (
    <>
      <Wrapper>
        <AppBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Wrapper>
    </>
  );
};
