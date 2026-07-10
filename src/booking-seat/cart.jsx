import { useSelector } from "react-redux";
export default function Cart() {
  const listCart = useSelector((state) => state.bookingSeatSlice.listCart);
  const renderListSeatSelected = () => {
    return listCart.map((seat) => {
      return (
        <li>
          Ghe:${seat.soGhe} - Gia tien: ${seat.gia}
          <button className="mx-5">X</button>
        </li>
      );
    });
  };

  const calcTotalPrice = () => {
    return listCart.reduce((total, seat) => {
      return (total += seat.gia);
    }, 0);
  };
  return (
    <div>
      <h1>Cart</h1>
      <ul>{renderListSeatSelected()}</ul>
      <p>Tong tien: {calcTotalPrice()}</p>
    </div>
  );
}
