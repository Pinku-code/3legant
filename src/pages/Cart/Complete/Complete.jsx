/**
 * Complete component
 *
 * This component is used to display the order completion page.
 * It retrieves the cart data from the Redux store and calculates the total price.
 * It also provides a button to navigate to the purchase history page.
 *
 * @returns {React.ReactElement} The Complete component
 */

import "./Complete.scss";

import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteAllCart } from "../../../context/slices/cartSlices";
import { useNavigate } from "react-router-dom";

const Complete = () => {
  /**
   * useDispatch hook to dispatch actions to the Redux store
   */
  let dispatch = useDispatch();
  /**
   * useNavigate hook to navigate to other pages
   */
  let navigate = useNavigate();
/**
   * handleComplete function to delete all cart items and navigate to the root page
   */
  const handleComplete = () => {
    dispatch(deleteAllCart());
    navigate("/");
  };
/**
   * useEffect hook to call handleComplete when the component is unmounted
   */
  useEffect(() => {
    return () => {
      handleComplete();
    };
  }, []);
  /**
   * cartData state retrieved from the Redux store
   */
  const cartData = useSelector((state) => state.cart.value);
  /**
   * totalPrice state to store the total price of the cart items
   */
  const [totalPrice, setTotalPrice] = useState(0);
  /**
   * useEffect hook to calculate the total price when the cart data changes
   */
  useEffect(() => {
    let total = cartData?.reduce((a, b) => a + b.quantity * b.price, 0);

    setTotalPrice(total);
  }, [cartData]);
  /**
   * subtotal variable to store the total price
   */
  const subtotal = totalPrice;
  /**
   * total variable to store the total price
   */

  const total = subtotal;
  return (
    <Fragment>
      <div className="complete container">
        <h2>Thank you! 🎉</h2>
        <h1>Your order has been received</h1>
        <div className="complete__cards">
          {cartData?.map((el) => (
            <div key={el?.id} className="complete__cards__card">
              <img src={el?.images[0]} alt="product.png" />
              <span>{el?.quantity}</span>
            </div>
          ))}
        </div>
        <div className="complete__details">
          <div className="df">
            <p>Order code:</p>
            <span>#0123_45678</span>
          </div>
          <div className="df">
            <p>Date:</p>
            <span>October 19, 2023</span>
          </div>
          <div className="df">
            <p>Total:</p>
            <span>${total}</span>
          </div>
          <div className="df">
            <p>Payment method:</p>
            <span>Credit Card</span>
          </div>
        </div>
        <button onClick={() => handleComplete()}>Purchase history</button>
      </div>
    </Fragment>
  );
};

/**
 * Example usage:
 *
 * <Complete />
 */

export default Complete;
