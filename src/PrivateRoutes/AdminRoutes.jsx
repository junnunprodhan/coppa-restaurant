import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useIsAdmin from "../Hooks/useIsAdmin/useIsAdmin";
import { FaSpinner } from "react-icons/fa";
import Spin from "../Spin/Spin";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  console.log(loading);
  const location = useLocation();
  const [isAdmin, isLoading] = useIsAdmin();
  console.log(isLoading);
  if (loading | isLoading) {
    return (
      <div className=" h-screen flex justify-center items-center">
        <Spin />
      </div>
    );
  }
  if (user && isAdmin) {
    return children;
  } else {
    return <Navigate to={"/login"} state={{ from: location }}></Navigate>;
  }
};

export default AdminRoutes;
