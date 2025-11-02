import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AddExpense = () => {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: "",
    date: new Date().toISOString().split("T")[0],
  });

  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.amount || !formData.category) {
      setMessage("Please fill in all fields.");
      return;
    }

    if (Number(formData.amount) <= 0) {
      setMessage("Amount must be greater than 0.");
      return;
    }

    const newExpense = { ...formData, id: Date.now() };

    setExpenses([...expenses, newExpense]);

    setFormData({
      title: "",
      amount: "",
      category: "",
      date: new Date().toISOString().split("T")[0],
    });

    setMessage("Expense added successfully!");
    setTimeout(() => setMessage(""), 2000);
  };

  const handleDelete = (id) => {
    const updated = expenses.filter((exp) => exp.id !== id);
    setExpenses(updated);
    setMessage("Expense deleted!");
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-2xl mt-14">
      <h2 className="text-xl font-semibold mb-4 text-center">Add New Expense</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="e.g. Groceries, Travel..."
          className="w-full border rounded-lg p-2"
        />

        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Amount (₹)"
          className="w-full border rounded-lg p-2"
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border rounded-lg p-2"
        >
          <option value="">Select category</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Rent">Rent</option>
          <option value="Bills">Bills</option>
          <option value="Shopping">Shopping</option>
          <option value="Other">Other</option>
        </select>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full border rounded-lg p-2"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
        >
          Add Expense
        </button>
      </form>

      {message && (
        <p
          className={`text-center mt-4 font-medium ${
            message.includes("successfully") ? "text-green-600" : "text-red-500"
          }`}
        >
          {message}
        </p>
      )}

      <div className="mt-8">
        <h3 className="font-semibold mb-3 text-center">
          <Link to="/analytics" className="text-indigo-600">Analyse your expenses</Link>
            <br></br>
        </h3>
        {expenses.length === 0 ? (
          <p className="text-center text-gray-500">No expenses yet.</p>
        ) : (
          expenses.map((exp) => (
            <div
              key={exp.id}
              className="border p-3 rounded-lg mb-3 flex justify-between items-center"
            >
              <div>
                <p className="font-medium">{exp.title}</p>
                <p className="text-sm text-gray-600">
                  ₹{exp.amount} • {exp.category} • {exp.date}
                </p>
              </div>
              <button
                onClick={() => handleDelete(exp.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AddExpense;
