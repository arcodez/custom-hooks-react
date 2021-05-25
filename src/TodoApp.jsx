import React, { useState } from "react";
import useTodos from "./hooks/useTodos";

const initialTodos = [
  {
    id: 1,
    title: "Learn React"
  },
  {
    id: 2,
    title: "Learn Node"
  }
];

function TodoApp() {
  const [todos, addTodo, deleteTodo] = useTodos(initialTodos);
  return (
    <>
      <button onClick={() => addTodo({ title: "Nueva Tarea" })}>
        Add Todo
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoApp;
