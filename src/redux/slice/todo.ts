import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

export type Todo = {
    id: string;
    todo: string;
    checked: boolean;
}

export type TodoList = {
    todolist: Todo[];
}

const initialState: TodoList = {
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
        },
        checkTodo: (state, action) => {
            state.todolist.forEach(todo => {
                if(todo.id === action.payload){
                    todo.checked = !todo.checked;
                }
            })
        } 
    }
});

export const { addTodo, removeTodo, checkTodo } = todoSlice.actions
export default todoSlice.reducer;