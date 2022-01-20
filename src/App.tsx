import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { useAppSelector } from './hooks';
import Header from './components/Header';
import InputBar from './components/InputBar';

function App() {
  const todolist = useAppSelector(state => state.todo.todolist);

  return (
    <div className="App">
      <Header todo={todolist} />
      <InputBar />
      <TodoList todo={todolist} />
    </div>
  );
}

export default App;
