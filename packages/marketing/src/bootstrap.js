import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMemoryHistory, createBrowserHistory } from "history";

// Mount function to start the application

const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
  const history =
    defaultHistory || createMemoryHistory({ initialEntries: [initialPath] });
  if (onNavigate) {
    history.listen(onNavigate);
  }
  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigation({ pathname: parentPathname }) {
      const { pathname } = history.location;
      if (pathname !== parentPathname) {
        history.push(parentPathname);
      }
    },
  };
};

// If we are in development mode call function immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("_marketing-dev-root");
  console.log("devRoot", devRoot);
  devRoot && mount(devRoot, { defaultHistory: createBrowserHistory() });
}

// We are running through container and we should export the mount function

export { mount };
