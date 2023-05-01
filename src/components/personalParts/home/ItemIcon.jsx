import React, { memo } from 'react';
import styled from 'styled-components';

export const ItemIcon = memo((props) => {
  const { item, onClick, id } = props;

  return (
    <Sitem onClick={() => onClick(id)}>
      <Spic src={item.image} alt="" />
      <Sexplain>
        <SP>{`【${item.brand}】`}</SP>
        <SP>{item.name}</SP>

        <SP>{item.price}</SP>
      </Sexplain>
    </Sitem>
  );
});

const Sitem = styled.div`
  && {
    flex-basis: 200px;
    flex-grow: 1;

    max-width: 250px;
    margin: 20px 10px;
    box-shadow: 18px 18px 36px #898989,
      -18px -18px 36px #ffffff;

    background-color: #e0e0e0;
    border-radius: 26px;
    transition: 0.3s ease-in-out;
    &:hover {
      cursor: pointer;
      text-shadow: -3px -3px 7px #898989;
      box-shadow: 0 0 8px #000000;
    }
  }
`;

const Spic = styled.img`
  && {
    mix-blend-mode: multiply;
    max-width: 100%;
    height: auto;
    display: block;
    border-radius: 10px 10px 0 0;
    background-color: #e0e0e0;
  }
`;

const Sexplain = styled.div`
  && {
    height: 120px;
    border-top: solid 1px #ffffff;
  }
`;

const SP = styled.p`
  && {
    &:hover {
    }
  }
`;
