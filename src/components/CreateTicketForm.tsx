import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTickets } from "../context/TicketContext";

const CreateTicket: React.FC = () => {
  const { id } = useParams();
  const { tickets, addTicket, updateTicket } = useTickets();
  const navigate = useNavigate();

  const editingTicket = tickets.find((t) => t.id === id);

  const [title, setTitle] = useState(editingTicket?.title || "");
  const [status, setStatus] = useState(editingTicket?.status || "open");
  const [description, setDescription] = useState(
    editingTicket?.description || ""
  );
  const [priority, setPriority] = useState(editingTicket?.priority || "medium");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      setError("Title is required.");
      return;
    }

    if (!["open", "in_progress", "closed"].includes(status)) {
      setError("Status must be one of: open, in_progress, closed.");
      return;
    }

    const newTicket = {
      id: editingTicket ? editingTicket.id : Date.now().toString(),
      title,
      status,
      description,
      priority,
      createdAt: editingTicket
        ? editingTicket.createdAt // preserve original date
        : new Date().toISOString(),
    };

    if (editingTicket) {
      updateTicket(newTicket);
    } else {
      addTicket(newTicket);
    }

    navigate("/manage-ticket");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-slate-50 p-6 font-[Poppins,sans-serif]">
      <div className="w-full max-w-2xl rounded-2xl bg-white shadow-lg p-8 border border-slate-100">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-1">
            {editingTicket ? "Edit Ticket" : "Create New Ticket"}
          </h1>
          <p className="text-slate-500 text-base">
            {editingTicket
              ? "Update the details of this ticket."
              : "Fill in the details below to create a new support ticket."}
          </p>
        </header>

        {/* Floating circles */}
        <div className="absolute z-0 top-1/4 left-24 w-20 h-20 md:w-24 md:h-24 bg-indigo-300 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute  bottom-1/3 right-1/8 w-28 h-28 md:w-36 md:h-36 bg-indigo-500 rounded-full opacity-20 animate-[pulse_5s_infinite]"></div>
        <div className="absolute top-1/2 left-1/5 w-10 h-10 md:w-12 md:h-12 bg-indigo-300 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute top-20 right-10 md:right-40 w-16 h-16 md:w-20 md:h-20 bg-indigo-500 rounded-full opacity-20"></div>
        <div className="absolute bottom-10 left-8 md:left-32 w-24 h-24 md:w-28 md:h-28 bg-indigo-300 rounded-full opacity-30"></div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6 z-5">
          {/* Error */}
          {error && (
            <div className="bg-red-50 text-red-600 border border-red-200 px-4 py-2 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Title */}
          <div>
            <label className="block text-base font-medium text-slate-700 mb-2">
              Title<span className="text-red-500">*</span>
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="e.g., Website is down"
              className="w-full h-14 px-4 rounded-xl border border-slate-300 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Status */}
          <div>
            <label className="block text-base font-medium text-slate-700 mb-2">
              Status<span className="text-red-500">*</span>
            </label>
            <select
              value={status}
              onChange={(e) =>
                setStatus(e.target.value as "open" | "in_progress" | "closed")
              }
              className="w-full h-14 px-4 rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 appearance-none"
            >
              <option value="open">Open</option>
              <option value="in_progress">In Progress</option>
              <option value="closed">Closed</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-base font-medium text-slate-700 mb-2">
              Description (Optional)
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Provide more details about the issue..."
              className="w-full min-h-36 px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Priority */}
          <div>
            <label className="block text-base font-medium text-slate-700 mb-2">
              Priority (Optional)
            </label>
            <div className="flex flex-wrap gap-3">
              {["low", "medium", "high"].map((level) => (
                <button
                  type="button"
                  key={level}
                  onClick={() => setPriority(level)}
                  className={`px-5 h-11 rounded-xl border text-sm font-medium capitalize transition-all duration-200 ${
                    priority === level
                      ? "border-teal-600 text-teal-600 bg-teal-50"
                      : "border-slate-300 text-slate-700 hover:border-teal-400 hover:text-teal-600"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button
              type="submit"
              className="flex-1 bg-teal-600 text-white font-semibold py-3 px-6 rounded-xl hover:bg-teal-700 transition-colors"
            >
              {editingTicket ? "Update Ticket" : "Save"}
            </button>
            <button
              type="button"
              onClick={() => navigate("/manage-ticket")}
              className="flex-1 border border-slate-300 text-slate-700 font-semibold py-3 px-6 rounded-xl hover:bg-slate-100 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTicket;
