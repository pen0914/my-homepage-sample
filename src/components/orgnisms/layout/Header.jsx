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
        <SLink1Div>
          <SLink1 to="/">ECサイト</SLink1>
        </SLink1Div>
        <SLink2Div>
          <SLink2 to="cart">
            <BsCart2 size={'20px'} />
          </SLink2>
        </SLink2Div>
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
    background-color: #333537;
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
    height: 40px;
  }
`;

const SLink1Div = styled.div`
  && {
  }
`;

const SLink2Div = styled.div`
  && {
  }
`;

const SMenu = styled.button`
  && {
    height: 100%;
    margin: 0 auto;
  }
`;

const SLink1 = styled(Link)`
  && {
    text-decoration: none;

    color: white;
    font-family: 'Karla', sans-serif;
  }
`;

const SLink2 = styled(Link)`
  && {
    background-color: rgb(254, 128, 2);

    margin-right: 0px;
    /* padding: 7px; */
  }
`;
