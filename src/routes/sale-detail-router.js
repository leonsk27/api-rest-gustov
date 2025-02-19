import express from 'express';
import { createSaleDetail, getSaleDetails  } from '../controllers/sale-detail-controller.js';

const saleDetailRouter = express.Router();

saleDetailRouter.post('/sale-details', createSaleDetail);
saleDetailRouter.get('/sale-details', getSaleDetails);

export default saleDetailRouter;