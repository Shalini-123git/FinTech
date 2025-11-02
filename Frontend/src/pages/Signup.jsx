import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff, Mail, User, Lock, ArrowRight, CheckCircle, XCircle } from "lucide-react";

function Signup() {
  const [formData, setFormData] = useState({
    sender: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  // Handle form input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSignup = async (e) => {
    e.preventDefault();
    setMessage({ text: "", type: "" });

    // Validation
    if (!formData.sender || !formData.email || !formData.password) {
      setMessage({ text: "All fields are required.", type: "error" });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage({ text: "Passwords do not match.", type: "error" });
      return;
    }

    setIsLoading(true);
    try {
      const res = await axios.post("https://finance-chat-sh7m.onrender.com/api/auth/signup", {
        sender: formData.sender,
        email: formData.email,
        password: formData.password,
      });

      setMessage({ text: res.data.message || "Account created successfully!", type: "success" });

      // Redirect after short delay
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setMessage({
        text: err.response?.data?.error || "Signup failed. Please try again.",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-100">
      <div className="bg-white shadow-xl rounded-2xl w-96 p-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-emerald-700">Create Account</h1>
          <p className="text-gray-500 mt-1">Join Finance Chat and get started</p>
        </div>

        <form onSubmit={handleSignup} className="space-y-5">
          {/* Full Name */}
          <div>
            <label htmlFor="sender" className="block text-sm font-semibold mb-1">
              Full Name
            </label>
            <div className="relative">
              <User size={20} className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                id="sender"
                name="sender"
                value={formData.sender}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                placeholder="Enter your full name"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail size={20} className="absolute top-3 left-3 text-gray-400" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-semibold mb-1">
              Password
            </label>
            <div className="relative">
              <Lock size={20} className="absolute top-3 left-3 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                placeholder="Create a password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-2.5 right-3 text-gray-500 hover:text-emerald-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-semibold mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <Lock size={20} className="absolute top-3 left-3 text-gray-400" />
              <input
                type={showConfirm ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                placeholder="Confirm your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute top-2.5 right-3 text-gray-500 hover:text-emerald-600"
              >
                {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Message */}
          {message.text && (
            <div
              className={`flex items-center gap-2 p-3 rounded-lg text-sm ${
                message.type === "success"
                  ? "bg-green-100 text-green-700 border border-green-300"
                  : "bg-red-100 text-red-700 border border-red-300"
              }`}
            >
              {message.type === "success" ? <CheckCircle size={18} /> : <XCircle size={18} />}
              {message.text}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white py-2.5 rounded-lg hover:bg-emerald-700 transition"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <>
                Create Account <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="text-center mt-6 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-emerald-600 hover:underline font-medium">
            Sign in here
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;