import React from 'react';
import TodoItem from '../TodoItem';

import styles from './index.module.scss'

const TodoList = ({ data }) => {
    return (
        <div className={styles.AddTodo}>
            {data.length && data.map(item => {
                return <TodoItem
                    key={item.id}
                    id={item.id}
                    description={item.description}
                    date={item.createdAt}
                />
            })}
        </div>);
}

export default TodoList;