import { useState } from 'react';

const ClickCounter = () => {
  const [counter, setCounter] = useState<number>(0);

  const increment = () => setCounter((prev) => prev + 1);
  const decrement = () => setCounter((prev) => prev - 1);

  return (
    <>
      <div className="card">
        <h2>Count is {counter}</h2>
        <button onClick={decrement}>- decrement</button>
        <button onClick={increment}>+ increment</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
};

export default ClickCounter;
