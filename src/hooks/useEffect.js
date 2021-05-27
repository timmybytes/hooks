import React, { useEffect, useState } from 'react';

const UseEffectComponent = () => {
  /* Accesses the Component Lifecycle methods:
      componentDidMount: initialized
      componentDidUpdate: state updated
      componentWillUnmount: destroyed
  */
  const [alerted, setAlerted] = useState(false);

  useEffect(() => {
    alert('A side effect! (useEffect)');
    setAlerted(true);
    return () => {
      alert('Destroyed! (useEffect)');
    };
  }, []);

  return (
    <>
      <h2>useEffect</h2>
      {alerted && <p>Alerted!</p>}
      <hr />
    </>
  );
};

export default UseEffectComponent;
