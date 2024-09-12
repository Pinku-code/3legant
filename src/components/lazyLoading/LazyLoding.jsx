/**
 * LazyLoading component.
 *
 * A React component that displays a loading indicator.
 *
 * @example
 * ```
 * import React from 'react';
 * import LazyLoading from './LazyLoading';
 *
 * const App = () => {
 *   return (
 *     <div>
 *       <LazyLoading />
 *     </div>
 *   );
 * };
 * ```
 *
 * @returns {React.ReactElement} A React element representing the loading indicator.
 */


import "./LazyLoading.scss";

import React, { memo } from "react";
/**
 * LazyLoading component.
 *
 * @function
 * @returns {React.ReactElement} A React element representing the loading indicator.
 */

const LazyLoading = () => {
  return (
    <div className="lazy__loader__container container">
      <span className="lazy__loader"></span>
    </div>
  );
};

export default memo(LazyLoading);
