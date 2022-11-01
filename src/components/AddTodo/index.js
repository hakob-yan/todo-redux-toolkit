import React from 'react';
import styles from './index.module.scss'

const AddTodo = () => {
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(1);
    }
    return (
        <div className={styles.AddTodo}>
            <h1>Todo List with  Redux toolkit</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input className={styles.text} type='text' />
                <input className={styles.submit} type='submit' value='Add Todo'/>
            </form>
        </div>);
}

export default AddTodo;