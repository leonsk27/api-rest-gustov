import Food from '../models/food-model.js';
export const getFoodById = async (req, res) => {
  try {
    const { id } = req.params;
    const food = await Food.findOne({where: {id}});
    if (food) {
      res.status(200).json(food);
    } else {
      res.status(404).json({ error: 'Food not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
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

export const updateFood = async (req, res) => {
  try {
    const { id } = req.params;
    const [update] = await Food.update(req.body, {where: {id}});
    if (update) {
      const updatedFood = await Food.findOne({where: {id}});
      return res.status(200).json(updatedFood);
    } else {
      res.status(404).json({ error: 'Food not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
export const getMenu = async (req, res) => {
  try {
    const foods = await Food.findAll({where: {active: true}});
    res.status(200).json(foods);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};