import React from "react";
import {
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
  Navigate,
} from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";
import { useEffect } from "react";

// adding prefix to the short class name generated for production mode
const generatedClassName = createGenerateClassName({
  productionPrefix: "auth",
});

// need to use memory history instead of browserRouter in hosts app
export default function App({ history, onSignIn }) {
  return (
    <StylesProvider generateClassName={generatedClassName}>
      <HistoryRouter history={history}>
        <Routes>
          <Route
            path="/auth/signin"
            element={<SignIn onSignIn={onSignIn} />}
          ></Route>
          <Route
            path="/auth/signup"
            element={<SignUp onSignIn={onSignIn} />}
          ></Route>
        </Routes>
      </HistoryRouter>
    </StylesProvider>
  );
}
