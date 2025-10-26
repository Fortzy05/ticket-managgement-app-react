import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import CreateTicket from "./pages/CreateTicket";
import Dashboard from "./pages/Dashboard"
import ManageTicket from "./pages/ManageTicket"
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/create-ticket" element={<CreateTicket />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/manage-ticket" element={<ManageTicket />} />
    </Routes>
  );
}

export default App;
