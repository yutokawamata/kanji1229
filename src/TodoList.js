//コンポーネント 分けることでチーム開発、再利用できる、設計しやすい
import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, toggleTodo }) => {
    //return <div>{props.todos}</div>;
    return todos.map((todo) => <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo}/>); //todosからmap関数でひとつづつ取り出し 更にTodoコンポーネントに渡す
};

export default TodoList;