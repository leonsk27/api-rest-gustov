import express from 'express';
import { getFoods, addFood } from '../controllers/food-controller.js';

const foodRouter = express.Router();

foodRouter.get('/foods', getFoods);
foodRouter.post('/foods', addFood);

export default foodRouter;