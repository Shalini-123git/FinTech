import Transaction from "../model/transactionModel.js";

export const addTransaction = async (req, res) => {
  try {
    const { type, category, amount, date } = req.body;

    const transaction = new Transaction({
      user: req.user._id,
      type,
      category,
      amount,
      date,
    });

    await transaction.save();
    res.status(201).json(transaction);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}

export const userTransaction = async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user._id }).sort({
      date: -1,
    });
    res.json(transactions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch transactions" });
  }
}