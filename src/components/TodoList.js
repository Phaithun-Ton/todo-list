import TodoItem from "./TodoItem";

function Todolist({ deleteTodo, todoList, createToggleTodo }) {
  // console.log(props);
  // console.log(props.todoList);
  return (
    <div className="shadow">
      <ul className="list-group rounded-0">
        {todoList.map((el) => (
          <TodoItem
            deleteTodo={deleteTodo}
            todoItem={el}
            createToggleTodo={createToggleTodo}
            key={el.id}
          />
        ))}
      </ul>
    </div>
  );
}
export default Todolist;
