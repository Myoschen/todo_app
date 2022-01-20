import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

export interface todo {
    id: string,
    todo: string,
    checked: boolean,
}

interface todolist {
    todolist: todo[]
}

const initialState: todolist = {
    todolist: []
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todolist.push({id: uuidv4(), todo: action.payload, checked: false})
        },
        removeTodo: (state, action) => {
            state.todolist = state.todolist.filter(todo => todo.id !== action.payload)
        }
    }
});

export const { addTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer;