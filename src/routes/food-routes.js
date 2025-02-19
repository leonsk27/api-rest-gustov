import express from 'express';
import { getFoods, addFood } from '../controllers/foodController.js';

const foodRouter = express.Router();

router.get('/foods', getFoods);
router.post('/foods', addFood);

export default foodRouter;