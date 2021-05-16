import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList:[]
}

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        saveTodo :(state,action) =>{
            state.todoList.push(action.payload)
        },
        deleteItem: (state,action) =>{
            const sadas = state.todoList.filter(item =>
                item.id !== action.payload
            )
            console.log(sadas)
        }
    }
});

export const {saveTodo,deleteItem } = todoSlice.actions

export const selectTodoList = state => state.todos.todoList

export default todoSlice.reducer