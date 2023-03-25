import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CartDataProvider } from './components/providers/CartData';
import { Router } from './router/Router';
import './styles.css';

export default function App() {
  return (
    <BrowserRouter>
      <CartDataProvider>
        <Router />
      </CartDataProvider>
    </BrowserRouter>
  );
}
