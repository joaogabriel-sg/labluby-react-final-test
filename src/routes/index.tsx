import { Routes, Route } from "react-router-dom";

import { LoginPage, HomePage } from "../pages";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="login/*" element={<LoginPage />} />
    </Routes>
  );
}
