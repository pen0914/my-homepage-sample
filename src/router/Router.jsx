import { Route, Switch } from "react-router-dom";
import { Cart } from "../components/Cart";
import { Home } from "../components/Home";

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
