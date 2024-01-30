import { useState } from "react";
import "./index.css";

function App() {
  const [text, setText] = useState("");
  function HandleSubmit(e) { // the main code will go below...
    e.preventDefault()
  }

  return (
    <div className="bg-pink-300 flex flex-col items-center border border-stone-950 w-116 p-1">
      <h1 className=" block text-3xl p-5">Shopping List</h1>
      <form onSubmit={HandleSubmit}>
        <input
          className=" shadow-lg p-1 w-72 block"
          type="text"
          onChange={e => setText(e.target.value)}
          value={text}
        />
      </form>
    </div>
  );
}

export default App;
