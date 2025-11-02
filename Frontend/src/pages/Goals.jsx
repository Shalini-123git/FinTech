import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Goals = () => {
  const [goals, setGoals] = useState(() => {
    const saved = localStorage.getItem("goals");
    return saved ? JSON.parse(saved) : [];
  });

  const [formData, setFormData] = useState({
    name: "",
    targetAmount: "",
    savedAmount: "",
  });

  // Save goals to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [goals]);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Calculate progress
  const calculateProgress = (goal) => {
    const target = parseFloat(goal.targetAmount) || 1;
    const saved = parseFloat(goal.savedAmount) || 0;
    return Math.min((saved / target) * 100, 100);
  };

  // Add new goal
  const handleAddGoal = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.targetAmount)
      return alert("Please fill all fields");

    const newGoal = {
      ...formData,
      id: Date.now(),
      progress: calculateProgress(formData),
    };

    setGoals([...goals, newGoal]);
    setFormData({ name: "", targetAmount: "", savedAmount: "" });
  };

  // Delete goal by ID
  const handleDeleteGoal = (id) => {
    const updatedGoals = goals.filter((goal) => goal.id !== id);
    setGoals(updatedGoals);
  };

  // Update saved amount and progress dynamically
  const handleUpdateSaved = (id, newSavedAmount) => {
    const updatedGoals = goals.map((goal) => {
      if (goal.id === id) {
        const updatedGoal = {
          ...goal,
          savedAmount: newSavedAmount,
          progress: calculateProgress({
            ...goal,
            savedAmount: newSavedAmount,
          }),
        };
        return updatedGoal;
      }
      return goal;
    });
    setGoals(updatedGoals);
  };

  // Calculate summary
  const totalSaved = goals.reduce(
    (sum, g) => sum + Number(g.savedAmount || 0),
    0
  );
  const avgProgress =
    goals.length > 0
      ? (goals.reduce((sum, g) => sum + g.progress, 0) / goals.length).toFixed(0)
      : 0;

  return (
    <div className="p-4 max-w-2xl mx-auto mt-14">
      <h2 className="text-2xl font-semibold mb-4 text-center text-green-700">
        Financial Goals
      </h2>

      {/* Summary Section */}
      {goals.length > 0 && (
        <div className="bg-green-50 border border-green-200 p-3 rounded-lg mb-4 text-center">
          <p className="text-green-700 font-semibold">
            You’ve saved ₹{totalSaved.toFixed(0)} across {goals.length} goals (
            {avgProgress}% average progress)
          </p>
        </div>
      )}

      {/* Goal Form */}
      <form
        onSubmit={handleAddGoal}
        className="space-y-3 bg-gray-50 p-4 rounded-lg shadow-sm"
      >
        <input
          type="text"
          name="name"
          placeholder="Goal Name (e.g., Laptop, Trip)"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="targetAmount"
          placeholder="Target Amount (₹)"
          value={formData.targetAmount}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="savedAmount"
          placeholder="Saved Amount (₹)"
          value={formData.savedAmount}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition"
        >
          Add Goal
        </button>
      </form>

      {/* Display Goals */}
      <div className="mt-6">
        <h3 className="font-semibold mb-2 text-gray-800">Your Goals</h3>
        {goals.length === 0 ? (
          <p>No goals yet. Add one above!</p>
        ) : (
          goals.map((goal) => (
            <div
              key={goal.id}
              className="border p-3 rounded mb-3 flex items-center justify-between bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3">
                {/* Circular Progress */}
                <div style={{ width: 60, height: 60 }}>
                  <CircularProgressbar
                    value={goal.progress}
                    text={`${Math.round(goal.progress)}%`}
                    styles={buildStyles({
                      textColor: "#16a34a",
                      pathColor: "#16a34a",
                      trailColor: "#e5e7eb",
                    })}
                  />
                </div>

                {/* Goal Info */}
                <div>
                  <p className="font-semibold text-lg">{goal.name}</p>
                  <p className="text-sm text-gray-600">
                    ₹{goal.savedAmount} saved of ₹{goal.targetAmount}
                  </p>
                  <input
                    type="number"
                    placeholder="Update saved amount ₹"
                    className="border p-1 rounded mt-2 w-full text-sm"
                    onChange={(e) =>
                      handleUpdateSaved(goal.id, e.target.value)
                    }
                  />
                </div>
              </div>

              {/* Delete Button */}
              <button
                onClick={() => handleDeleteGoal(goal.id)}
                className="text-black-500 hover:text-red-700 font-bold text-lg ml-2"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Goals;

