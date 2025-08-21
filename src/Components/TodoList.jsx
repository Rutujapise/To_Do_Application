import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const ToDoList = () => {
  const { state, dispatch } = useContext(TodoContext);
  const todos = state.todos;

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Tasks</h2>

      {todos.length === 0 ? (
        <p>No tasks yet!</p>
      ) : (
        <div className="row">
          {todos.map((todo) => (
            <div key={todo.id} className="col-sm-12 col-md-6 col-lg-3 mb-3">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">
                    <strong>{todo.name}</strong>
                  </h5>
                  <p className="card-text">{todo.description}</p>
                  <span>{todo.completed ? "✅ Completed" : "❌ Pending"}</span>
                  <div className="mt-2">
                    <button
                      onClick={() =>
                        dispatch({ type: "TOGGLE_TODO", payload: todo.id })
                      }
                      className="btn btn-warning btn-sm me-2"
                    >
                      Toggle
                    </button>
                    <button
                      onClick={() =>
                        dispatch({ type: "DELETE_TODO", payload: todo.id })
                      }
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ToDoList;
