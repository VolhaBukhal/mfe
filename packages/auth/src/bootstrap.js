import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMemoryHistory, createBrowserHistory } from "history";

// Mount function to start the application

const mount = (el, { onNavigate, defaultHistory }) => {
  const history = defaultHistory || createMemoryHistory();

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
  const devRoot = document.getElementById("_auth-dev-root");
  devRoot && mount(devRoot, { defaultHistory: createBrowserHistory() });
}

// We are running through container and we should export the mount function

export { mount };
