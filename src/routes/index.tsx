import { Routes, Route } from "react-router-dom";

import { LoginPage, HomePage, NewBetPage } from "../pages";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="login/*" element={<LoginPage />} />
      <Route path="new-bet" element={<NewBetPage />} />
    </Routes>
  );
}
