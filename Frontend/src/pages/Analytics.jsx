import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LineChart,
  Line,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A569BD", "#E74C3C"];

const Analytics = () => {
  const [expenses, setExpenses] = useState([]);
  const [summary, setSummary] = useState({
    total: 0,
    avg: 0,
    highest: 0,
  });

  // Load and update whenever localStorage changes
  const loadExpenses = () => {
    const data = JSON.parse(localStorage.getItem("expenses") || "[]");
    setExpenses(data);

    if (data.length > 0) {
      const total = data.reduce((sum, e) => sum + Number(e.amount), 0);
      const highest = Math.max(...data.map((e) => Number(e.amount)));
      const avg = total / data.length;

      setSummary({
        total,
        avg: avg.toFixed(2),
        highest,
      });
    } else {
      setSummary({ total: 0, avg: 0, highest: 0 });
    }
  };

  useEffect(() => {
    loadExpenses();
    window.addEventListener("storage", loadExpenses);
    return () => window.removeEventListener("storage", loadExpenses);
  }, []);

  // Group by category for PieChart
  const categoryData = Object.values(
    expenses.reduce((acc, e) => {
      const category = e.category || "Other";
      acc[category] = acc[category] || { name: category, value: 0 };
      acc[category].value += Number(e.amount);
      return acc;
    }, {})
  );

  // Group by date for line/bar chart
  const dateData = Object.values(
    expenses.reduce((acc, e) => {
      const date = e.date || "Unknown";
      acc[date] = acc[date] || { date, amount: 0 };
      acc[date].amount += Number(e.amount);
      return acc;
    }, {})
  );

  const hasData = expenses.length > 0;

  return (
    <div className="p-6 space-y-8">
      <h2 className="text-2xl font-bold text-center">Expense Analytics</h2>

      {/* If no expenses yet */}
      {!hasData ? (
        <div className="text-center mt-10">
          <p className="text-gray-600 text-lg mb-2">No expenses recorded yet.</p>
          <p className="text-gray-500">
            Add some expenses to see your analytics here!
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-40 h-40 bg-gray-100 rounded-full flex items-center justify-center text-6xl">
              💰
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="p-4 bg-blue-100 rounded-xl shadow">
              <h3 className="text-lg font-semibold">Total Spent</h3>
              <p className="text-2xl font-bold text-blue-700">
                ₹{summary.total}
              </p>
            </div>
            <div className="p-4 bg-green-100 rounded-xl shadow">
              <h3 className="text-lg font-semibold">Average Expense</h3>
              <p className="text-2xl font-bold text-green-700">
                ₹{summary.avg}
              </p>
            </div>
            <div className="p-4 bg-yellow-100 rounded-xl shadow">
              <h3 className="text-lg font-semibold">Highest Expense</h3>
              <p className="text-2xl font-bold text-yellow-700">
                ₹{summary.highest}
              </p>
            </div>
          </div>

          {/* Pie Chart */}
          <div className="bg-white shadow-md rounded-xl p-4">
            <h3 className="text-center font-semibold mb-4">
              Expense by Category
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={120}
                  label
                >
                  {categoryData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart */}
          <div className="bg-white shadow-md rounded-xl p-4">
            <h3 className="text-center font-semibold mb-4">Daily Spending</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dateData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="amount" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Line Chart */}
          <div className="bg-white shadow-md rounded-xl p-4">
            <h3 className="text-center font-semibold mb-4">Spending Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dateData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="amount" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </div>
  );
};

export default Analytics;
