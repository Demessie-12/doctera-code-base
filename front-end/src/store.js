import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./hooks/CartSlice";
import userReducer from "./hooks/UserSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});

export default store;
