import React,{useState} from 'react';
import './App.css';
import InfiniteScroll from './components/InfiniteScrollWrapper'

const getArray = () => {
  const arr = new Array(100);
  for(let i=0; i<arr.length;i++){
    arr[i] = Math.random()*10;
  }
  return arr;
}

function App() {
  const [numbers, setNumbers] = useState(getArray())

  const onEnd = () => {
    setNumbers(numbers=>[...getArray(),...numbers])
  }

  return (
    <div className="App">
      <InfiniteScroll onEnd={onEnd} hasMore = {true} >
        {
          numbers.map(num=><p>{num}</p>)
        }
      </InfiniteScroll>
    </div>
  );
}

export default App;
