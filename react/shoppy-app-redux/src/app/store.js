import { configureStore } from '@reduxjs/toolkit';
// import counterSlice from '../feature/counter/counterSlice.js';
import cartSlice from '../feature/cart/cartSlice.js';

//"counter": counterSlice에서 "counter"는 counterSlice.js의 name과 같게 한다.
export const store = configureStore({
  reducer: {
    // "counter": counterSlice
    "cart": cartSlice
  },
})