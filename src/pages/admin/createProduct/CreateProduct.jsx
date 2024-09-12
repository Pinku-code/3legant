/**
 * CreateProduct component
 *
 * This component allows users to create a new product by filling out a form.
 * It uses the `useCreateProductMutation` hook to create a new product and
 * the `useGetCategoryQuery` hook to fetch categories.
 *
 * @example
 * <CreateProduct />
 */

import "./CreateProduct.scss";

import React, { Fragment, useEffect, useState } from "react";

import { toast } from "react-toastify";
import { useCreateProductMutation } from "../../../context/api/productApi";
import { useGetCategoryQuery } from "../../../context/api/categoryApi";
import useGetValue from "../../../hooks/useGetValue";
/**
 * Initial state for the product form
 *
 * @typedef {Object} initialState
 * @property {string} title - Product title
 * @property {string} price - Product price
 * @property {string} stock - Product stock
 * @property {string} desc - Product description
 */
const initialState = {
  title: "",
  price: "",
  stock: "",
  desc: "",
};

const CreateProduct = () => {
   /**
   * Create product mutation
   *
   * @typedef {Object} createProduct
   * @property {Function} createProduct - Create product function
   * @property {Object} data - Created product data
   * @property {boolean} isLoading - Is create product loading
   * @property {boolean} isSuccess - Is create product successful
   */
  const [createProduct, { data, isLoading, isSuccess }] =
    useCreateProductMutation();
/**
   * Category state
   *
   * @typedef {string} category
   */
  const [category, setCategory] = useState("");
  /**
   * Images state
   *
   * @typedef {string} images
   */
  const [images, setImages] = useState("");
   /**
   * Fetch categories
   *
   * @typedef {Object} categories
   */
  const { data: categories } = useGetCategoryQuery();
  console.log(categories);
  const categoryItem = categories?.map((category) => (
    <option
      key={category.id}
      value={category.title.toLowerCase().split(" ").join("-")}
    >
      {category.title}
    </option>
  ));
  const { handleChange, setUser, user } = useGetValue(initialState);

  const handleCreateProduct = (e) => {
    e.preventDefault();
    const product = { ...user };
    product.category = category;
    const imagesArray = images.split("\n").map((image) => image.trim());
    product.images = imagesArray;
    product.price = +product.price;
    createProduct(product);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Product created successfully !");
      setUser(initialState);
      setImages("");
      setCategory("");
    }
  }, [isSuccess]);

  return (
    <Fragment>
      <div className="create__product">
        <h2>Create product</h2>
        <form onSubmit={handleCreateProduct} className="create__product__form">
          <div className="create__product__form__input">
            <label htmlFor="">Title</label>
            <input
              value={user.title}
              onChange={handleChange}
              name="title"
              type="text"
            />
          </div>
          <div className="create__product__form__input">
            <label htmlFor="">Price</label>
            <input
              value={user.price}
              onChange={handleChange}
              name="price"
              type="text"
            />
          </div>
          <div className="create__product__form__input">
            <label htmlFor="">Stock</label>
            <input
              value={user.stock}
              onChange={handleChange}
              name="stock"
              type="text"
            />
          </div>
          <div className="create__product__form__input">
            <label htmlFor="">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              name=""
              id=""
            >
              <option value="">Choose</option>
              {categoryItem}
            </select>
          </div>
          <div className="create__product__form__input">
            <label htmlFor="">Image-url</label>
            <textarea
              value={images}
              onChange={(e) => setImages(e.target.value)}
              name="images"
            ></textarea>
          </div>
          <div className="create__product__form__input">
            <label htmlFor="">Desc</label>
            <textarea
              value={user.desc}
              onChange={handleChange}
              name="desc"
            ></textarea>
          </div>
          <button>Create</button>
        </form>
      </div>
    </Fragment>
  );
};

export default CreateProduct;
