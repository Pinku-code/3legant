/**
 * Creates a Redux slice for managing a wishlist.
 *
 * The wishlist is stored in local storage and initialized with the contents of
 * `localStorage.getItem("wishlist")`. If no wishlist is found in local storage,
 * an empty array is used as the initial state.
 *
 * @module wishlistSlice
 */

import { createSlice } from "@reduxjs/toolkit";
/**
 * Initial state of the wishlist.
 *
 * @type {object}
 * @property {array} value - The wishlist items, initialized from local storage.
 */
const initialState = {
  value: JSON.parse(localStorage.getItem("wishlist")) || [],
};
/**
 * Creates a Redux slice for managing the wishlist.
 *
 * @type {object}
 * @property {string} name - The name of the slice, "heart".
 * @property {object} initialState - The initial state of the slice.
 * @property {object} reducers - An object containing the reducers for the slice.
 */

const wishlistSlice = createSlice({
  name: "heart",
  initialState,
  reducers: {
    /**
     * Toggles an item in the wishlist.
     *
     * If the item is not in the wishlist, it is added. If it is already in the
     * wishlist, it is removed.
     *
     * @param {object} state - The current state of the slice.
     * @param {object} action - The action payload, containing the item to toggle.
     * @param {number} action.payload.id - The ID of the item to toggle.
     */
    toggleHeart: (state, action) => {
      let index = state.value.findIndex((i) => i.id === action.payload.id);
      if (index < 0) {
        state.value = [...state.value, action.payload];
      } else {
        state.value = state.value.filter((i) => i.id !== action.payload.id);
      }
      localStorage.setItem("wishlist", JSON.stringify(state.value));
    },
  },
});
/**
 * Exports the `toggleHeart` action creator.
 *
 * @type {function}
 */

export const { toggleHeart } = wishlistSlice.actions;
export default wishlistSlice.reducer;
