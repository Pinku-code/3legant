/**
 * NewArrivals component
 * 
 * This component displays a list of new arrivals products.
 * It fetches the products data from the API using `useGetProductsQuery` hook
 * and renders a list of `CardItem` components.
 * 
 * @example
 * ```
 * <NewArrivals />
 * ```
 * 
 * @returns {React.ReactElement} The NewArrivals component
 */

import "./NewArrivals.scss";

import React, { Fragment } from "react";

import CardItem from "../../../components/cardItem/CardItem";
import { FaArrowRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import ProductLoading from "../../../components/productLoading/ProductLoading";
import { useGetProductsQuery } from "../../../context/api/productApi";
/**
 * NewArrivals component
 * 
 * @param {object} props - Component props
 * @returns {React.ReactElement} The NewArrivals component
 */
const NewArrivals = () => {
  const { data, isLoading } = useGetProductsQuery({ page: 4, limit: 10 });

  return (
    <Fragment>
      <div className="new__arrivals">
        <div className="new__arrivals__top container">
          <h3>New Arrivals</h3>
          <button>
            <NavLink to={"shop"}>
              More Products
              <FaArrowRight />
            </NavLink>
          </button>
        </div>
        <div className="new__arrivals__cards container">
          {data?.slice(0, 10)?.map((el) => (
            <CardItem el={el} key={el?.id} />
          ))}
        </div>
      </div>
      {isLoading ? <ProductLoading /> : <></>}
    </Fragment>
  );
};

export default NewArrivals;
