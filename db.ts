import { Pool } from "pg";
import dotenv from "dotenv";
import fs from "fs";
dotenv.config();

const pool = new Pool({
    ssl: {
        rejectUnauthorized: true,
        ca: fs.readFileSync("./certs/us-east-2-bundle.pem").toString(),
    },
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_DATABASE,
});

export default pool;

