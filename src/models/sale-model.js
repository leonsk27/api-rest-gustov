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
  client_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nit_ci: {
    type: DataTypes.STRING,
    allowNull: true
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'sale',
  timestamps: false
});
Sale.hasMany(SaleDetail, { foreignKey: 'sale_id', sourceKey: 'id' });
SaleDetail.belongsTo(Sale, { foreignKey: 'sale_id', targetKey: 'id' });
export default Sale;