import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddTodo from "./components/AddTodo";
import SearchBar from "./components/SearchBar";
import RemainingMessage from "./components/RemainingMessage";
import Todolist from "./components/TodoList";

const obj = [
  { id: uuidv4(), title: "Watching a movie", completed: false },
  { id: uuidv4(), title: "Meeting a doctor", completed: false },
  { id: uuidv4(), title: "Dinner with my family", completed: true },
];

// วิธีเพิ่ม
// const previousTodo = [a,b,c] // nextTodo = [d,a,b,c]
// const nextTodo = [d,...previousTodo]
// setTodoList(nextTodo)

function App() {
  const [todoList, setTodoList] = useState(obj);
  const [status, setStatus] = useState(0); // 0 = all , 1 = complete , 2 = uncomplete
  const createTodo = (title) => {
    const nextTodo = [
      { id: uuidv4(), title: title, completed: false },
      ...todoList,
    ];
    setTodoList(nextTodo);
  };

  const createToggleTodo = (id) => {
    const target = todoList.findIndex((obj) => obj.id === id);
    const newTodoToggle = [...todoList];
    newTodoToggle[target].completed = !newTodoToggle[target].completed;
    setTodoList(newTodoToggle);
  };

  const deleteTodo = (id) => {
    const target = todoList.findIndex((obj) => obj.id === id);
    const newTodo = [...todoList];
    newTodo.splice(target, 1);
    setTodoList(newTodo);
  };

  return (
    <div className="container">
      <div className="mt-5 mx-auto mx-xs">
        <AddTodo createTodo={createTodo} />
        <SearchBar status={status} setStatus={setStatus} />
        <RemainingMessage data={todoList} />
        <Todolist
          todoList={todoList}
          deleteTodo={deleteTodo}
          createToggleTodo={createToggleTodo}
        />
      </div>
    </div>
  );
}

export default App;
