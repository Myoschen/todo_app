import React, { useState } from 'react';
import { addTodo } from '../redux/slice/todo';
import { ImPlus } from 'react-icons/im'
import { useAppDispatch } from '../hooks';

const InputBar = () => {
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
            <input onChange={e => setInput(e.target.value)} value={input} className='p-1 px-2 focus:outline-1 outline-slate-300 text-lg' type='text' placeholder='Todo something ...' />
            <button onClick={handleAddTodo} aria-label='submit' className='bg-slate-300 py-2 px-4 rounded hover:bg-slate-200 active:bg-slate-400 shadow transition-colors duration-300 text-lime-600'><ImPlus /></button>
        </div>
    )
};

export default InputBar;
