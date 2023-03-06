import { useEffect, useState } from "react";

export default function MyComponent() {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());

  const addClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    console.log("Updating document title");
    document.title = `Clicked ${count} times`;
  }, [count]);

  useEffect(() => {
    console.log("starting timer");
    const interval = setInterval(tick, 1000);

    // do the cleanup - stop the time
    return () => {
      console.log("Component Unmounted");
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p>Time: {date.toLocaleTimeString()}</p>
      <p>
        <button type="button" onClick={addClick}>
          Add 1
        </button>
      </p>
    </div>
  );
}
