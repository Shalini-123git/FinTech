import React from 'react';

function Testimonials() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6 text-center">
      <h3 className="text-3xl font-bold mb-10 text-slate-800">What Our Users Say</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white shadow-md p-6 rounded-xl">
            <p className="text-slate-600 mb-4">“FinSmart changed how I manage my money. Super easy and reliable!”</p>
            <h4 className="font-semibold text-indigo-600">User {i}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;