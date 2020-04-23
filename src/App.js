import React,{useState} from 'react';
import './App.css';
import InfiniteScrollWrapper from './components/InfiniteScrollWrapper'

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
      <InfiniteScrollWrapper 
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
      </InfiniteScrollWrapper>
    </div>
  );
}

export default App;
