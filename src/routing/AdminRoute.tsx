import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AdminRoute: React.FC = () => {
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  return isAdmin ? <Outlet /> : <Navigate to="/login" replace />;
};

export default AdminRoute;
