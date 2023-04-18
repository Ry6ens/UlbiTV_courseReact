import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { AuthContext } from "../../context";

export default function PublicRoutes() {
  const { isAuth } = useContext(AuthContext);

  if (isAuth) {
    return <Navigate to="/posts" />;
  }

  return <Outlet />;
}
