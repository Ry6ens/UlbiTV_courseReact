import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { AuthContext } from "../../context";
import Loader from "../UI/Loader/Loader";

export default function PrivateRoutes() {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
