import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count is : {count}</h2>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
};

export default App;
