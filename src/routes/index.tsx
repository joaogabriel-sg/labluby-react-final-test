import { Routes, Route, Navigate } from "react-router-dom";

import { LoginPage, HomePage, NewBetPage } from "../pages";

import { useAppSelector } from "../hooks";

export function AppRoutes() {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  return (
    <Routes>
      <Route
        path="/"
        element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />}
      />
      <Route
        path="login/*"
        element={!isAuthenticated ? <LoginPage /> : <Navigate to="/" />}
      />
      <Route
        path="new-bet"
        element={isAuthenticated ? <NewBetPage /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}
