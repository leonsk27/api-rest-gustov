import { DataTypes } from 'sequelize';
import sequelize from './config.js';

const Food = sequelize.define('Food', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  description_food: {
    type: DataTypes.TEXT
  },
  active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  image_url: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'food',
  timestamps: false
});

export default Food;