/**
 * A custom React hook to manage a user object with dynamic key-value pairs.
 *
 * @param {Object} initialState - The initial state of the user object.
 * @returns {Object} An object containing the user state, a function to update the state, and a change handler.
 *
 * Example:
 * ```
 * import React from 'react';
 * import useGetValue from './useGetValue';
 *
 * const App = () => {
 *   const { user, setUser, handleChange } = useGetValue({ name: '', email: '' });
 *
 *   return (
 *     <div>
 *       <input type="text" name="name" value={user.name} onChange={handleChange} />
 *       <input type="email" name="email" value={user.email} onChange={handleChange} />
 *       <p>User: {JSON.stringify(user)}</p>
 *     </div>
 *   );
 * };
 * ```
 */
import { useState } from "react";

const useGetValue = (initialState) => {
  const [user, setUser] = useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  return { user, setUser, handleChange };
};

export default useGetValue;
