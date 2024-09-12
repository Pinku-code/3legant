/**
 * Admin component
 *
 * This component renders the admin dashboard layout, consisting of a sidebar and an outlet for rendering routes.
 *
 * @example
 * ```
 * // Example usage:
 * <Admin>
 *   <!-- routes will be rendered here -->
 * </Admin>
 * ```
 *
 * @returns {React.ReactElement} The admin dashboard layout
 */

import "./Admin.scss";

import React, { Fragment } from "react";

import AdminSidebar from "../../components/adminSidebar/AdminSidebar";
import { Outlet } from "react-router-dom";
/**
 * Admin functional component
 *
 * @returns {React.ReactElement} The admin dashboard layout
 */
const Admin = () => {
  return (
    <Fragment>
      <div className="admin">
        <AdminSidebar />
        <Outlet />
      </div>
    </Fragment>
  );
};

export default Admin;
