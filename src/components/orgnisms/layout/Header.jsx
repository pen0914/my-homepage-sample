import { Link } from 'react-router-dom';
import React, { memo } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { BiMenu } from 'react-icons/bi';

import styled from 'styled-components';

export const Header = memo((props) => {
  const { active, setActive } = props;
  const ClassToggle = () => {
    setActive(!active);
  };
  return (
    <SDiv>
      <SMenu onClick={ClassToggle}>
        <BiMenu size={'100%'} color={'white'} />
      </SMenu>
      <SWrapper>
        <SLink1 to="/">ECサイト</SLink1>
      </SWrapper>

      <SLink2 to="cart">
        <SCartIcon />
      </SLink2>
    </SDiv>
  );
});

const SDiv = styled.div`
  && {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 50px;
    @media (max-width: 600px) {
      height: 30px;
    }

    background-color: #333537;
  }
`;

const SWrapper = styled.div`
  && {
    position: relative;
    top: 50%;
    transform: translate(0, -50%);
    text-align: center;
  }
`;

const SMenu = styled.button`
  && {
    position: absolute;
    left: 0;
    display: block;

    height: 50px;
    width: 50px;
    @media (max-width: 600px) {
      height: 30px;
      width: 30px;
    }
    background-color: #333537;
    border: none;
  }
`;

const SLink1 = styled(Link)`
  && {
    @media (max-width: 600px) {
    }
    text-decoration: none;

    color: white;
    font-family: 'Karla', sans-serif;
  }
`;

const SLink2 = styled(Link)`
  && {
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 20;
    height: 50px;
    width: 50px;

    @media (max-width: 600px) {
      height: 30px;
      width: 30px;
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
