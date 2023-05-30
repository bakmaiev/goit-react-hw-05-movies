import Header from 'components/Header/Header';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledMain } from './StyledLayout';

const Layout = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <Suspense>
          <Outlet />
        </Suspense>
      </StyledMain>
    </>
  );
};

export default Layout;
