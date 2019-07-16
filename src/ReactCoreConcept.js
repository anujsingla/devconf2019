import React, { useState } from "react";

export function Counter(props) {
    const [count, setCount] = useState(props.initialCount);
    // return a JSX (JavaScript XML)
    return (
      <>
        Count: {count}
        <button onClick={() => setCount(props.initialCount)}>Reset</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      </>
    );
}