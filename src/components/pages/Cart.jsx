import React, { memo } from 'react';

import { ItemContext } from '../providers/ItemProvider';

export const Cart = memo(() => {
  const items = React.useContext(ItemContext);

  //local呼び出し=>
  const Json = localStorage.getItem('array');
  const display = JSON.parse(Json);
  console.log(display);

  //データ取得

  // const res = items.find(
  //   (items) => items.partNumber === State.number
  // );
  // }

  // setState(Cart);
  // console.log(Cart);
  // console.log(state);
  const onClick = () => {
    localStorage.removeItem('array');
  };

  return (
    <>
      <p>カートページです。</p>
      {/* {{isLoggedIn
        ? <LogoutButton  />
        : <LoginButton  />} */}
      <div>
        <p>品番</p>
        {/* {display.map((d) => {
          return <>{d},</>;
        })} */}
      </div>
      <button onClick={onClick}>DELETE</button>
    </>
  );
});
