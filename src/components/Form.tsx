import React from "react";
import useStore from "../store/store";
import addSpaces from "../utils/addSpaces";

const Input = () => {
  const rawInput = useStore((store) => {
    if (store.operator !== null && !store.isFirstZero) {
      return store.secondOperand;
    }
    return store.firstOperand;
  });
  const fixedInput = addSpaces(rawInput);
  const fontSizing = rawInput.length > 6 ? 'text-6xl' : 'text-7xl';
  return (
    <div className={`relative grow font-thin bg-transparent ${fontSizing}`}>
      <input
        className="absolute bottom-0 bg-transparent text-white w-full h-auto pb-0 pt-10 px-8 outline-none text-right"
        type="text"
        value={fixedInput}
        disabled
      />
    </div>
  );
};

export default Input;
