import React, { useRef, useState } from 'react';
import HookInfo from '../HookInfo';

export default function UseRefComponent() {
  // Create mutable object to persist between rerenders
  const count = useRef(0);
  const [value, setValue] = useState(0);

  const handleReset = () => {
    count.current = 0;
    setValue(0);
  };
  return (
    <HookInfo
      name='useRef'
      description='The useRef Hook returns a mutable ref object'>
      (Clicking won't rerender):
      <button onClick={() => count.current++}>
        Ref Count: {count.current}
      </button>
      (Clicking will rerender):
      <button
        onClick={() => {
          setValue(value + 1);
        }}>
        State Count: {value}
      </button>
      (Reset ref <em>and</em> state)
      <button onClick={handleReset}>Reset</button>
    </HookInfo>
  );
}
