import express from "express";
import { login, signUp, logout } from "../controller/authController.js"
const router = express();

router.post("/signUp", signUp);

router.post("/login", login);

router.post("/logout", logout)

export default router;