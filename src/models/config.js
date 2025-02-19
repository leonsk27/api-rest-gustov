import { Sequelize } from "sequelize";
import { DB_DATABASE, DB_USER, DB_PASS, DB_HOST, DB_PORT } from "../config.js";
const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASS, {
    host: DB_HOST,
    dialect: 'mysql',
    port: DB_PORT
  });
  
export default sequelize;