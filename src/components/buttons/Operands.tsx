import React from "react";

const Operands = () => {
  const classNames  = 'w-20 h-20 rounded-full bg-grey-dark col-span-1 text-white text-4xl hover:bg-opacity-40 hover:transition-none transition duration-1000 active:translate-x-0.5 active:translate-y-0.5'
  return (
    <div className="grid grid-cols-3 gap-3.5 col-span-9 row-span-4">
      <button
        className={`${classNames}`}
      >
        7
      </button>
      <button
        className={`${classNames}`}
      >
        8
      </button>
      <button
        className={`${classNames}`}
      >
        9
      </button>
      <button
        className={`${classNames}`}
      >
        4
      </button>
      <button
        className={`${classNames}`}
      >
        5
      </button>
      <button
        className={`${classNames}`}
      >
        6
      </button>
      <button
        className={`${classNames}`}
      >
        1
      </button>
      <button
        className={`${classNames}`}
      >
        2
      </button>
      <button
        className={`${classNames}`}
      >
        3
      </button>
      <button
        className={`${classNames} col-span-2 w-auto`}
      >
        0
      </button>
      <button
        className={`${classNames}`}
      >
        ,
      </button>
    </div>
  )
};

export default Operands;
