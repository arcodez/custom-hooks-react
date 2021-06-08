import "./styles.css";
import React from "react";
import CounterApp from "./CounterApp";
import TodoApp from "./TodoApp";
import MouseApp from "./MouseApp";
import { LocalStorageForm } from "./LocalStorageForm";

export default function App() {
  return (
    <div className="App">
      <h2>My App!</h2>
      {/* <CounterApp /> */}
      {/* <TodoApp /> */}
      {/*<MouseApp /> */}
      <LocalStorageForm />
    </div>
  );
}
