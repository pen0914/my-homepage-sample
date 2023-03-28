import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Router } from './router/Router';
import './styles.css';

export default function App() {
  return (
    <HashRouter>
      <Router />
    </HashRouter>
  );
}
