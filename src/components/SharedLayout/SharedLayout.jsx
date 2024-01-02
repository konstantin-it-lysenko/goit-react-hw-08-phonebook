import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from 'components/Navigation/Navigation';
import { Header, HeaderWrapper, Wrapper } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <HeaderWrapper>
          <Navigation />
        </HeaderWrapper>
      </Header>
      <main>
        <Wrapper>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Wrapper>
      </main>
    </>
  );
};

export default SharedLayout;
