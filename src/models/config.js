import { Sequelize } from "sequelize";
import { DATABASE_URL } from "../config";
const sequelize = new Sequelize(DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  });
  
  export default sequelize;