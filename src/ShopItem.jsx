import "boxicons";

export default function Item({ textValue, clickFunction, indexValue, isDone, onDDhandle}) {
  return (
    <div id={indexValue} onDoubleClick={onDDhandle} className={`flex w-96 justify-between text-lg font-mono items-center my-3 ${isDone && " animated-strike"}`}>
      <p id={indexValue} className="cursor-default" >{textValue}</p>
      <div
        className="flex justify-center items-center cursor-pointer"
        onClick={clickFunction}
      >
        <box-icon className={"trytry"} id={indexValue} name="x"></box-icon>
      </div>
    </div>
  );
}
