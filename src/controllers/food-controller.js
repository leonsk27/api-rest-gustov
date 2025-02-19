import Food from '../models/food-model.js';

export const getFoods = async (req, res) => {
  try {
    const foods = await Food.findAll();
    res.status(200).json(foods);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const addFood = async (req, res) => {
  try {
    const newFood = await Food.create(req.body);
    res.status(201).json(newFood);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};