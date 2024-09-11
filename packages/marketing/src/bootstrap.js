import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Mount function to start the application

const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// If we are in development mode call function immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("_marketing-dev-root");
  console.log("devRoot", devRoot);
  devRoot && mount(devRoot);
}

// We are running through container and we should export the mount function

export { mount };
