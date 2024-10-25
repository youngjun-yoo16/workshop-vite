import { useState } from "react";
import Button from "../components/Button.jsx";

export default function Example() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Count: {count}</h1>
        <Button label="Increment" onClick={handleIncrement} />
      </div>
    </>
  );
}
