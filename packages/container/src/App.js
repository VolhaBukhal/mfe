import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MarketingApp from "./components/MarketingApp";
import AuthApp from "./components/AuthApp";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Header from "./components/Header";

// adding prefix to the short class name generated for production mode
const generatedClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  return (
    <StylesProvider generateClassName={generatedClassName}>
      <BrowserRouter>
        <Header signedIn onSignOut={() => console.log("test")} />

        <Switch>
          <Route path="/auth">
            <>
              <AuthApp />
              <div>Auth</div>
            </>
          </Route>
          <Route path="/">
            <>
              <div>Marketing</div>
              <MarketingApp />
            </>
          </Route>
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  );
};
