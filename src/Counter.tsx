import React, { useState } from "react";

// FunctionComponent = FC とかける
const Counter: React.FC<{}> = () => {
  const initialValue: number = 0;
  const [value, setValue] = useState<number>(initialValue);

  const increment = () => {
    // return setValue(value + 1);
    return setValue((prevState) => prevState + 1);
  };

  const decrement = () => {
    // return setValue(value - 1);
    return setValue((prevState) => prevState - 1);
  };
  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
};

export default Counter;
