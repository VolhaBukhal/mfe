import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";
import { StylesProvider } from "@material-ui/core";

export default function App() {
  return (
    <div>
      <StylesProvider>
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
