import { useState } from "react";

const ErrorExample = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1);
  }

  return (<div>
    <h2>You clicked {count}</h2>
    <button onClick={handleClick}>+1</button>
  </div>
  )
};

export default ErrorExample;
