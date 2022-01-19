import React from 'react'
import { useAppSelector } from '../hooks'
import TodoItem from './TodoItem'

const Todolist = () => {
    const todolist = useAppSelector(state => state.todo.todolist)

    // Local Storage
    localStorage.setItem('todoList', JSON.stringify(todolist));

    return (
        <ul className='w-full max-w-xs sm:max-w-sm my-8 space-y-4'>
            {todolist.map((todo, idx) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    )
}

export default Todolist
