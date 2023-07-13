import React from "react";

const Input = () => {
  return (
    <div className="relative grow text-6xl bg-slate-950">
      <input className="absolute bottom-0 bg-transparent text-white w-full h-auto pb-0 pt-10 px-8 outline-none text-right" type="text" />
    </div>
  );
};

export default Input;
