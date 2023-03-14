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
    if (!active) {
      window.scrollTo(0, scrollPosition);
    }
  }, [active]);

  return (
    <>
      <Header
        active={active}
        setActive={setActive}
        PositionUp={PositionUp}
      />
      <MainLayout active={active} position={scrollPosition}>
        <Drawer active={active} />
        {children}
      </MainLayout>
    </>
  );
});
