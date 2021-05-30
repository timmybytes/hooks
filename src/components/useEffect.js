import React, { useEffect, useState } from 'react';
import HookInfo from './HookInfo';

export default function UseEffectComponent() {
  /* Accesses the Component Lifecycle methods:
      componentDidMount: initialized
      componentDidUpdate: state updated
      componentWillUnmount: destroyed
  */
  const [alerted, setAlerted] = useState(false);

  useEffect(() => {
    // alert('A side effect! (useEffect)');
    // setAlerted(true);
    // return () => {
    //   alert('Destroyed! (useEffect)');
    //   setAlerted(!alerted);
    // };
  }, []);

  return (
    <HookInfo
      name='useEffect'
      description='The useEffect Hook accepts a function that contains imperative, possibly effectful (e.g. side effects) code.'>
      {alerted && <p>Alerted!</p>}
    </HookInfo>
  );
}
