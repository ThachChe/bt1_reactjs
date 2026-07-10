import { useState } from "react";

export default function ExampleCar() {
  const [url, setUrl] = useState("./img/red-car.jpg");

  const handelColor = (urlImg) => {
    setUrl(urlImg);
  };

  return (
    <div>
      <h1>Example Car</h1>

      <div className="grid grid-cols-2">
        <div>
          <img src={url} alt="" />
        </div>

        <div>
          <button
            onClick={() => handelColor("./img/red-car.jpg")}
            className="text-white bg-danger box-border px-4 py-2.5"
          >
            Red
          </button>

          <button
            onClick={() => handelColor("./img/black-car.jpg")}
            className="text-white bg-dark box-border px-4 py-2.5"
          >
            Black
          </button>

          <button
            onClick={() => handelColor("./img/silver-car.jpg")}
            className="text-black bg-neutral-secondary-medium box-border px-4 py-2.5"
          >
            Silver
          </button>
        </div>
      </div>
    </div>
  );
}
