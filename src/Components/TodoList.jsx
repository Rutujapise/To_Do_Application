import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const ToDoList = () => {
  const { state, dispatch } = useContext(TodoContext);
  const todos = state.todos;

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all"); // all | completed | incomplete
  const [expanded, setExpanded] = useState({}); // track expanded tasks

  // filter + search combined
  const filteredTodos = todos.filter((todo) => {
    const matchesSearch =
      todo.name.toLowerCase().includes(search.toLowerCase()) ||
      todo.description.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "all"
        ? true
        : filter === "completed"
        ? todo.completed
        : !todo.completed;

    return matchesSearch && matchesFilter;
  });

  // toggle read more/less
  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Search + Dropdown in Flex */}
      <div className="d-flex align-items-center gap-2 mb-3">
        <input
          type="text"
          placeholder="Search Task..."
          onChange={(e) => setSearch(e.target.value)}
          className="form-control"
        />

        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {filter === "all"
              ? "All Tasks"
              : filter === "completed"
              ? "Completed"
              : "Incomplete"}
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <button
                className="dropdown-item"
                onClick={() => setFilter("all")}
              >
                All Tasks
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => setFilter("completed")}
              >
                Completed
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => setFilter("incomplete")}
              >
                Incomplete
              </button>
            </li>
          </ul>
        </div>
      </div>

      <h2>All Tasks</h2>

      {filteredTodos.length === 0 ? (
        <p>No tasks yet!</p>
      ) : (
        <div className="row">
          {filteredTodos.map((todo) => {
            const isExpanded = expanded[todo.id];
            const shortDesc =
              todo.description.length > 50
                ? todo.description.slice(0, 50) + "..."
                : todo.description;

            return (
              <div key={todo.id} className="col-sm-12 col-md-6 col-lg-3 mb-3">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">
                      <strong>{todo.name}</strong>
                    </h5>

                    <p className="card-text">
                      {isExpanded ? todo.description : shortDesc}
                    </p>

                    {todo.description.length > 50 && (
                      <button
                        className="btn btn-link p-0"
                        onClick={() => toggleExpand(todo.id)}
                      >
                        {isExpanded ? "Read Less" : "Read More"}
                      </button>
                    )}

                    <span className="d-block mt-2">
                      {todo.completed ? "✅ Completed" : "❌ Pending"}
                    </span>

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
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ToDoList;
