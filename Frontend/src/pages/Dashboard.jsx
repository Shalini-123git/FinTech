// import React from 'react';

// function Dashboard() {
//   return (
//     <div className="p-6 bg-slate-50 min-h-screen">
//       <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Dashboard Overview</h2>

//       <div className="grid md:grid-cols-4 gap-6 mb-8">
//         {['Balance', 'Income', 'Expenses', 'Savings'].map((item, i) => (
//           <div key={i} className="bg-white shadow rounded-lg p-6 text-center">
//             <h3 className="text-xl font-semibold text-indigo-600 mb-2">{item}</h3>
//             <p className="text-2xl font-bold text-slate-800">₹{Math.floor(Math.random() * 50000) + 5000}</p>
//           </div>
//         ))}
//       </div>

//       <div className="bg-white p-6 rounded-lg shadow mb-8">
//         <h3 className="text-xl font-semibold text-slate-700 mb-4">Monthly Expense Trend</h3>
//         <div className="h-56 bg-slate-100 rounded animate-pulse"></div>
//       </div>

//       <div className="grid md:grid-cols-2 gap-8">
//         <div className="bg-white p-6 rounded-lg shadow">
//           <h3 className="text-xl font-semibold text-slate-700 mb-4">Recent Transactions</h3>
//           <ul className="divide-y divide-slate-200">
//             {[1, 2, 3, 4, 5].map((i) => (
//               <li key={i} className="py-2 flex justify-between text-slate-700">
//                 <span>Payment #{i}</span>
//                 <span className="font-semibold text-emerald-600">₹{Math.floor(Math.random() * 2000) + 500}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow">
//           <h3 className="text-xl font-semibold text-slate-700 mb-4">Goal Progress</h3>
//           <div className="w-full bg-slate-200 rounded-full h-4 mb-3">
//             <div className="bg-indigo-600 h-4 rounded-full" style={{ width: '70%' }}></div>
//           </div>
//           <p className="text-slate-600">You’ve reached 70% of your monthly savings goal.</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [user, setUser] = useState({ name: "Demo User", email: "demo@email.com" });
  const [transactions, setTransactions] = useState([]);
  const [goals, setGoals] = useState([]);
  const [summary, setSummary] = useState({
    income: 0,
    expense: 0,
    balance: 0,
  });
  const [loading, setLoading] = useState(true);

  // Fetch sample or public data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Fetch all transactions (or demo data)
      const txRes = await axios.get(
        "https://finance-chat-sh7m.onrender.com/api/transaction"
      );
      setTransactions(txRes.data.transactions || []);

      // Fetch all goals
      const goalRes = await axios.get(
        "https://finance-chat-sh7m.onrender.com/api/goals"
      );
      setGoals(goalRes.data.goals || []);

      // Calculate totals
      const income = txRes.data.transactions
        ?.filter((t) => t.type === "income")
        .reduce((a, b) => a + b.amount, 0) || 0;
      const expense = txRes.data.transactions
        ?.filter((t) => t.type === "expense")
        .reduce((a, b) => a + b.amount, 0) || 0;
      const balance = income - expense;

      setSummary({ income, expense, balance });
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-slate-50">
        <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-slate-50 min-h-screen mt-14">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">
            Welcome back, {user?.name}
          </h2>
          <p className="text-slate-600">{user?.email}</p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {[
          { title: "Total Income", value: summary.income, color: "text-green-600" },
          { title: "Total Expense", value: summary.expense, color: "text-red-600" },
          { title: "Balance", value: summary.balance, color: "text-blue-600" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white shadow rounded-lg p-6 text-center hover:shadow-md transition"
          >
            <h3 className={`text-lg font-semibold mb-2 ${item.color}`}>
              {item.title}
            </h3>
            <p className="text-2xl font-bold text-slate-800">
              ₹{item.value.toLocaleString()}
            </p>
          </div>
        ))}
      </div>

      {/* Recent Transactions */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h3 className="text-xl font-semibold text-slate-700 mb-4">
          Recent Transactions
        </h3>
        {transactions.length === 0 ? (
          <p className="text-gray-500 text-sm">No transactions yet.</p>
        ) : (
          <ul className="divide-y divide-slate-200">
            {transactions.slice(-5).reverse().map((t) => (
              <li key={t._id} className="py-2 flex justify-between text-slate-700">
                <span>{t.category}</span>
                <span
                  className={`font-semibold ${
                    t.type === "income" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {t.type === "income" ? "+" : "-"}₹{t.amount}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Goal Summary */}
      <div className="bg-white p-6 rounded-lg shadow mb-12">
        <h3 className="text-xl font-semibold text-slate-700 mb-4">Your Goals</h3>
        {goals.length === 0 ? (
          <p className="text-gray-500 text-sm">No goals added yet.</p>
        ) : (
          goals.map((goal) => (
            <div key={goal._id} className="mb-4">
              <p className="font-medium text-slate-800">{goal.name}</p>
              <div className="w-full bg-slate-200 rounded-full h-3 mt-1 mb-1">
                <div
                  className="bg-indigo-600 h-3 rounded-full"
                  style={{
                    width: `${Math.min(
                      (goal.savedAmount / goal.targetAmount) * 100,
                      100
                    )}%`,
                  }}
                ></div>
              </div>
              <p className="text-sm text-gray-600">
                ₹{goal.savedAmount} saved of ₹{goal.targetAmount}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
