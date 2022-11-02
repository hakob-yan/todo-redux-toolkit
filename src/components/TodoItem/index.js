import React, { useState, useRef, useEffect } from 'react';
import styles from './index.module.scss'
import DelLogo from '../../assets/delete.svg'
import RemLogo from '../../assets/rename.svg'
import { useDispatch } from 'react-redux';
import { remove, rename, toggleCheck } from '../../redux/tasksSlice';


const TodoItem = ({ id, description, completed }) => {
    const [toggle, setToggle] = useState(true)
    const ref = useRef(null)
    useEffect(() => {
        if (!toggle && ref) {
            ref.current.focus()
        }
    }, [toggle])

    const dispatch = useDispatch();
    const handleRemove = () => dispatch(remove({ id }));
    const handleRename = () => { ref.current.focus(); setToggle(!toggle) }
    const handleInput = (e) => dispatch(rename({ id, description: e.target.value }));
    const handleBlur = () => setToggle(!toggle);
    const handleCheck = () => dispatch(toggleCheck({ id }))
    return (
        <div className={styles.AddTodo}>
            <input id={id}
                checked={completed}
                className={styles.check}
                type='checkbox'
                onChange={handleCheck} />
            <input style={{ textDecoration: completed ? 'line-through' : 'none' }} className={styles.input}
                ref={ref}
                onBlur={handleBlur}
                disabled={toggle}
                onChange={handleInput}
                value={description} />
            <img onClick={handleRename} className={styles.imgCnt} src={RemLogo} />
            <img onClick={handleRemove} className={styles.imgDel} src={DelLogo} />


        </div>);
}

export default TodoItem;