import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>This is my count:{count}</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          Increment {count}
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Subtraction
        </button>
        <button onClick={() => setCount(0)}>Reset</button>

      </div>
    </>
  );
}

export default Counter;