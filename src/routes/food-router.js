import express from 'express';
import { getFoods, addFood, updateFood, getMenu, getFoodById } from '../controllers/food-controller.js';

const foodRouter = express.Router();

foodRouter.get('/foods', getFoods);
foodRouter.get('/foods/:id', getFoodById);
foodRouter.post('/foods', addFood);
foodRouter.patch('/foods/:id', updateFood);
foodRouter.get('/foods/menu', getMenu);
export default foodRouter;