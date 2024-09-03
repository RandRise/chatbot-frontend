import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { getRolesFromLocalStorage, getTokenFromLocalStorage } from '../utils/Helper';

const AdminRoute = ({ children }: { children: ReactNode }) => {
  const token = getTokenFromLocalStorage();
  const roles = getRolesFromLocalStorage();

  if (token && roles?.includes("admin")) {
    return <>{children}</>; 
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default AdminRoute;
