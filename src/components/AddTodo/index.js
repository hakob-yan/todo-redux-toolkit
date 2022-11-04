import React, { useState } from 'react';
import styles from './index.module.scss';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/tasksSlice';

const AddTodo = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim().length)
            dispatch(addTask({
                description: value,
                createdAt: new Date().toLocaleString()
            }))
        setValue('')
    }

    return (
        <div className={styles.AddTodo}>
            <h1>Todo List with  Redux toolkit</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input className={styles.text}
                    type='text'
                    value={value}
                    onChange={(e) => setValue(e.target.value)} />
                <input className={styles.submit}
                    type='submit'
                    value='Add'
                />
            </form>
        </div>);
}

export default AddTodo;