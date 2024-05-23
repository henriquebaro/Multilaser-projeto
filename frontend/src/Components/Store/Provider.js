import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const StoreProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const token = localStorage.getItem('token');
    return token ? { token } : null;
  });

  const login = (newAuth) => {
    setAuth(newAuth);
    localStorage.setItem('token', newAuth.token);
  };

  const logout = () => {
    setAuth(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default StoreProvider;
