import express from "express";
import Goal from "../model/goalsModel.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Add a new goal
router.post("/", protect, async (req, res) => {
  try {
    const { name, targetAmount, savedAmount } = req.body;

    const goal = new Goal({
      user: req.user._id,
      name,
      targetAmount,
      savedAmount: savedAmount || 0,
    });

    await goal.save();
    res.status(201).json(goal);
  } catch (err) {
    console.error(err);
    res.status(500).json({error: err.message});
  }
});

// Get all goals for logged-in user
router.get("/", protect, async (req, res) => {
  try {
    const goals = await Goal.find({ user: req.user._id });
    res.json(goals);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch goals" });
  }
});

// Update goal progress
router.put("/:id", protect, async (req, res) => {
  try {
    const { savedAmount } = req.body;

    const goal = await Goal.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      { $set: { savedAmount } },
      { new: true }
    );

    if (!goal) return res.status(404).json({ error: "Goal not found" });

    res.json(goal);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update goal" });
  }
});

export default router;
