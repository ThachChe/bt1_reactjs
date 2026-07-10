import { useState } from "react";
import { onDeleteToCart, onHandleUpdateQty } from "./slice";
import { useSelector, useDispatch } from "react-redux";

export default function Cart(props) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { handleUpdateQty } = props;
  const listCart = useSelector((state) => state.ShoppingPhoneReducer.listCart);

  const totalQt = () => {
    //tich luy
    return listCart.reduce((total, phone) => (total += phone.soLuong), 0);
    // tra ve gia tri total
  };

  const totalPrice = () => {
    return listCart.reduce(
      (totalPrice, phone) => (totalPrice += phone.giaBan * phone.soLuong),
      0,
    );
  };

  const renderCart = () => {
    return listCart.map((phone) => {
      return (
        <tr key={phone.maSP} className="border-b">
          <td className="px-4 py-3">{phone.maSP}</td>
          <td className="px-4 py-3">{phone.tenSP}</td>
          <td className="px-4 py-3">{phone.giaBan}</td>
          <td className="px-4 py-3">
            <button
              onClick={() =>
                dispatch(onHandleUpdateQty({ maSP: phone.maSP, status: false }))
              }
            >
              -
            </button>
            {phone.soLuong}
            <button
              onClick={() =>
                dispatch(onHandleUpdateQty({ maSP: phone.maSP, status: true }))
              }
            >
              +
            </button>
          </td>
          <td className="px-4 py-3">{phone.giaBan * phone.soLuong}</td>
          <td className="px-4 py-3">
            <button
              onClick={() => dispatch(onDeleteToCart(phone.maSP))}
              type="button"
              className="text-white bg-danger box-border border border-transparent hover:bg-danger-strong focus:ring-4 focus:ring-danger-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
      {/* Button mở cart */}

      <button
        onClick={() => setOpen(true)}
        className="
      rounded-lg
      bg-blue-600
      px-5
      py-2.5
      text-white
      hover:bg-blue-700
      "
      >
        Giỏ hàng {totalQt()}
      </button>

      {open && (
        <div
          className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/50
        "
        >
          <div
            className="
          w-full
          max-w-5xl
          rounded-lg
          bg-white
          shadow-xl
          "
          >
            {/* Header */}

            <div
              className="
            flex
            justify-between
            border-b
            px-6
            py-4
            "
            >
              <h2 className="text-2xl font-semibold">Giỏ hàng</h2>

              <button
                onClick={() => setOpen(false)}
                className="
              text-2xl
              text-gray-500
              "
              >
                ×
              </button>
            </div>

            {/* Body */}

            <div className="p-6">
              <table className="w-full text-left">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-4 py-3">Mã SP</th>

                    <th className="px-4 py-3">Tên</th>

                    <th className="px-4 py-3">Giá</th>

                    <th className="px-4 py-3">Số lượng</th>

                    <th className="px-4 py-3">Thành Tiền</th>

                    <th className="px-4 py-3">Setting</th>
                  </tr>
                </thead>

                <tbody>{renderCart()}</tbody>
              </table>

              <h2 className="text-xl">Tổng tiền: {totalPrice()}</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
