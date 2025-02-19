import { DataTypes } from 'sequelize';
import sequelize from './config.js';
import Food from './food-model.js';
import Sale from './sale-model.js';
const SaleDetail = sequelize.define('SaleDetail', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  food_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Food,
      key: 'id'
    }
  },
  sale_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
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
  tableName: 'sale_detail',
  timestamps: false
});
// Definir las asociaciones
(async () => {
    const Sale = (await import('./sale-model.js')).default;
    SaleDetail.belongsTo(Sale, { foreignKey: 'sale_id' });
  })();
export default SaleDetail;