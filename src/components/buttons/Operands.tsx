import React from "react";
import useStore from "../../store/store";

const operands = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', ','];

const Operands = () => {
  const add = useStore((store) => store.addSymbol);
  const classNames  = 'w-20 h-20 rounded-full bg-grey-dark col-span-1 text-slate-200 font-light text-4xl hover:bg-grey-darkHover btn-anim'
  return (
    <div className="grid grid-cols-3 gap-3.5 col-span-9 row-span-4">
      {operands.map((value) => (
        <div className={value === '0' ? "flex justify-center items-center col-span-2" : "flex justify-center items-center col-span-1"}>
        <button
          className={value === '0' ? `${classNames} w-full text-left px-8` : `${classNames}`}
          onClick={() => add(value)}
        >
          {value}
        </button>
      </div>
      ))}
    </div>
  )
};

export default Operands;
