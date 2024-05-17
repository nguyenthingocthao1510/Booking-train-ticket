import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, isAuthenticated, redirectTo, ...rest }) => {
    return isAuthenticated ? (
      <Route {...rest} element={element} />
    ) : (
      <Navigate to={redirectTo} />
    );
  };

export default PrivateRoute;
