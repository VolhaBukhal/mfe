import React, { useRef, useEffect } from "react";
import { mount } from "marketing/MarketingApp";
import { useHistory } from "react-router-dom";

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    if (ref.current) {
      const { onParentNavigation } = mount(ref.current, {
        initialPath: history.location.pathname,
        onNavigate: ({ location: { pathname: nextPathname } }) => {
          const { pathname } = history.location;

          if (pathname !== nextPathname) {
            history.push(nextPathname);
          }
        },
      });

      history.listen(onParentNavigation);
    }
  });

  return <div ref={ref}>inject mount here</div>;
};
