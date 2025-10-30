import React from 'react';

const features = [
  { title: 'Instant Transfers', desc: 'Send money securely and instantly worldwide.' },
  { title: 'AI Financial Assistant', desc: 'Get smart insights to grow your savings.' },
  { title: 'Secure Transactions', desc: 'Top-tier encryption to protect your data.' },
  { title: 'Multi-Currency Support', desc: 'Manage multiple currencies in one account.' }
];

function Features() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <h3 className="text-3xl font-bold text-center mb-12 text-slate-800">Our Features</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <div key={i} className="p-6 border rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-indigo-600 mb-2">{f.title}</h4>
            <p className="text-slate-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;