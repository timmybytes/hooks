import { useReducer, useState } from 'react';
import HookInfo from './HookInfo';

// Pure function outside component
function reducer(state, action) {
  // Don't mutate state; return new state value
  // reducer(count,)
  console.log('state', state);
  console.log('action', action);
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [...state.todos, { text: action.text, completed: false }],
      };
    case 'CLEAR_TODOS':
      return {
        todos: [],
      };
    default:
      return state;
  }
}

const UseReducerComponent = () => {
  const [{ todos }, dispatch] = useReducer(reducer, { todos: [] });
  const [text, setText] = useState();

  return (
    <HookInfo name='useReducer'>
      <div className='example'>
        <form
          className='use-reducer__form'
          onSubmit={e => {
            e.preventDefault();
            dispatch({ type: 'ADD_TODO', text });
            setText('');
          }}>
          <label htmlFor='todo-input'>Enter new to-do</label>
          <input
            className='use-reducer__form-input'
            type='text'
            name='todo-input'
            id='todo-input'
            value={text || ''}
            onChange={e => setText(e.target.value)}
          />
        </form>
        <div className='use-reducer__todos'>
          <h3>To-dos</h3>
          <div className='use-reducer__todos-grid'>
            {todos.map((todo, idx) => {
              let todoNum = idx + 1;
              return (
                <div className='use-reducer__todo' key={idx}>
                  <h4 className='use-reducer__todo-header'>To-do #{todoNum}</h4>
                  <p className='use-reducer__todo-body'>{todo.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </HookInfo>
  );
};

export default UseReducerComponent;
