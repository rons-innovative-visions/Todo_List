import { useEffect, useState } from "react";
import Todo from "./Todo";

const TodoList = () => {
    const [todoInput, setTodoInput] = useState("");
    const [todoList, setTodoList] = useState({incomplete: [], complete: []});

    useEffect(() => {
        if(!localStorage.getItem("todos")) return
        setTodoList({incomplete: JSON.parse(localStorage.getItem("todos")), complete: []})
    }, [])

    const addTodo = () => {
        if(todoInput.length === 0) return
        todoList.incomplete.push(todoInput);
        localStorage.setItem("todos", JSON.stringify(todoList.incomplete))
        setTodoInput("");
    }

    return <div className="todo-list container position-absolute top-50 start-50 translate-middle text-center rounded">
        <div className="todo-content">
        <h1 className="display-4 fw-normal mt-2">Todo List</h1>
        <div className="todos">
            {todoList.complete.map((todo, index) => <Todo todo={todo} todoList={todoList} setTodoList={setTodoList} isDone={true} key={index}/>)}
            {todoList.incomplete.map((todo, index) => <Todo todo={todo} todoList={todoList} setTodoList={setTodoList} isDone={false} key={index}/>)}
        </div>
        </div>
        <div className="add-note">
            <input type="text" className="form-control" value={todoInput} onChange={(e) => setTodoInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && addTodo()} placeholder="add note..."/>
            <button className="btn btn-primary" value={todoInput} onClick={addTodo}>+</button>
        </div>
    </div>
}

export default TodoList;