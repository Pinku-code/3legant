/**
 * Cart slice reducer
 *
 * Handles cart-related state and actions
 */

import { createSlice } from "@reduxjs/toolkit";
/**
 * Initial state of the cart
 *
 * Retrieves cart data from local storage, or initializes an empty array
 */
const initialState = {
  value: JSON.parse(localStorage.getItem("cart")) || [],
};
/**
 * Saves cart data to local storage
 *
 * @param {array} data - Cart data to be saved
 */
const saveCartData = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};
/**
 * Cart slice
 *
 * Defines the cart reducer and its actions
 */
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let index = state.value.findIndex((i) => i.id === action.payload.id);
      if (index < 0) {
        state.value = [...state.value, { ...action.payload, quantity: 1 }];
      } else {
        state.value = state.value.map((item, inx) =>
          inx === index ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    remove: (state, { payload }) => {
      state.value = state.value.filter((el) => el.id !== payload.id);
      saveCartData(state.value);
    },
    decrementCart: (state, action) => {
      let index = state.value.findIndex((i) => i.id === action.payload.id);
      state.value = state.value.map((item, inx) =>
        inx === index ? { ...item, quantity: item.quantity - 1 } : item
      );
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    deleteAllCart: (state) => {
      state.value = [];
      localStorage.removeItem("cart");
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  remove,
  decrementCart,
  deleteAllCart,
} = cartSlice.actions;
export default cartSlice.reducer;
