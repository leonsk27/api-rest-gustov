import SaleDetail from '../models/sale-detail-model.js';

export const createSaleDetail = async (req, res) => {
  try {
    const { food_id, sale_id, quantity, total } = req.body;
    const saleDetail = await SaleDetail.create({ food_id, sale_id, quantity, total });
    return res.status(201);
  } catch (error) {
    console.error('Error creating sale detail:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const getSaleDetails = async (req, res) => {
    const {sale_id} = req.params;
    try {
        const saleDetails = await SaleDetail.findAll({where: {sale_id: sale_id}});
        return res.json(saleDetails);
    } catch (error) {
        console.error('Error fetching sale details:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};