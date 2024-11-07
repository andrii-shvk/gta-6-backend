import express from "express";
import cors from "cors";
import userRouter from "./routes/user.routes";
import dotenv from "dotenv";
import pool from "./db";
dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", userRouter);

pool.connect()
    .then(() => console.log("Connected to the database!"))
    .catch((err: any) => console.error("Connection error", err));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
