import React, { useState, type FormEvent } from "react";
import {Link} from "react-router-dom"
const CreateTicket: React.FC = () => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("open");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ title, status, description, priority });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6 font-[Poppins,sans-serif]">
      <div className="w-full max-w-2xl rounded-2xl bg-white shadow-lg p-8 border border-slate-100">
        <header className="mb-8">
          <Link to="/create-ticket" className="text-3xl font-bold text-slate-800 mb-1">
            Create New Ticket
          </Link>
          <p className="text-slate-500 text-base">
            Fill in the details below to create a new support ticket.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
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
              onChange={(e) => setStatus(e.target.value)}
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
              Save
            </button>
            <button
              type="button"
              onClick={() => {
                setTitle("");
                setDescription("");
                setStatus("open");
                setPriority("medium");
              }}
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
