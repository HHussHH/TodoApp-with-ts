import React, { useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  return (
    <div className="App">
      <TodoItem
        id="1"
        completed={false}
        title="first Todo"
        style={{ border: "1px solid white" }}
      />
    </div>
  );
}

export default App;
