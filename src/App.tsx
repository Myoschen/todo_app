import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { useAppSelector } from './hooks';
import Header from './components/Header';
import InputBar from './components/InputBar';

const App: React.FC = () => {
  const todolist = useAppSelector(state => state.todo.list);

  return (
    <div className="App">
      <Header list={todolist} />
      <InputBar />
      <TodoList list={todolist} />
    </div>
  );
}

export default App;
