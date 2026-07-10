import { createSlice } from "@reduxjs/toolkit";
import data from "./data.json";

const initialState = {
  listSeat: data,
  listCart: [],
};

const _findIndexSeat = (list, soGhe) => {
  return list.findIndex((seat) => seat.soGhe === soGhe);
};

const bookingSeatSlice = createSlice({
  name: "bookingSeatSlice",
  initialState,
  reducers: {
    onSelected: (state, action) => {
      console.log(state);
      const { payload } = action;
      const { seat, selected } = payload;
      const cloneListCart = [...state.listCart];
      const index = _findIndexSeat(cloneListCart, seat.soGhe);

      if (index != -1) {
        cloneListCart.splice(index, 1);
      } else {
        cloneListCart.push(seat);
      }

      state.listCart = cloneListCart;
    },
  },
});

export default bookingSeatSlice.reducer;
export const { onSelected } = bookingSeatSlice.actions;
