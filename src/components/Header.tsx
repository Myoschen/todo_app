import React from 'react';
import { todo } from '../redux/slice/todo';

interface HeaderProps {
    todo: todo[],
}

const Header = (props: HeaderProps) => {
    const totalNumber = (() => {
        let undoneList = props.todo.filter(item => !item.checked)
        return undoneList.length;
    })();
    return (
        <div className='flex justify-between items-center bg-slate-300 dark:bg-slate-600 dark:text-white/80 w-full p-4 mb-8 text-[#4f5358] text-shadow-xl'>
            <h1 className='font-ubuntu font-bold  text-4xl'>Todo</h1>
            <span className='font-microsoft text-xl'>
                {totalNumber} 個未完成
            </span>
        </div>
    );
};

export default Header;
