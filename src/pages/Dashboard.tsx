import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface Ticket {
  id: number;
  title: string;
  description: string;
  priority: string;
  status: "open" | "in_progress" | "closed";
  createdAt: string;
}

export default function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);

  // Redirect if not logged in
  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  // Load tickets from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("tickets");
    if (stored) {
      setTickets(JSON.parse(stored));
    }
    setLoading(false);
  }, []);

  // Stats
  const totalTickets = tickets.length;
  const openTickets = tickets.filter((t) => t.status === "open").length;
  const resolvedTickets = tickets.filter((t) => t.status === "closed").length;

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
    <div className="relative flex min-h-screen flex-col bg-[#F9FAFB] font-[Poppins] text-[#101828]">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-[#F9FAFB] shadow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#7F56D9] text-3xl">
                confirmation_number
              </span>
              <h1 className="text-xl font-bold">TicketFlow</h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                to="/manage-ticket"
                className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#7F56D9]/10 text-[#7F56D9] font-medium"
              >
                <span className="material-symbols-outlined">
                  confirmation_number
                </span>
                <span>Ticket Management</span>
              </Link>

              {/* User Avatar + Logout */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#7F56D9] flex items-center justify-center font-bold text-white">
                  {user?.email ? getInitials(user.email) : "?"}
                </div>
                <p className="font-medium">{user?.email || "User"}</p>
              </div>

              <button
                onClick={logout}
                className="rounded-2xl h-10 px-6 bg-[#7F56D9] text-white text-sm font-semibold shadow hover:bg-[#6E48C4] transition-colors"
              >
                Logout
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#101828]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="bg-[#F9FAFB] border-t border-[#D0D5DD]/50 md:hidden">
            <div className="px-4 pt-3 pb-4 space-y-3">
              <Link
                to="/manage-ticket"
                className="flex items-center gap-2 px-3 py-2 rounded-2xl text-base font-medium text-[#7F56D9] bg-[#7F56D9]/10"
              >
                <span className="material-symbols-outlined">
                  confirmation_number
                </span>
                Ticket Management
              </Link>

              <div className="border-t border-[#D0D5DD]/40 my-3" />

              <div className="flex items-center gap-3 px-3 py-2">
                <div className="w-10 h-10 rounded-full bg-[#7F56D9] flex items-center justify-center font-bold text-white">
                  {user?.email ? getInitials(user.email) : "?"}
                </div>
                <p className="font-medium">{user?.email || "User"}</p>
              </div>

              <button
                onClick={logout}
                className="w-full rounded-2xl h-10 px-6 bg-[#7F56D9] text-white text-sm font-semibold shadow hover:bg-[#6E48C4] transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main */}
      <main>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

          {/* Ticket Stats */}
          {loading ? (
            <p>Loading tickets...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {[
                { title: "Total Tickets", value: totalTickets, icon: "inbox" },
                { title: "Open Tickets", value: openTickets, icon: "draft" },
                {
                  title: "Resolved Tickets",
                  value: resolvedTickets,
                  icon: "task_alt",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="bg-white rounded-2xl p-6 shadow border border-[#D0D5DD]/30 flex flex-col gap-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined bg-[#7F56D9]/10 p-2 rounded-full text-[#7F56D9]">
                      {card.icon}
                    </span>
                    <p className="text-lg font-medium">{card.title}</p>
                  </div>
                  <p className="text-4xl font-bold">{card.value}</p>
                </div>
              ))}
            </div>
          )}

          {/* Recent Tickets */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Recent Tickets</h2>
            {tickets.length === 0 ? (
              <p className="text-gray-500">No tickets found.</p>
            ) : (
              <div className="overflow-x-auto bg-white rounded-2xl shadow border border-[#D0D5DD]/30">
                <table className="min-w-full text-sm text-left">
                  <thead className="bg-[#F9FAFB] text-[#667085]">
                    <tr>
                      <th className="px-6 py-3 font-medium">Title</th>
                      <th className="px-6 py-3 font-medium">Priority</th>
                      <th className="px-6 py-3 font-medium">Status</th>
                      <th className="px-6 py-3 font-medium">Created At</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tickets
                      .slice(-5)
                      .reverse()
                      .map((ticket) => (
                        <tr
                          key={ticket.id}
                          className="border-t border-[#EAECF0]"
                        >
                          <td className="px-6 py-4 font-medium">
                            {ticket.title}
                          </td>
                          <td className="px-6 py-4">{ticket.priority}</td>
                          <td
                            className={`px-6 py-4 font-semibold ${
                              ticket.status === "open"
                                ? "text-green-600"
                                : ticket.status === "in_progress"
                                ? "text-yellow-600"
                                : "text-gray-500"
                            }`}
                          >
                            {ticket.status}
                          </td>
                          <td className="px-6 py-4 text-[#667085]">
                            {new Date(ticket.createdAt).toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#F9FAFB] mt-auto border-t border-[#D0D5DD]/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-[#98A2B3]">
          © 2025 TicketFlow. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
