const Todo = (props) => {
    const {todo, todoList, setTodoList, isDone} = props;

    const doneTodo = () => {
        const newList = {incomplete: todoList.incomplete.filter((currentTodo) => currentTodo !== todo), complete: [...todoList.complete, todo]}
        setTodoList(newList)
        localStorage.setItem("todos", JSON.stringify(newList.incomplete))
    }

    return <div className="todo">
        <h2 className={"text-start ps-2 fs-1 " + (isDone===true ? "done" : "")} onClick={doneTodo}>{todo}</h2>
    </div>
}

export default Todo;