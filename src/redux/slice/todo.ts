import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState: TodoList = {
    list: []
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.list.push({id: uuidv4(), todo: action.payload, complete: false})
        },
        removeTodo: (state, action) => {
            state.list = state.list.filter(todo => todo.id !== action.payload)
        },
        checkTodo: (state, action) => {
            state.list.forEach(todo => {
                if(todo.id === action.payload){
                    todo.complete = !todo.complete;
                }
            })
        } 
    }
});

export const { addTodo, removeTodo, checkTodo } = todoSlice.actions
export default todoSlice.reducer;