import { createContext, useState } from "react";

export const TodoContext = createContext({
  items: [],
  addTodo: () => {},
  removeTodo: (id) => {},
});

export const TodoContextProvider = ({ props }) => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (todoText) => {
    const newTodo = todoText;

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodoContext.Provider value={contextValue}>{props}</TodoContext.Provider>
  );
};
