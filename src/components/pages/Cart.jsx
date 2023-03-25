import React, { memo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ItemContext } from '../providers/ItemProvider';

export const Cart = memo(() => {
  const items = React.useContext(ItemContext);
  const location = useLocation();

  const State = location.state;

  console.log(State.cart);
  if (!!State) {
    localStorage.setItem(
      'number',
      JSON.stringify(State.cart)
    );
    //データ取得
    // const res = items.find(
    //   (items) => items.partNumber === State.number
    // );
  }

  const json = localStorage.getItem('number');
  const Cart = JSON.parse(json);
  return (
    <>
      <p>カートページです。</p>
      <div>{Cart}</div>
      <p>表示されません。</p>
    </>
  );
});
