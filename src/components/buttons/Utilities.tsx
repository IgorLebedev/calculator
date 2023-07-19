import React from "react";
import useStore from "../../store/store";

const Utilites = () => {
  const remove = useStore((store) => store.remove);
  const minus = useStore((store) => store.minus);
  const firstOperand = useStore((store) => store.firstOperand);
  const operator = useStore((store) => store.operator);
  const isAC = (firstOperand === '0' || firstOperand === '−') && !operator
  const classNames  = 'w-20 h-20 rounded-full bg-grey-light col-span-1 font-medium text-3xl hover:bg-grey-lightHover btn-anim'
  return (
    <div className="grid grid-cols-3 gap-3.5 col-span-9 row-span-1">
      <button
        className={`${classNames}`}
        onClick={remove}
      >
        {isAC ? 'AC' : 'C'}
      </button>
      <button
        className={`${classNames}`}
        onClick={minus}
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
