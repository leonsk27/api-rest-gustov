import express from 'express';
import { createSale, getSalesBetweenDates, getSalesReport } from '../controllers/sale-controller.js';

const saleRouter = express.Router();

saleRouter.post('/sales', createSale);
saleRouter.get('/sales/report1/:date', getSalesReport);
saleRouter.get('/sales/report2/:date/:dateEnd', getSalesBetweenDates);

export default saleRouter;