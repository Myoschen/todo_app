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
        <div className='flex gap-4 sm:justify-around'>
            <input onChange={e => setInput(e.target.value)} value={input} className='p-1 px-2 text-lg border-2 rounded shadow-inner border-slate-200 focus:outline-none dark:bg-slate-600 dark:placeholder-white/80 dark:text-white/80' type='text' placeholder='Todo something ...' />
            <button onClick={handleAddTodo} aria-label='submit' className='px-4 py-2 transition-colors duration-300 rounded shadow bg-slate-300 hover:bg-slate-200 dark:hover:bg-slate-500 dark:active:bg-slate-700 active:bg-slate-400 dark:bg-slate-600 text-lime-500'><ImPlus /></button>
        </div>
    )
};

export default InputBar;
