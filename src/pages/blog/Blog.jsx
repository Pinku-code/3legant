/**
 * Blog component
 *
 * Renders the blog page with a hero section, blog cards, and a newsletter.
 *
 * @returns {React.ReactElement} The blog component
 */


import "./Blog.scss";

import React, { Fragment, useEffect } from "react";

import { BlogData } from "../../static";
import Newsletter from "../../components/newsletter/Newsletter";
/**
 * Blog component
 *
 * @example
 * <Blog />
 */
const Blog = () => {
  /**
   * Scrolls to the top of the page when the component mounts
   */
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  console.log(BlogData);
  return (
    <Fragment>
      <div className="blog container">
        <div className="blog__hero">
          <h2>Our Blog</h2>
          <p>Home ideas and design inspiration</p>
        </div>
        <h3>All Blog</h3>
        <div className="blog__cards">
          {/**
           * Maps over the BlogData array and renders a blog card for each item
           *
           * @param {Object} el - The current blog data item
           * @returns {React.ReactElement} The blog card component
           */}
          {BlogData?.map((el) => (
            <div key={el?.id} className="blog__cards__card">
              <div className="blog__cards__card__img">
                <img src={el?.img} alt="blog.jpg" />
              </div>
              <div className="blog__cards__card__info">
                <h3>{el?.title}</h3>
                <p>October 16, 2023</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Newsletter />
    </Fragment>
  );
};

export default Blog;
