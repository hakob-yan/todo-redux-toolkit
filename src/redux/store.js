import { configureStore } from "@reduxjs/toolkit";
import {addTask} from '../redux/tasksSlice'
export const store = configureStore({
    reducer: {
        addTask,
    }
})