import './App.css';
import UseStateComponent from './hooks/useState';
import UseEffectComponent from './hooks/useEffect';
import UseRefComponent from './hooks/useRef';
import { UseContextComponent } from './hooks/useContext';

export default function App() {
  return (
    // Context Provider creates the scope of the application that can access the context data
    <div className='App'>
      <UseStateComponent />
      <UseEffectComponent />
      <UseRefComponent />
      <UseContextComponent />
    </div>
  );
}
