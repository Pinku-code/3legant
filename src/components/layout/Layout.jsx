/**
 * Layout component that wraps the application layout.
 *
 * This component renders the Header, main content area, and Footer.
 *
 * @returns {React.ReactElement} The Layout component.
 *
 * @example
 * ```
 * import React from 'react';
 * import ReactDOM from 'react-dom';
 * import { BrowserRouter } from 'react-router-dom';
 * import Layout from './Layout';
 *
 * const App = () => {
 *   return (
 *     <BrowserRouter>
 *       <Layout>
 *         <Route path="/" element={<Home />} />
 *       </Layout>
 *     </BrowserRouter>
 *   );
 * };
 *
 * ReactDOM.render(<App />, document.getElementById('root'));
 * ```
 */

import React, { Fragment } from "react";

import Footer from "./footer/Footer";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
