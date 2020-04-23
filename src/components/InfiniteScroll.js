import React, { useCallback, useEffect, useRef } from "react";

const InfiniteScroll = ({
  children,
  onEnd,
  hasMore,
  margin = {
    top: '0px',
    left: '0px',
    right: '0px',
    bottom: '0px'
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
              console.log('Intersecting')
              onEnd();
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
    [isRendered, onEnd, intersectionDiv]
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
    <div {...props}>
      {children}
      <div
        ref={intersectionDiv}
        style={{ width: "100%", height: "2rem" }}
      ></div>
    </div>
  );
};

export default InfiniteScroll;
