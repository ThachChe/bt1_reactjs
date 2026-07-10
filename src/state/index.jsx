import { useState } from "react";

export default function State() {
  //count co gia tri mac dinh la 0; setCount la ham de cap nhat lai gia tri moi cho count
  const [count, setCount] = useState(0);
  console.log("State Component");

  const handelIncrement = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>State</h1>
      <p>Number: {count}</p>
      <button type="button" onClick={handelIncrement}>
        Increment
      </button>
    </div>
  );
}
