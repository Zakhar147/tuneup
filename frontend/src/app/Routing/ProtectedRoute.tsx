import { useAuthStore } from "@entities/User";
import React, { JSX } from "react";
import { Navigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
}

export const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const auth = useAuthStore((state) => state.auth);

  if (!auth) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
