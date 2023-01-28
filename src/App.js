import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  function do_increment() {
    setCount(count + 1);
  }
  function do_decrement() {
    if (count === 0)
      return 0;
    else
      setCount(count - 1);
  }
  function do_reset() {
    setCount(0);
  }
  return (
    <div class="counterContainer">
      <button class="counterButton" onClick={do_increment}>+</button>
      <p class="counterValue">{count}</p>
      <button class="counterButton" onClick={do_decrement}>-</button>
      <button class="counterResetButton" onClick={do_reset}>Reset</button>
    </div>
  );
}

export default App;
