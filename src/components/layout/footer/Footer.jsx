/**
 * Footer component for the 3legant website.
 *
 * This component renders the footer section of the website, including navigation links, social media icons, and copyright information.
 *
 * @example
 * ```jsx
 * import React from 'react';
 * import ReactDOM from 'react-dom';
 * import Footer from './Footer';
 *
 * ReactDOM.render(<Footer />, document.getElementById('root'));
 * ```
 *
 * @returns {React.ReactElement} The Footer component.
 */

import "./Footer.scss";

import { LuFacebook, LuInstagram } from "react-icons/lu";
import React, { Fragment } from "react";

import { NavLink } from "react-router-dom";
import { TbBrandYoutube } from "react-icons/tb";

const Footer = () => {
  return (
    <Fragment>
      <footer>
        <div className=" footer container">
          <div className="footer__top">
            <div className="footer__top__left">
              <h3>3legant.</h3>
              <p>Gift & Decoration Store</p>
            </div>
            <ul className="footer__list">
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"shop"}>Shop</NavLink>
              </li>
              <li>
                <NavLink to={"blog"}>Blog</NavLink>
              </li>
              <li>
                <NavLink to={"contact"}>Contact Us</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer__bottom">
            <div className="footer__bottom__left">
              <p>Copyright © 2023 3legant. All rights reserved&nbsp;</p>
              <h4>Privacy Policy</h4>
              <h4>Terms of Use</h4>
            </div>
            <div className="footer__bottom__right">
              <NavLink>
                <LuInstagram />
              </NavLink>
              <NavLink>
                <LuFacebook />
              </NavLink>
              <NavLink>
                <TbBrandYoutube />
              </NavLink>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
