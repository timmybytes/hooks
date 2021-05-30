import './App.css';
import UseStateComponent from './components/useState';
import UseEffectComponent from './components/useEffect';
import UseRefComponent from './components/useRef';
import {
  UseContextComponent,
  UseContextProvider,
} from './components/useContext';
import UseReducerComponent from './components/useReducer';
import UseCallbackComponent from './components/useCallback';
import UseMemoComponent from './components/useMemo';
import UseLayoutEffectComponent from './components/useLayoutEffect';
import UseImperativeHandleComponent from './components/useImperativeHandle';
import UseDebugValueComponent from './components/useDebugValue';
import Header from './components/Header';

export default function App() {
  return (
    // Context Provider creates the scope of the application that can access the context data
    <UseContextProvider>
      <main className='App'>
        <Header />
        <UseStateComponent />
        <UseEffectComponent />
        <UseRefComponent />
        <UseContextComponent />
        <UseReducerComponent />
        <UseCallbackComponent />
        <UseMemoComponent />
        <UseLayoutEffectComponent />
        <UseImperativeHandleComponent />
        <UseDebugValueComponent />
      </main>
    </UseContextProvider>
  );
}
