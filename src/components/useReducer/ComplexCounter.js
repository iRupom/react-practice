import { useReducer } from "react";

const initialState = {
  counter: 0,
  counter2: 0,
};

const reducer = (state, action) => {
  const { value } = action;
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + value };
    case "decrement":
      return { ...state, counter: state.counter - value };
    case "increment2":
      return { ...state, counter2: state.counter2 + value };
    case "decrement2":
      return { ...state, counter2: state.counter2 - value };
    default:
      return { counter: state.counter };
  }
};

export default function ComplexCounter() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>
        <div>Counter1 = {count.counter} </div>
        <button
          type="button"
          onClick={() =>
            dispatch({
              type: "increment",
              value: 1,
            })
          }
        >
          Increment by 1
        </button>
        <button
          type="button"
          onClick={() =>
            dispatch({
              type: "decrement",
              value: 1,
            })
          }
        >
          Decrement by 1
        </button>
      </div>
      <hr />
      <div>
        <div>Counter2 = {count.counter2} </div>
        <button
          type="button"
          onClick={() =>
            dispatch({
              type: "increment2",
              value: 1,
            })
          }
        >
          Increment by 1
        </button>
        <button
          type="button"
          onClick={() =>
            dispatch({
              type: "decrement2",
              value: 1,
            })
          }
        >
          Decrement by 1
        </button>
      </div>
    </div>
  );
}
