import ListPhone from "./list-phone";
import Detail from "./detail";
import Data from "./data.json";
import { useState } from "react";
import Cart from "./cart";

export default function ShoppingPhone() {
  const [listPhone, setData] = useState(Data);
  const [selectedPhone, setSelectedPhone] = useState(Data[0]);
  const [listCart, setListCart] = useState([]);

  const onHandleDetailPhone = (phone) => {
    console.log(phone);
    setSelectedPhone(phone);
  };

  const _findIndexPhone = (maSP) => {
    return listCart.findIndex((phone) => phone.maSP === maSP);
  };

  const handleAddToCart = (phone) => {
    const phoneToCart = {
      maSP: phone.maSP,
      tenSP: phone.tenSP,
      giaBan: phone.giaBan,
      hinhAnh: phone.hinhAnh,
      soLuong: 1,
    };
    // console.log(phoneToCart);

    /**
     * Clone list cart tu ban sao
     */

    let cloneListCart = [...listCart];

    const index = _findIndexPhone(phoneToCart.maSP);

    if (index !== -1) {
      cloneListCart[index].soLuong += 1;
    } else {
      cloneListCart.push(phoneToCart);
    }

    setListCart(cloneListCart);
  };

  console.log("Index jsx");
  console.log(listCart);

  const handleDeleteToCart = (maSP) => {
    console.log(maSP);
    const index = _findIndexPhone(maSP);
    let cloneListCart = [...listCart];
    cloneListCart.splice(index, 1);

    setListCart(cloneListCart);
  };

  const handleUpdateQty = (maSP, status) => {
    console.log(maSP, status);

    const index = _findIndexPhone(maSP);

    if (index != -1) {
      const cloneCart = [...listCart];

      if (status) {
        cloneCart[index].soLuong += 1;
      } else {
        if (cloneCart[index].soLuong > 1) {
          cloneCart[index].soLuong -= 1;
        } else {
          cloneCart.splice(index, 1);
        }
      }

      setListCart(cloneCart);
    }
  };

  return (
    <div>
      <h1>* ShoppingPhone</h1>

      <Cart
        listCart={listCart}
        onDeleteToCart={handleDeleteToCart}
        handleUpdateQty={handleUpdateQty}
      />

      <ListPhone
        listPhone={listPhone}
        onHandleDetailPhone={onHandleDetailPhone}
        handleAddToCart={handleAddToCart}
      />
      <Detail selectedPhone={selectedPhone} />
    </div>
  );
}
