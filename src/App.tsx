import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { useAppSelector } from './hooks';
import Header from './components/Header';
import InputBar from './components/InputBar';

const App: React.FC = () => {
  const todolist = useAppSelector(state => state.todo.todolist);

  return (
    <div className="App">
      <Header todolist={todolist} />
      <InputBar />
      <TodoList todolist={todolist} />
    </div>
  );
}

export default App;
