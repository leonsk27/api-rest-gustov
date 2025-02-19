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
Sale.hasMany(SaleDetail, { foreignKey: 'sale_id' });
export default Sale;