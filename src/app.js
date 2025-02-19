import express from 'express';
import { pool } from './db.js';
import foodRouter from './routes/food-router.js';
import saleRouter from './routes/sale-router.js';
import saleDetailRouter from './routes/sale-detail-router.js';
const app = express();
app.use(express.json());
//routes
app.use('/api', foodRouter);
app.use('/api', saleRouter);
app.use('/api', saleDetailRouter);
// testing (usamos solo para verificar que el servidor este en optimas condiciones)
app.get('/ping', async (req, res) => { 
    const [result] = await pool.query('SELECT "pong" as result');
    res.json(result[0]);
});
export default app;