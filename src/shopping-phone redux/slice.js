import { act } from "react";
import Data from "./data.json";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  listPhone: Data,
  selectedPhone: Data[0],
  listCart: [],
};

const _findIndexPhone = (listCart, maSP) => {
  return listCart.findIndex((phone) => phone.maSP === maSP);
};

const shoppingPhoneSlice = createSlice({
  name: "shoppingPhoneSlice",
  initialState,
  reducers: {
    onDetail: (state, action) => {
      console.log(action);
      // lấy payload từ action
      const { payload } = action;
      //cap nhat lai state
      state.selectedPhone = payload;
    },

    onAddToCart: (state, action) => {
      console.log(action);

      const { payload } = action;

      const phoneToCart = {
        maSP: payload.maSP,
        tenSP: payload.tenSP,
        giaBan: payload.giaBan,
        hinhAnh: payload.hinhAnh,
        soLuong: 1,
      };

      let cloneListCart = [...state.listCart];

      const index = _findIndexPhone(cloneListCart, phoneToCart.maSP);

      if (index !== -1) {
        cloneListCart[index].soLuong += 1;
      } else {
        cloneListCart.push(phoneToCart);
      }

      state.listCart = cloneListCart;
    },

    onDeleteToCart: (state, action) => {
      console.log(action);

      const { payload } = action;

      const index = _findIndexPhone(state.listCart, payload);
      let cloneListCart = [...state.listCart];
      cloneListCart.splice(index, 1);

      state.listCart = cloneListCart;
    },

    onHandleUpdateQty: (state, action) => {
      const { payload } = action;
      const { maSP, status } = payload;

      const index = _findIndexPhone(state.listCart, maSP);

      if (index != -1) {
        const cloneCart = [...state.listCart];

        if (status) {
          cloneCart[index].soLuong += 1;
        } else {
          if (cloneCart[index].soLuong > 1) {
            cloneCart[index].soLuong -= 1;
          } else {
            cloneCart.splice(index, 1);
          }
        }

        state.listCart = cloneCart;
      }
    },
  },
});

export const { onDetail, onAddToCart, onDeleteToCart, onHandleUpdateQty } =
  shoppingPhoneSlice.actions;
export default shoppingPhoneSlice.reducer;
