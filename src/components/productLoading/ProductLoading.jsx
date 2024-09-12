/**
 * ProductLoading component
 *
 * A React component that displays a loading animation for products.
 *
 * @returns {React.ReactElement} A React element representing the loading animation.
 *
 * @example
 * import React from 'react';
 * import ProductLoading from './ProductLoading';
 *
 * const App = () => {
 *   return (
 *     <div>
 *       <ProductLoading />
 *     </div>
 *   );
 * };
 */

import "./ProductLoading.scss";

import React, { Fragment } from "react";

const ProductLoading = () => {
  return (
    <Fragment>
      <div className=" loading__products container">
        <span class="loader"></span>
        <span class="loader"></span>
        <span class="loader"></span>
        <span class="loader"></span>
      </div>
    </Fragment>
  );
};

export default ProductLoading;
