import React, { useState } from 'react';

const UseStateComponent = () => {
  // Update UI when state changes (reconcile VDOM with DOM)
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>useState</h2>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <button
        onClick={() => {
          setCount(0);
        }}>
        Reset
      </button>
      <hr />
    </>
  );
};

export default UseStateComponent;
