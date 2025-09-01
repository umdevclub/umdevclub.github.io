import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation, ScrollRestoration } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "@/styles/App.scss";

function RootLayout() {
  // The animation transitions out the current page first and then transitions into the new page
  // So we can have the pages be positioned as relative and not have to worry about making the
  // new page absolute.
  const routerTransitionDuration = 300;
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Create a custom key that changes only when the pathname or search parameters change (not when the hash changes).
  // This prevents the transition animation from triggering when the hash changes, leading to a re-render of the same page.
  const { pathname, search } = location;
  const transitionKey = pathname + search;

  const nodeRef = useRef(null); // Avoid using findDOMNode in TransitionGroup

  useEffect(() => {
    if (!isTransitioning) {
      // Clear any existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Use a small delay to ensure DOM is ready
      scrollTimeoutRef.current = setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }, 50);
    }
  }, [location.pathname, location.search, isTransitioning]);

  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <ScrollRestoration />
      <Header />
      <main>
        <TransitionGroup className="navpage-container">
          <CSSTransition
            key={transitionKey}
            timeout={{
              exit: routerTransitionDuration,
              enter: routerTransitionDuration,
            }}
            classNames="fade"
            appear
            nodeRef={nodeRef}
            onEnter={() => setIsTransitioning(true)}
            onEntered={() => {
              setIsTransitioning(false);
              window.scrollTo({ top: 0, left: 0, behavior: "instant" });
            }}
            onExited={() => setIsTransitioning(false)}
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
