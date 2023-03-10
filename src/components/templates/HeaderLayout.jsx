import { memo, useState } from 'react';
import { Drawer } from '../molecules/Drawer';
import { Header } from '../orgnisms/layout/Header';

import { MainLayout } from './MainLayout';

export const HeaderLayout = memo((props) => {
  const { children } = props;
  const [active, setActive] = useState(false);
  return (
    <>
      <Header active={active} setActive={setActive} />
      <p />
      <MainLayout active={active}>
        <Drawer active={active} />
        {children}
      </MainLayout>
    </>
  );
});
