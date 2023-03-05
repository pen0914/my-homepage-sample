import { Link } from 'react-router-dom';
import React, { memo, useState } from 'react';
import { BsCart2 } from 'react-icons/bs';

import styled from 'styled-components';
import { Drawer } from '../../molecules/Drawer';

export const Header = memo((props) => {
  const { active, setActive } = props;
  const ClassToggle = () => {
    setActive(!active);
    console.log(active);
  };
  return (
    <SDiv>
      <SFirstDiv>
        <SMenudiv>
          <SMenu onClick={ClassToggle}>メニュー</SMenu>
        </SMenudiv>
        <SLink1 to="/">デモサイト</SLink1>
        <SLink2 to="cart">
          <BsCart2 size={'20px'} />
        </SLink2>
      </SFirstDiv>
      <Drawer active={active} />
    </SDiv>
  );
});

const SDiv = styled.div`
  && {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
  }
`;

const SFirstDiv = styled.div`
  && {
    color: white;
    background-color: rgb(1, 1, 1);
    height: 10%;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    &hover {
      cursor: 'pointer';
    }
  }
`;

const SMenudiv = styled.div`
  && {
    height: 20px;
  }
`;

const SMenu = styled.button`
  && {
    margin: 0 auto;
  }
`;

const SLink1 = styled(Link)`
  && {
    flex-basis: 50%;
    margin: 0 auto;
  }
`;

const SLink2 = styled(Link)`
  && {
    background-color: rgb(254, 128, 2);
    margin-right: 0px;
    padding: 7px;
  }
`;
