import './App.css';
import UseStateComponent from './hooks/useState';
import UseEffectComponent from './hooks/useEffect';
import UseRefComponent from './hooks/useRef';

function App() {
  return (
    <div className='App'>
      <UseStateComponent />
      <UseEffectComponent />
      <UseRefComponent />
    </div>
  );
}

export default App;
