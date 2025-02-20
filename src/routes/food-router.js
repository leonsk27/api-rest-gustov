import express from 'express';
import { getFoods, addFood, updateFood, getMenu, getFoodById } from '../controllers/food-controller.js';

const foodRouter = express.Router();

foodRouter.get('/foods', getFoods);
foodRouter.post('/foods', addFood);
foodRouter.get('/foods/menu', getMenu);
foodRouter.patch('/foods/:id', updateFood);
foodRouter.get('/foods/:id', getFoodById);
export default foodRouter;