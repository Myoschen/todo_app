import React from 'react';
import { TodoList } from '../redux/slice/todo';

type HeaderProps = TodoList;

const Header: React.FC<HeaderProps> = ({ todolist }) => {
    const totalNumber = (() => {
        let undoneList = todolist.filter(item => !item.checked)
        return undoneList.length;
    })();
    return (
        <div className='flex justify-between items-center bg-slate-300 dark:bg-slate-600 dark:text-white/80 w-full p-4 mb-8 text-[#4f5358] text-shadow-xl'>
            <h1 className='font-ubuntu text-2xl font-pacifico'>TODO</h1>
            <span className='font-microsoft text-xl'>
                {totalNumber} 個未完成
            </span>
        </div>
    );
};

export default Header;
