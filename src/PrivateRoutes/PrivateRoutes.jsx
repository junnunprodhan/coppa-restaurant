import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaSpinner } from "react-icons/fa";
import { Navigate, useLocation } from "react-router-dom";
import Spin from "../Spin/Spin";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <div className=" h-screen flex items-center justify-center"><Spin /></div>;
  }
  if (user) {
    return children;
  } else {
    return <Navigate to={"/login"} state={{ from: location }}></Navigate>;
  }
};

export default PrivateRoutes;
