import { useState } from "react";

const Counters = () => {
  const [count, setCount] = useState(0);

  const handleAlert = () => {
    alert("Button clicked!");
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleSubtract = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="container mt-4">
      <button className="btn btn-primary" onClick={handleAlert}>
        Click me
      </button>

      <div style={{ marginTop: "20px" }}>
        <h2>Counter: {count}</h2>

        <button className="btn btn-secondary me-2" onClick={handleIncrement}>
          Increment
        </button>

        <button className="btn btn-danger me-2" onClick={handleSubtract}>
          Subtract
        </button>

        <button className="btn btn-warning" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counters;
