import React from "react";
import Input from "./components/Form";
import ButtonsContainer from "./components/buttons/ButtonsContainer";

function App() {
  return (
    <div className="m-0 flex justify-center items-center bg-neutral-950 w-screen h-screen">
      <div className="flex flex-col w-screen h-full bg-black sm:w-96 font-san-francisco">
        <Input />
        <ButtonsContainer/>
      </div>
    </div>
  );
}

export default App;
