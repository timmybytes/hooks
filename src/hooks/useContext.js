import React, { createContext, useContext } from 'react';
import HookInfo from '../HookInfo';

export const ExampleContext = createContext('initial context');

export const UseContextProvider = ({ children }) => {
  const context = useContext(ExampleContext);

  return (
    <ExampleContext.Provider value={context}>
      {children}
    </ExampleContext.Provider>
  );
};

export const UseContextComponent = () => {
  return (
    <HookInfo
      name='useContext'
      description='The useContext Hook allows you to subscribe to React context without introducing nesting or prop-drilling'></HookInfo>
  );
};

export default UseContextComponent;
