import { memo, useEffect, useState } from 'react';
import { Drawer } from '../molecules/Drawer';
import { HeaderLayout } from '../orgnisms/HeaderLayout';

import { MainLayout } from '../orgnisms/MainLayout';
import { useScroll } from '../../hooks/useScroll';

export const FullScreenLayout = memo((props) => {
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
