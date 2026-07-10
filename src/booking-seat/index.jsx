import ListSeat from "./list-seat";
import Cart from "./cart";

export default function BookingSeat() {
  return (
    <div>
      <h1>Booking Seat</h1>
      <div className="container gap-2 grid grid-cols-2">
        <ListSeat />
        <Cart />
      </div>
    </div>
  );
}
