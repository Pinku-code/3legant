/**
 * About component
 *
 * This component renders the About page, displaying a list of cards with images, titles, and descriptions.
 *
 * @returns {React.ReactElement} The About component
 *
 * @example
 * import React from 'react';
 * import About from './About';
 *
 * const HomeAboutData = [
 *   {
 *     id: 1,
 *     img: 'image1.jpg',
 *     title: 'Card 1 Title',
 *     desc: 'Card 1 Description'
 *   },
 *   {
 *     id: 2,
 *     img: 'image2.jpg',
 *     title: 'Card 2 Title',
 *     desc: 'Card 2 Description'
 *   }
 * ];
 *
 * const App = () => {
 *   return (
 *     <About />
 *   );
 * };
 */


import "./About.scss";

import React, { Fragment, useEffect } from "react";

import { HomeAboutData } from "../../../static";

const About = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Fragment>
      <div className="about container">
        <div className="about__cards">
          {HomeAboutData?.map((el) => (
            <div key={el?.id} className="about__card">
              <img src={el?.img} alt={el?.title} />
              <h3>{el?.title}</h3>
              <p>{el?.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default About;
