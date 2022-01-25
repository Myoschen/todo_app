import React from 'react'
import TodoItem from './TodoItem'

type TodolistProps = TodoList;

const Todolist: React.FC<TodolistProps> = ({ list }) => {
    return (
        <ul className='w-full max-w-xs sm:max-w-sm my-8 space-y-4'>
            {list.map(todo => (
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    todo={todo.todo}
                    complete={todo.complete}
                />
            ))}
        </ul>
    )
}

export default Todolist
