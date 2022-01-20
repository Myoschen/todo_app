import React from 'react'
import { removeTodo } from '../redux/slice/todo';
import { useAppDispatch } from '../hooks';
import { ImCross } from 'react-icons/im';
import { todo } from "../redux/slice/todo";

interface TodoItemProps {
    todo: todo
}

const TodoItem = (props: TodoItemProps) => {
    const dispatch = useAppDispatch();

    const handleRemoveTodo = () => {
        dispatch(removeTodo(props.todo.id))
    }

    return (
        <li className='flex justify-between items-center p-4 bg-slate-300 rounded shadow'>
            <span className='font-black max-w-[200px] break-all'>{props.todo.todo}</span>
            <button onClick={handleRemoveTodo} aria-label='close' className='text-rose-600 transition-colors duration-300'><ImCross /></button>
        </li>
    )
}

export default TodoItem
