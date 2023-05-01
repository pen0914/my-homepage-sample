import React, { memo } from 'react';

import styled from 'styled-components';
import { DrawerButton } from '../personalParts/header/DrawerButton';
import { TitleLogo } from '../personalParts/header/TitleLogo';
import { CartButton } from '../personalParts/header/CartButton';
import { FlowMenu } from '../personalParts/header/FlowMenu';

export const HeaderLayout = memo((props) => {
  const { ClassToggle } = props;

  return (
    <SDiv>
      <SDrawerButton onClick={ClassToggle} />
      <STitle>
        <STitleLogo />
        <SFlowMenu />
      </STitle>
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

    z-index: 10;
    width: 100%;
    height: 70px;

    background-color: #333537;
  }
`;

const SDrawerButton = styled(DrawerButton)`
  && {
    @media (min-width: 600px) {
      display: none;
    }
  }
`;

const STitle = styled.div`
  && {
    @media (min-width: 600px) {
      display: flex;
    }
    height: 70px;
    position: relative;
    margin: 0;
  }
`;

const STitleLogo = styled(TitleLogo)`
  && {
    @media (max-width: 600px) {
      margin: 0 auto;
    }

    height: 70px;
  }
`;

const SFlowMenu = styled(FlowMenu)`
  && {
    @media (max-width: 600px) {
      display: none;
    }
  }
`;
