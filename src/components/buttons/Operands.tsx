import React from "react";
import useStore from "../../store/store";

const Operands = () => {
  const add = useStore((store) => store.addSymbol);
  const classNames  = 'w-20 h-20 rounded-full bg-grey-dark col-span-1 text-white text-4xl hover:bg-opacity-40 hover:transition-none transition duration-1000 active:translate-x-0.5 active:translate-y-0.5'
  return (
    <div className="grid grid-cols-3 gap-3.5 col-span-9 row-span-4">
      <button
        className={`${classNames}`}
        onClick={() => add('7')}
      >
        7
      </button>
      <button
        className={`${classNames}`}
        onClick={() => add('8')}
      >
        8
      </button>
      <button
        className={`${classNames}`}
        onClick={() => add('9')}
      >
        9
      </button>
      <button
        className={`${classNames}`}
        onClick={() => add('4')}
      >
        4
      </button>
      <button
        className={`${classNames}`}
        onClick={() => add('5')}
      >
        5
      </button>
      <button
        className={`${classNames}`}
        onClick={() => add('6')}
      >
        6
      </button>
      <button
        className={`${classNames}`}
        onClick={() => add('1')}
      >
        1
      </button>
      <button
        className={`${classNames}`}
        onClick={() => add('2')}
      >
        2
      </button>
      <button
        className={`${classNames}`}
        onClick={() => add('3')}
      >
        3
      </button>
      <button
        className={`${classNames} col-span-2 w-auto text-left px-8`}
        onClick={() => add('0')}
      >
        0
      </button>
      <button
        className={`${classNames}`}
        onClick={() => add(',')}
      >
        ,
      </button>
    </div>
  )
};

export default Operands;
