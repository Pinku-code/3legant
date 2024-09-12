/**
 * Sale component
 *
 * This component displays a sale banner with an image, description, and a call-to-action button.
 *
 * @returns {React.ReactElement} The Sale component
 *
 * Example:
 * ```
 * <Sale />
 * ```
 */

import "./Sale.scss";

import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

import { FaArrowRight } from "react-icons/fa6";
import SaleImg from "../../../assets/home/sale.png";
/**
 * Sale component
 *
 * @function Sale
 * @returns {React.ReactElement} The Sale component
 */
const Sale = () => {
  return (
    <Fragment>
      <div className="sale container__max">
        <div className="sale__img">
          <img src={SaleImg} alt="sale.png" />
        </div>
        <div className="sale__desc">
          <h4>SALE UP TO 35% OFF</h4>
          <h2>HUNDREDS of New lower prices!</h2>
          <p>
            It’s more affordable than ever to give every room in your home a
            stylish makeover
          </p>
          <button>
                <NavLink to={"shop"}>
                  Shop Now <FaArrowRight />
              </NavLink>
            </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Sale;
