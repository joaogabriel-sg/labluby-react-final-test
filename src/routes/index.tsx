import { Routes, Route, Navigate } from "react-router-dom";

import { AccountPage, AuthPage, HomePage, NewBetPage } from "../pages";

import { useAppSelector } from "../hooks";

export function AppRoutes() {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  return (
    <Routes>
      <Route
        path="/"
        element={isAuthenticated ? <HomePage /> : <Navigate to="/auth" />}
      />
      <Route
        path="auth/*"
        element={!isAuthenticated ? <AuthPage /> : <Navigate to="/" />}
      />
      <Route
        path="new-bet"
        element={isAuthenticated ? <NewBetPage /> : <Navigate to="/auth" />}
      />
      <Route
        path="account"
        element={isAuthenticated ? <AccountPage /> : <Navigate to="/auth" />}
      />
    </Routes>
  );
}
