import React from 'react';
import TodoItem from '../TodoItem';
import styles from './index.module.scss'
import { seSelector, useSelector } from 'react-redux';

const TodoList = () => {
    const data = useSelector(state => state.tasks)
    console.log(data);
    return (
        <div className={styles.AddTodo}>
            {data.length && data.map(item => {
                return <TodoItem
                    key={item.id}
                    id={item.id}
                    description={item.description}
                    date={item.createdAt}
                    completed={item.completed}
                />
            })}
        </div>);
}

export default TodoList;