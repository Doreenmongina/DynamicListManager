import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
 import Counter from './components/Count';
import DynamicListManager from './components/dynamicListManager';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>This is my count</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       
      </div>
      <DynamicListManager />
      
    </>
  );
}

export default App;