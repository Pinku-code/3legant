/**
 * NotFound component
 *
 * A React component that displays a 404 Not Found page.
 *
 * @returns {React.ReactElement} A React element representing the 404 page.
 *
 * @example
 * ```
 * import React from 'react';
 * import ReactDOM from 'react-dom';
 * import NotFound from './NotFound';
 *
 * ReactDOM.render(<NotFound />, document.getElementById('root'));
 * ```
 */

import "./NotFound.scss";

import React, { useEffect } from "react";
/**
 * Scrolls the window to the top when the component mounts.
 *
 * @param {Function} effect - The effect function to be executed.
 */

/**
 * NotFound component
 *
 * @returns {React.ReactElement} A React element representing the 404 page.
 */
const NotFound = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className=" not__found container">
      <div className="not__found__frame">
        <h1>404</h1>
        <h2>Not Found</h2>
      </div>
    </div>
  );
};

export default NotFound;
