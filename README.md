# react-infinitescroll
A simple component to wrap around a div for which you want infinite scroll. This uses IntersectionObserver API

## Install
```
    npm install --sace react-infinite-scroll

    or

    yarn add react-infinite-scroll
```

## Usage
```
function App() {
  const [numbers, setNumbers] = useState(getArray());

  const onEnd = () => {
    setNumbers(numbers=>[...getArray(),...numbers]);
  }

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
```
