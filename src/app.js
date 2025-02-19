import express from 'express';
import { pool } from './db.js';
import foodRouter from './routes/food-routes.js';
import saleRouter from './routes/sale-routes.js';
const app = express();
app.use(express.json());
//routes
app.use('/api', foodRouter);
app.use('/api', saleRouter);
// testing (solamente usamos para verificar que el servidor este en optimas condiciones)
app.get('/ping', async (req, res) => { 
    const [result] = await pool.query('SELECT "pong" as result');
    res.json(result[0]);
});
export default app;