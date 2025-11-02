import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-40">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          Budget<span className="text-gray-800">Bot</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium">
          <Link to="/" className="hover:text-indigo-600">Home</Link>
          <Link to="/dashboard" className="hover:text-indigo-600">Dashboard</Link>
          <Link to="/login" className="hover:text-indigo-600">Login</Link>
          <Link to="/signup" className="hover:text-indigo-600">Signup</Link>
          <Link to="/add-expense" className="hover:text-indigo-600">Add Expense</Link>
          <Link to="/goals" className="hover:text-indigo-600">Set Goals</Link>
          
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-indigo-600"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 w-2/3 sm:w-1/3 h-full bg-white shadow-2xl border-l border-gray-200 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold text-indigo-600">Menu</h2>
          <button onClick={() => setMenuOpen(false)} className="text-gray-600 hover:text-indigo-600">
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col p-4 space-y-4 text-gray-700 font-medium">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link>
          <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
          <Link to="/signup" onClick={() => setMenuOpen(false)}>Signup</Link>
          <Link to="/add-expense" onClick={() => setMenuOpen(false)} >Add Expense</Link>
          <Link to="/goals" onClick={() => setMenuOpen(false)}>Goals</Link>
          <Link to="/analytics" onClick={() => setMenuOpen(false)}>Analytics</Link>
        </div>
      </div>

      {/* Overlay (when menu is open) */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-30 z-30"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
