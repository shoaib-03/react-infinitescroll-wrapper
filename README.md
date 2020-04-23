# react-infinite-scroll
A simple component to wrap around a div for which you want infinite scroll. This uses IntersectionObserver API and is written with hooks

## Install
```
  npm install --save react-infinite-scroll

  or

  yarn add react-infinite-scroll

```

## Importing
```
  import InfiniteScroll from 'react-infinite-scroll'
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

```
