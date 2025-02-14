import "./App.css";
import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToDo, removeToDo, toggleToDo } from "./redux/toDoSlice";

function App() {
  const [task, setTask] = useState("");
  const todos = useSelector((state) => state.todos.tasks);
  const dispatch = useDispatch();

  const handleAddToDo = () => {
    if (task.trim() === "") return;
    const newToDo = { id: new Date().getTime(), text: task, completed: false };
    dispatch(addToDo(newToDo));
    setTask("");
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(todos));
    console.log(todos);
  }, [todos]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>
        <div className="flex mb-4">
          <input
            value={task}
            type="text"
            className="flex-grow p-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Add a new task"
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            onClick={handleAddToDo}
          >
            Add
          </button>
        </div>
        <ul className="list-none">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between p-2 border-b border-gray-200 hover:bg-gray-50"
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={todo.completed}
                  onChange={() => dispatch(toggleToDo(todo.id))}
                />
                <span className={todo.completed ? "line-through" : ""}>
                  {todo.text}
                </span>
              </div>
              <button
                className="text-red-500 hover:text-red-700 focus:outline-none"
                onClick={() => dispatch(removeToDo(todo.id))}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
