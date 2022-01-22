import React from 'react'
import TodoItem from './TodoItem'
import { TodoList } from '../redux/slice/todo'

type TodolistProps = TodoList;

const Todolist: React.FC<TodolistProps> = ({ todolist }) => {
    return (
        <ul className='w-full max-w-xs sm:max-w-sm my-8 space-y-4'>
            {todolist.map(todo => (
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    todo={todo.todo}
                    checked={todo.checked}
                />
            ))}
        </ul>
    )
}

export default Todolist
