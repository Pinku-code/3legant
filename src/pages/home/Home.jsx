/**
 * Home component
 *
 * This component renders the home page of the application.
 *
 * It imports and renders the following components:
 * - Hero: The hero section of the home page
 * - NewArrivals: The new arrivals section of the home page
 * - Simply: The simply section of the home page
 * - About: The about section of the home page
 * - Sale: The sale section of the home page
 * - Articles: The articles section of the home page
 * - Newsletter: The newsletter section of the home page
 *
 * @example
 * <Home />
 */

import "./Home.scss";

import React, { Fragment } from "react";

import About from "./about/About";
import Articles from "./articles/Articles";
import Hero from "./hero/Hero";
import NewArrivals from "./newArrivals/NewArrivals.";
import Newsletter from "../../components/newsletter/Newsletter";
import Sale from "./sale/Sale";
import Simply from "./simply/Simply";
/**
 * Home component
 *
 * @returns {React.ReactElement} The home page component
 */
const Home = () => {
  return (
    <Fragment>
      <Hero />
      <NewArrivals />
      <Simply />
      <About />
      <Sale />
      <Articles />
      <Newsletter />
    </Fragment>
  );
};

export default Home;