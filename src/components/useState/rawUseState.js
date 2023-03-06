import React from "react";
import ReactDOM from "react-dom/client";

let states = [];
let stateIndex = -1;

function useState(defaultValue) {
  const index = ++stateIndex;

  if (states[index]) return states[index];

  const setValue = (newValue) => {
    states[index][0] = newValue;

    renderWithRakib();
  };

  const returnArray = [defaultValue, setValue];
  states[index] = returnArray;
  return returnArray;
}

function App() {
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

const root = ReactDOM.createRoot(document.getElementById("root"));

function renderWithRakib() {
  console.log("I am changing every time");
  stateIndex = -1;
  root.render(<App />);
}

renderWithRakib();
