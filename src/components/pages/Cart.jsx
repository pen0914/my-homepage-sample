import React, { memo, useState } from 'react';

import { ItemContext } from '../providers/ItemProvider';

export const Cart = memo(() => {
  const items = React.useContext(ItemContext);

  //localデータ取得=>
  //新しいデータを配列に追加=>localに保存

  //local呼び出し=>
  const Json = localStorage.getItem('array');
  const display = JSON.parse(Json);
  console.log(display);

  // localStorage.removeItem('array');

  //データ取得
  // const res = items.find(
  //   (items) => items.partNumber === State.number
  // );
  // }

  // setState(Cart);
  // console.log(Cart);
  // console.log(state);

  return (
    <>
      <p>カートページです。</p>
      <div>{}</div>
      <p>表示されません。</p>
    </>
  );
});
