import express from 'express';
const app = express();
app.use(express.json());
import { pool } from './db.js';
app.get('/ping', async (req, res) => { 
    const [result] = await pool.query('SELECT "pong" as result');
    res.json(result[0]);
});
export default app;