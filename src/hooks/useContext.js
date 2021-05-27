import React, { useContext, createContext, useState } from 'react';

const ExampleContext = createContext('a default--but optional--context value');

export const UseContextComponent = () => {
  // Context: share or scope values/state throughout application
  return (
    <ExampleContext.Provider>
      <h2>useContext</h2>
      <ChildComponent />
      <hr />
    </ExampleContext.Provider>
  );
};

const ChildComponent = () => {
  const valueFromContext = useContext(ExampleContext);
  const [currentValue, setCurrentValue] = useState(valueFromContext);
  return (
    <>
      <p>{currentValue || 'No value detected'}</p>
      <button>Change</button>
    </>
  );
};

export default UseContextComponent;
