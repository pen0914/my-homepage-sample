import styled from 'styled-components';
import { memo, useEffect, useState } from 'react';
import { Drawer } from '../molecules/Drawer';
import { Header } from '../orgnisms/layout/Header';

import { MainLayout } from './MainLayout';
import { useScroll } from '../../hooks/useScroll';
export const HeaderLayout = memo((props) => {
  const { children } = props;
  const { scrollPosition, PositionUp } = useScroll();
  const [active, setActive] = useState(false);
  useEffect(() => {
    PositionUp();
  }, [active, PositionUp]);
  return (
    <>
      <Header active={active} setActive={setActive} />
      <SP />
      <MainLayout active={active} position={scrollPosition}>
        <Drawer active={active} />
        {children}
      </MainLayout>
    </>
  );
});

const SP = styled.p`
  && {
    height: 50px;
    @media (max-width: 600px) {
      height: 30px;
    }
    margin: 0;
  }
`;
