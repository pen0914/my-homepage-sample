import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { memo } from 'react';
export const CartButton = memo(() => {
  return (
    <SCartLink to="../cart">
      <SCartIcon />
    </SCartLink>
  );
});

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
