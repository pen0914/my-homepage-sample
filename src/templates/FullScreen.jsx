import { memo, useEffect, useState } from 'react';
import { Drawer } from '../components/personalParts/drawer/Drawer';
import { HeaderLayout } from '../components/personalParts/header/HeaderLayout';

import { MainLayout } from '../components/layout/MainLayout';
import { useScroll } from '../hooks/useScroll';

export const FullScreen = memo((props) => {
  const { children } = props;
  const { scrollPosition, PositionUp } = useScroll();
  const [active, setActive] = useState(false);

  const ClassToggle = () => {
    setActive(!active);

    if (!active) {
      PositionUp();
    }
  };

  useEffect(() => {
    if (!active) {
      window.scrollTo(0, scrollPosition);
    }
  }, [active, scrollPosition]);

  return (
    <>
      <HeaderLayout ClassToggle={ClassToggle} />
      <MainLayout active={active} position={scrollPosition}>
        <Drawer active={active} />
        {children}
      </MainLayout>
    </>
  );
});
