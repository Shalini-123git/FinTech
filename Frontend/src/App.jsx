import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Bot from "./components/Bot.jsx";
import AddExpense from "./pages/AddExpense.jsx";
import Goals from "./pages/Goals.jsx";
import Analytics from "./pages/Analytics.jsx";
import Learn from "./pages/Learn";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
        {/* Navbar */}
        <Navbar />

        {/* Page Routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add-expense" element={<AddExpense />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/learn" element={<Learn />} />
          </Routes>
        </main>
        {/* Footer */}
        <Footer />
      </div>
      <Bot />
    </Router>
  );
}

export default App;
