import React from "react";
import Input from "./components/Form";
import ButtonsContainer from "./components/buttons";

function App() {
  return (
    <div className="m-0 flex justify-center items-center bg-neutral-950 w-screen h-screen">
      <div className="container w-screen h-auto bg-slate-600 sm:h-auto sm:w-96">
        <Input />
        <ButtonsContainer />
      </div>
    </div>
  );
}

export default App;
