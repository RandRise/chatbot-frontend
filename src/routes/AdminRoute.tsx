import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { getRolesFromLocalStorage, getTokenFromLocalStorage } from '../utils/Helper';

const AdminRoute = ({ children }: { children: ReactNode }) => {
  const token = getTokenFromLocalStorage();
  const roles = getRolesFromLocalStorage();

  if (token && roles?.includes("admin")) {
    return <>{children}</>;  // Return the children if the role is Admin
  } else {
    return <Navigate to="/login" replace />;  // Otherwise, redirect to login
  }
};

export default AdminRoute;
