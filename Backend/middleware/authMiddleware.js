import jwt from "jsonwebtoken";
import User from "../model/userModel.js";

export const protect = async (req, res, next) => {
  try {
    const bearerHeader = req.headers["authorization"];
    const bearerToken =  bearerHeader && bearerHeader.startsWith("bearer ") ? bearerHeader.split(" ")[1] : null;
    const token = bearerToken || req.cookies.token;

    if (!bearerHeader || !bearerHeader.startsWith("bearer ")) {
      return res.status(401).json({ error: "No token provided" });
    }

    // const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, "mysecretkey");
    console.log(decoded.user._id)
    const user = await User.findById(decoded.user._id); // exclude password
    console.log(user)

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    req.user = user;
    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};
