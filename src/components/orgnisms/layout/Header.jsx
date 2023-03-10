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
      <SWrapper>
        <SMenu onClick={ClassToggle}>
          <BiMenu size={'100%'} color={'white'} />
        </SMenu>
        <SLink1 to="/">ECサイト</SLink1>
        <SLink2 to="cart">
          <SCartIcon size={'20px'} color={'white'} />
        </SLink2>
      </SWrapper>
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
    &hover {
      cursor: 'pointer';
    }
  }
`;

const SWrapper = styled.div`
  && {
    position: relative;
    width: 100%;
    z-index: 20;
  }
`;

const SMenu = styled.button`
  && {
    position: absolute;
    left: 0;
    display: block;
    &hover {
      cursor: 'pointer';
    }
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
    display: inline-block;
    position: absolute;
    right: 50%;
    left: 50%;
    height: 50px;
    @media (max-width: 600px) {
      height: 30px;
      width: 30px;
    }
    text-decoration: none;

    color: white;
    font-family: 'Karla', sans-serif;
  }
`;

const SLink2 = styled(Link)`
  && {
    display: inline-block;
    position: absolute;
    right: 0;

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
  }
`;
