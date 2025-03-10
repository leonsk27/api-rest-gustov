import Sale from '../models/sale-model.js';
import sequelize from '../models/config.js';
import { Op } from 'sequelize';
export const createSale = async (req, res) => {
  try {
    const newSale = await Sale.create(req.body);
    console.log('New sale created:', req.body);
    console.log('New sale created:', newSale);
    res.status(201).json(newSale);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getSalesReport = async (req, res) => {
  const { date } = req.params;

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
export const getSalesBetweenDates = async (req, res) => {
  const  { date, dateEnd} = req.params;
  try {
    const sales =  await Sale.findAll({
      where: {
        created_at: { [Op.between]: [`${date} 00:00:00`, `${dateEnd} 23:59:59`] }
      }
    });
    res.status(200).json(sales);
  } catch (error) {
    console.log(error);
    res.status(500).json({error: 'Internal server error'});
  }
}