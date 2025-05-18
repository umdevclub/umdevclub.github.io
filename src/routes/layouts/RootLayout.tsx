import { useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "@/styles/App.scss";

function RootLayout() {
  // The animation transitions out the current page first and then transitions into the new page
  // So we can have the pages be positioned as relative and not have to worry about making the
  // new page absolute (i.e. make the pages absolute).
  const routerTransitionDuration = 300;
  const location = useLocation();

  // Create a custom key that changes only when the pathname or search parameters change (not when the hash changes).
  // This prevents the transition animation from triggering when the hash changes, leading to a re-render of the same page.
  const { pathname, search } = location;
  const transitionKey = pathname + search;

  const nodeRef = useRef(null); // Avoid using findDOMNode in TransitionGroup

  return (
    <>
      <Header />
      <main>
        <TransitionGroup className="navpage-container">
          <CSSTransition
            key={transitionKey}
            timeout={{
              exit: routerTransitionDuration,
              enter: 2 * routerTransitionDuration,
            }}
            classNames="fade"
            appear
            nodeRef={nodeRef}
          >
            <Outlet />
          </CSSTransition>
        </TransitionGroup>
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
