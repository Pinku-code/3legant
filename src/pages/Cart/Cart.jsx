/**
 * Cart component
 *
 * Renders the cart sidebar and outlet if the cart is not empty,
 * otherwise displays an empty cart message with a link to go home.
 *
 * @returns {React.ReactElement} The cart component
 *
 * @example
 * ```
 * import React from 'react';
 * import ReactDOM from 'react-dom';
 * import { BrowserRouter } from 'react-router-dom';
 * import Cart from './Cart';
 *
 * const App = () => {
 *   return (
 *     <BrowserRouter>
 *       <Cart />
 *     </BrowserRouter>
 *   );
 * };
 *
 * ReactDOM.render(<App />, document.getElementById('root'));
 * ```
 */


import "./Cart.scss";

import { NavLink, Outlet, useNavigate } from "react-router-dom";
import React, { Fragment, useEffect } from "react";

import CartSidebar from "./CartSidebar/CartSidebar";
import emptyCart from "../../assets/Cart/emptycart.png";
import { useSelector } from "react-redux";

const Cart = () => {
  /**
   * Get the cart data from the Redux store
   */
  const cartData = useSelector((state) => state.cart.value);
  /**
   * Scroll to the top of the page when the component mounts
   */
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Fragment>
      {cartData.length ? (
        <div className="">
          <CartSidebar />

          <Outlet />
        </div>
      ) : (
        <div className="empty__cart container">
          <img src={emptyCart} alt="empty.png" />
          <NavLink to="/">Go Home</NavLink>
        </div>
      )}
    </Fragment>
  );
};

export default Cart;
