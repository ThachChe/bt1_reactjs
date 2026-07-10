import Cart from "./cart";
import { onDetail, onAddToCart } from "./slice";

import { useDispatch } from "react-redux";
export default function Phone(props) {
  console.log(props);

  const dispatch = useDispatch();
  const { phone } = props;
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
          onClick={() => dispatch(onDetail(phone))}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Xem chi tiết
        </button>

        <button
          onClick={() => dispatch(onAddToCart(phone))}
          className="bg-danger text-white px-4 py-2 rounded"
        >
          Thêm Giỏ Hàng
        </button>
      </div>
    </div>
  );
}
