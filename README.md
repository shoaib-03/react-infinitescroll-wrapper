# react-infinite-scroll
A simple component to wrap around a div for which you want infinite scroll. This uses IntersectionObserver API and is written with hooks

## Install
```
  npm install --save react-infinitescroll-wrapper

  or

  yarn add react-infinitescroll-wrapper

```

## Importing
```
  import InfiniteScroll from 'react-infinitescroll-wrapper'
```

## Usage example
```
import React,{useState, useEffect} from 'react';
import './App.css';
import InfiniteScroll from './components/InfiniteScroll'

const getArray = (n) => {
  const arr = new Array(30);
  for(let i=0; i<arr.length;i++){
    arr[i] = n+i;
  }
  return arr;
}

function App() {
  const [page, setPage] = useState(1)
  const [numbers, setNumbers] = useState(getArray(0))

  const next = (nextArgs) => {
    setPage(page=>page+1)
    setNumbers(numbers=>[...numbers, ...getArray(nextArgs.page*30)])
  }

  return (
    <div className="App">
      <InfiniteScroll 
        className="scroll"
        next={next}
        hasMore={true} 
        loader = { <p> Loading... </p> }
        end = {<p> You've reached the end </p>}
        nextArgs = {{
          page : page
        }}
        margin={{
          top: '0px',
          left: '0px',
          right: '0px',
          bottom: '30%'
        }}
      >
        {
          numbers.map(num=><p>{num}</p>)
        }
      </InfiniteScroll>
    </div>
  );
}

export default App;

```
