import Phone from "./phone";
import { useSelector } from "react-redux";

export default function ListPhone(props) {
  console.log(props);

  const listPhone = useSelector(
    (state) => state.ShoppingPhoneReducer.listPhone,
  );
  //state nay tu tab redux tren browser

  const renderListPhone = () => {
    return listPhone.map((phone) => <Phone key={phone.maSP} phone={phone} />);
  };

  return <div className="grid grid-cols-3">{renderListPhone()}</div>;
}
