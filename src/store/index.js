import { configureStore } from "@reduxjs/toolkit";
// import ShoppingPhoneReducer from "../shopping-phone redux/slice";
import bookingSeatSlice from "../booking-seat/slice";

const store = configureStore({
  reducer: {
    // ShoppingPhoneReducer,
    bookingSeatSlice,
  },
});

export default store;
