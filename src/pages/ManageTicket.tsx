import { useState } from "react";
import { useTickets } from "../context/TicketContext";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../layout/Footer";

const ManageTickets: React.FC = () => {
  const { tickets, deleteTicket } = useTickets();
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-green-500";
      case "in_progress":
        return "bg-blue-500";
      case "closed":
        return "bg-red-500";
      default:
        return "bg-gray-400";
    }
  };

  const getInitials = (email: string) => {
    const namePart = email.split("@")[0];
    return (
      namePart
        .split(".")
        .map((n) => n[0]?.toUpperCase())
        .join("") || email[0]?.toUpperCase()
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-[Poppins]">
      {/* ===== HEADER ===== */}
      <header className="bg-white shadow-sm p-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <span className="material-symbols-outlined text-[#7F56D9] text-3xl">
            confirmation_number
          </span>
          <h1 className="text-xl font-bold">TicketFlow</h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-4">
            <Link
              to="/dashboard"
              className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#7F56D9]/10 text-[#7F56D9] font-medium"
            >
              <span className="material-symbols-outlined">
                confirmation_number
              </span>
              <span>Dashboard</span>
            </Link>
          </nav>

          {/* Avatar */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#7F56D9] flex items-center justify-center font-bold text-white">
              {user ? getInitials(user.email) : "?"}
            </div>
            <p className="font-medium">{user?.email || "User"}</p>
          </div>

          <button onClick={logout} className="text-red-600 font-semibold">
            Logout
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-3xl text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <span className="material-symbols-outlined">close</span>
          ) : (
            <span className="material-symbols-outlined">menu</span>
          )}
        </button>
      </header>

      {/* ===== Mobile Menu ===== */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md p-4 space-y-4 animate-slideDown">
          <Link
            to="/dashboard"
            className="block w-full px-4 py-2 rounded-lg bg-[#7F56D9]/10 text-[#7F56D9] font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Dashboard
          </Link>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#7F56D9] flex items-center justify-center font-bold text-white">
              {user ? getInitials(user.email) : "?"}
            </div>
            <p className="font-medium">{user?.email || "User"}</p>
          </div>

          <button
            onClick={() => {
              setIsMenuOpen(false);
              logout();
            }}
            className="w-full text-left text-red-600 font-semibold"
          >
            Logout
          </button>
        </div>
      )}

      {/* ===== MAIN ===== */}
      <main className="relative p-8 max-w-6xl mx-auto">
        <div className="flex justify-between mb-6">
          <h2 className="text-xl font-semibold">Your Tickets</h2>
          <button
            onClick={() => navigate("/create-ticket")}
            className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700"
          >
            + Create Ticket
          </button>
        </div>

        {/* Decorative circles */}
        <div className="absolute z-0 top-3/4 left-24 w-20 h-20 md:w-24 md:h-24 bg-indigo-300 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-11 right-1/8 w-28 h-28 md:w-36 md:h-36 bg-indigo-500 rounded-full opacity-20 animate-[pulse_5s_infinite]"></div>
        <div className="absolute top-1/2 left-2/5 w-10 h-10 md:w-12 md:h-12 bg-indigo-300 rounded-full opacity-40 animate-pulse"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="bg-white p-6 rounded-2xl shadow">
              <div className="flex justify-between mb-4">
                <h3 className="text-lg font-semibold">{ticket.title}</h3>
                <span
                  className={`px-3 py-1 text-sm font-semibold text-white rounded-full ${getStatusColor(
                    ticket.status
                  )}`}
                >
                  {ticket.status}
                </span>
              </div>

              <p className="text-gray-600 mb-4">{ticket.description}</p>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => navigate(`/edit-ticket/${ticket.id}`)}
                  className="text-blue-600 bg-blue-100 px-3 py-1 rounded-md hover:bg-blue-200"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTicket(ticket.id)}
                  className="text-red-600 bg-red-100 px-3 py-1 rounded-md hover:bg-red-200"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ManageTickets;
