import React from 'react';

function Hero() {
  return (
    <section className="bg-gradient-to-r from-indigo-500 to-emerald-500 text-white py-20 text-center">
      <h2 className="text-4xl font-bold mb-4">Smart Banking for a Smarter Future</h2>
      <p className="text-lg mb-6">Manage your finances with AI-driven insights and instant transactions.</p>
      <a href="/signup" className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">Get Started</a>
    </section>
  );
}

export default Hero;