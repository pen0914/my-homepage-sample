import React from 'react';
import { Home } from '../pages/Home';
import { Cart } from '../pages/Cart';
import { Page404 } from '../pages/Page404';
import { ItemDetail } from '../pages/ItemDetail';

export const MainRoutes = [
  { path: '/', exact: true, children: <Home /> },

  //ページ遷移方法を探す
  {
    path: 'select/:clickNumber',
    exact: true,
    children: <ItemDetail />
  },

  {
    path: 'cart',
    exact: true,
    children: <Cart />
  },
  {
    path: '*',
    exact: false,
    children: <Page404 />
  }
];
