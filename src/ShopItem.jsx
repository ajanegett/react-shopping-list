import "boxicons";

export default function Item({
  textValue,
  clickFunction,
  indexValue,
  isDone,
  onDDhandle,
}) {
  return (
    <div
      id={indexValue}
      onDoubleClick={onDDhandle}
      className={`prevent-select flex w-96 justify-between text-lg font-mono items-center my-3 ${
        isDone && " animated-strike"
      }`}
    >
      <p id={indexValue} className="cursor-default">
        {textValue}
      </p>
      <div
        className="flex justify-center items-center cursor-pointer"
        onClick={clickFunction}
      >
        <box-icon color="red" id={indexValue} name="x"></box-icon>
      </div>
    </div>
  );
}
