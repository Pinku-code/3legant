/**
 * Creates a custom API with retry functionality and authentication headers.
 *
 * @param {Object} args - API request arguments
 * @param {Object} api - API instance
 * @param {Object} extraOptions - Extra options for the request
 * @returns {Promise} - The result of the API request
 */

import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

import { logout } from "../slices/authSlices";

const baseQuery = async (args, api, extraOptions) => {
  const { dispatch } = api;
  const rawBaseQuery = fetchBaseQuery({
    /**
     * Base URL for the API requests
     */
    baseUrl: "https://669fd822b132e2c136ff52bd.mockapi.io/3legant/",
    /**
     * Prepares the headers for the request by adding an Authorization token if available
     *
     * @param {Object} headers - Request headers
     * @returns {Object} - Modified headers
     */
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("x-auth-token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });

  const result = await rawBaseQuery(args, api, extraOptions);

  if (result.error) {
    const { status } = result.error;
    if (status === 401 || status === 403) {
      console.error("Unauthorized access - Redirecting to login...");
      dispatch(logout());
    }
  }
  return result;
};
const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 });

export const api = createApi({
  reducerPath: "myApi",
  baseQuery: baseQueryWithRetry,
  tagTypes: ["Product", "Category", "User"],
  endpoints: () => ({}),
});
