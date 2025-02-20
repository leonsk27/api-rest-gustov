import Sale from '../models/sale-model.js';
import sequelize from '../models/config.js';

export const createSale = async (req, res) => {
  try {
    const newSale = await Sale.create(req.body);
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