import React, { memo, useEffect, useState } from 'react';
import { CartItem } from '../orgnisms/CartItem';

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
  console.log(display);

  const onClick = () => {
    localStorage.removeItem('array');
  };

  return (
    <>
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
