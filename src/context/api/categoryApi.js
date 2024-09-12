import { api } from "./index";
/**
 * Product API endpoints
 *
 * This API provides CRUD operations for categories
 */
export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    /**
     * Get a list of categories
     *
     * @param {Object} params - Query parameters
     * @returns {Promise} A promise that resolves to a list of categories
     * @example
     * const { data, error, isLoading } = useGetCategoryQuery({ limit: 10 });
     */
    getCategory: build.query({
      query: (params) => ({
        url: "/categories",
        params,
      }),
      providesTags: ["Category"],
      /**
     * Create a new category
     *
     * @param {Object} body - Category data
     * @returns {Promise} A promise that resolves to the created category
     * @example
     * const { data, error, isLoading } = useCreateCategoryMutation({ name: 'New Category' });
     */
    }),

    createCategory: build.mutation({
      query: (body) => ({
        url: "/categories",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Category"],
    }),
    /**
     * Update an existing category
     *
     * @param {Number} id - Category ID
     * @param {Object} body - Category data
     * @returns {Promise} A promise that resolves to the updated category
     * @example
     * const { data, error, isLoading } = useUpdateCategoryMutation({ id: 1, name: 'Updated Category' });
     */
    updateCategory: build.mutation({
      query: ({ id, body }) => ({
        url: `/categories/${id}`,
        method: "PUT", // or "PATCH"
        body,
      }),
      invalidatesTags: ["Category"],
    }),
    deleteCategory: build.mutation({
      query: (id) => ({
        url: `/categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Category"],
    }),
  }),
});

export const {
  useGetCategoryQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = productApi;
