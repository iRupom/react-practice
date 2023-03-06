import { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState("");
  const [warning, setWarning] = useState(null);

  const handleInput = (e) => {
    const inputValue = e.target.value;
    const warning = inputValue.includes(".js")
      ? "You need JavaScript skill to complet the following task"
      : null;
    setTodo(inputValue);
    setWarning(warning);
  };

  return (
    <div>
      <p>{todo}</p>
      <p>
        <textarea name="todo" value={todo} onChange={handleInput}></textarea>
      </p>
      <hr />
      <h2>{warning || "Good Choice !"}</h2>
    </div>
  );
}

export default Todo;
