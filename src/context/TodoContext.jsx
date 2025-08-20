import React, { createContext, useReducer, useEffect } from "react";

const TodoContext = createContext();

const initialState = [];


const todoReducer = (state, action) => {
  
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Date.now(), ...action.payload }];

    default:
      return state;
  }
};


const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    todoReducer,
    initialState,
    (init) => {
      try {
        const todoformLocal = JSON.parse(localStorage.getItem("todoApp"));
        return todoformLocal
      } catch {
        return init;
      }
    }
  );

  
  useEffect(() => {
    localStorage.setItem("todoApp", JSON.stringify(state));
  }, [state]);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
