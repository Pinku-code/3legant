/**
 * Newsletter component
 *
 * A React component that renders a newsletter signup form.
 *
 * @returns {React.ReactElement} The newsletter component
 *
 * @example
 * ```
 * import React from 'react';
 * import Newsletter from './Newsletter';
 *
 * const App = () => {
 *   return (
 *     <div>
 *       <Newsletter />
 *     </div>
 *   );
 * };
 * ```
 */

import "./Newsletter.scss";

import React, { Fragment } from "react";

import { MdOutlineMail } from "react-icons/md";

const Newsletter = () => {
  /**
 * Newsletter component
 *
 * @returns {React.ReactElement} The newsletter component
 */
  return (
    <Fragment>
      <div className="newsletter container__max">
        <h2>Join Our Newsletter</h2>
        <p>Sign up for deals, new products and promotions</p>
        <div className="newsletter__input">
          <div className="newsletter__input__left">
            <MdOutlineMail />
            <input type="email" placeholder="Email address" />
          </div>
          <button>Signup</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Newsletter;
