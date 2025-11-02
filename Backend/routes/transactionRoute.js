import express from "express";
import {userTransaction,addTransaction } from "../controller/transactionController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/:userId", protect, userTransaction);

router.post("/", protect, addTransaction);

export default router;