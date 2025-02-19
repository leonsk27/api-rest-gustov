import Sale from '../models/sale-model.js';
import SaleDetail from '../models/sale-detail-model.js';
import Food from '../models/food-model.js';
import sequelize from '../models/config.js';

export const createSale = async (req, res) => {
  const { total, items } = req.body;

  try {
    const newSale = await Sale.create({ total });

    for (const item of items) {
      await SaleDetail.create({
        food_id: item.food_id,
        quantity: item.quantity,
        total: item.total,
        sale_id: newSale.id
      });
    }

    res.status(201).json(newSale);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getSalesReport = async (req, res) => {
  const { date } = req.query;

  try {
    const sales = await Sale.findAll({
      where: sequelize.where(sequelize.fn('DATE', sequelize.col('created_at')), date)
    });

    res.status(200).json(sales);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};