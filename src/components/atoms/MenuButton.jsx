import styled from 'styled-components';
import { BiMenu } from 'react-icons/bi';
import { memo } from 'react';

export const MenuButton = memo((props) => {
  const { onClick } = props;
  return (
    <SMenu onClick={onClick}>
      <SBiMenu />
    </SMenu>
  );
});

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
    color: #f6b894;
  }
`;
