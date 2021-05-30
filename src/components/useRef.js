import React, { useRef, useState } from 'react';
import HookInfo from './HookInfo';

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
      <div className='use-ref__example'>
        <p>
          Clicking won't trigger a rerender, but the value of the ref is
          updated.
        </p>
        <button onClick={() => count.current++}>
          Ref Count: {count.current}
        </button>
      </div>
      <div className='use-ref__example'>
        <p>
          Clicking will rerender with each state change, also causing the
          current ref value to become visible.
        </p>
        <button
          onClick={() => {
            setValue(value + 1);
          }}>
          State Count: {value}
        </button>
      </div>
      <div className='use-ref__example'>
        <p>(Reset ref and state): </p>
        <button onClick={handleReset}>Reset</button>
      </div>
    </HookInfo>
  );
}
