import { useState } from "react";

function useCounter(initialValue) {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => {
    setCounter(counter + 1);
  };
  const reset = () => {
    setCounter(initialValue);
  };
  return [counter, increment, reset];
}

export default useCounter;
