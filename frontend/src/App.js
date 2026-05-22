import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Interview from "./pages/Interview";
import Result from "./pages/Result";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token
    ? children
    : <Navigate to="/" />;
};
function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/"element={<Home />}
        />
        <Route path="/dashboard"element={<ProtectedRoute><Dashboard /></ProtectedRoute>}
        />
        <Route path="/interview"element={<ProtectedRoute><Interview /></ProtectedRoute>}
        />
        <Route path="/result"element={<ProtectedRoute><Result /></ProtectedRoute>}
        />
        <Route path="*"element={<Navigate to="/" />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
