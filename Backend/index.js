import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import Message from "./routes/message.js"

const app = express();
dotenv.config();

//Database connection
mongoose.connect(process.env.ATLAS_URL)
    .then(() => {
        console.log("connected to mongoDB")
    }).catch((err) => {
        console.log(err)
    })
    

app.use(cors({ 
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
}))

// middleware
app.use(express.json())


app.use("/api", Message)
app.get("/", (req, res) => {
    res.json({message: "hello world"})
})

app.listen(8000, () => {
    console.log("server is running on https://localhost:8000")
})