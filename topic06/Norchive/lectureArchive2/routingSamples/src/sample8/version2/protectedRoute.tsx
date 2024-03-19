import React, { useContext } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "./authContext";

const ProtectedRoute:React.FC<{children: React.ReactNode}> = ({ children }) => {
  const authContext = useContext(AuthContext);
  const { token } = authContext || {};
  const location = useLocation();
  console.log(location)
  if (!token) {
    return <Navigate to={"/login"} replace state={{ intent: location }} />;
  }

  return children;
};

export default ProtectedRoute;
