import React from "react";
import useStore from "../store/store";

const Input = () => {
  const input = useStore((store) => {
    if (store.operator !== null && !store.isFirstZero) {
      return store.secondOperand;
    }
    return store.firstOperand;
  });
  const fontSizing = input.length > 6 ? 'text-6xl' : 'text-7xl';
  return (
    <div className={`relative grow font-thin bg-transparent ${fontSizing}`}>
      <input
        className="absolute bottom-0 bg-transparent text-white w-full h-auto pb-0 pt-10 px-8 outline-none text-right"
        type="text"
        value={input}
        disabled
      />
    </div>
  );
};

export default Input;
