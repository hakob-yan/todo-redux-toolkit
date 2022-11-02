import React, { useState } from 'react';
import styles from './index.module.scss'
import DelLogo from '../../assets/delete.svg'
import RemLogo from '../../assets/rename.svg'
import { useDispatch } from 'react-redux';
import { remove, rename } from '../../redux/tasksSlice';


const TodoItem = ({ id, description }) => {
    const dispatch = useDispatch();
    const [toggle, setToggle] = useState(true)
    const handleRemove = () => {
        dispatch(remove({ id }))
    }
    const handleRename = () => {
        setToggle(!toggle)
    }
    const handleInput = (e) => {
        dispatch(rename({id, description: e.target.value }))
    }
    return (
        <div className={styles.AddTodo}>

            <input id={id} className={styles.check} type='checkbox' />
            <input className={styles.input}
                disabled={toggle}
                onChange={handleInput}
                value={description} />
            <img onClick={handleRename} className={styles.imgCnt} src={RemLogo} />
            <img onClick={handleRemove} className={styles.imgDel} src={DelLogo} />


        </div>);
}

export default TodoItem;