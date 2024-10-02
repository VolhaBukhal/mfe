import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Header from "./components/Header";
import LinearProgress from "@material-ui/core";

const AuthAppLazy = lazy(() => import("./components/AuthApp"));
const MarketingAppLzy = lazy(() => import("./components/MarketingApp"));

// adding prefix to the short class name generated for production mode
const generatedClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  return (
    <StylesProvider generateClassName={generatedClassName}>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/auth">
              <AuthAppLazy />
            </Route>
            <Route path="/">
              <MarketingAppLzy />
            </Route>
          </Switch>
        </Suspense>
      </BrowserRouter>
    </StylesProvider>
  );
};
