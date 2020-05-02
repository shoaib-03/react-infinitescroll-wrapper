import React, { useState } from "react";
import "./App.css";
import InfiniteScroll from "./components/InfiniteScroll";

const getArray = (n) => {
  const arr = new Array(30);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = n + i;
  }
  return arr;
};

function App() {
  const [page, setPage] = useState(1);
  const [numbers, setNumbers] = useState(getArray(0));

  const next = (nextArgs) => {
    setPage((page) => page + 1);
    setNumbers((numbers) => [...numbers, ...getArray(nextArgs.page * 30)]);
  };

  return (
    <div className="App">
      <InfiniteScroll
        dataLength = {numbers.length}
        className="scroll"
        next={next}
        hasMore={true}
        loader={<p> Loading... </p>}
        end={<p> You've reached the end </p>}
        nextArgs={{
          page: page,
        }}
        margin={{
          top: "0px",
          left: "0px",
          right: "0px",
          bottom: "30%",
        }}
      >
        {numbers.map((num) => (
          <p key={num}>{num}</p>
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default App;
