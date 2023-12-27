// updater function = A function passed as an argument to setState() usually ex. setYear(year + 1). Allow for safe updates based on the previous state used with multiple state updates and asynchronous functions.

// Good practice to use updater function


import React, {useState} from 'react'

function MyComponent() {
    const [count, setCount] = useState(0);

    function increment(){
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);

    };
    function decrement(){
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);

    };
    function reset(){
        setCount(0);
    }
  return (
    <div>
        <p>Count : {count}</p>
        <button value={count} onClick={increment}>Increment</button>
        <button value={count} onClick={reset}>Reset</button>
        <button value={count} onClick={decrement}>Decrement</button>
    </div>
  )
}

export default MyComponent