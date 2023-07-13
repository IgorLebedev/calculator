import React, { ReactElement } from "react";
import getClassNames from "../../utils/getClassNames";

const Button = ({ value }: { value: string }): ReactElement => {
  const classnames = getClassNames(value);
  return (
    <button className={`rounded-full text-white text-4xl px-5 py-5 hover:bg-opacity-40 hover:transition-none transition duration-1000 active:translate-x-1 active:translate-y-1   ${classnames}`}>
      {value}
    </button>
  );
};

export default Button;
