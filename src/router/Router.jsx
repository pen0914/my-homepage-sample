import { Route, Switch } from "react-router-dom";
import { Cart } from "../components/pages/Cart";
import { Home } from "../components/pages/Home";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
    </Switch>
  );
};
