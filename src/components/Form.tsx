import React, { useState } from "react";
import useStore from "../store/store";

const Input = () => {
  const input = useStore((store) => {
    if (store.operator !== null) {
      return store.secondOperand.join('');
    }
    return store.firstOperand.join('');
  });
  console.log(input)
  return (
    <div className="relative grow text-7xl bg-slate-950">
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
