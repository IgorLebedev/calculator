import React from "react";
import { buttons } from "./buttons";
import Button from "./button";

const ButtonsContainer = () => {
  return (
    <div className="container grid grid-cols-12 gap-1 px-4 py-4">
      {buttons.map((value) => <Button value={value} />)}
    </div>
  );
};

export default ButtonsContainer;
