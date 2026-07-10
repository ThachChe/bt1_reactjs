import Phone from "./phone";

export default function ListPhone(props) {
  console.log(props);

  const renderListPhone = () => {
    const { listPhone, onHandleDetailPhone, handleAddToCart } = props;
    return listPhone.map((phone) => (
      <Phone
        onDetailPhone={onHandleDetailPhone}
        key={phone.maSP}
        phone={phone}
        onAddToCart={handleAddToCart}
      />
    ));
  };

  return <div className="grid grid-cols-3">{renderListPhone()}</div>;
}
