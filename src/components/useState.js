import React, { useState, useContext } from 'react';
import HookInfo from './HookInfo';
import { ExampleContext } from './useContext';

export default function UseStateComponent() {
  // Update UI when state changes (reconcile VDOM with DOM)
  const [count, setCount] = useState(0);

  // Update global context from local state change
  const { example, setExample } = useContext(ExampleContext);
  const [newExample, setNewExample] = useState();

  const handleHundred = e => {
    setCount(count => count + 100);
  };

  return (
    <HookInfo
      name='useState'
      description={'The useState Hook manages state between rerenders.'}>
      {/* Update simple state */}
      <div>
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
      </div>
      <ChildComponent onChange={handleHundred} />
      <p>
        The useState Hook can also be used for more complex tasks, like helping
        to manage context throughout an application.
      </p>

      {/* Update context from UseStateComponent */}
      <div className='use-state__context'>
        <p className='label'>Context from sibling component</p>
        <p>
          Current context value: <span>{example.text}</span>
        </p>
        <div className='use-state__context-inputs'>
          <label htmlFor='contextText'>Enter new context</label>
          <input
            id='contextText'
            type='text'
            onChange={e => setNewExample(e.target.value)}
          />
          <button
            onClick={() => {
              setExample({ text: newExample });
            }}>
            Change context text
          </button>
        </div>
      </div>
    </HookInfo>
  );
}

function ChildComponent({ onChange }) {
  const handleChange = () => {
    onChange();
  };

  return (
    <div className='use-state__child'>
      <p className='label'>Child Component</p>
      <p>You can also update parent component state from child components!</p>
      <button onClick={handleChange}>Click to add 100!</button>
    </div>
  );
}

export function complexState() {
  //
}
