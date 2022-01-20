import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { useAppDispatch, useAppSelector } from './hooks';
import { addTodo } from './redux/slice/todo';
import { ImPlus } from 'react-icons/im'
import Header from './components/Header';

function App() {
  const todolist = useAppSelector(state => state.todo.todolist);
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
      <Header todo={todolist} />
      <div className='flex sm:justify-around gap-4'>
        <input onChange={e => handleChange(e.target.value)} value={input} className='p-1 px-2 focus:outline-1 outline-slate-300 text-lg' type='text' placeholder='Todo something ...' />
        <button onClick={handleAddTodo} aria-label='submit' className='bg-slate-300 py-2 px-4 rounded hover:bg-slate-200 active:bg-slate-400 shadow transition-colors duration-300 text-lime-600'><ImPlus /></button>
      </div>
      <TodoList todo={todolist} />
    </div>
  );
}

export default App;
