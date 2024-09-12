import { api } from "./index";
/**
 * Product API endpoints
 *
 * This API provides endpoints for managing products.
 */
export const productApi = api.injectEndpoints({
  /**
   * Endpoints
   */
  endpoints: (build) => ({
    /**
     * Get all products
     *
     * @param {Object} params - Query parameters
     * @returns {Promise} - Promise resolving to an array of products
     *
     * Example:
     * ```
     * const { data, error, isLoading } = useGetProductsQuery({ limit: 10 });
     * ```
     */
    getProducts: build.query({
      query: (params) => ({
        url: "/products",
        params,
      }),
      providesTags: ["Product"],
    }),
     /**
     * Get a product by ID
     *
     * @param {number} id - Product ID
     * @returns {Promise} - Promise resolving to a product object
     *
     * Example:
     * ```
     * const { data, error, isLoading } = useGetProductByIdQuery(1);
     * ```
     */
    getProductById: build.query({
      query: (id) => ({
        url: `/products/${id}`,
      }),
      providesTags: ["Product"],
    }),
    createProduct: build.mutation({
      query: (body) => ({
        url: "/products",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Product"],
    }),
    deleteProduct: build.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
    updateProduct: build.mutation({
      query: ({ id, body }) => ({
        url: `/products/${id}`,
        method: "PUT", // or "PATCH"
        body,
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = productApi;
