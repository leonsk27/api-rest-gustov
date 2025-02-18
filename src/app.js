import express from 'express';
const app = express();
import { configDotenv } from 'dotenv';
import pg from 'pg';
configDotenv();
const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true
});
app.get('/ping', async (req, res) => { 
    return await pool.query('SELECT NOW()', (error, results) => {
        if (error) {
            res.status(500).json({ error: error });
        }
        res.status(200).json({pong: "pong!", results: results.rows});
    })
});
export default app;