import React, { createContext, useReducer, useEffect } from "react";
import { initialState,reducer} from "../reducers/todoReducer"

const TodoContext = createContext();


const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    reducer,
    initialState,
    (init) => {
      try {
         todoformLocal = JSON.parse(localStorage.getItem("todoApp"));
        return Array.isArray(todoformLocal) ? todoformLocal : init;
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
