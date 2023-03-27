import React from 'react';
import { HashRouter } from 'react-router-dom';
import { CartDataProvider } from './components/providers/CartData';
import { Router } from './router/Router';
import './styles.css';

export default function App() {
  return (
    <HashRouter>
      <CartDataProvider>
        <Router />
      </CartDataProvider>
    </HashRouter>
  );
}
