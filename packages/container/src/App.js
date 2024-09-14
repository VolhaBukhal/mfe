import React from "react";
import { mount } from "marketing/MarketingApp";
import { BrowserRouter } from "react-router-dom";
import MarketingApp from "./components/MarketingApp";

import Header from "./components/Header";

export default () => {
  return (
    <BrowserRouter>
      <Header signedIn onSignOut={() => console.log("test")} />
      <MarketingApp />
    </BrowserRouter>
  );
};
