import './App.css';
import UseStateComponent from './hooks/useState';
import UseEffectComponent from './hooks/useEffect';
import UseRefComponent from './hooks/useRef';
import { UseContextComponent, UseContextProvider } from './hooks/useContext';
import UseReducerComponent from './hooks/useReducer';

export default function App() {
  return (
    // Context Provider creates the scope of the application that can access the context data
    <UseContextProvider>
      <div className='App'>
        <h1>React Hooks</h1>
        <hr />
        <UseStateComponent />
        <UseEffectComponent />
        <UseRefComponent />
        <UseContextComponent />
        <UseReducerComponent />
      </div>
    </UseContextProvider>
  );
}
