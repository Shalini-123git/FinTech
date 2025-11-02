import express from "express";
import { login, signUp, logout, getUserInfo } from "../controller/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express();

router.get("/user", protect, getUserInfo);

router.post("/signUp", signUp);

router.post("/login", login);

router.post("/logout", logout)

export default router;