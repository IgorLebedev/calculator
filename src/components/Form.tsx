import React, { useState } from "react";
import useStore from "../store/store";

const Input = () => {
  const input = useStore((store) => {
    if (store.operator !== null && !store.isFirstZero) {
      return store.secondOperand;
    }
    return store.firstOperand;
  });
  console.log(input)
  return (
    <div className="relative grow text-7xl bg-transparent">
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
