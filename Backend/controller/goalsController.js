import Goal from "../model/goalsModel.js"

export const addGoal = async (req, res) => {
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
}

export const getAllGoals = async (req, res) => {
  try {
    const goals = await Goal.find({});
    res.json({goals});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch goals" });
  }
}

export const updateGoals = async (req, res) => {
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
}