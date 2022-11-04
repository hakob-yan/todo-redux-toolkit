import React, { useEffect, useState } from 'react';
import styles from './App.module.scss';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { data } from './db';
import { fetchTodos } from './redux/tasksSlice'
import { useDispatch } from 'react-redux'


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos())
  }, [])
  return (
    <div className={styles.App}>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
