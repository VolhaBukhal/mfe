import React from "react";
import { mount } from "marketing/MarketingApp";
import MarketingApp from "./components/MarketingApp";

import { Test } from "./components/Test";

console.log("mount", mount);

export default () => {
  return (
    <>
      <Test />
      <hr />
      <MarketingApp />
    </>
  );
};
