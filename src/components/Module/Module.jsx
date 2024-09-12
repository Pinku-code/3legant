/**
 * A reusable modal component.
 *
 * @param {ReactNode} children - The content to be rendered inside the modal.
 * @param {function} close - A function to be called when the overlay is clicked.
 * @param {string} width - The width of the modal.
 *
 * @example
 * ```
 * import Module from './Module';
 *
 * const MyComponent = () => {
 *   const navigate = useNavigate();
 *
 *   const handleClose = () => {
 *     navigate(-1);
 *   };
 *
 *   return (
 *     <Module close={handleClose} width="500px">
 *       <h1>Hello World!</h1>
 *     </Module>
 *   );
 * };
 * ```
 *
 * @returns {ReactElement} A memoized modal component.
 */

import "./module.scss";

import React, { memo } from "react";

import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Module = ({ children, close, width }) => {
  return (
    <>
      <div className="owerlay" onClick={() => close(false)}></div>
      <div style={{ width }} className="modal">
        {children}
      </div>
    </>
  );
};

export default memo(Module);
