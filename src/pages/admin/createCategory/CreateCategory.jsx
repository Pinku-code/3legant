import "./CreateCategory.scss";

import React, { Fragment, useEffect } from "react";

import { toast } from "react-toastify";
import { useCreateCategoryMutation } from "../../../context/api/categoryApi";
import useGetValue from "../../../hooks/useGetValue";
import { useNavigate } from "react-router-dom";

const initialState = {
  title: "",
};

/**
 * CreateCategory component
 *
 * This component allows users to create a new category.
 *
 * @returns {React.ReactElement} The CreateCategory component
 */

const CreateCategory = () => {
  /**
   * useCreateCategoryMutation hook
   *
   * This hook is used to create a new category.
   *
   * @returns {Array} An array containing the createCategory function and its result
   */
  const [createCategory, { isSuccess }] = useCreateCategoryMutation();
  /**
   * useGetValue hook
   *
   * This hook is used to get and update the category title.
   *
   * @returns {Object} An object containing the handleChange function, setUser function, and user state
   */
  const { handleChange, setUser, user } = useGetValue(initialState);
  /**
   * useNavigate hook
   *
   * This hook is used to navigate to a new route.
   *
   * @returns {Function} The navigate function
   */
  const navigate = useNavigate();
  /**
   * handleCreateCategory function
   *
   * This function is called when the form is submitted.
   * It creates a new category and navigates to the manage category page.
   *
   * @param {Event} e The form submission event
   */
  const handleCreateCategory = (e) => {
    e.preventDefault();
    const category = { ...user };
    createCategory(category);
  };

  /**
   * useEffect hook
   *
   * This hook is used to handle the creation of a new category.
   * It displays a success toast message and navigates to the manage category page.
   */
  useEffect(() => {
    if (isSuccess) {
      toast.success("Category created successfully!");
      setUser(initialState);
      navigate("/admin/manage-category");
    }
  }, [isSuccess, setUser]);

  return (
    <Fragment>
      <div className="create__category">
        <h2>Create Category</h2>
        <form
          onSubmit={handleCreateCategory}
          className="create__category__form"
        >
          <div className="create__category__form__input">
            <label htmlFor="title">Title</label>
            <input
              value={user.title}
              required
              onChange={handleChange}
              name="title"
              type="text"
            />
            <button type="submit">Create</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default CreateCategory;
