import React, { memo } from 'react';
import styled from 'styled-components';

export const ItemIcon = memo((props) => {
  const { item, onClick, id } = props;

  return (
    <Sitem onClick={() => onClick(id)}>
      <Spic src={item.image} alt="" />
      <Sexplain>
        <p>{`【${item.brand}】`}</p>
        <p>{item.name}</p>

        <p>{item.price}</p>
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
    box-shadow: 0 0 6px #000000;

    background-color: #e5e5e5;
    border-radius: 10px;
    transition: 0.3s ease-in-out;
    &:hover {
      cursor: pointer;

      box-shadow: 0 0 15px #000000;
    }
  }
`;

const Spic = styled.img`
  && {
    max-width: 100%;
    height: auto;
    display: block;
    border-radius: 10px 10px 0 0;
  }
`;

const Sexplain = styled.div`
  && {
    height: 120px;
  }
`;
