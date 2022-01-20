import React, { useState } from 'react'
import { removeTodo, checkTodo } from '../redux/slice/todo';
import { useAppDispatch } from '../hooks';
import { ImCross } from 'react-icons/im';
import { todo } from "../redux/slice/todo";

interface TodoItemProps {
    todo: todo
}

const TodoItem = (props: TodoItemProps) => {
    const dispatch = useAppDispatch();
    const [checked, setChecked] = useState(false);

    const handleRemoveTodo = () => {
        dispatch(removeTodo(props.todo.id))
    }

    const handleCheckedTodo = () => {
        setChecked(!checked);
        dispatch(checkTodo(props.todo.id));
    }

    return (
        <li className='flex justify-between items-center p-4 bg-slate-300 rounded shadow'>
            <label className="inline-flex items-center">
                <input className="hidden" onChange={handleCheckedTodo} checked={props.todo.checked} type="checkbox" />
                <span className={`${props.todo.checked ? 'line-through' : 'no-underline'} font-black`}>{props.todo.todo}</span>
            </label>
            <button onClick={handleRemoveTodo} aria-label='close' className='text-rose-600 transition-colors duration-300'><ImCross /></button>
        </li >
    )
}

export default TodoItem
