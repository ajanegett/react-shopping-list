import {useState } from "react";
import "./index.css";
import Item from "./ShopItem.jsx";

function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState(["example"]);
  const [doneItems, setDoneItems] = useState([false])

  function HandleSubmit(e) {
    e.preventDefault();
    if (text !== "") setItems(() => [...items, text]);
    setText("");
    setDoneItems([...doneItems, false])
  }
  function DeleteItems(e) {
    setItems(() => items.filter((x,index) => !(e.target.id == index)));
    setDoneItems(() => doneItems.slice(0,-1)) // ERR // TODO
  }
  function DoubleClickHandler(e) {
    // setDoneItems(() => doneItems.map((x,index) => e.target.id == index))
    //TODO watch that react tutorial again
    setDoneItems(() => doneItems.map((x,index) => {
      console.log(e.target.id);
      if (e.target.id == index && e.target.id != "") return !x
      return x
    }))
  }

  return (
    <div  className="bg-pink-300 flex flex-col items-center border border-stone-950 w-116 p-1">
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
            clickFunction={DeleteItems}
            indexValue = {index}
            isDone = {doneItems[index]}
            onDDhandle = {DoubleClickHandler}
          />
        );
      })}
    </div>
  );
}

export default App;
