/**
 * Creates a Redux store with combined reducers and middleware.
 *
 * @returns {Store} The configured Redux store.
 */

import { api } from "./api";
import authSlice from "./slices/authSlices";
import cartSlice from "./slices/cartSlices";
import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./slices/wishlistSlices";

export const store = configureStore({
  /**
   * An object with reducers for different parts of the application.
   *
   * @property {Reducer} auth - Reducer for authentication.
   * @property {Reducer} wishlist - Reducer for wishlist.
   * @property {Reducer} cart - Reducer for cart.
   * @property {Reducer} [api.reducerPath] - Reducer for API.
   */



  /**
   * A function that returns an array of middleware.
   *
   * @param {getDefaultMiddleware} getDefaultMiddleware - A function that returns the default middleware.
   * @returns {Array<Middleware>} An array of middleware, including the API middleware.
   */
  reducer: {
    auth: authSlice,
    wishlist: wishlistSlice,
    cart: cartSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
