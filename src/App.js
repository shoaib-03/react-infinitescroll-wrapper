import React,{useState} from 'react';
import './App.css';
import InfiniteScroll from './components/InfiniteScroll'

const getArray = () => {
  const arr = new Array(100);
  for(let i=0; i<arr.length;i++){
    arr[i] = i;
  }
  return arr;
}

function App() {
  const [numbers, setNumbers] = useState(getArray())

  const next = () => {
    setNumbers(numbers=>[...numbers, ...getArray()])
  }

  return (
    <div className="App">
      <InfiniteScroll 
        className="scroll"
        next={next}
        hasMore={true} 
        loader = { <p> Loading... </p> }
        end = {<p> You've reached the end </p>}
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
