import React, { ReactElement } from "react";
import Operands from "./Operands";
import Operators from "./Operators";
import Utilites from "./Utilities";

const ButtonsContainer = (): ReactElement => {
  return (
    <div className="container grid grid-cols-12 gap-3.5 px-4 py-4">
      <Utilites />
      <Operators />
      <Operands />
    </div>
  );
};

export default ButtonsContainer;
