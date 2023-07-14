import React, { useState } from "react";
import Input from "./components/Form";
import ButtonsContainer from "./components/buttons/ButtonsContainer";

function App() {
  const [input, setInput] = useState('0');
  return (
    <div className="m-0 flex justify-center items-center bg-neutral-950 w-screen h-screen">
      <div className="flex flex-col w-screen h-full bg-slate-950 sm:w-96 font-san-francisco">
        <Input input={input}/>
        <ButtonsContainer setInput={setInput}/>
      </div>
    </div>
  );
}

export default App;
