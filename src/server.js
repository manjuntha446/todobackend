import express from "express";
import cors from "cors";
import todoRoutes from "./routes/todoRoutes.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();       // MUST be at top

connectDB();           // Connect to MongoDB after dotenv

const app = express();

// FIX #1 — express.json() was missing parentheses
app.use(express.json());  

app.use(cors());

// FIX #2 — route path was missing "/" at start
app.use("/api/todos", todoRoutes);  

app.get("/", (req, res) => {
    res.send("API is running");
});

app.listen(5000, () => console.log("Server running on port 5000"));
