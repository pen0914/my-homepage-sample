import React, { createContext, useState } from 'react';

export const CartDataContext = createContext();

export const CartDataProvider = (props) => {
  const { children } = props;

  const [cartData, setCartData] = useState([
    { id: 0, image: '0' }
  ]);
  return (
    <CartDataContext.Provider
      value={{ cartData, setCartData }}
    >
      {children}
    </CartDataContext.Provider>
  );
};
