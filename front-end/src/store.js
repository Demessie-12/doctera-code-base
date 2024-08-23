import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./hooks/CartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
