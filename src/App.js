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

  const onEnd = () => {
    setNumbers(numbers=>[...numbers, ...getArray()])
  }

  return (
    <div className="App">
      <InfiniteScroll 
        className="scroll"
        onEnd={onEnd} 
        hasMore={true} 
        margin={{
          top: '0px',
          left: '0px',
          right: '0px',
          bottom: '0px'
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
