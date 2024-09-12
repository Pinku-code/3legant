/**
 * Articles component
 *
 * This component displays a list of articles with images, titles, and links to read more.
 *
 * @returns {React.ReactElement} The Articles component
 *
 * Example:
 * ```
 * <Articles />
 * ```
 */

import "./Articles.scss";

import React, { Fragment, useEffect } from "react";
import { NavLink } from "react-router-dom";

import ArtImg1 from "../../../assets/home/art1.png";
import ArtImg2 from "../../../assets/home/art2.png";
import ArtImg3 from "../../../assets/home/art3.png";
import { FaArrowRight } from "react-icons/fa6";


/**
 * Articles function component
 *
 * @description This component is responsible for rendering the articles section
 * @returns {React.ReactElement} The Articles component
 */
const Articles = () => {
  

  /**
   * Scroll to top of the page when the component mounts
   */
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Fragment>
      <div className="articles container">
        <div className="articles__top">
          <h2>Articles</h2>
          <button>
            <NavLink to={"blog"}>
              Read More <FaArrowRight />
            </NavLink>
          </button>
        </div>
        <div className="articles__cards">
          <div className="articles__cards__card">
            <img src={ArtImg1} alt="art.png" />
            <h3>7 ways to decor your home</h3>
            <button>
              <NavLink to={"blog"}>
                Read Now <FaArrowRight />
              </NavLink>
            </button>
          </div>
          <div className="articles__cards__card">
            <img src={ArtImg2} alt="art.png" />
            <h3>Kitchen organization</h3>
            <button>
              <NavLink to={"blog"}>
                Read Now <FaArrowRight />
              </NavLink>
            </button>
          </div>
          <div className="articles__cards__card">
            <img src={ArtImg3} alt="art.png" />
            <h3>Decor your bedroom</h3>
            <button>
              <NavLink to={"blog"}>
                Read Now <FaArrowRight />
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Articles;
