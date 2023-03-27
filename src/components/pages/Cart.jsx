import React, { memo } from 'react';

import { ItemContext } from '../providers/ItemProvider';

export const Cart = memo(() => {
  const items = React.useContext(ItemContext);

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
      <div>
        <p>品番</p>
        {display.map((d) => {
          return <>{d},</>;
        })}
      </div>
    </>
  );
});
