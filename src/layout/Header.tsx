import React from "react";
import {Link} from "react-router-dom"
const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b  border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 cursor-pointer">
          <span className="material-symbols-outlined text-indigo-500 text-3xl">
            confirmation_number
          </span>
          <h1 className="text-gray-900 text-xl font-bold">TicketFlow</h1>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-gray-700 font-medium hover:text-indigo-500 transition-colors"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-gray-700 font-medium hover:text-indigo-500 transition-colors"
          >
            Pricing
          </a>
          <a
            href="#contact"
            className="text-gray-700 font-medium hover:text-indigo-500 transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <Link to="/login" className="hidden md:flex items-center justify-center h-10 cursor-pointer px-5 rounded-lg text-gray-800 font-semibold hover:bg-gray-100 transition">
            Login
          </Link>
          <Link to="/create-account" className="flex items-center justify-center h-10 px-5 rounded-lg cursor-pointer bg-indigo-500 text-white font-semibold shadow hover:bg-indigo-600 transition-all transform hover:scale-105">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
