import React from "react";
import useStore from "../../store/store";

const Utilites = () => {
  const remove = useStore((store) => store.remove);
  const firstOperand = useStore((store) => store.firstOperand);
  const classNames  = 'w-20 h-20 rounded-full bg-grey-light col-span-1 text-black text-4xl hover:bg-grey-lightHover btn-anim'
  return (
    <div className="grid grid-cols-3 gap-3.5 col-span-9 row-span-1">
      <button
        className={`${classNames}`}
        onClick={remove}
      >
        {firstOperand === '0' ? 'AC' : 'C'}
      </button>
      <button
        className={`${classNames}`}
      >
        ±
      </button>
      <button
        className={`${classNames}`}
      >
        {'\u0025'}
      </button>
    </div>
  )
};

export default Utilites;
