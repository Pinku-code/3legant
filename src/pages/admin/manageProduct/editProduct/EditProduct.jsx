/**
 * EditProduct component
 * 
 * A React component for editing a product.
 * 
 * @param {object} editProduct - The product to be edited
 * @param {function} setEditProduct - A function to set the edited product
 * 
 * @returns {JSX.Element} - The EditProduct component
 */

import "../../createProduct/CreateProduct.scss";

import React, { useEffect } from "react";

import { toast } from "react-toastify";
import { useGetCategoryQuery } from "../../../../context/api/categoryApi";
import useGetValue from "../../../../hooks/useGetValue";
import { useUpdateProductMutation } from "../../../../context/api/productApi";

const EditProduct = ({ editProduct, setEditProduct }) => {
  /**
   * useUpdateProductMutation hook
   * 
   * A hook for updating a product.
   * 
   * @returns {array} - An array containing the updateProduct function and its isLoading and isSuccess states
   */
  const [updateProduct, { isLoading, isSuccess }] = useUpdateProductMutation();
  /**
   * useGetCategoryQuery hook
   * 
   * A hook for getting categories.
   * 
   * @returns {object} - An object containing the category data
   */
  const { data } = useGetCategoryQuery();
  /**
   * useGetValue hook
   * 
   * A hook for getting and updating the product values.
   * 
   * @param {object} editProduct - The product to be edited
   * 
   * @returns {object} - An object containing the product values and a handleChange function
   */
  const { user, setUser, handleChange } = useGetValue(editProduct);

  /**
   * handleUpdate function
   * 
   * A function to handle the product update.
   * 
   * @param {event} e - The event object
   */

  const handleUpdate = (e) => {
    e.preventDefault();
    user.images = editProduct.images[0].split("\n");
    updateProduct({ body: user, id: user.id });
  };

  /**
   * useEffect hook
   * 
   * A hook for handling the update product success.
   */
  useEffect(() => {
    if (isSuccess) {
      toast.success("Successfully !");
      setEditProduct(null);
    }
  }, [isSuccess]);

  return (
    <section>
      <form className="create__product__form" onSubmit={handleUpdate} action="">
        <h3>Update product</h3>
        <div className="create__product__form__input">
          <label htmlFor="title">Title</label>
          <input
            required
            value={user.title}
            onChange={handleChange}
            type="text"
            placeholder="Title"
            name="title"
            id="title"
          />
        </div>
        <div className="create__product__form__input">
          <label htmlFor="price">Price</label>
          <input
            required
            value={user.price}
            onChange={handleChange}
            type="number"
            placeholder="Price"
            name="price"
            id="price"
          />
        </div>
        <div className="create__product__form__input">
          <label htmlFor="image-url">Image-url</label>
          <textarea
            value={user.images.join("\n")}
            onChange={(e) => setImages(e.target.value)}
            required
            name="images"
            id="image-url"
            placeholder="Image-url"
          ></textarea>
        </div>
        <div className="create__product__form__input">
          <label htmlFor="category">Category</label>
          <select
            value={user.category}
            onChange={handleChange}
            name="category"
            id=""
          >
            <option selected disabled value="">
              Choose Category
            </option>
            {data?.map((item) => (
              <option key={item.id} value={item.title}>
                {item.title}
              </option>
            ))}
          </select>
        </div>
        <div className="create__product__form__input">
          <label htmlFor="desc">Desc</label>
          <textarea
            value={user.description}
            onChange={handleChange}
            required
            name="desc"
            id="desc"
            placeholder="Desc"
          ></textarea>
        </div>
        <div className="create__product__form__buttons">
          <button onClick={() => setEditProduct(null)}>cancel</button>
          <button disabled={isLoading}>
            {isLoading ? "loading..." : "edit"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditProduct;
