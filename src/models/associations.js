import Sale from './sale-model.js';
import SaleDetail from './sale-detail-model.js';

const defineAssociations = () => {
  SaleDetail.belongsTo(Sale, { foreignKey: 'sale_id' });
};

export default defineAssociations;