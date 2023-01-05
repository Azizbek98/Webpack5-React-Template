import { useState } from "react";

const ClickCounter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter((prev) => prev + 1);
  const decrement = () => setCounter((prev) => prev - 1);

  return (
    <div>
      <h3>Counter Component</h3>
      <div>
        <button onClick={increment}>+</button>
        <span>{counter}</span>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
};

export default ClickCounter;
