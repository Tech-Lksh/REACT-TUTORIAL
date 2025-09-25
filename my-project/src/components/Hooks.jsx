import React, { useState } from "react";

const Hooks = () => {
  const [number, setNumber] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center gap-10 text-center">
      <h1 className="p-3 text-3xl font-bold bg-emerald-300 rounded-2xl">
        Enter No. Value :{" "}
        <span
          className={`${number === 0 ? "text-red-500" : "text-black-500"}`}
        >
          {number}
        </span>
      </h1>
      <button
        className="p-3 bg-black text-3xl text-white font-bold rounded-2xl shadow-2l"
        onClick={() => setNumber(number + 1)}
      >
        ++
        
      </button>
      <button
        className="p-3 bg-blue-300 text-3xl text-white font-bold rounded-2xl shadow-2xl"
        onClick={() => {
          if (number > 0) {
            setNumber(number - 1);
          }
        }}
      >
        --
      </button>
      <button
        className="p-3 bg-blue-300 text-3xl text-white font-bold rounded-2xl shadow-2xl"
        onClick={() => setNumber(0)}
      >
        Reset
      </button>
    </div>
  );
};

export default Hooks;