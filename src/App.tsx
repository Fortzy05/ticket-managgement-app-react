import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/auth/Login";
import CreateAccount from "./pages/auth/CreateAccount";
import CreateTicket from "./pages/CreateTicket";
import Dashboard from "./pages/Dashboard";
import ManageTicket from "./pages/ManageTicket";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create-account" element={<CreateAccount />} />

      {/* Protected routes */}
      <Route
        path="/create-ticket"
        element={
          <ProtectedRoute>
            <CreateTicket />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/manage-ticket"
        element={
          <ProtectedRoute>
            <ManageTicket />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
