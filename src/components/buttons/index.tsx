import React, { ReactElement } from "react";
import { buttons } from "./buttons";
import Button from "./button";

const ButtonsContainer = (): ReactElement => {
  return (
    <div className="container grid grid-cols-12 gap-3.5 px-4 py-4">
      {buttons.map((value) => <Button value={value} />)}
    </div>
  );
};

export default ButtonsContainer;
