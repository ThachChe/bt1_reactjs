import { use, useState } from "react";

import ChildComponent from "./child";

export default function Communication() {
  const [userName, setUserName] = useState("Vy");
  const [age, setAge] = useState("18");

  const handelChangeName = () => {
    setUserName("Le Vy");
  };

  // Ham nay se truyen cái rổ qua component con
  const onHandleResetUserName = (dataChild) => {
    console.log(dataChild);
    setUserName(dataChild);
  };

  return (
    <div>
      <h1>Communication</h1>
      <button
        onClick={handelChangeName}
        className="text-white bg-blue-400 box-border px-4 py-2"
      >
        Change User Name
      </button>
      <p>Username: {userName}</p>

      <p>Age: {age}</p>

      <hr />
      <ChildComponent
        username={userName}
        age={age}
        onHandleResetUserName={onHandleResetUserName}
      />
    </div>
  );
}
