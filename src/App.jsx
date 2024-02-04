import { useRef, useState } from "react";
import "./index.css";
import Item from "./ShopItem.jsx";

function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState(["example"]);

  function HandleSubmit(e) {
    e.preventDefault();
    if (text !== "") setItems(() => [...items, text]);
    setText("");
  }
  function deleteItems(e) {
    setItems(() => items.filter((x,index) => !(e.target.id == index)) // works!!
    );
  }

  return (
    <div className="bg-pink-300 flex flex-col items-center border border-stone-950 w-116 p-1">
      <h1 className=" block text-3xl p-5">Shopping List</h1>
      <form onSubmit={HandleSubmit}>
        <input
          className="  p-1 w-72 block mb-6"
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </form>
      {
      items.map((item, index) => {
        return (
          <Item
            textValue={item}
            key={crypto.randomUUID()}
            clickFunction={deleteItems}
            indexValue = {index}
          />
        );
      })}
    </div>
  );
}

export default App;
