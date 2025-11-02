import express from "express";
import {userTransaction,addTransaction } from "../controller/transactionController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", userTransaction);

router.post("/", addTransaction);

export default router;