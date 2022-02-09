import React from 'react';

type Props = {
    list: Array<Todo>;
};

const Header: React.FC<Props> = ({ list }) => {
    const totalNumber = (() => {
        let undoneList = list.filter(todo => !todo.complete)
        return undoneList.length;
    })();
    return (
        <header className='bg-slate-300 dark:bg-slate-600 dark:text-white/80 w-full text-[#4f5358] text-shadow-lg shadow-md'>
            <div className="container flex items-center justify-between px-10 py-4 md:px-16">
                <h1 className='text-2xl font-pacifico'>TODO</h1>
                <span className='text-xl font-microsoft'>
                    {totalNumber === 0 ? '已完成所有項目' : <><span>{totalNumber}</span> 個未完成</>}
                </span>
            </div>
        </header>
    );
};

export default Header;
