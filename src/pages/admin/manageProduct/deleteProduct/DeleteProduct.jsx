/**
 * DeleteProduct component
 *
 * A React component that handles deleting a product.
 *
 * @param {Object} props - Component props
 * @param {Object} props.deleteProduct - The product to be deleted
 * @param {Function} props.setDeleteProduct - A function to set the deleteProduct state
 *
 * @example
 * <DeleteProduct deleteProduct={{ id: 1, title: 'Product 1' }} setDeleteProduct={() => {}} />
 */

import "../../manageCategory/deleteCategory/DeleteCategory.scss";

import React, { useEffect } from "react";

import { toast } from "react-toastify";
import { useDeleteProductMutation } from "../../../../context/api/productApi";
/**
 * DeleteProduct component
 *
 * @returns {JSX.Element} The DeleteProduct component
 */
const DeleteProduct = ({ deleteProduct, setDeleteProduct }) => {
  const [deleteProductById, { isLoading, isSuccess }] =
    useDeleteProductMutation();
     /**
   * useDeleteProductMutation hook
   *
   * @returns {Array} An array containing the deleteProductById function and its isLoading and isSuccess states
   */
/**
   * handleDeleteProduct function
   *
   * Handles deleting a product
   */
  const handleDeleteProduct = () => {
    deleteProductById(deleteProduct.id);
  };
  
  /**
   * useEffect hook
   *
   * Displays a success toast message and resets the deleteProduct state when the deletion is successful
   */

  useEffect(() => {
    if (isSuccess) {
      toast.success("Product deleted successfully !");
      setDeleteProduct(null);
    }
  }, [isSuccess]);

  return (
    <section className="delete__category">
      <h4>
        Delete: <span>{deleteProduct.title} ? </span>
      </h4>
      <div className="delete__category__buttons">
        <button
          className="delete__category__close"
          onClick={() => setDeleteProduct(null)}
        >
          Close
        </button>
        <button
          className="delete__category__delete"
          onClick={handleDeleteProduct}
        >
          {isLoading ? "Loading..." : "Delete"}
        </button>
      </div>
    </section>
  );
};

export default DeleteProduct;
