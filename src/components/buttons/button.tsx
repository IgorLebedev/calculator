import React from "react";

const Button = ({ value }: { value: string }) => {
  let classnames = '';

  return (
    <button className="rounded-full col-span-3 bg-gray-800 w-20 h-20 text-white text-2xl px-5 py-5 hover:bg-gray-400">
      {value}
    </button>
  );
};

export default Button;
