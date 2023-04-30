import React from 'react';
import styled from 'styled-components';

export const FlowMenu = (props) => {
  const { className } = props;
  return (
    <SDiv className={className}>
      <SButton>Tops</SButton>
      <SButton>Pants</SButton>
      <SButton>Outer</SButton>
      <SButton>Headwear</SButton>
      <SButton>Accessaries</SButton>
    </SDiv>
  );
};

const SDiv = styled.div`
  && {
    position: relative;
    margin-left: 30px;
    margin-right: 10px;
    height: 70px;
    display: flex;
    justify-content: space-between;
  }
`;

const SButton = styled.button`
  && {
    height: 68px;
    margin: 0 5px;
    border: none;
    background-color: #333537;

    color: #e0e0e0;
    &:hover {
    }
  }
`;
