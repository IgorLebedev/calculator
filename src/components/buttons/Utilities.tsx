import React from "react";
import useStore from "../../store/store";

const Utilites = () => {
  const remove = useStore((store) => store.remove);
  const isFirstZero = useStore((store) => store.isFirstZero);
  const classNames  = 'w-20 h-20 rounded-full bg-grey-light col-span-1 text-black text-4xl hover:bg-opacity-40 hover:transition-none transition duration-1000 active:translate-x-0.5 active:translate-y-0.5'
  return (
    <div className="grid grid-cols-3 gap-3.5 col-span-9 row-span-1">
      <button
        className={`${classNames}`}
        onClick={remove}
      >
        {isFirstZero ? 'AC' : 'C'}
      </button>
      <button
        className={`${classNames}`}
      >
        ±
      </button>
      <button
        className={`${classNames}`}
      >
        %
      </button>
    </div>
  )
};

export default Utilites;
