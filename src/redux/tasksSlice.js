import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id: uuidv4(),
                description: action.payload.description,
                createdAt: action.payload.createdAt,
            };
            console.log(state);
            state.push(newTask)

        }
    }
});

export const { addTask } = tasksSlice.actions;
export default tasksSlice.reducer;
