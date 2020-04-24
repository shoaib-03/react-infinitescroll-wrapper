import React, { useCallback, useEffect, useRef } from "react";

const InfiniteScroll = ({
  children,
  next,
  loader,
  hasMore,
  end,
  margin = {
    top: '0px',
    left: '0px',
    right: '0px',
    bottom: '30%'
  },
  ...props
}) => {
  const isRendered = useRef(true);
  const intersectionDiv = useRef()
  const memoizedCreateObserver = useCallback(
    () => {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && isRendered.current && hasMore) {
              next();
            }
          });
        },
        {
          rootMargin: `${margin.top} ${margin.right} ${margin.bottom} ${margin.top}`,
        }
      );

      // observe the div
      if (intersectionDiv.current) {
        observer.observe(intersectionDiv.current);
      }

      return observer;
      // end of useCallback
    },
    // dependancy
    // eslint-disable-next-line
    [isRendered, next, intersectionDiv]
  );

  useEffect(() => {
    isRendered.current = true;
    const observer = memoizedCreateObserver();
    const intersectionDivCopy = intersectionDiv.current;
    console.log(intersectionDiv.current)
    return () => {
      observer.unobserve(intersectionDivCopy);
      isRendered.current = false;
    };
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div {...props}>
        {children}
      </div>
      { hasMore?loader:end }
      <div
        ref={intersectionDiv}
        style={{ width: "100%", height: "2rem" }}
      ></div>
    </>
  );
};

export default InfiniteScroll;
