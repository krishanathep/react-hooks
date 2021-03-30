import React, { useState, useEffect } from "react";

function WelcomeMessage(){
  return <p>Welcome to react hooks!</p>
}

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    console.log(`You clicked ${count} times`)
  }, [count])

  return (
    <div align="center">
      <WelcomeMessage/>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>+</button>{" "}
      <button onClick={() => setCount(count - 1)}>-</button>{" "}
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default App;
