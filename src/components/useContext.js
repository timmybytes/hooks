import React, { createContext, useState, useContext } from 'react';
import HookInfo from './HookInfo';

export const ExampleContext = createContext('initial context');

export const UseContextProvider = ({ children }) => {
  const [example, setExample] = useState({
    text: 'This is the initial context',
  });

  return (
    <ExampleContext.Provider value={{ example, setExample }}>
      {children}
    </ExampleContext.Provider>
  );
};

export const UseContextComponent = () => {
  const { example, setExample } = useContext(ExampleContext);
  const [newExample, setNewExample] = useState();

  return (
    <HookInfo
      name='useContext'
      description='The useContext Hook allows you to subscribe to React context without introducing nesting or prop-drilling. It can be updated wherever the context is consumed by using state hooks.'>
      <div className='use-context__example'>
        <p>
          Current context value:{' '}
          <span className='use-context__context'>{example.text}</span>
        </p>
        <div>
          <div className='use-context__example-inputs'>
            <label htmlFor='contextText'>Enter new context</label>
            <input
              id='contextText'
              type='text'
              onChange={e => setNewExample(e.target.value)}
            />
          </div>
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
};

export default UseContextComponent;
