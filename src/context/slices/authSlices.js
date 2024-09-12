/**
 * Auth slice for managing user authentication state and token.
 *
 * @module authSlice
 */

import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
/**
 * Initial state for the auth slice.
 *
 * @typedef {Object} initialState
 * @property {string|null} token - The authentication token.
 * @property {Object|null} user - The user data.
 */
const initialState = {
  token: localStorage.getItem("x-auth-token"),
  user: localStorage.getItem("user-data"),
};
/**
 * Auth slice for managing user authentication state and token.
 *
 * @function authSlice
 * @returns {Object} The auth slice.
 */
const authSlice = createSlice({
  name: "auth",
  initialState,
  /**
   * Reducers for the auth slice.
   *
   * @typedef {Object} reducers
   */
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("x-auth-token", action.payload);
    },
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user-data", action.payload);
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem("x-auth-token");
      localStorage.removeItem("user-data");
    },
  },
});
/**
 * Exported actions for the auth slice.
 *
 * @typedef {Object} actions
 */
export const { logout, setToken, setUser } = authSlice.actions;
export default authSlice.reducer;
