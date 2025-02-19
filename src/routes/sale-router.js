import express from 'express';
import { createSale, getSalesReport } from '../controllers/sale-controller.js';

const saleRouter = express.Router();

saleRouter.post('/sales', createSale);
saleRouter.get('/sales/report', getSalesReport);

export default saleRouter;