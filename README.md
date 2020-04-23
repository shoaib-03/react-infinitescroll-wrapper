# react-infinite-scroll-wrapper
A simple component to wrap around a div for which you want infinite scroll. This uses IntersectionObserver API

## Install
```
    npm install --save react-infinite-scroll-wrapper

    or

    yarn add react-infinite-scroll-wrapper
```

## Usage
```
function App() {
  const [numbers, setNumbers] = useState(getArray())

  const onEnd = () => {
    setNumbers(numbers=>[...getArray(),...numbers])
  }

  return (
    <div className="App">
      <InfiniteScrollWrapper 
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
```
