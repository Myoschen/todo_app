import React, { useState } from 'react';
import { addTodo } from '../redux/slice/todo';
import { ImPlus } from 'react-icons/im'
import { useAppDispatch } from '../hooks';

const InputBar: React.FC = () => {
    const [input, setInput] = useState('');
    const dispatch = useAppDispatch();
    const handleAddTodo = () => {
        if (input) {
            dispatch(addTodo(input));
            setInput('')
        }
    }
    return (
        <div className='flex sm:justify-around gap-4'>
            <input onChange={e => setInput(e.target.value)} value={input} className='p-1 px-2 focus:outline-none ring-slate-400 focus:ring-2 text-lg rounded transition-all dark:bg-slate-600 dark:placeholder-white/80 dark:text-white/80' type='text' placeholder='Todo something ...' />
            <button onClick={handleAddTodo} aria-label='submit' className='bg-slate-300 py-2 px-4 rounded hover:bg-slate-200 dark:hover:bg-slate-500 dark:active:bg-slate-700 active:bg-slate-400 dark:bg-slate-600 shadow transition-colors duration-300 text-lime-500'><ImPlus /></button>
        </div>
    )
};

export default InputBar;
