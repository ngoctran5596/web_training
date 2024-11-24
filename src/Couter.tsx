import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0); // Khai báo state với kiểu dữ liệu là number

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Bộ đếm: {count}</h2>
      <button onClick={increment}>Tăng</button>
      <button onClick={decrement}>Giảm</button>
    </div>
  );
};

export default Counter;
