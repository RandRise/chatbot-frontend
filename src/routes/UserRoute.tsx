import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { getRolesFromLocalStorage, getTokenFromLocalStorage } from '../utils/Helper';

const UserRoute = ({ children }: { children: ReactNode }) => {
  const token = getTokenFromLocalStorage();
  const roles = getRolesFromLocalStorage();

  if (token && roles?.includes("user")) {
    return <>{children}</>;  // Return the children if the role is User
  } else {
    return <Navigate to="/login" replace />;  // Otherwise, redirect to login
  }
};

export default UserRoute;
