import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from './Store/Provider';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { auth } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={props =>
        auth ? (
          <Element {...props} />
        ) : (
          <Navigate to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;
