import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./todolistSlice";

function TodoList() {
  const { todos } = useSelector((state) => state.todolistR);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = React.useState("");

  return (
    <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="text-center mb-4">Todo List</h2>

          <div className="d-flex justify-content-center mb-3">
            <input
              type="text"
              className="form-control w-50"
              placeholder="Enter new task..."
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <button
              className="btn btn-primary ms-3"
              onClick={() => dispatch(addTodo(newTodo))}
            >
              Add Todo
            </button>
          </div>

          <ul className="list-group w-75 mx-auto">
            {todos.map((todo, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <span>
                  <i className="bi bi-check2-square text-primary me-2"></i>
                  {todo}
                </span>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => dispatch(deleteTodo(todo))}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </div>
  );
}

export default TodoList;
