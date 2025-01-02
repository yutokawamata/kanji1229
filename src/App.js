import './App.css';
import { useState, useRef } from "react";
import TodoList from './TodoList';
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([
  ]);

  const todoNameRef = useRef(); //useRefで値を取得
  
  //タスク追加
  const handleAddTod = () => {
    const name = todoNameRef.current.value;
    if(name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, {id: uuidv4(), name: name, completed: false }];//previons（前の状態）に追加していく
    });
    todoNameRef.current.value = null;
  };
  
  //チェック操作
  const toggleTodo = (id) => {
    const newTodos = [...todos]; //newTodos に新しく入れている。直接todosを触るのは好ましくない
    const todo = newTodos.find((todo) => todo.id === id); //findは探す関数で、idが一致する場合にtodo変数に入れる
    todo.completed = !todo.completed; //チェックの反転
    setTodos(newTodos); //反転させたものを更新
  }

  //削除コンポーネント
  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  }

  return (
    <div>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <input type="text" ref={todoNameRef}/>
      <button onClick={handleAddTod}>タスクを追加</button>
      <button onClick={handleClear}>完了したタスクの削除</button>
      <div>残りのタスクです:{todos.filter((todo) => !todo.completed).length}</div>
    </div>
  );
}

export default App;
