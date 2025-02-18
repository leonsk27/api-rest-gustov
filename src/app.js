import express from 'express';
const app = express();
import { configDotenv } from 'dotenv';
import { pool } from './db.js';
configDotenv();
app.get('/ping', async (req, res) => { 
    return await pool.query('SELECT "pong" as result', (error, results) => {
        if (error) {
            res.status(500).json({ error: error });
        }
        res.status(200).json({pong: "pong!", results: results.rows[0]});
    })
});
export default app;