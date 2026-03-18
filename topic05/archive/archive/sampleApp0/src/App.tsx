import { useState } from "react";

type CounterProps = {
  jump: number,
}

const Counter = (props: CounterProps) => {
  const [count, setCount] = useState(0);
  console.log(`${count} ${props.jump}`);

  const incrementCount = () => {
    setCount(count + props.jump)
  };

  return (
    <>
      <h2>Count: {count}</h2>
      <h3>Increment size: {props.jump}</h3>
      <button type="button" onClick={incrementCount}>
        Increment
      </button>
    </>
  );
};

export default Counter;