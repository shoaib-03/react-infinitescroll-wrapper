import React,{useState, useCallback} from 'react';
import './App.css';
import InfiniteScroll from './components/InfiniteScrollWrapper'

const getArray = () => {
  const arr = new Array(100);
  for(let i=0; i<arr.length;i++){
    arr[i] = i;
  }
  return arr;
}

function App() {
  const [numbers, setNumbers] = useState(getArray())

  const onEnd = useCallback(() => {
    console.log('onEnd');
    setNumbers(numbers=>[...numbers, ...getArray()]);
  },[setNumbers])

  return (
    <div className="App">
      <InfiniteScroll onEnd={onEnd} hasMore={true} >
        {
          numbers.map(num=><p>{num}</p>)
        }
      </InfiniteScroll>
    </div>
  );
}

export default App;
