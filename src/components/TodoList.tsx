import React from 'react'
import TodoItem from './TodoItem'
import { todo } from '../redux/slice/todo'

interface TodolistProps {
    todo: todo[],
}

const Todolist = (props: TodolistProps) => {
    return (
        <ul className='w-full max-w-xs sm:max-w-sm my-8 space-y-4'>
            {props.todo.map((todo, idx) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    )
}

export default Todolist
