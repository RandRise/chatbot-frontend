import  { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { getRolesFromLocalStorage, getTokenFromLocalStorage } from '../utils/Helper';

const UserRoute = ({ children }: { children: ReactNode }) => {
  const token = getTokenFromLocalStorage();
  const roles = getRolesFromLocalStorage();

  if (token && roles?.includes("user")) {
    return <>{children}</>;
  } else {
    return <Navigate to="/sign-in" replace />; 
  }
};

export default UserRoute;
