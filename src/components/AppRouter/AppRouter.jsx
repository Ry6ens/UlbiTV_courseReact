import React from "react";
import { Routes, Route } from "react-router-dom";

import NotFoundPage from "../../pages/NotFoundPage";

import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

import { privateRoutes, publicRoutes } from "../router/routes";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        {privateRoutes.map((route) => (
          <Route key={route.id} path={route.path} element={route.element} />
        ))}
      </Route>
      <Route element={<PublicRoutes />}>
        {publicRoutes.map((route) => (
          <Route key={route.id} path={route.path} element={route.element} />
        ))}
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
