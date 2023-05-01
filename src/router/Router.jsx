import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MainRoutes } from './MainRoutes';
import { FullScreen } from '../templates/FullScreen';
import { Page404 } from '../pages/Page404';

export const Router = () => {
  return (
    <>
      <Switch>
        <Route
          path="/"
          render={({ match: { url } }) => (
            //HomeRoutesコンポーネントの配列から一致するページ遷移
            <Switch>
              {MainRoutes.map((route) => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}
                >
                  <FullScreen>{route.children}</FullScreen>
                </Route>
              ))}
            </Switch>
          )}
        />

        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </>
  );
};
