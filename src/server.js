import express from "express";
import cors from "cors";
import todoRoutes from "./routes/todoRoutes.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config(); // OK for local dev

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/todos", todoRoutes);

app.get("/", (req, res) => {
  res.send("API is running");
});

// ✅ FIX: use dynamic port
const PORT = process.env.PORT || 5000;

// ✅ Connect DB only once
connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
