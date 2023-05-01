import React, { memo, useEffect, useState } from 'react';
import { CartItem } from '../components/personalParts/cart/CartItem';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Cart = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  //local呼び出し=>
  const Json = localStorage.getItem('array');
  const display = JSON.parse(Json);

  useEffect(() => {
    if (display) {
      setIsOpen((s) => true);
    }
  }, [display]);

  const onClick = () => {
    localStorage.removeItem('array');
    alert('カート内アイテムを削除しました。');
  };

  return (
    <SDiv>
      <p>カートページです。</p>
      <div>
        {isOpen ? (
          display.map((d) => (
            <CartItem display={d} key={d} />
          ))
        ) : (
          <p>カートには入っていません</p>
        )}
      </div>

      <br />
      <div>↓カート内アイテムを全て削除↓</div>
      <SLink to="/">
        <SButton onClick={onClick}>DELETE</SButton>
      </SLink>
    </SDiv>
  );
});

const SDiv = styled.div`
  && {
    height: 500px;
  }
`;

const SLink = styled(Link)`
  && {
  }
`;

const SButton = styled.button`
  && {
    background-color: #97a791;
  }
`;
