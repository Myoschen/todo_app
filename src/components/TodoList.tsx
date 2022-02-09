import React from 'react'
import TodoItem from './TodoItem'

type Props = {
    list: Array<Todo>;
};

const Todolist: React.FC<Props> = ({ list }) => {
    return (
        <ul className='grid w-full max-w-xs gap-6 md:max-w-md'>
            {list.map(todo => (
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    todo={todo.todo}
                    complete={todo.complete}
                />
            ))}
        </ul>
    )
}

export default Todolist
