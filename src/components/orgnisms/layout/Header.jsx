import { Link } from 'react-router-dom';
import React, { memo } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { BiMenu } from 'react-icons/bi';

import styled from 'styled-components';

export const Header = memo((props) => {
  const { active, setActive, PositionUp } = props;
  const ClassToggle = () => {
    setActive(!active);

    if (!active) {
      PositionUp();
    }
  };
  return (
    <SDiv>
      <SMenu onClick={ClassToggle}>
        <SBiMenu />
      </SMenu>
      <SWrapper>
        <STitleLink to="/">ECサイト</STitleLink>
      </SWrapper>

      <SCartLink to="cart">
        <SCartIcon />
      </SCartLink>
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
    height: 50px;
    @media (max-width: 600px) {
      height: 70px;
    }

    background-color: #333537;
  }
`;

//メニュー部分のCSS
const SMenu = styled.button`
  && {
    position: absolute;
    left: 0;
    display: block;
    z-index: 20;

    height: 50px;
    width: 50px;
    @media (max-width: 600px) {
      height: 70px;
      width: 70px;
    }
    background-color: #333537;
    border: none;
    &:hover {
      cursor: pointer;
    }
  }
`;

const SBiMenu = styled(BiMenu)`
  color: white;
  width: 30px;
  height: 30px;

  &:hover {
    transition: color 0.3s ease-in;
    color: red;
  }
`;

//タイトル部分のCSS
const SWrapper = styled.div`
  && {
    position: relative;
    top: 50%;
    transform: translate(0, -50%);
    text-align: center;
  }
`;

const STitleLink = styled(Link)`
  && {
    @media (max-width: 600px) {
    }
    text-decoration: none;
    font-size: 20px;
    color: white;
    font-family: 'Karla', sans-serif;
  }
`;

//カート部分のCSS
const SCartLink = styled(Link)`
  && {
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 20;
    height: 50px;
    width: 50px;

    @media (max-width: 600px) {
      height: 70px;
      width: 70px;
    }
    background-color: rgb(254, 128, 2);
  }
`;

const SCartIcon = styled(FaShoppingCart)`
  && {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
  }
`;
