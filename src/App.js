import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div align="center">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>+</button>{" "}
      <button onClick={() => setCount(count - 1)}>-</button>{" "}
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default App;
