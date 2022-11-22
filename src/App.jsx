import { BrowserRouter, useHistory } from "react-router-dom";
import "./styles.css";
import { Router } from "./router/Router";

export const App = () => {
  const history = useHistory();

  const onClickCart = () => history.push("/cart");

  return (
    <BrowserRouter>
      <div className="header">
        <button className="btn option">
          <span className="fa fa-list"></span>
        </button>
        <p className="header-name">potato</p>

        <button className="btn cart" onClick={onClickCart}>
          <span className="fa fa-cart-plus"></span>
        </button>
      </div>

      <Router />
    </BrowserRouter>
  );
};
