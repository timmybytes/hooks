import React, { useRef, useState } from 'react';

const UseRefComponent = () => {
  // Create mutable object to persist between rerenders
  const count = useRef(0);
  const [value, setValue] = useState(0);

  const handleReset = () => {
    count.current = 0;
    setValue(0);
  };
  return (
    <>
      <h2>useRef</h2>
      <button onClick={() => count.current++}>
        Ref Count (Clicking won't rerender): {count.current}
      </button>
      <button
        onClick={() => {
          setValue(value + 1);
        }}>
        State Count (Clicking will rerender): {value}
      </button>
      <button onClick={handleReset}>
        Reset (resets ref <em>and</em> state)
      </button>
      <hr />
    </>
  );
};

export default UseRefComponent;
