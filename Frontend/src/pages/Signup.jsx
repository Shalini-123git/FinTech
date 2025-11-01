import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom"

function Signup() {
  const [formData, setFormData] = useState({ sender: '', email: '', password: '' });

  const navigate = useNavigate();

  const handleChange = (e) => {setFormData({ ...formData, [e.target.name]: e.target.value })};

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://finance-chat-sh7m.onrender.com/api/auth/signup', formData);
      alert(res.data.message);
      navigate("/login");
      
    } catch (err) {
      alert(err.response?.data?.error || 'Signup failed');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-slate-100">
      <form onSubmit={handleSignup} className="bg-white p-8 rounded-xl shadow w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">Create Account</h2>
        <input name="sender" placeholder="Full Name" className="w-full p-3 border rounded mb-4" value={formData.sender} onChange={handleChange} />
        <input name="email" placeholder="Email" className="w-full p-3 border rounded mb-4" value={formData.email} onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" className="w-full p-3 border rounded mb-4" value={formData.password} onChange={handleChange} />
        <button type="submit" className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;