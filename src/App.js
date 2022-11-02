import React, { useEffect, useState } from 'react';
import styles from './App.module.scss';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { data } from './db';

const p = () => new Promise(function (resolve) {
  setTimeout(() => resolve(data), 300)
})


function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    const getItems = async () => {
      const x = await p()
      setData(x)
    }
    getItems()
  }, [])
  return (
    <div className={styles.App}>
      <AddTodo />
      <TodoList/>
    </div>
  );
}

export default App;
