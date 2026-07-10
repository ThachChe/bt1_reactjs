import Cart from "./cart";

export default function Phone(props) {
  console.log(props);
  const { phone, onDetailPhone, onAddToCart } = props;
  return (
    <div className="bg-neutral-primary-soft block max-w-sm border border-default rounded-base shadow-xs">
      <a href="#">
        <img className="rounded-t-base" src={props.phone.hinhAnh} alt="" />
      </a>
      <div className="p-6 text-center">
        <a href="#">
          <h5 className="mt-3 mb-6 text-2xl font-semibold tracking-tight text-heading">
            {props.phone.tenSP}
          </h5>
        </a>

        <button
          onClick={() => onDetailPhone(phone)}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Xem chi tiết
        </button>

        <button
          onClick={() => onAddToCart(phone)}
          className="bg-danger text-white px-4 py-2 rounded"
        >
          Thêm Giỏ Hàng
        </button>
      </div>
    </div>
  );
}
