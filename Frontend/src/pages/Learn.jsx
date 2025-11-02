// src/pages/Learn.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DEFAULT_LESSONS = [
  {
    id: 1,
    title: "What is a Budget?",
    content:
      "A budget is a plan for your income and expenses. It helps you control spending and save for goals.",
    quiz: {
      question: "Which of these is the best first step to create a budget?",
      options: [
        "Start investing in stocks",
        "Track your income and expenses",
        "Buy a new phone",
        "Ignore small expenses",
      ],
      answerIndex: 1,
      points: 10,
    },
  },
  {
    id: 2,
    title: "Emergency Fund",
    content:
      "An emergency fund covers unexpected costs (medical, repair, job loss). Aim for 3–6 months of expenses.",
    quiz: {
      question: "Ideal emergency fund covers how many months of expenses?",
      options: ["1 month", "3–6 months", "12 months", "No need"],
      answerIndex: 1,
      points: 10,
    },
  },
  {
    id: 3,
    title: "What is SIP?",
    content:
      "SIP (Systematic Investment Plan) lets you invest a fixed amount regularly into mutual funds — good for disciplined investing.",
    quiz: {
      question: "SIP is best described as:",
      options: [
        "One-time large investment",
        "Regular small investments",
        "A type of bank account",
        "An expense tracker",
      ],
      answerIndex: 1,
      points: 10,
    },
  },
  {
    id: 4,
    title: "Difference: Saving vs Investing",
    content:
      "Saving is keeping money safe (low return). Investing aims to grow money over time (higher return, more risk).",
    quiz: {
      question: "Which is usually higher risk?",
      options: ["Savings account", "Fixed deposit", "Mutual fund investment", "Piggy bank"],
      answerIndex: 2,
      points: 10,
    },
  },
];

const STORAGE_KEYS = {
  completed: "learn_completed_lessons",
  points: "learn_total_points",
};

const Learn = () => {
  const [lessons, setLessons] = useState(DEFAULT_LESSONS);
  const [completed, setCompleted] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.completed);
    return saved ? JSON.parse(saved) : [];
  });
  const [points, setPoints] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.points);
    return saved ? Number(saved) : 0;
  });

  const [activeLesson, setActiveLesson] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.completed, JSON.stringify(completed));
  }, [completed]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.points, String(points));
  }, [points]);

  const openLesson = (lesson) => {
    setActiveLesson(lesson);
    setSelectedOption(null);
    setFeedback(null);
  };

  const closeLesson = () => {
    setActiveLesson(null);
    setSelectedOption(null);
    setFeedback(null);
  };

  const handleSubmitQuiz = (e) => {
    e.preventDefault();
    if (selectedOption === null) {
      setFeedback("Please select an answer.");
      return;
    }
    const correctIndex = activeLesson.quiz.answerIndex;
    if (selectedOption === correctIndex) {
      const alreadyCompleted = completed.includes(activeLesson.id);
      if (!alreadyCompleted) {
        setCompleted((prev) => [...prev, activeLesson.id]);
        setPoints((p) => p + activeLesson.quiz.points);
      }
      setFeedback("Correct! 🎉 Points awarded.");
    } else {
      setFeedback("That's not correct. Try the next lesson!");
    }
  };

  const resetProgress = () => {
    if (!window.confirm("Reset your Learn progress and points?")) return;
    setCompleted([]);
    setPoints(0);
    localStorage.removeItem(STORAGE_KEYS.completed);
    localStorage.removeItem(STORAGE_KEYS.points);
  };

  const completedCount = completed.length;
  const totalLessons = lessons.length;
  const percent = Math.round((completedCount / totalLessons) * 100);

  return (
    <div className="p-6 bg-slate-50 min-h-screen mt-14">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-800">Learn & Earn — Financial Literacy</h2>
          <div className="text-right">
            <p className="text-sm text-slate-600">Points</p>
            <p className="text-xl font-bold text-emerald-600">{points} pts</p>
          </div>
        </div>

        {/* Progress */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-sm text-slate-600">Completed</p>
              <p className="text-lg font-semibold">{completedCount} / {totalLessons} lessons</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-600">Progress</p>
              <p className="text-lg font-semibold">{percent}%</p>
            </div>
          </div>
          <div className="w-full bg-slate-200 h-3 rounded-full">
            <div className="bg-emerald-500 h-3 rounded-full" style={{ width: `${percent}%` }} />
          </div>
        </div>

        {/* Lessons Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {lessons.map((lesson) => {
            const done = completed.includes(lesson.id);
            return (
              <div key={lesson.id} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{lesson.title}</h3>
                    <p className="text-sm text-slate-600 mt-2">{lesson.content.slice(0, 90)}{lesson.content.length>90 ? "..." : ""}</p>
                    <p className="text-xs text-slate-400 mt-2">Quiz: {lesson.quiz.question}</p>
                  </div>
                  <div className="text-right">
                    <div className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${done ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-700'}`}>
                      {done ? "Completed" : "New"}
                    </div>
                    <div className="mt-3">
                      <button
                        onClick={() => openLesson(lesson)}
                        className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 text-sm"
                      >
                        Open
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center mt-6">
          <div className="text-sm text-slate-500">Tip: Complete lessons to earn points and badges.</div>
          <div className="flex items-center gap-3">
            <Link to="/dashboard" className="text-sm text-indigo-600 hover:underline">Back to Dashboard</Link>
            <button onClick={resetProgress} className="text-sm text-red-600 hover:underline">Reset Progress</button>
          </div>
        </div>
      </div>

      {/* Modal for active lesson */}
      {activeLesson && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6 relative">
            <button onClick={closeLesson} className="absolute top-3 right-3 text-slate-500 hover:text-slate-800">✕</button>
            <h3 className="text-xl font-semibold mb-2">{activeLesson.title}</h3>
            <p className="text-slate-700 mb-4">{activeLesson.content}</p>

            <form onSubmit={handleSubmitQuiz}>
              <p className="font-medium mb-2">{activeLesson.quiz.question}</p>
              <div className="grid gap-2">
                {activeLesson.quiz.options.map((opt, idx) => (
                  <label key={idx} className={`border rounded p-2 cursor-pointer ${selectedOption === idx ? 'bg-indigo-50 border-indigo-400' : ''}`}>
                    <input
                      type="radio"
                      name="option"
                      checked={selectedOption === idx}
                      onChange={() => setSelectedOption(idx)}
                      className="mr-2"
                    />
                    <span className="text-sm">{opt}</span>
                  </label>
                ))}
              </div>

              {feedback && <p className="mt-3 text-sm">{feedback}</p>}

              <div className="mt-4 flex gap-3">
                <button type="submit" className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700">Submit</button>
                <button type="button" onClick={closeLesson} className="bg-slate-100 px-4 py-2 rounded hover:bg-slate-200">Close</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Learn;
