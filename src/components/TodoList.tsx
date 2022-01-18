import React from 'react'
import { useAppSelector } from '../hooks'
import TodoItem from './TodoItem'

const Todolist = () => {
    const todolist = useAppSelector(state => state.todo.todolist)

    // Local Storage
    localStorage.setItem('todoList', JSON.stringify(todolist));

    return (
        <ul className='space-y-4'>
            {todolist.map((todo, idx) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    )
}

export default Todolist
