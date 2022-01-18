import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { useAppDispatch } from './hooks';
import { addTodo } from './redux/slice/todo';
import { ImPlus } from 'react-icons/im'

function App() {
  const dispatch = useAppDispatch();
  const [input, setInput] = useState('')

  const handleChange = (v: string) => {
    setInput(v);
  }

  const handleAddTodo = () => {
    if (input) {
      dispatch(addTodo(input))
      setInput('')
    }
  }

  return (
    <div className="App">
      <div className='mt-8'>
        <h1 className='text-6xl text-center mb-16 font-bold hidden sm:block'>Todo</h1>
        <div className='mb-8 flex sm:justify-around gap-2'>
          <input onChange={e => handleChange(e.target.value)} value={input} className='p-1 px-2 focus:outline-1 outline-slate-300 text-lg' type='text' placeholder='Todo something ...' />
          <button onClick={handleAddTodo} aria-label='submit' className='bg-slate-300 py-2 px-4 rounded hover:bg-slate-200 active:bg-slate-400 shadow transition-colors duration-300 text-lime-600'><ImPlus /></button>
        </div>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
