/**
 * Auth component that checks if the user is logged in and redirects to the login page if not.
 *
 * This component uses the `useSelector` hook from `react-redux` to retrieve the authentication token from the Redux store.
 * If the token is present, it renders the `Outlet` component, which represents the protected route.
 * If the token is not present, it redirects to the login page using the `Navigate` component from `react-router-dom`.
 *
 * @example
 * ```
 * // Assuming you have a Redux store with an 'auth' reducer that contains the token
 * const store = {
 *   auth: {
 *     token: 'some-token'
 *   }
 * };
 *
 * // Wrap your protected route with the Auth component
 * <Routes>
 *   <Route path="/protected" element={<Auth><ProtectedRoute /></Auth>} />
 *   <Route path="/login" element={<LoginPage />} />
 * </Routes>
 *
 * // In your ProtectedRoute component, you can use the Outlet component to render the protected content
 * const ProtectedRoute = () => {
 *   return (
 *     <div>
 *       <h1>Protected content</h1>
 *     </div>
 *   );
 * };
 * ```
 */

import { Navigate, Outlet } from "react-router-dom";

import React from "react";
import { useSelector } from "react-redux";

const Auth = () => {
  const token = useSelector((s) => s.auth.token);
  const isLogin = token;
  return isLogin ? <Outlet /> : <Navigate replace to={"/login"} />;
};

export default Auth;
