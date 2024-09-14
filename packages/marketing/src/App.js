import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

// adding prefix to the short class name generated for production mode
const generatedClassName = createGenerateClassName({
  productionPrefix: "ma",
});

export default function App() {
  return (
    <div>
      <StylesProvider generateClassName={generatedClassName}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/pricing" element={<Pricing />}></Route>
          </Routes>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
}
