import { useState } from "react";
import EditTodo from "./EditTodo";

function TodoItem(props) {
  console.log(props.todoItem);
  const { id, title, completed } = props.todoItem;
  console.log(id);

  const handleClickToggle = () => {
    props.createToggleTodo(id);
    // console.log(id);
    // () => props.createTodo(id)
  };

  const handleClickDelete = () => {
    props.deleteTodo(id);
  };

  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center py-3 bd-callout bd-callout-${
        props.todoItem.completed ? "success" : "warning"
      }`}
    >
      {/* <EditTodo /> */}
      <span>{title}</span>
      <div className="btn-group">
        <button onClick={handleClickToggle} className="btn btn-info rounded-0">
          <i className={`fas fa-toggle-${completed ? "on" : "off"}`} />
        </button>
        <button
          onClick={handleClickDelete}
          className="btn btn-danger rounded-0"
        >
          <i className="far fa-trash-alt" />
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
