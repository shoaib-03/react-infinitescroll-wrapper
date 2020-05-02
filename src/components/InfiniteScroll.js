import React, { useCallback, useEffect, useRef } from "react";

const InfiniteScroll = ({
  dataLength,
  children,
  next,
  loader,
  hasMore,
  end,
  nextArgs,
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
            if (entry.isIntersecting && isRendered.current && hasMore && dataLength) {
              next(nextArgs);
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
    [isRendered, next, intersectionDiv, nextArgs, hasMore, margin, dataLength]
  );

  useEffect(() => {
    isRendered.current = true;
    const observer = memoizedCreateObserver();
    const intersectionDivCopy = intersectionDiv.current;
    console.log(dataLength)

    return () => {
      observer.unobserve(intersectionDivCopy);
      isRendered.current = false;
    };
  }, [nextArgs, memoizedCreateObserver, dataLength]);

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
