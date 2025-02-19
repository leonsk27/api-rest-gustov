import { DataTypes } from 'sequelize';
import sequelize from './config.js';
import SaleDetail from './sale-detail-model.js';
const Sale = sequelize.define('Sale', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'sale',
  timestamps: false
});
// Definir las asociaciones
(async () => {
  const Sale = (await import('./sale-model.js')).default;
  SaleDetail.belongsTo(Sale, { foreignKey: 'sale_id' });
})();
export default Sale;