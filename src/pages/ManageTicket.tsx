import React, { useState, useEffect } from "react";
import { tickets } from "../constants/Data";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const ManageTickets: React.FC = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Protect route: redirect if not authenticated
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "bg-green-500";
      case "In Progress":
        return "bg-blue-500";
      case "Closed":
        return "bg-red-500";
      default:
        return "bg-gray-400";
    }
  };

  const handleDelete = (id: string) => {
    setSelectedTicket(id);
    setShowDeleteModal(true);
  };

  // Extract initials from email or name
  const getInitials = (email: string | null) => {
    if (!email) return "U";
    const namePart = email.split("@")[0];
    return namePart
      .split(".")
      .map((n) => n[0]?.toUpperCase())
      .join("")
      .slice(0, 2);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-[Poppins]">
      {/* Header Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#7F56D9] text-3xl">
              confirmation_number
            </span>
            <h1 className="text-xl font-bold">TicketFlow</h1>
          </Link>
          <div className="flex items-center gap-4">
            {/* User Avatar */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center bg-violet-600 text-white rounded-full font-semibold">
                {getInitials(user)}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-800">
                  {user}
                </span>
              </div>
            </div>

            {/* Logout Button */}
            <button
              onClick={logout}
              className="ml-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Section */}
      <main className="px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <h2 className="text-xl font-semibold text-gray-800">
            Manage Your Tickets
          </h2>
          <button
            onClick={() => navigate("/create-ticket")}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-violet-600 text-white rounded-lg shadow hover:bg-violet-700 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#f5f5f5"
            >
              <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
            <span>Create Ticket</span>
          </button>
        </div>

        {/* Tickets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className="bg-white rounded-2xl shadow p-6 flex flex-col justify-between hover:shadow-lg transition-shadow"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {ticket.title}
                  </h3>
                  <span
                    className={`px-3 py-1 text-sm font-semibold text-white rounded-full ${getStatusColor(
                      ticket.status
                    )}`}
                  >
                    {ticket.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{ticket.description}</p>
              </div>
              <div className="flex justify-end gap-3">
                <button className="flex items-center justify-center gap-1 px-4 py-2 text-sm font-medium text-blue-600 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 -960 960 960"
                    width="20px"
                    fill="#165eca"
                  >
                    <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
                  </svg>
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(ticket.id)}
                  className="flex items-center justify-center gap-1 px-4 py-2 text-sm font-medium text-red-600 bg-red-100 rounded-lg hover:bg-red-200 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 -960 960 960"
                    width="20px"
                    fill="#EA3323"
                  >
                    <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360Z" />
                  </svg>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                <span className="text-red-600 material-symbols-outlined">
                  warning
                </span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mt-5">
                Delete Ticket
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Are you sure you want to delete this ticket? This action cannot
                be undone.
              </p>
            </div>
            <div className="mt-8 flex justify-center gap-4">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  console.log("Deleted ticket:", selectedTicket);
                }}
                className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageTickets;
