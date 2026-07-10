import React from "react";

export default function Glasses(props) {
  console.log(props);
  return (
    <img
      src={props.objectGlass.url}
      alt={props.objectGlass.name}
      onClick={() => props.onHandleChangeColor(props.objectGlass.url)}
      className="h-14 cursor-pointer border border-gray-300 p-1"
    />
  );
}
