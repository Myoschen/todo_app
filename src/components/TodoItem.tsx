import React, { useState } from 'react'
import { removeTodo, checkTodo } from '../redux/slice/todo';
import { useAppDispatch } from '../hooks';
import { ImCross } from 'react-icons/im';

type TodoItemProps = Todo;

const TodoItem: React.FC<TodoItemProps> = ({ id, todo, complete }) => {
    const dispatch = useAppDispatch();
    const [check, setCheck] = useState(false);

    const handleRemoveTodo = () => {
        dispatch(removeTodo(id))
    }

    const handlecompleteTodo = () => {
        setCheck(!check);
        dispatch(checkTodo(id));
    }

    return (
        <li className='flex justify-between items-center p-4 bg-slate-300 dark:bg-slate-600 dark:text-white/80 rounded shadow'>
            <label className="inline-flex items-center">
                <input className="hidden" onChange={handlecompleteTodo} checked={complete} type="checkbox" />
                <span className={`${complete ? 'line-through' : 'no-underline'} font-medium break-all`}>{todo}</span>
            </label>
            <button onClick={handleRemoveTodo} aria-label='close' className='ml-4 text-rose-500 transition-colors duration-300'><ImCross /></button>
        </li >
    )
}

export default TodoItem
