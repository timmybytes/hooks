import React, { useState } from 'react';
import HookInfo from '../HookInfo';

export default function UseStateComponent() {
  // Update UI when state changes (reconcile VDOM with DOM)
  const [count, setCount] = useState(0);

  const handleHundred = e => {
    setCount(count => count + 100);
  };

  return (
    <HookInfo
      name='useState'
      description='The useState Hook manages state between rerenders'>
      <p>Click to add 1</p>
      <button onClick={() => setCount(count => count + 1)}>
        Count: {count}
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}>
        Reset
      </button>
      <ChildComponent onChange={handleHundred} />
    </HookInfo>
  );
}

function ChildComponent({ onChange }) {
  const handleChange = () => {
    onChange();
  };

  return (
    <div
      style={{
        width: '80%',
        border: '1px solid black',
        borderRadius: '6px',
        margin: '.5rem auto  ',
        padding: '1rem',
      }}>
      <p
        style={{
          fontSize: '.65em',
          fontStyle: 'italic',
          fontWeight: '700',
          textTransform: 'uppercase',
          padding: '.25rem',
          margin: 0,
          background: '#000',
          color: '#fff',
        }}>
        Child Component
      </p>
      <p>You can also update parent component state from child components!</p>
      <button onClick={handleChange}>Click to add 100!</button>
    </div>
  );
}
