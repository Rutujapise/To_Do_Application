import React, { useContext, useState } from "react";
import{ TodoContext}from "../context/TodoContext"; 
import { useNavigate } from "react-router-dom";

const TodoForm = () => {
  const { dispatch } = useContext(TodoContext);
  const navigate = useNavigate(); 

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let payload = { name, description };

    dispatch({ type: "ADD_TODO", payload });
    navigate("/");
  }

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">Create New Task</h3>
      <form
        onSubmit={handleSubmit}
        className="card p-4 shadow-sm rounded bg-light"
      >
        <div className="mb-3">
          <label className="form-label">Task Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter task name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            placeholder="Enter task description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
