import { useState, useEffect, useRef } from "react";

import { ITodo } from "../types/data";
import { TodoList } from "./TodoList";

const App: React.FC = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const AddTodo = () => {
    if (value) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: value,
          complete: false,
        },
      ]);
      setValue("");
    }
  };

  return (
    <div>
      <div>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={AddTodo}>Add</button>
      </div>
      <TodoList items={todos} />
    </div>
  );
};

export { App };
