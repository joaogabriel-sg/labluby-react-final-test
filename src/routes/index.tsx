import { Routes, Route } from "react-router-dom";

import { LoginPage } from "../pages";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="login/*" element={<LoginPage />} />
    </Routes>
  );
}
