import { memo, useState } from 'react';
import { Drawer } from '../molecules/Drawer';
import { Header } from '../orgnisms/layout/Header';

export const HeaderLayout = memo((props) => {
  const { children } = props;
  const [active, setActive] = useState(false);
  return (
    <>
      <Header active={active} setActive={setActive} />
      <br />
      {children}
    </>
  );
});
