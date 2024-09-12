import "./EditCategory.scss";

import React, { useEffect } from "react";

import { toast } from "react-toastify";
import { useUpdateCategoryMutation } from "../../../../context/api/categoryApi";
/**
 * EditCategory component
 *
 * A React component for editing a category.
 *
 * @param {object} editCategory - The category to be edited
 * @param {function} setEditCategory - A function to set the edited category
 *
 * @returns {ReactElement} The EditCategory component
 */
const EditCategory = ({ editCategory, setEditCategory }) => {
  /**
   * useUpdateCategoryMutation hook
   *
   * A hook to update a category
   *
   * @returns {array} An array containing the updateCategory function and its isLoading and isSuccess states
   */
  const [updateCategory, { isLoading, isSuccess }] =
    useUpdateCategoryMutation();
    /**
   * handleEditCategory function
   *
   * Handles the edit category form submission
   *
   * @param {event} e - The form submission event
   */

  const handleEditCategory = (e) => {
    e.preventDefault();
    const category = { ...editCategory };

    updateCategory({ body: category, id: category.id });
  };

  /**
   * useEffect hook
   *
   * Displays a success toast message and resets the edited category when the update is successful
   */
  useEffect(() => {
    if (isSuccess) {
      toast.success("Updated category successfully!");
      setEditCategory(null);
    }
  }, [isSuccess, setEditCategory]);

  return (
    <section className="edit__category">
      <form onSubmit={handleEditCategory}>
        <h3>Edit Category</h3>
        <label htmlFor="category">{editCategory.title}</label>
        <input
          value={editCategory.title}
          required
          onChange={(e) =>
            setEditCategory((prev) => ({ ...prev, title: e.target.value }))
          }
          type="text"
          name="title"
          id="category"
          placeholder="Category"
        />

        <div className="edit__category__buttons">
          <button
            className="edit__category__close"
            onClick={() => setEditCategory(null)}
            type="button"
          >
            Close
          </button>
          <button className="edit__category__save" type="submit">
            {isLoading ? "Loading..." : "Save"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditCategory;
