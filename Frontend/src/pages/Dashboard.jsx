import React from 'react';

function Dashboard() {
  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Dashboard Overview</h2>

      <div className="grid md:grid-cols-4 gap-6 mb-8">
        {['Balance', 'Income', 'Expenses', 'Savings'].map((item, i) => (
          <div key={i} className="bg-white shadow rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">{item}</h3>
            <p className="text-2xl font-bold text-slate-800">₹{Math.floor(Math.random() * 50000) + 5000}</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h3 className="text-xl font-semibold text-slate-700 mb-4">Monthly Expense Trend</h3>
        <div className="h-56 bg-slate-100 rounded animate-pulse"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-slate-700 mb-4">Recent Transactions</h3>
          <ul className="divide-y divide-slate-200">
            {[1, 2, 3, 4, 5].map((i) => (
              <li key={i} className="py-2 flex justify-between text-slate-700">
                <span>Payment #{i}</span>
                <span className="font-semibold text-emerald-600">₹{Math.floor(Math.random() * 2000) + 500}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-slate-700 mb-4">Goal Progress</h3>
          <div className="w-full bg-slate-200 rounded-full h-4 mb-3">
            <div className="bg-indigo-600 h-4 rounded-full" style={{ width: '70%' }}></div>
          </div>
          <p className="text-slate-600">You’ve reached 70% of your monthly savings goal.</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;