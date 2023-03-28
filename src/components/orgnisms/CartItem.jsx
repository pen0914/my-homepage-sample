import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ItemContext } from '../providers/ItemProvider';

export const CartItem = (props) => {
  const { display } = props;
  const items = React.useContext(ItemContext);
  //データ取得

  const res = items.find(
    (items) => items.partNumber === display
  );

  const onClickDelete = () => {
    const jsonArray = localStorage.getItem('array');
    const array = JSON.parse(jsonArray);
    const newArray = array.filter(
      (a) => a !== `${display}`
    );

    localStorage.setItem('array', JSON.stringify(newArray));
    alert('アイテムを削除しました。');
  };

  return (
    <SDiv>
      <SLink to={`select/${res.partNumber}`}>
        <SPic src={res.image} />
      </SLink>
      <SText>{res.name}</SText>
      <SText>{res.price}</SText>
      <SDeleteLink to="/">
        <SButton onClick={onClickDelete}>×</SButton>
      </SDeleteLink>
    </SDiv>
  );
};

const SDiv = styled.div`
  && {
    width: 300px;
    height: 100px;
    display: flex;
    justify-content: flex-start;
    border: solid 2px gray;
    box-shadow: 0 0 3px #000000;
    border-radius: 10px;
  }
`;

const SLink = styled(Link)`
  && {
    width: 100px;
  }
`;

const SPic = styled.img`
  && {
    max-width: 100%;
    height: auto;
    display: block;
    border-radius: 10px;
  }
`;

const SText = styled.p`
  margin: auto;
  && {
  }
`;

const SDeleteLink = styled(Link)`
  && {
    margin: auto 0;
  }
`;

const SButton = styled.button`
  && {
    text-align: center;
    margin: auto;
    height: 20px;
    width: 20px;
    background-color: #df7163;
  }
`;
