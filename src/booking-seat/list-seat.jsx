import Seat from "./seat";
import { useSelector } from "react-redux";

export default function ListSeat() {
  const listSeat = useSelector((state) => state.bookingSeatSlice.listSeat);

  const renderRowFirst = (list) => {
    return list.map((seat) => {
      return (
        <span className="mx-5" key={seat.soGhe}>
          {seat.soGhe}
        </span>
      );
    });
  };
  const renderRowAToJ = (row) => {
    return (
      <div key={row.hang} className="flex">
        <span className="mx-5">{row.hang}</span>
        {row.danhSachGhe.map((seat) => {
          return <Seat key={seat.soGhe} seat={seat} />;
        })}
      </div>
    );
  };
  const renderListSeat = () => {
    return listSeat.map((row) => {
      if (row.hang === "") {
        return renderRowFirst(row.danhSachGhe);
      } else {
        return renderRowAToJ(row);
      }
    });
  };
  return <div>{renderListSeat()}</div>;
}
