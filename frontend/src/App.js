import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Interview from "./pages/Interview";
import Result from "./pages/Result";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  return token ? children : <Navigate to="/" replace />;
};
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/interview"
          element={
            <ProtectedRoute>
              <Interview />
            </ProtectedRoute>
          }
        />

        <Route
          path="/result"
          element={
            <ProtectedRoute>
              <Result />
            </ProtectedRoute>
          }
        />

        <Route
          path="/analytics"
          element={
            <ProtectedRoute>
              <Analytics />
            </ProtectedRoute>
          }
        />

        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
