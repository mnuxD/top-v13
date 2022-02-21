import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import productReducer from "../slices/productSlices";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productReducer,
  },
});
