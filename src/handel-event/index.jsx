export default function HandelEvent() {
  const handelEventDemo = () => {
    console.log("Hello World");
  };

  const handelClickParams = (fullName) => {
    console.log(`Hello ${fullName}`);
  };
  return (
    <div>
      <h1>Handel Event</h1>
      <button className="bg-amber-500" onClick={handelEventDemo}>
        Demo CLick
      </button>
      {/* Thuc hien ham co tham so (Params) */}
      <button onClick={() => handelClickParams("Vy")}>Demo Click Params</button>
    </div>
  );
}
