import { useState } from "react";
import { useDispatch } from "react-redux";
import { onSelected } from "./slice";

export default function Seat(props) {
  const { seat } = props;
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch();

  const handleSelected = () => {
    setSelected(!selected);
    dispatch(
      onSelected({
        seat: seat,
        selected: !selected,
      }),
    );
  };
  return (
    <div>
      <button
        disabled={seat.daDat}
        onClick={handleSelected}
        className={`${seat.daDat ? "bg-red-500" : "bg-gray-500"} ${selected ? "bg-green-500" : ""} text-white px-4 py-2 rounded`}
      >
        {seat.soGhe}
      </button>
    </div>
  );
}
