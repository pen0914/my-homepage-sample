import styled from 'styled-components';
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
      <SP />
      <MainLayout active={active}>
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
