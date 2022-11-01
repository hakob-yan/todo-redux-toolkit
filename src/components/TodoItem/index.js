import React from 'react';
import styles from './index.module.scss'
import DelLogo from '../../assets/delete.svg'
import RemLogo from '../../assets/rename.svg'

const TodoItem = ({ id, date, description }) => {
    return (
        <div className={styles.AddTodo}>

            <input id={id} className={styles.check} type='checkbox' />
            <label htmlFor={id} >{description}</label>
            <img className={styles.imgCnt} src={RemLogo} />
            <img className={styles.imgDel} src={DelLogo} />


        </div>);
}

export default TodoItem;