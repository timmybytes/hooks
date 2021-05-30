import React, { useContext, useReducer, useEffect } from 'react';
import HookInfo from '../HookInfo';
import { ExampleContext } from './useContext';

const contextReducer = (action, state) => {
  switch (state) {
    case 'PARSE_STRING':
      return action.string;
    default:
      return state;
  }
};

const UseReducerComponent = () => {
  // const context = useContext(ExampleContext);
  // const [state, dispatch] = useReducer(contextReducer, context);

  // useReducer needs a reducer and a state to call the reducer on, and can be destructured into the 'state' and a dispatcher function

  // useEffect(() => {
  //   const localContext = localStorage.setItem('context', context);

  //   // dispatch({actionType: 'action name', anyOtherData})
  //   if (localContext) {
  //     dispatch({ action: 'PARSE_STRINGS', localContext });
  //   }
  // }, [context]);
  return (
    <HookInfo name='useReducer' description='The useReducer Hook...'></HookInfo>
  );
};

export default UseReducerComponent;
