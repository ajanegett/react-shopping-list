import { useState } from "react";
import "./index.css";
import Item from "./ShopItem.jsx";

function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState(["example"]);

  function HandleSubmit(e) {
    // the main code will go below...
    e.preventDefault();
    if (text !== "") setItems(() => [...items, text]);
    setText("");
  }
  function deleteItems(e) {
    console.log(e.target.id);
    let count = 0;
    setItems(
      items
        .reverse()
        .filter((x) => {
          if (x !== e.target.id) return true;
          let myBool = count === 0 ? false : true;
          count += 1;
          return myBool;
        })
        .reverse()
    );
  }

  return (
    <div
      className="bg-pink-300 flex flex-col items-center border border-stone-950 w-116 p-1"
      key={"div"}
    >
      <h1 className=" block text-3xl p-5">Shopping List</h1>
      <form onSubmit={HandleSubmit}>
        <input
          className="  p-1 w-72 block mb-6"
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </form>
      {items.map((item) => {
        return (
          <Item
            textValue={item}
            key={crypto.randomUUID()}
            clickFunction={deleteItems}
          />
        );
      })}
    </div>
  );
}

export default App;
