import "boxicons";

export default function Item({ textValue, clickFunction, indexValue }) {
  return (
    <div className="flex w-96 justify-between text-lg font-mono items-center my-3">
      <p className="cursor-default">{textValue}</p>
      <div
        className="flex justify-center items-center cursor-pointer"
        onClick={clickFunction}
      >
        <box-icon id={indexValue} name="x"></box-icon>
      </div>
    </div>
  );
}
