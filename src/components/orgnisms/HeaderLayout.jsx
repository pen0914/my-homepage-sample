import React, { memo } from 'react';

import styled from 'styled-components';
import { MenuButton } from '../atoms/MenuButton';
import { TitleLogo } from '../atoms/TitleLogo';
import { CartButton } from '../atoms/CartButton';

export const HeaderLayout = memo((props) => {
  const { ClassToggle } = props;

  return (
    <SDiv>
      <MenuButton onClick={ClassToggle} />
      <STitleLogo />
      <CartButton />
    </SDiv>
  );
});

//以下,CSSを記述

//大枠のCSS
const SDiv = styled.div`
  && {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 70px;
    @media (max-width: 600px) {
      height: 70px;
    }

    background-color: #333537;
  }
`;

const STitleLogo = styled(TitleLogo)`
  && {
    margin: 0 auto;
    width: 60%;
    height: 70px;
  }
`;
