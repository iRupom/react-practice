import { useContext } from "react";
import { counterContext } from "../../App";

export default function ComponentB() {
  const countContext = useContext(counterContext);

  const { countDispatch: dispatch } = countContext;

  return (
    <div>
      <button type="button" onClick={() => dispatch("increment")}>
        Increment By 1
      </button>
      <button type="button" onClick={() => dispatch("decrement")}>
        Decrement By 1
      </button>
    </div>
  );
}
