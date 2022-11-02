import { createSlice } from "@reduxjs/toolkit";
import { data } from "../db";
import { v4 as uuidv4 } from 'uuid';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: data,
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id: uuidv4(),
                description: action.payload.description,
                createdAt: action.payload.createdAt
            }
            state.push(newTask);
        },
        remove: (state, action) => {
            return state.filter((item) => item.id !== action.payload.id);
        },
        rename: (state, action) => {
            state.forEach(item => {
                if (item.id === action.payload.id) item.description = action.payload.description
            })
        },
        toggleCheck: (state, action) => {
            state.forEach(item => {
                if (item.id === action.payload.id) item.completed = !item.completed
            })
        },
    }
});

export const { addTask, remove, rename ,toggleCheck} = tasksSlice.actions;
export default tasksSlice.reducer;
