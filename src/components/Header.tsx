import React from 'react';

type HeaderProps = TodoList;

const Header: React.FC<HeaderProps> = ({ list }) => {
    const totalNumber = (() => {
        let undoneList = list.filter(todo => !todo.complete)
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
