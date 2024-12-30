import React from "react";


const Todo = ({ todo, toggleTodo }) => { //propsで値を受け取る
    const handleTodoClick = () => {
        toggleTodo(todo.id);
    }
    return(
        <div>
            <label>
                <input 
                    type="checkbox" 
                    checked={todo.completed} 
                    readOnly
                    onChange={handleTodoClick}
                />
            </label>
            {todo.name}
        </div>
    ) //受け取った値を表示
};

export default Todo;