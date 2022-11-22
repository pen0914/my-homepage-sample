import { BrowserRouter, Link } from "react-router-dom";
import "./styles.css";
import { Router } from "./router/Router";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="header">
        <button className="btn option">
          <span className="fa fa-list"></span>
        </button>
        <p className="header-name">potato</p>

        <Link className="btn cart" to="/cart">
          <span className="fa fa-cart-plus"></span>
        </Link>
      </div>

      <Router />
    </BrowserRouter>
  );
};
