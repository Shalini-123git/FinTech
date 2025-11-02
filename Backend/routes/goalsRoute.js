import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { addGoal, getAllGoals, updateGoals } from "../controller/goalsController.js";

const router = express.Router();

// Add a new goal
router.post("/", addGoal);

// Get all goals for logged-in user
router.get("/", getAllGoals);

// Update goal progress
router.put("/:id", updateGoals);

export default router;
