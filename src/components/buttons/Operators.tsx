import React from "react";

const Operators = () => {
  const classNames  = 'w-20 h-20 rounded-full bg-mandarin col-span-1 text-white text-4xl hover:bg-opacity-40 hover:transition-none transition duration-1000 active:translate-x-0.5 active:translate-y-0.5'
  return (
    <div className="grid grid-cols-1 gap-3.5 col-span-3 row-span-5">
      <button
        className={`${classNames}`}
      >
        ÷
      </button>
      <button
        className={`${classNames}`}
      >
        ✖
      </button>
      <button
        className={`${classNames}`}
      >
        -
      </button>
      <button
        className={`${classNames}`}
      >
        +
      </button>
      <button
        className={`${classNames}`}
      >
       =
      </button>
    </div>
  )
};

export default Operators;
