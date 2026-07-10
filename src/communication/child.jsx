import { useState } from "react";

export default function ChildComponent(props) {
  console.log(props); //Object
  return (
    <div>
      <h1>ChildComponent</h1>
      <p>Username: {props.username}</p>
      <button
        onClick={() => props.onHandleResetUserName("Cybersoft")}
        className="text-white bg-danger box-border px-4 py-2"
      >
        Reset
      </button>
      <p>Age: {props.age}</p>
    </div>
  );
}
