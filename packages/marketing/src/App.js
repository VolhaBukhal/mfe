import React from "react";
import {
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

// adding prefix to the short class name generated for production mode
const generatedClassName = createGenerateClassName({
  productionPrefix: "ma",
});

// need to use memory history instead of browserRouter in hosts app
export default function App({ history }) {
  return (
    <div>
      <StylesProvider generateClassName={generatedClassName}>
        <HistoryRouter history={history}>
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/pricing" element={<Pricing />}></Route>
          </Routes>
        </HistoryRouter>
      </StylesProvider>
    </div>
  );
}
