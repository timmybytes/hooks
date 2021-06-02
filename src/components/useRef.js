import React, { useRef, useState } from 'react';
import HookInfo from './HookInfo';

export default function UseRefComponent() {
  // Create mutable object to persist between rerenders
  const [value, setValue] = useState('');
  const [fastValue, setFastValue] = useState('');
  const valueRef = useRef();
  console.log('render');
  const handleClick = () => {
    console.log(valueRef);
    setValue(valueRef.current.value);
  };
  return (
    <HookInfo
      name='useRef'
      description='The useRef Hook returns a mutable ref object'>
      <p>Here the value updates as it changes.</p>
      <div className='use-ref__example'>
        <h4>State Value: {fastValue}</h4>
        <input
          type='text'
          onChange={e => setFastValue(e.target.value)}
          placeholder='Type something...'
        />
      </div>
      <p>Here the value only updates after a button click.</p>
      <div className='use-ref__example'>
        <h4>Ref Value: {value}</h4>
        <input ref={valueRef} />
        <button onClick={handleClick}>click</button>
      </div>
    </HookInfo>
  );
}
