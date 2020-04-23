# react-infinite-scroll-wrapper
A simple component to wrap around a div for which you want infinite scroll. This uses IntersectionObserver API and is written with hooks

## Install
```
  npm install --save react-infinite-scroll-wrapper

  or

  yarn add react-infinite-scroll-wrapper

```

## Importing
```
  import InfiniteScrollWrapper from 'react-infinite-scroll-wrapper'
```

## Usage
```
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

```
